import React from 'react'
import { genPageMetadata } from 'app/seo'
import Card from '@/components/Card'
import Image from 'next/image'

export const metadata = genPageMetadata({ title: 'Portfolio' })

const PROFILE = {
  name: 'Your Dev', // Replace with dynamic data or props if needed
  email: 'your@email.com',
  github: 'yourusername',
  linkedin: 'yourusername',
  avatar: '/static/images/avatar.png',
}

const projects = [
  {
    title: 'Free Resume Builder',
    description: 'A free resume builder to create your resume.',
    link: 'https://free-resume-builder.mindandmuster.com/',
    image: 'https://placehold.co/544x306/png?text=Blog+Platform',
    tech: ['Next.js', 'Tailwind CSS', 'Contentlayer'],
    featured: true,
  },
  {
    title: 'Personal Website',
    description:
      'A sleek, modern personal website to showcase your work, skills, and contact info.',
    link: 'https://yourpersonalwebsite.com',
    image: 'https://placehold.co/544x306/png?text=Personal+Website',
    tech: ['Next.js', 'TypeScript', 'Vercel'],
    featured: true,
  },
  {
    title: 'Open Source Contributions',
    description:
      'Meaningful contributions to open source projects in the web development ecosystem.',
    link: `https://github.com/${PROFILE.github}`,
    image: 'https://placehold.co/544x306/png?text=Open+Source',
    tech: ['React', 'Node.js', 'OSS'],
    featured: false,
  },
]

