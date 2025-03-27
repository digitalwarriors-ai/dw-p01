
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  BarChart3, 
  Mail, 
  MessageSquare, 
  Phone, 
  PieChart, 
  SearchIcon, 
  ShoppingCart, 
  Users, 
  Zap,
  Database,
  Home,
  Settings,
  ChevronLeft
} from "lucide-react";

interface SidebarProps {
  onClose?: () => void;
}

export function Sidebar({ onClose }: SidebarProps) {
  const location = useLocation();
  
  const mainMenuItems = [
    {
      title: "Visão Geral",
      icon: Home,
      href: "/",
    },
    {
      title: "Email Marketing",
      icon: Mail,
      href: "/email",
    },
    {
      title: "WhatsApp",
      icon: MessageSquare,
      href: "/whatsapp",
    },
    {
      title: "SMS",
      icon: Zap,
      href: "/sms",
    },
    {
      title: "Pesquisas",
      icon: SearchIcon,
      href: "/pesquisas",
    },
    {
      title: "Ligações",
      icon: Phone,
      href: "/ligacoes",
    },
    {
      title: "Tráfego Pago",
      icon: BarChart3,
      href: "/trafego",
    },
    {
      title: "Landing Page",
      icon: ShoppingCart,
      href: "/landing-page",
    },
    {
      title: "Área Comercial",
      icon: Users,
      href: "/comercial",
    },
    {
      title: "Banco de Dados",
      icon: Database,
      href: "/banco-dados",
    },
    {
      title: "Análise Avançada",
      icon: PieChart,
      href: "/analise",
    },
  ];
  
  const bottomMenuItems = [
    {
      title: "Configurações",
      icon: Settings,
      href: "/settings",
    },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex h-full flex-col border-r bg-sidebar text-sidebar-foreground shadow-lg">
      <div className="flex h-16 items-center border-b px-6">
        <Link to="/" className="flex items-center gap-2 font-bold">
          <BarChart3 className="h-6 w-6" />
          <span className="text-lg">Dashboard</span>
        </Link>
        <Button 
          variant="ghost" 
          size="icon" 
          className="ml-auto md:hidden" 
          onClick={onClose}
        >
          <ChevronLeft size={20} />
        </Button>
      </div>
      <ScrollArea className="flex-1 px-3 py-2">
        <nav className="flex flex-col gap-1">
          {mainMenuItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              onClick={onClose}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                isActive(item.href) 
                  ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" 
                  : "text-sidebar-foreground/80"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.title}
            </Link>
          ))}
        </nav>
      </ScrollArea>
      <div className="mt-auto border-t px-3 py-2">
        <nav className="flex flex-col gap-1">
          {bottomMenuItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              onClick={onClose}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                isActive(item.href) 
                  ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" 
                  : "text-sidebar-foreground/80"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
