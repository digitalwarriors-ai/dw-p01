
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { DashboardLayout } from "@/components/DashboardLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import EmailDashboard from "./pages/EmailDashboard";
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
              <Route path="/whatsapp" element={<div>WhatsApp Dashboard (Em desenvolvimento)</div>} />
              <Route path="/sms" element={<div>SMS Dashboard (Em desenvolvimento)</div>} />
              <Route path="/pesquisas" element={<div>Pesquisas Dashboard (Em desenvolvimento)</div>} />
              <Route path="/ligacoes" element={<div>Ligações Dashboard (Em desenvolvimento)</div>} />
              <Route path="/trafego" element={<div>Tráfego Pago Dashboard (Em desenvolvimento)</div>} />
              <Route path="/landing-page" element={<div>Landing Page Dashboard (Em desenvolvimento)</div>} />
              <Route path="/comercial" element={<div>Comercial Dashboard (Em desenvolvimento)</div>} />
              <Route path="/banco-dados" element={<div>Banco de Dados Dashboard (Em desenvolvimento)</div>} />
              <Route path="/analise" element={<div>Análise Avançada Dashboard (Em desenvolvimento)</div>} />
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
