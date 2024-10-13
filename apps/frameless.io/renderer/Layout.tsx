import { Document } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import React from 'react';
import type { PageContext } from 'vike/types';
import { PageContextProvider } from './usePageContext';
import '@frameless/font/src/index.css';
import '@frameless/design-tokens/dist/index.css';
import './global.css';

export const Layout = ({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) => {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Document className={clsx('utrecht-document--surface')}>{children}</Document>
      </PageContextProvider>
    </React.StrictMode>
  );
};
