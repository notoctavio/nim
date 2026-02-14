'use client'
import { WORK_EXPERIENCE } from '@/app/data'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeftIcon } from 'lucide-react'
import { motion } from 'motion/react'
import { use } from 'react'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export default function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const job = WORK_EXPERIENCE.find((job) => job.slug === slug)

  if (!job) {
    notFound()
  }

  return (
    <motion.main
      className="flex min-h-[calc(100vh-theme(spacing.48))] flex-col space-y-12"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="flex items-center justify-between"
      >
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          <ArrowLeftIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to projects
        </Link>
      </motion.div>

      <motion.header
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between"
      >
        <div className="flex gap-4">
          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-zinc-200 bg-white p-2 dark:border-zinc-800 dark:bg-zinc-900">
            <img
              src={job.logo}
              alt={`${job.company} logo`}
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              {job.company}
            </h1>
            <p className="text-base font-medium text-zinc-600 dark:text-zinc-400">
              {job.title}
            </p>
          </div>
        </div>
        <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400 sm:text-right">
          {job.start} — {job.end}
        </div>
      </motion.header>

      <motion.article
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="prose prose-zinc max-w-none dark:prose-invert"
      >
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          {job.description}
        </p>
        {job.highlights && (
          <ul className="mt-6 space-y-2 list-none p-0">
            {job.highlights.map((highlight, index) => (
              <li
                key={index}
                className="grid grid-cols-[auto_1fr] items-start gap-3 text-zinc-600 dark:text-zinc-400"
              >
                <div className="flex h-[1.6em] items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                </div>
                <span className="leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        )}
      </motion.article>
    </motion.main>
  )
}
