import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import RecipesPage from '@/pages/RecipesPage';
import StorePage from '@/pages/StorePage';
import WorkWithMePage from '@/pages/WorkWithMePage';
import CroissantCrewPage from '@/pages/CroissantCrewPage';
import ScrollToTop from '@/components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/work-with-me" element={<WorkWithMePage />} />
        <Route path="/croissant-crew" element={<CroissantCrewPage />} />
      </Routes>
    </BrowserRouter>
  );
}
