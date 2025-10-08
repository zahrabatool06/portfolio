import { Header } from './src/components/Header';
import { Hero } from './src/components/Hero';
import { About } from './src/components/About';
import { Services } from './src/components/Services';
import { Portfolio } from './src/components/Portfolio';
import { Education } from './src/components/Education';
import { Contact } from './src/components/Contact';
import { Footer } from './src/components/Footer';
import { CustomCursor } from './src/components/CustomCursor';
import { ThemeProvider } from './src/components/ThemeProvider';
import { RouterProvider, useRouter } from './src/components/Router';
import { ServiceDetail } from './src/components/ServiceDetail';
import { CaseStudyDetail } from './src/components/CaseStudyDetail';

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