import { createContext } from 'react';

type AppContextData = {
  prevRoute: string | null;
  isSearchModalOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const AppContext = createContext<AppContextData>({
  prevRoute: null,
  isSearchModalOpen: false,
  onOpen: () => {},
  onClose: () => {},
});

export default AppContext;
