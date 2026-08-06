import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { InitialLoader } from './components/common/InitialLoader';

// Scroll to top helper on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

// Lazy load pages
const HomePage = React.lazy(() => import('./features/home/HomePage'));
const AboutUsPage = React.lazy(() => import('./features/about-us/AboutUsPage'));
const AwardsPage = React.lazy(() => import('./features/awards/AwardsPage'));
const NewsPage = React.lazy(() => import('./features/news/NewsPage'));
const OurContentPage = React.lazy(() => import('./features/our-content/OurContentPage'));
const ResearchPage = React.lazy(() => import('./features/research/ResearchPage'));

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <InitialLoader />
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-brand-cream">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<div className="h-screen flex items-center justify-center text-brand-purple">Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/awards" element={<AwardsPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/our-content" element={<OurContentPage />} />
              <Route path="/research" element={<ResearchPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
};
