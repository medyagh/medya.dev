# Medya Ghazizadeh - Personal Portfolio Website

This is the source code for Medya Ghazizadeh's personal portfolio website, available at [medya.dev](https://medya.dev).

## 🚀 Technologies Used

This website is built with a modern, fast, and minimal tech stack:

- **[Astro](https://astro.build/)**: A web framework for building fast, content-focused websites. It generates zero-JavaScript static HTML by default for maximum performance.
- **Vanilla CSS**: Custom styling using pure CSS with CSS Variables, modern Flexbox/Grid layouts, and a "Glassmorphism" aesthetic. No heavy CSS frameworks (like Tailwind or Bootstrap) were used, ensuring a pristine and lightweight design.
- **Google Fonts (Inter)**: For clean, professional, highly-legible typography.
- **Astro Content Collections (Zod)**: Used for managing Markdown-based blog posts securely with type-checking.

---

## 📝 How to Add a Blog Post

The site is configured with an Astro Content Collection for the blog. Writing a new post is as simple as adding a new Markdown file.

1. Navigate to the blog content directory:
   ```bash
   cd src/content/blog/
   ```
2. Create a new `.md` file (e.g., `my-new-post.md`).
3. Add the required YAML "frontmatter" at the top of the file, followed by your Markdown content:

   ```markdown
   ---
   title: "Your Blog Post Title"
   description: "A short summary of what the post is about."
   pubDate: 2026-08-01
   draft: false
   ---

   # Your Blog Post Title

   Write your thoughts here using standard Markdown! You can add **bold** text, lists, code snippets, and more.
   ```
4. Save the file. If you are running the local development server (`npm run dev`), the new post will be instantly available.

---

## 🌐 How to Deploy to GitHub Pages (Free Hosting)

This Astro site is fully configured for static export (`output: "static"`). GitHub Pages is the perfect free host for it.

### Option 1: Using GitHub Actions (Recommended)

This is the easiest and most automated way. Whenever you push to the `main` branch, GitHub will build and deploy your site.

1. Go to your repository on GitHub and click on **Settings**.
2. On the left sidebar, click on **Pages**.
3. Under the **Build and deployment** section, change the **Source** dropdown to **GitHub Actions**.
4. GitHub will suggest an "Astro" workflow. Click **Configure**.
5. Commit the generated `.github/workflows/astro.yml` file to your repository.
6. Push your code. GitHub will automatically build the Astro site and deploy it!

### Option 2: Deploying the `dist/` folder manually

If you prefer not to use Actions, you can build the site locally and push the static files.

1. Build the site locally:
   ```bash
   npm run build
   ```
2. This creates a `dist/` folder containing your static HTML/CSS.
3. You can use a tool like `gh-pages` to push the `dist/` folder to a `gh-pages` branch, or simply upload the contents of the `dist/` folder directly to your repository if you are using the docs folder approach.

## 🛠️ Local Development

To run the site locally on your own machine:

```bash
# Install dependencies (if you haven't already)
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:4321`.
