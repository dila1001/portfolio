type BlogPost = {
  id: string;
  title: string;
  date: string;
  snippet?: string;
  contentHtml?: string | TrustedHTML;
};
