import { Context, send } from './serverDeps.ts';

export const staticFileMiddleware = async (ctx: Context, next: Function) => {
  const path = `${Deno.cwd()}/client${ctx.request.url.pathname}`;
  if (await fileExists(path)) {
    await send(ctx, ctx.request.url.pathname, {
      root: `${Deno.cwd()}/client`,
    });
  } else {
    await next();
  }
};

async function fileExists(path: string) {
  try {
    const stats = await Deno.lstat(path);
    return stats && stats.isFile;
  } catch (e) {
    if (e && e instanceof Deno.errors.NotFound) {
      return false;
    } else {
      throw e;
    }
  }
}
