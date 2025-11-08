import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      draft: z.boolean().optional(),
      yearOrSemester: z.string(),
      bedrijf: z.string(),
      tags: z.array(z.string()).default([]),
      image: z.string().optional(),
    }),
});

const tutorialsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/tutorials" }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      yearOrSemester: z.string().optional(),   // toegevoegd
      bedrijf: z.string().optional(),          // toegevoegd
      tags: z.array(z.string()).default([]),
      image: z.string().optional(),
    }),
});

export const collections = { projects: projectsCollection, tutorials: tutorialsCollection };
