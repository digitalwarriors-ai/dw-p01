
import { useState } from "react";
import { AreaChart } from "@/components/charts/AreaChart";
import { PieChart } from "@/components/charts/PieChart";
import { StatCard } from "@/components/charts/StatCard";
import { DashboardCard } from "@/components/charts/DashboardCard";
import { DataTable } from "@/components/charts/DataTable";
import { TagBadge } from "@/components/charts/TagBadge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ListFilter, 
  Download, 
  DollarSign, 
  Users, 
  Clock, 
  BarChart3,
  PhoneCall,
  MailOpen,
  MessageCircle,
  Briefcase
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const ComercialDashboard = () => {
  const [period, setPeriod] = useState("7d");
  
  // Dados simulados para métricas principais
  const totalSales = 156;
  const conversionRate = 12.4;
  const averageTicket = 897.32;
  const responseTime = "1:28";
  
  // Dados simulados para o gráfico de área
  const areaChartData = [
    { name: "Seg", leads: 45, atendidos: 38, vendas: 5 },
    { name: "Ter", leads: 52, atendidos: 47, vendas: 6 },
    { name: "Qua", leads: 48, atendidos: 42, vendas: 5 },
    { name: "Qui", leads: 58, atendidos: 52, vendas: 7 },
    { name: "Sex", leads: 62, atendidos: 55, vendas: 8 },
    { name: "Sáb", leads: 42, atendidos: 35, vendas: 4 },
    { name: "Dom", leads: 35, atendidos: 28, vendas: 3 },
  ];
  
  // Dados simulados para o gráfico de pizza
  const pieChartData = [
    { name: "Email", value: 42.5 },
    { name: "WhatsApp", value: 28.3 },
    { name: "Telefone", value: 18.7 },
    { name: "Formulário", value: 10.5 },
  ];
  
  // Dados simulados para a tabela de vendedores
  const vendedoresData = [
    { 
      nome: "João Silva", 
      leads: 85, 
      atendidos: 78, 
      vendas: 12, 
      conversao: 15.4,
      tempoMedio: "1:15",
      ticket: 925.40
    },
    { 
      nome: "Maria Oliveira", 
      leads: 92, 
      atendidos: 85, 
      vendas: 15, 
      conversao: 17.6,
      tempoMedio: "1:08",
      ticket: 978.25
    },
    { 
      nome: "Pedro Santos", 
      leads: 78, 
      atendidos: 70, 
      vendas: 10, 
      conversao: 14.3,
      tempoMedio: "1:35",
      ticket: 850.80
    },
    { 
      nome: "Ana Costa", 
      leads: 88, 
      atendidos: 82, 
      vendas: 13, 
      conversao: 15.9,
      tempoMedio: "1:22",
      ticket: 912.60
    },
    { 
      nome: "Carlos Mendes", 
      leads: 75, 
      atendidos: 68, 
      vendas: 9, 
      conversao: 13.2,
      tempoMedio: "1:45",
      ticket: 825.15
    },
  ];
  
  // Colunas para a tabela de vendedores
  const vendedoresColumns = [
    { header: "Vendedor", accessorKey: "nome" },
    { header: "Leads", accessorKey: "leads" },
    { header: "Atendidos", accessorKey: "atendidos" },
    { header: "Vendas", accessorKey: "vendas" },
    { 
      header: "Conversão", 
      accessorKey: "conversao",
      cell: ({ row }: { row: any }) => `${row.conversao}%`
    },
    { header: "Tempo Médio", accessorKey: "tempoMedio" },
    { 
      header: "Ticket Médio", 
      accessorKey: "ticket",
      cell: ({ row }: { row: any }) => `R$ ${row.ticket.toFixed(2)}`
    },
  ];

  // Dados simulados para produtos
  const produtosData = [
    { 
      produto: "Curso Avançado", 
      vendas: 45, 
      receita: 44775.50, 
      conversao: 14.2,
    },
    { 
      produto: "Curso Básico", 
      vendas: 38, 
      receita: 22838.60, 
      conversao: 16.8,
    },
    { 
      produto: "Mentorias Premium", 
      vendas: 22, 
      receita: 33440.00, 
      conversao: 8.5,
    },
    { 
      produto: "E-books Bundle", 
      vendas: 35, 
      receita: 10465.75, 
      conversao: 18.2,
    },
    { 
      produto: "Consultoria Individual", 
      vendas: 16, 
      receita: 28165.60, 
      conversao: 7.5,
    },
  ];
  
  const produtosColumns = [
    { header: "Produto", accessorKey: "produto" },
    { header: "Vendas", accessorKey: "vendas" },
    { 
      header: "Receita", 
      accessorKey: "receita",
      cell: ({ row }: { row: any }) => `R$ ${row.receita.toFixed(2)}`
    },
    { 
      header: "Taxa Conversão", 
      accessorKey: "conversao",
      cell: ({ row }: { row: any }) => `${row.conversao}%`
    },
  ];

  // Dados simulados para funil
  const funnelData = [
    { 
      estagio: "Leads Qualificados", 
      quantidade: 342,
      porcentagem: 100,
    },
    { 
      estagio: "Demonstração", 
      quantidade: 258,
      porcentagem: 75.4,
    },
    { 
      estagio: "Proposta", 
      quantidade: 187,
      porcentagem: 54.7,
    },
    { 
      estagio: "Negociação", 
      quantidade: 124,
      porcentagem: 36.3,
    },
    { 
      estagio: "Fechamento", 
      quantidade: 82,
      porcentagem: 24.0,
    },
  ];
  
  const funnelColumns = [
    { header: "Estágio", accessorKey: "estagio" },
    { 
      header: "Quantidade", 
      accessorKey: "quantidade"
    },
    { 
      header: "Progresso", 
      accessorKey: "porcentagem",
      cell: ({ row }: { row: any }) => (
        <div className="flex items-center gap-2">
          <Progress value={row.porcentagem} className="h-2 w-24" />
          <span>{row.porcentagem}%</span>
        </div>
      )
    },
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard Comercial</h1>
          <p className="text-muted-foreground">
            Monitore o desempenho da equipe de vendas e conversões
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex rounded-md overflow-hidden">
            <Button 
              variant={period === "7d" ? "default" : "outline"} 
              size="sm"
              className="rounded-r-none"
              onClick={() => setPeriod("7d")}
            >
              7 dias
            </Button>
            <Button 
              variant={period === "15d" ? "default" : "outline"} 
              size="sm"
              className="rounded-none"
              onClick={() => setPeriod("15d")}
            >
              15 dias
            </Button>
            <Button 
              variant={period === "30d" ? "default" : "outline"} 
              size="sm"
              className="rounded-l-none"
              onClick={() => setPeriod("30d")}
            >
              30 dias
            </Button>
          </div>
          
          <Button variant="outline" size="sm" className="gap-1">
            <ListFilter size={16} />
            Filtros
          </Button>
          
          <Button variant="outline" size="sm" className="gap-1">
            <Download size={16} />
            Exportar
          </Button>
        </div>
      </div>
      
      {/* Cards de métricas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total de Vendas" 
          value={totalSales.toString()}
          trend={4.6}
          icon={<Briefcase className="h-4 w-4" />}
        />
        <StatCard 
          title="Taxa de Conversão" 
          value={`${conversionRate}%`}
          trend={1.2}
          icon={<Users className="h-4 w-4" />}
        />
        <StatCard 
          title="Ticket Médio" 
          value={`R$ ${averageTicket.toFixed(2)}`}
          trend={2.8}
          icon={<DollarSign className="h-4 w-4" />}
        />
        <StatCard 
          title="Tempo de Resposta" 
          value={responseTime}
          trend={-3.5}
          icon={<Clock className="h-4 w-4" />}
        />
      </div>
      
      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <DashboardCard 
          title="Fluxo de Atendimento" 
          description="Leads, atendimentos e vendas por dia"
          className="lg:col-span-2"
        >
          <AreaChart 
            data={areaChartData}
            categories={["leads", "atendidos", "vendas"]}
            index="name"
            colors={["#3b82f6", "#f59e0b", "#10b981"]}
            valueFormatter={(value) => value.toString()}
            className="aspect-[4/3]"
          />
        </DashboardCard>
        
        <DashboardCard 
          title="Origem dos Leads" 
          description="Distribuição por canal de contato"
        >
          <PieChart 
            data={pieChartData}
            className="aspect-[4/3]"
            colors={["#3b82f6", "#10b981", "#f59e0b", "#ef4444"]}
          />
        </DashboardCard>
      </div>
      
      {/* Seções de abas */}
      <Tabs defaultValue="team" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="team">Equipe</TabsTrigger>
          <TabsTrigger value="products">Produtos</TabsTrigger>
          <TabsTrigger value="funnel">Funil de Vendas</TabsTrigger>
        </TabsList>
        
        <TabsContent value="team">
          <DashboardCard 
            title="Desempenho da Equipe" 
            description="Métricas por vendedor"
          >
            <DataTable 
              columns={vendedoresColumns}
              data={vendedoresData}
            />
          </DashboardCard>
        </TabsContent>
        
        <TabsContent value="products">
          <DashboardCard 
            title="Desempenho por Produto" 
            description="Vendas e receita por produto"
          >
            <DataTable 
              columns={produtosColumns}
              data={produtosData}
            />
          </DashboardCard>
        </TabsContent>
        
        <TabsContent value="funnel">
          <DashboardCard 
            title="Funil de Vendas" 
            description="Progresso dos leads nos estágios do funil comercial"
          >
            <div className="space-y-6">
              <DataTable 
                columns={funnelColumns}
                data={funnelData}
              />
              
              <div className="flex flex-col md:flex-row gap-8 pt-4">
                <div className="md:w-1/2">
                  <h3 className="font-medium mb-2">Principais Pontos de Abandono:</h3>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>Transição da Proposta para Negociação (33% de perda)</li>
                    <li>Transição da Demonstração para Proposta (28% de perda)</li>
                    <li>Fechamento final (12% de perda)</li>
                  </ul>
                </div>
                
                <div className="md:w-1/2">
                  <h3 className="font-medium mb-2">Tempo Médio por Estágio:</h3>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>Lead para Demonstração: 1,2 dias</li>
                    <li>Demonstração para Proposta: 2,5 dias</li>
                    <li>Proposta para Negociação: 3,8 dias</li>
                    <li>Negociação para Fechamento: 2,4 dias</li>
                  </ul>
                </div>
              </div>
            </div>
          </DashboardCard>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ComercialDashboard;
