interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Free Resume Builder',
    description: `a free resume builder that helps you create professional resumes quickly and easily
    with customizable templates and features`,
    imgSrc: 'https://placehold.co/544x306/png?text=Free+Resume+Builder',
    href: 'https://free-resume-builder.mindandmuster.com/',
  },
  {
    title: 'KJV Bible',
    description: `a free bible app that allows you to read the bible in the KJV translation`,
    imgSrc: 'https://placehold.co/544x306/png?text=KJV+Bible',
    href: 'https://kjv-bible.mindandmuster.com/',
  },
]

export default projectsData
