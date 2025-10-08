import { createContext, useContext, useState, ReactNode } from 'react';

interface RouterContextType {
  currentPage: string;
  params: Record<string, string>;
  navigate: (path: string) => void;
  goBack: () => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

interface RouterProviderProps {
  children: ReactNode;
}

export function RouterProvider({ children }: RouterProviderProps) {
  const [currentPage, setCurrentPage] = useState('home');
  const [params, setParams] = useState<Record<string, string>>({});
  const [history, setHistory] = useState<string[]>(['home']);

  const navigate = (path: string) => {
    // Parse path like "/service/web-development" or "/case-study/ecommerce-platform"
    const pathParts = path.split('/').filter(Boolean);
    
    if (pathParts.length === 0) {
      setCurrentPage('home');
      setParams({});
    } else if (pathParts.length === 1) {
      setCurrentPage(pathParts[0]);
      setParams({});
    } else if (pathParts.length === 2) {
      setCurrentPage(pathParts[0]);
      setParams({ slug: pathParts[1] });
    }
    
    setHistory(prev => [...prev, currentPage]);
  };

  const goBack = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop(); // Remove current page
      const previousPage = newHistory[newHistory.length - 1];
      setHistory(newHistory);
      setCurrentPage(previousPage);
      setParams({});
    } else {
      setCurrentPage('home');
      setParams({});
    }
  };

  return (
    <RouterContext.Provider value={{ currentPage, params, navigate, goBack }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (context === undefined) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}