
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { ArrowLeft, ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";

export default function UnauthorizedPage() {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-destructive/10 p-3">
            <ShieldAlert className="h-10 w-10 text-destructive" />
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-4">Acesso não autorizado</h1>
        <p className="text-muted-foreground mb-6">
          Desculpe, {user?.name || 'usuário'}, seu perfil ({user?.role}) não tem permissão para acessar esta página.
          Por favor, entre em contato com o administrador caso acredite que isso seja um erro.
        </p>
        <Button asChild>
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar ao Dashboard
          </Link>
        </Button>
      </div>
    </div>
  );
}
