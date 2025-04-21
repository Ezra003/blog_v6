import React from 'react'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Portfolio' })

const projects = [
  {
    title: 'Modern Blog Platform',
    description: 'A feature-rich blog platform built with Next.js, Tailwind CSS, and Contentlayer.',
    link: 'https://yourblogplatform.com',
    image: '/static/images/portfolio/blog.png',
  },
  {
    title: 'Personal Website',
    description:
      'A sleek, modern personal website to showcase your work, skills, and contact info.',
    link: 'https://yourpersonalwebsite.com',
    image: '/static/images/portfolio/personal.png',
  },
  {
    title: 'Open Source Contributions',
    description:
      'Meaningful contributions to open source projects in the web development ecosystem.',
    link: 'https://github.com/yourusername',
    image: '/static/images/portfolio/oss.png',
  },
]

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-center text-4xl font-bold">My Portfolio</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg transition-shadow hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="flex h-48 w-full items-center justify-center bg-gray-100 dark:bg-gray-800">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h2 className="mb-2 text-2xl font-semibold transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {project.title}
              </h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">{project.description}</p>
              <span className="inline-block font-medium text-blue-600 dark:text-blue-400">
                View Project →
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
