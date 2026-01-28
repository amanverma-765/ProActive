import { getRequestContext } from '@cloudflare/next-on-pages';

export interface Env {
    DB: D1Database;
}

/**
 * Get the D1 database instance from the Cloudflare request context.
 * This must be called within a request handler (API route).
 */
export function getDB(): D1Database {
    const { env } = getRequestContext();
    return env.DB;
}

/**
 * Helper type for D1 query results
 */
export type D1Result<T> = {
    results: T[];
    success: boolean;
    meta: {
        duration: number;
        changes: number;
        last_row_id: number;
    };
};

export default getDB;
