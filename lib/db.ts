import { neon as netlifyNeon } from '@netlify/neon';
import { neon as serverlessNeon } from '@neondatabase/serverless';

export function getSql() {
  if (process.env.NETLIFY && process.env.NETLIFY_DATABASE_URL) {
    return netlifyNeon();
  }
  const url = process.env.DATABASE_URL || process.env.NETLIFY_DATABASE_URL;
  if (!url) throw new Error('DATABASE_URL/NETLIFY_DATABASE_URL not set');
  return serverlessNeon(url);
}
