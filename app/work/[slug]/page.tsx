'use client'
import { WORK_EXPERIENCE } from '@/app/data'
import { notFound } from 'next/navigation'
import Image from 'next/image'
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
    <motion.div
      className="flex flex-col space-y-10"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.header
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="not-prose flex flex-col gap-3"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded bg-zinc-100 p-0.5 dark:bg-zinc-800">
            <Image
              src={job.logo}
              alt={`${job.company} logo`}
              width={24}
              height={24}
              className="h-full w-full object-contain grayscale transition-all hover:grayscale-0"
            />
          </div>
          <h1 className="text-xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
            {job.company}
          </h1>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <span className="font-medium text-zinc-800 dark:text-zinc-200">
            {job.title}
          </span>
          <span className="text-zinc-300 dark:text-zinc-700">•</span>
          <span className="text-zinc-400 dark:text-zinc-500">
            {job.start} — {job.end}
          </span>
        </div>
        <div className="mt-2 h-px w-full bg-zinc-100 dark:bg-zinc-800/50" />
      </motion.header>

      <motion.article
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          {job.description}
        </p>
        {job.highlights && (
          <ul className="mt-6 list-none space-y-2 p-0">
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
    </motion.div>
  )
}
