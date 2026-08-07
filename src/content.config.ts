import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const subjects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/subjects' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    summary: z.string(),
    description: z.string(),
    learningObjectives: z.array(z.string()),
    teacherIds: z.array(z.string()),
    category: z.string(),
    status: z.enum(['draft', 'published']),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

const teachers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/teachers' }),
  schema: z.object({
    name: z.string(),
    photo: z.string().optional(),
    shortBio: z.string(),
    bio: z.string(),
    subjects: z.array(z.string()),
    status: z.enum(['draft', 'published']),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

const quotes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/quotes' }),
  schema: z.object({
    scholar: z.string(),
    arabicName: z.string().optional(),
    quote: z.string(),
    arabicText: z.string().optional(),
    sourceTitle: z.string(),
    sourceDetail: z.string().optional(),
    themes: z.array(z.string()),
    verified: z.boolean(),
    reviewedBy: z.string().optional(),
    reviewedAt: z.string().optional(),
    status: z.enum(['draft', 'published']),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string(),
    reviewedBy: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()),
    heroImage: z.string().optional(),
    status: z.enum(['draft', 'published']),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

const announcements = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/announcements' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedAt: z.coerce.date(),
    urgent: z.boolean().default(false),
    category: z.string(),
    status: z.enum(['draft', 'published']),
  }),
});

const faqs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faqs' }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    order: z.number(),
    category: z.string(),
    status: z.enum(['draft', 'published']),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    quote: z.string(),
    batch: z.string().optional(),
    verified: z.boolean(),
    status: z.enum(['draft', 'published']),
  }),
});

export const collections = {
  subjects,
  teachers,
  quotes,
  articles,
  announcements,
  faqs,
  testimonials,
};
