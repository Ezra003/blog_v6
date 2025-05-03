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
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://free-resume-builder.mindandmuster.com/',
  },
  {
    title: 'The Time Machine',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
