---
title: "Building My Portfolio Website & Blog"
date: "2023-08-31"
---

I once had a comment from a fellow frontend colleague saying "how are you a frontend developer without your own site?". He's right. I had my own site at 14 so why don't I have one now that I'm a frontend developer and can do so much more?

I decided to

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.
