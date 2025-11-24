import 'dotenv/config'
import type { PrismaConfig } from "prisma";
import { env } from "prisma/config";

export default {
  schema: "packages/prisma/schema.prisma",
  migrations: {
    path: "packages/prisma/migrations",
    seed: 'tsx packages/prisma/seed.js',
  },
  datasource: { 
    url: env("DATABASE_URL") 
  }
} satisfies PrismaConfig;