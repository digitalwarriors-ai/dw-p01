
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { DashboardLayout } from "@/components/DashboardLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import EmailDashboard from "./pages/EmailDashboard";
import WhatsAppDashboard from "./pages/WhatsAppDashboard";
import SMSDashboard from "./pages/SMSDashboard";
import PesquisasDashboard from "./pages/PesquisasDashboard";
import LigacoesDashboard from "./pages/LigacoesDashboard";
import TrafegoPagoDashboard from "./pages/TrafegoPagoDashboard";
import TrafegoOrganicoDashboard from "./pages/TrafegoOrganicoDashboard";
import LandingPageDashboard from "./pages/LandingPageDashboard";
import ComercialDashboard from "./pages/ComercialDashboard";
import AnaliseDashboard from "./pages/AnaliseDashboard";
import UnauthorizedPage from "./pages/UnauthorizedPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/unauthorized" element={<UnauthorizedPage />} />
            
            {/* Protected Dashboard Routes */}
            <Route
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route path="/" element={<Dashboard />} />
              <Route path="/email" element={<EmailDashboard />} />
              <Route path="/whatsapp" element={<WhatsAppDashboard />} />
              <Route path="/sms" element={<SMSDashboard />} />
              <Route path="/pesquisas" element={<PesquisasDashboard />} />
              <Route path="/ligacoes" element={<LigacoesDashboard />} />
              <Route path="/trafego-pago" element={<TrafegoPagoDashboard />} />
              <Route path="/trafego-organico" element={<TrafegoOrganicoDashboard />} />
              <Route path="/landing-page" element={<LandingPageDashboard />} />
              <Route path="/comercial" element={<ComercialDashboard />} />
              <Route path="/analise" element={<AnaliseDashboard />} />
              <Route path="/settings" element={<div>Configurações (Em desenvolvimento)</div>} />
            </Route>
            
            {/* Redirect root to dashboard */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
