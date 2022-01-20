import type { RequestEvent, ResolveOpts } from "@sveltejs/kit";
import type { MaybePromise } from "@sveltejs/kit/types/helper";

/** Here we disable SSR in development.
 * In production, adapter-static will compile our app into static files with no involvement of a node server */
export async function handle<Locals = Record<string, any>>({ event, resolve }: {
    event: RequestEvent<Locals>,
    resolve: (event: RequestEvent<Locals>, opts?: ResolveOpts) => MaybePromise<Response>
}): Promise<Response> {
    return await resolve(event, { ssr: false });
}