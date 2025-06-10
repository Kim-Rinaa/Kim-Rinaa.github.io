// src/App.tsx
import React from 'react'; // React import 추가
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index"; // 실제 페이지 내용을 담고 있는 컴포넌트
import NotFound from "./pages/NotFound";
import { LanguageProvider } from './contexts/LanguageContext'; // 경로에 맞게 수정
import { HelmetProvider } from 'react-helmet-async'; // 추가

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider> {/* LanguageProvider로 BrowserRouter 등을 감쌈 */}
        <HelmetProvider> {/* HelmetProvider 추가 */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </HelmetProvider>
      </LanguageProvider>
      <Toaster />
      <Sonner />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;