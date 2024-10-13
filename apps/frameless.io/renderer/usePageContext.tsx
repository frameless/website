import React, { useContext } from 'react';
import type { PageContext } from 'vike/types';

const Context = React.createContext<PageContext>(undefined as unknown as PageContext);

export const PageContextProvider = ({
  pageContext,
  children,
}: {
  pageContext: PageContext;
  children: React.ReactNode;
}) => {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>;
};

/** https://vike.dev/usePageContext */
export const usePageContext = () => {
  const pageContext = useContext(Context);
  return pageContext;
};
