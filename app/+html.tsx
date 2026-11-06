import { ScrollViewStyleReset } from 'expo-router/html';
import type { PropsWithChildren } from 'react';

const REGISTER_SERVICE_WORKER = `
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/sw.js');
    });
  }
`;

export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta name="theme-color" content="#0B6B66" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="LendIt" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/icons/icon-192.png" />
      <ScrollViewStyleReset />
    </head>
    <body>
    {children}
    <script dangerouslySetInnerHTML={{ __html: REGISTER_SERVICE_WORKER }} />
    </body>
    </html>
  );
}