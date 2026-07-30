import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';


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
        {/* Footer is handled per page or here. Let's just put it here and pass a default color, 
            or better yet, pages can render their own Footer if they need specific colors. 
            For now, we'll put it in HomePage.tsx so it can control the color */}
      </div>
    </BrowserRouter>
  );
};
