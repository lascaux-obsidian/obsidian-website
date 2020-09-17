import { Application, Router } from './serverDeps.ts';
import { React, ReactDomServer } from './deps.ts';
import App from './client/app.tsx';
import { staticFileMiddleware } from './staticFileMiddleware.ts';
import { ObsidianWrapper } from './ObsidianWrapper.jsx';

const PORT = 3000;

// Create a new server
const app = new Application();

// Track response time in headers of responses
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get('X-Response-Time');
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set('X-Response-Time', `${ms}ms`);
});

// Initial state
const initialState = {};

// Router for base path
const router = new Router();

router.get('/', handlePage);

// Bundle the client-side code
const [_, clientJS] = await Deno.bundle('./client/client.tsx');

// Router for bundle
const serverrouter = new Router();
serverrouter.get('/static/client.js', (context) => {
  context.response.headers.set('Content-Type', 'text/html');
  context.response.body = clientJS;
});

// Implement the routes on the server
app.use(staticFileMiddleware);
app.use(router.routes());
app.use(serverrouter.routes());
app.use(router.allowedMethods());

app.addEventListener('listen', () => {
  console.log(`Listening at http://localhost:${PORT}`);
});

if (import.meta.main) {
  await app.listen({ port: PORT });
}

export { app };

function handlePage(ctx: any) {
  try {
    const body = (ReactDomServer as any).renderToString(
      <ObsidianWrapper>
        <App state={initialState} />
      </ObsidianWrapper>
    );
    ctx.response.body = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="/static/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet">
    <title>Document</title>
    <script>
      window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
    </script>
  </head>
  <body >
    <div id="root">${body}</div>
    
    <script  src="/static/client.js" defer></script>
  </body>
  </html>`;
  } catch (error) {
    console.error(error);
  }
}
