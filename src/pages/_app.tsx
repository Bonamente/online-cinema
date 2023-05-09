import { PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { usePreviousRoute } from '@/hooks/usePreviousRoute';
import AppContext from '@/context/AppContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const prevRoute = usePreviousRoute();
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const onOpen = useCallback(() => {
    setIsSearchModalOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setIsSearchModalOpen(false);
  }, []);

  const contextValue = useMemo(
    () => ({ isSearchModalOpen, onOpen, onClose, prevRoute }),
    [isSearchModalOpen, onOpen, onClose, prevRoute]
  );

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default App;