const skills = [
  {
    name: 'React',
    svg: (
      <svg
        viewBox="0 0 32 32"
        width="32"
        height="32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="2.5" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="2" fill="none">
          <ellipse rx="14" ry="6" cx="16" cy="16" transform="rotate(60 16 16)" />
          <ellipse rx="14" ry="6" cx="16" cy="16" transform="rotate(120 16 16)" />
          <ellipse rx="14" ry="6" cx="16" cy="16" />
        </g>
      </svg>
    ),
  },
  {
    name: 'Next.js',
    svg: (
      <svg
        viewBox="0 0 32 32"
        width="32"
        height="32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="16" fill="#fff" />
        <path d="M7 16c0-5 4-9 9-9s9 4 9 9-4 9-9 9" stroke="#000" strokeWidth="2" />
        <path d="M13 13l6 6" stroke="#000" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    svg: (
      <svg
        viewBox="0 0 32 32"
        width="32"
        height="32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" rx="6" fill="#3178C6" />
        <text
          x="16"
          y="21"
          textAnchor="middle"
          fontSize="13"
          fill="#fff"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="bold"
        >
          TS
        </text>
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    svg: (
      <svg
        viewBox="0 0 32 32"
        width="32"
        height="32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" rx="6" fill="#06B6D4" />
        <path d="M8 20c2-4 6-4 8 0s6 4 8 0" stroke="#fff" strokeWidth="2" fill="none" />
        <path
          d="M8 14c2-4 6-4 8 0s6 4 8 0"
          stroke="#fff"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
        />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    svg: (
      <svg
        viewBox="0 0 32 32"
        width="32"
        height="32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="16" fill="#68A063" />
        <text
          x="16"
          y="21"
          textAnchor="middle"
          fontSize="11"
          fill="#fff"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="bold"
        >
          Node
        </text>
      </svg>
    ),
  },
  {
    name: 'Figma',
    svg: (
      <svg
        viewBox="0 0 32 32"
        width="32"
        height="32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" rx="6" fill="#fff" />
        <circle cx="10" cy="10" r="5" fill="#F24E1E" />
        <circle cx="22" cy="10" r="5" fill="#A259FF" />
        <circle cx="10" cy="22" r="5" fill="#0ACF83" />
        <circle cx="22" cy="22" r="5" fill="#1ABCFE" />
        <circle cx="16" cy="16" r="5" fill="#FF7262" />
      </svg>
    ),
  },
  {
    name: 'Git',
    svg: (
      <svg
        viewBox="0 0 32 32"
        width="32"
        height="32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" rx="6" fill="#F05133" />
        <circle cx="16" cy="16" r="7" fill="#fff" />
        <circle cx="16" cy="16" r="3" fill="#F05133" />
      </svg>
    ),
  },
]

function ProjectCard({
  title,
  description,
  link,
  image,
  tech,
  featured,
}: (typeof projects)[number]) {
  return (
    <article
      className="group flex w-full flex-grow-0 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-transform duration-300 focus-within:shadow-2xl hover:-translate-y-2 hover:shadow-2xl lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl dark:border-gray-800 dark:bg-gray-900"
      aria-labelledby={`project-title-${title.replace(/\s+/g, '-')}`}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        <Image
          src={image}
          alt={`${title} screenshot`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105 group-focus:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={featured}
        />
        {featured && (
          <span className="bg-primary-600 dark:bg-primary-400 absolute top-3 left-3 rounded px-3 py-1 text-xs font-semibold text-white shadow">
            Featured
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h4
          id={`project-title-${title.replace(/\s+/g, '-')}`}
          className="group-hover:text-primary-600 group-focus:text-primary-600 mb-1 text-xl font-bold text-gray-900 transition-colors dark:text-gray-100"
        >
          {title}
        </h4>
        <p className="mb-2 line-clamp-3 text-base text-gray-700 dark:text-gray-300">
          {description}
        </p>
        <div className="mb-3 flex flex-wrap gap-2" aria-label="Technologies used">
          {tech.map((t) => (
            <span
              key={t}
              className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded px-2 py-1 text-xs font-medium"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex flex-1 items-end">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-primary-500 bg-primary-600 hover:bg-primary-700 focus:bg-primary-700 focus:ring-primary-400 dark:bg-primary-400 dark:hover:bg-primary-300 mx-auto mt-4 inline-flex items-center gap-2 rounded-full border px-6 py-2 text-base font-semibold text-white shadow transition focus:ring-2 focus:ring-offset-2 focus:outline-none dark:text-gray-900"
            aria-label={`Visit the site for ${title}`}
          >
            Visit Site
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 7L7 17M17 7H7m10 0V17"
              />
            </svg>
          </a>
        </div>
      </div>
    </article>
  )
}

function SkillIcon({ name, svg }: { name: string; svg: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center transition-transform hover:scale-110">
      <span className="mb-1">{svg}</span>
      <span className="text-xs text-gray-600 dark:text-gray-400">{name}</span>
    </div>
  )
}

export default function PortfolioPage() {
  return (
    <main className="divide-y divide-gray-200 dark:divide-gray-700">
      {/* HERO SECTION */}
      <header className="from-primary-50/70 relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br via-white to-white px-4 py-20 text-center dark:from-gray-900 dark:via-black dark:to-black">
        <div
          className="animate-gradient-move pointer-events-none absolute inset-0 opacity-40"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(circle at 60% 40%, #a5b4fc 0%, transparent 70%), radial-gradient(circle at 30% 70%, #f472b6 0%, transparent 70%)',
          }}
        />
        <Image
          src={PROFILE.avatar}
          alt={PROFILE.name}
          width={120}
          height={120}
          className="border-primary-400 mb-3 h-28 w-28 rounded-full border-4 shadow-xl"
          priority
        />
        <h1 className="center text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-gray-100">
          Hi, I’m <span className="text-primary-600 dark:text-primary-400">{PROFILE.name}</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-7 text-gray-600 md:text-xl dark:text-gray-300">
          I build clean, accessible, and modern digital experiences. Here are some things I’m proud
          of:
        </p>
        <a
          href="#projects"
          className="focus:ring-primary-400 bg-primary-600 hover:bg-primary-700 mt-8 inline-block rounded-full px-8 py-3 text-lg font-semibold text-white shadow transition focus:ring-2 focus:ring-offset-2 focus:outline-none"
        >
          View My Work
        </a>
      </header>
      {/* PROJECTS SECTION */}
      <section id="projects" className="container py-20">
        <h2 className="text-primary-700 dark:text-primary-400 mb-10 text-center text-3xl font-bold tracking-tight">
          Featured Projects
        </h2>
        <div className="mx-auto w-full max-w-screen-xl px-4">
          <div className="grid grid-cols-1 justify-items-center gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {projects
              .filter((p) => p.featured)
              .map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
          </div>
        </div>
      </section>
      {/* ABOUT SECTION */}
      <section className="bg-primary-50/30 mx-auto mt-12 mb-10 w-full max-w-2xl rounded-xl p-10 text-center shadow-lg dark:bg-gray-900/30">
        <h2 className="text-primary-700 dark:text-primary-400 mb-2 text-2xl font-semibold">
          About Me
        </h2>
        <p className="mb-8 text-gray-700 md:text-lg dark:text-gray-300">
          I’m a passionate developer focused on beautiful, accessible, and performant web
          experiences. Always learning, always building. Let’s create something amazing together!
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          {skills.map((skill) => (
            <SkillIcon key={skill.name} name={skill.name} svg={skill.svg} />
          ))}
        </div>
      </section>
      {/* CONTACT SECTION */}
      <section className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-center gap-4 text-center">
        <h2 className="text-primary-700 dark:text-primary-400 mb-2 text-2xl font-semibold">
          Contact
        </h2>
        <a
          href={`mailto:${PROFILE.email}`}
          className="focus:ring-primary-400 border-primary-500 text-primary-600 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 mt-2 inline-block rounded-full border px-6 py-2 font-medium shadow transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none dark:hover:bg-gray-900"
        >
          Email Me
        </a>
      </section>
    </main>
  )
}
