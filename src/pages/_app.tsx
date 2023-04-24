import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { usePreviousRoute } from '@/hooks/usePreviousRoute';
import AppContext from '@/context/AppContext';

const App = ({ Component, pageProps }: AppProps) => {
  const prevRoute = usePreviousRoute();

  return (
    <AppContext.Provider value={prevRoute}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
};

export default App;
