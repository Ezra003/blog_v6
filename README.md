# Next.js Blog Starter

A modern, customizable, and production-ready blog built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [Contentlayer](https://www.contentlayer.dev/). Features analytics integration with [Umami](https://umami.is/), dark mode, SEO, and more.

## Features

- ⚡ **Next.js 13+ App Directory** – Modern React, server components, and routing
- 🎨 **Tailwind CSS** – Utility-first styling, responsive design
- 📝 **Contentlayer** – Markdown/MDX content management with type safety
- 🌗 **Dark/Light Theme** – User-selectable theme with persistence
- 📈 **Umami Analytics** – Privacy-friendly analytics with custom domain support
- 🔍 **Search** – Integrated search functionality
- 🧩 **Component-based** – Easily extendable with reusable React components
- 🔒 **CSP & Security Headers** – Secure by default
- 🚀 **SEO Optimized** – Metadata, Open Graph, and sitemap support

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-blog.git
cd your-blog
```

### 2. Install Dependencies

```bash
yarn install
# or
npm install
```

### 3. Configure Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```env
NEXT_UMAMI_ID=your-umami-website-id
```

> **Note:** You must also configure your Umami analytics instance URL in `data/siteMetadata.js`.

### 4. Run the Development Server

```bash
yarn dev
# or
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view your blog.

## Analytics Setup (Umami)

This project integrates [Umami](https://umami.is/) analytics for privacy-friendly tracking.

- The Umami script and website ID are configured via `data/siteMetadata.js` and `.env`.
- The Content Security Policy (CSP) in `next.config.js` is set to allow your Umami domain.
- The script is injected globally using Next.js’s `<Script>` component in [app/layout.tsx].

**To update your Umami settings:**

- Set `NEXT_UMAMI_ID` in your `.env` file.
- Set the correct script URL in `data/siteMetadata.js`:
  ```js
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID,
      src: 'https://your-umami-domain.com/script.js',
    },
  }
  ```

## Project Structure

```
.
├── app/                # Next.js app directory (layouts, pages, etc.)
├── components/         # Reusable React components
├── css/                # Tailwind and custom styles
├── data/               # siteMetadata, blog posts, authors, config
├── public/             # Static assets (images, favicon, etc.)
├── .env                # Environment variables
├── next.config.js      # Next.js and CSP configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── README.md           # Project documentation
```

## Customization

- **Site Metadata:** Edit `data/siteMetadata.js` for site name, description, analytics, and more.
- **Navigation:** Update `data/headerNavLinks.js`.
- **Authors:** Add/modify author profiles in `data/authors/`.
- **Blog Posts:** Write posts in Markdown/MDX in `data/blog/`.
- **Theming:** Adjust Tailwind config and CSS as needed.

## Deployment

### Vercel

The easiest way to deploy is with [Vercel](https://vercel.com):

1. Push your code to GitHub/GitLab.
2. Import your repo into Vercel.
3. Set environment variables in the Vercel dashboard.
4. Deploy!

### Other Platforms

You can also deploy to Netlify, GitHub Pages, or any platform supporting Next.js.

## Security

- **Content Security Policy:** Configured in `next.config.js` to allow only trusted scripts and resources.
- **Environment Variables:** Do not commit `.env` to public repositories.

## Contributing

Contributions are welcome! Please open issues or pull requests for bug fixes, improvements, or new features.

## License

This project is licensed under the [MIT License](LICENSE).
