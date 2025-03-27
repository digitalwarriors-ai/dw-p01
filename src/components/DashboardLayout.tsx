
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Bell, Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { UserButton } from "./UserButton";

export function DashboardLayout() {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  useEffect(() => {
    setSidebarOpen(!isMobile);
  }, [isMobile]);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0`}
      >
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="bg-background border-b flex h-16 items-center px-4 gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
          
          <div className="w-full flex items-center justify-between">
            <h1 className="text-xl font-bold hidden md:block">Dashboard de Lançamento Digital</h1>
            
            <div className="flex items-center gap-2">
              <ThemeToggle />
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full relative">
                    <Bell size={20} />
                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-72">
                  <DropdownMenuLabel>Notificações</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <div className="max-h-96 overflow-auto">
                    <DropdownMenuItem className="cursor-pointer">
                      <div className="flex flex-col gap-1">
                        <p className="font-medium">Campanhas de Email</p>
                        <p className="text-sm text-muted-foreground">Taxa de abertura abaixo da média</p>
                        <p className="text-xs text-muted-foreground">Há 5 minutos</p>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <div className="flex flex-col gap-1">
                        <p className="font-medium">Tráfego Pago</p>
                        <p className="text-sm text-muted-foreground">ROI acima da meta!</p>
                        <p className="text-xs text-muted-foreground">Há 30 minutos</p>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <div className="flex flex-col gap-1">
                        <p className="font-medium">WhatsApp Marketing</p>
                        <p className="text-sm text-muted-foreground">15 novas mensagens não respondidas</p>
                        <p className="text-xs text-muted-foreground">Há 2 horas</p>
                      </div>
                    </DropdownMenuItem>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer text-center">
                    <span className="text-primary w-full">Ver todas</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <UserButton />
            </div>
          </div>
        </header>
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
