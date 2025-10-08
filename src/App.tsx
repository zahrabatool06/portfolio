import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ThemeProvider } from './components/ThemeProvider';
import { RouterProvider, useRouter } from './components/Router';
import { ServiceDetail } from './components/ServiceDetail';
import { CaseStudyDetail } from './components/CaseStudyDetail';

function AppContent() {
  const { currentPage } = useRouter();

  const renderPage = () => {
    switch (currentPage) {
      case 'service':
        return <ServiceDetail />;
      case 'case-study':
        return <CaseStudyDetail />;
      default:
        return (
          <main>
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Education />
            <Contact />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <CustomCursor />
      <Header />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="shah-nawaz-theme">
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </ThemeProvider>
  );
}