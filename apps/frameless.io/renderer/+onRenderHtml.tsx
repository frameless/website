import logoUrl from '@frameless/assets/src/logo-frameless.svg';
import ReactDOMServer from 'react-dom/server';
import { dangerouslySkipEscape, escapeInject } from 'vike/server';
import type { OnRenderHtmlAsync } from 'vike/types';
import { Layout } from './Layout';
import { getPageTitle } from './getPageTitle';

// https://vike.dev/onRenderHtml
export const onRenderHtml: OnRenderHtmlAsync = async (pageContext): ReturnType<OnRenderHtmlAsync> => {
  const { Page } = pageContext;

  // This onRenderHtml() hook only supports SSR, see https://vike.dev/render-modes for how to modify
  // onRenderHtml() to support SPA
  if (!Page) throw new Error('My onRenderHtml() hook expects pageContext.Page to be defined');

  // Alternatively, we can use an HTML stream, see https://vike.dev/streaming
  const pageHtml = ReactDOMServer.renderToString(
    <Layout pageContext={pageContext}>
      <Page />
    </Layout>,
  );

  const title = getPageTitle(pageContext);
  const desc = pageContext.data?.description || pageContext.config.description || 'Demo of using Vike';

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <link rel="preload" as="font" href="/font/fira-sans-latin-400-normal.woff2" type="font/woff2" crossorigin="anonymous">
        <link rel="preload" as="font" href="/font/fira-sans-latin-600-normal.woff2" type="font/woff2" crossorigin="anonymous">
        <link rel="preload" as="font" href="/font/oswald-latin-400-normal.woff2" type="font/woff2" crossorigin="anonymous">
        <title>${title}</title>
      </head>
      <body class="frameless-theme">
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
  };
};
