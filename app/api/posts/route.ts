import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// To handle a GET request to /api
export async function GET(request: NextApiRequest) {
  const sortedPosts = getSortedPostsData();
  return NextResponse.json({ data: sortedPosts }, { status: 200 });
}

const postsDirectory = path.join(process.cwd(), "blogposts");

function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const firstParagraphEndIndex = matterResult.content.indexOf("\n\n");

    const firstParagraph = matterResult.content
      .slice(0, firstParagraphEndIndex)
      .replace(/\*\*/g, "");

    const blogSnippet =
      matterResult.content.replace(/\*\*/g, "").slice(0, 215) + "...";

    const blogPost: BlogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      snippet: firstParagraph,
    };

    // Combine the data with the id
    return blogPost;
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
