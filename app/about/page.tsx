import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
        <div className="mt-8 text-center">
          <a
            href="/portfolio"
            className="border-primary-500 text-primary-600 hover:bg-primary-50 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 focus:ring-primary-400 inline-block rounded-lg border bg-white px-6 py-3 font-semibold shadow-sm transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:outline-none dark:bg-gray-950 dark:hover:bg-gray-900"
          >
            Learn more about the developer
          </a>
        </div>
      </AuthorLayout>
    </>
  )
}
