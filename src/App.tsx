import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Perfumes from "./pages/Perfumes";
import PerfumeDetail from "./pages/PerfumeDetail";
import Brands from "./pages/Brands";
import BrandDetail from "./pages/BrandDetail";
import Notes from "./pages/Notes";
import NoteDetail from "./pages/NoteDetail";
import Collections from "./pages/Collections";
import SearchPage from "./pages/SearchPage";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Index />} />
        <Route path="/perfumes" element={<Perfumes />} />
        <Route path="/perfumes/:slug" element={<PerfumeDetail />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/brands/:slug" element={<BrandDetail />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/:slug" element={<NoteDetail />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
