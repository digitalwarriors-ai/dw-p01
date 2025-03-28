
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
  Phone, 
  Clock, 
  CheckCircle, 
  XCircle,
  ArrowDownUp,
  Users
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const LigacoesDashboard = () => {
  const [period, setPeriod] = useState("7d");
  
  // Dados simulados para métricas principais
  const totalCalls = 2458;
  const averageDuration = "4:23";
  const successRate = 68.5;
  const conversionRate = 12.2;
  
  // Dados simulados para o gráfico de área
  const areaChartData = [
    { name: "Seg", total: 340, atendidas: 243, convertidas: 42 },
    { name: "Ter", total: 420, atendidas: 294, convertidas: 51 },
    { name: "Qua", total: 380, atendidas: 266, convertidas: 45 },
    { name: "Qui", total: 365, atendidas: 248, convertidas: 43 },
    { name: "Sex", total: 450, atendidas: 318, convertidas: 55 },
    { name: "Sáb", total: 295, atendidas: 189, convertidas: 32 },
    { name: "Dom", total: 208, atendidas: 125, convertidas: 21 },
  ];
  
  // Dados simulados para o gráfico de pizza
  const pieChartData = [
    { name: "Atendidas", value: 68.5 },
    { name: "Não atendidas", value: 18.2 },
    { name: "Ocupado", value: 8.4 },
    { name: "Caixa postal", value: 4.9 },
  ];
  
  // Dados simulados para a tabela de campanhas
  const campaignData = [
    { 
      nome: "Reativação de Clientes", 
      total: 650, 
      atendidas: 462, 
      taxa_sucesso: 71.1, 
      duracao_media: "4:12",
      conversao: 14.8,
      status: "ativo" 
    },
    { 
      nome: "Pesquisa de Satisfação", 
      total: 580, 
      atendidas: 395, 
      taxa_sucesso: 68.1, 
      duracao_media: "3:45",
      conversao: 0,
      status: "ativo" 
    },
    { 
      nome: "Venda Curso Avançado", 
      total: 420, 
      atendidas: 302, 
      taxa_sucesso: 71.9, 
      duracao_media: "5:30",
      conversao: 18.2,
      status: "ativo" 
    },
    { 
      nome: "Confirmação de Webinar", 
      total: 325, 
      atendidas: 246, 
      taxa_sucesso: 75.7, 
      duracao_media: "2:15",
      conversao: 0,
      status: "ativo" 
    },
    { 
      nome: "Venda Curso Básico", 
      total: 483, 
      atendidas: 340, 
      taxa_sucesso: 70.4, 
      duracao_media: "4:48",
      conversao: 15.6,
      status: "concluído" 
    },
  ];
  
  // Colunas para a tabela de campanhas
  const campaignColumns = [
    { header: "Campanha", accessorKey: "nome" },
    { header: "Total", accessorKey: "total" },
    { header: "Atendidas", accessorKey: "atendidas" },
    { 
      header: "Taxa de Sucesso", 
      accessorKey: "taxa_sucesso",
      cell: ({ row }: { row: any }) => `${row.taxa_sucesso}%`
    },
    { 
      header: "Duração Média", 
      accessorKey: "duracao_media" 
    },
    { 
      header: "Conversão", 
      accessorKey: "conversao",
      cell: ({ row }: { row: any }) => (
        row.conversao > 0 ? `${row.conversao}%` : "N/A"
      ) 
    },
    { 
      header: "Status", 
      accessorKey: "status",
      cell: ({ row }: { row: any }) => (
        <TagBadge 
          text={row.status === "ativo" ? "Ativo" : "Concluído"}
          variant={row.status === "ativo" ? "success" : "default"}
        />
      )
    },
  ];

  // Dados simulados para operadores
  const operatorData = [
    { 
      nome: "Carlos Silva", 
      chamadas: 245, 
      atendidas: 187, 
      taxa_sucesso: 76.3,
      duracao_media: "4:28",
      conversao: 15.7
    },
    { 
      nome: "Ana Pereira", 
      chamadas: 278, 
      atendidas: 220, 
      taxa_sucesso: 79.1,
      duracao_media: "3:52",
      conversao: 17.3
    },
    { 
      nome: "Marcelo Santos", 
      chamadas: 301, 
      atendidas: 225, 
      taxa_sucesso: 74.8,
      duracao_media: "4:15",
      conversao: 13.4
    },
    { 
      nome: "Juliana Costa", 
      chamadas: 256, 
      atendidas: 198, 
      taxa_sucesso: 77.3,
      duracao_media: "4:05",
      conversao: 14.2
    },
    { 
      nome: "Rafael Oliveira", 
      chamadas: 290, 
      atendidas: 208, 
      taxa_sucesso: 71.7,
      duracao_media: "4:32",
      conversao: 12.8
    },
  ];
  
  const operatorColumns = [
    { header: "Operador", accessorKey: "nome" },
    { header: "Chamadas", accessorKey: "chamadas" },
    { header: "Atendidas", accessorKey: "atendidas" },
    { 
      header: "Taxa de Sucesso", 
      accessorKey: "taxa_sucesso",
      cell: ({ row }: { row: any }) => `${row.taxa_sucesso}%`
    },
    { 
      header: "Duração Média", 
      accessorKey: "duracao_media" 
    },
    { 
      header: "Conversão", 
      accessorKey: "conversao",
      cell: ({ row }: { row: any }) => `${row.conversao}%`
    },
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard de Ligações</h1>
          <p className="text-muted-foreground">
            Monitore o desempenho das campanhas de ligações e telemarketing
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
          title="Total de Ligações" 
          value={totalCalls.toLocaleString()}
          trend={3.8}
          icon={<Phone className="h-4 w-4" />}
        />
        <StatCard 
          title="Duração Média" 
          value={averageDuration}
          trend={0.5}
          icon={<Clock className="h-4 w-4" />}
        />
        <StatCard 
          title="Taxa de Sucesso" 
          value={`${successRate}%`}
          trend={2.3}
          icon={<CheckCircle className="h-4 w-4" />}
        />
        <StatCard 
          title="Taxa de Conversão" 
          value={`${conversionRate}%`}
          trend={1.7}
          icon={<ArrowDownUp className="h-4 w-4" />}
        />
      </div>
      
      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <DashboardCard 
          title="Desempenho de Ligações" 
          description="Total, atendidas e convertidas por dia"
          className="lg:col-span-2"
        >
          <AreaChart 
            data={areaChartData}
            categories={["total", "atendidas", "convertidas"]}
            index="name"
            colors={["#64748b", "#3b82f6", "#10b981"]}
            valueFormatter={(value) => value.toLocaleString()}
            className="aspect-[4/3]"
          />
        </DashboardCard>
        
        <DashboardCard 
          title="Status das Ligações" 
          description="Distribuição dos resultados das ligações"
        >
          <PieChart 
            data={pieChartData}
            className="aspect-[4/3]"
            colors={["#10b981", "#f59e0b", "#3b82f6", "#6b7280"]}
          />
        </DashboardCard>
      </div>
      
      {/* Seções de abas */}
      <Tabs defaultValue="campaigns" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="campaigns">Campanhas</TabsTrigger>
          <TabsTrigger value="operators">Operadores</TabsTrigger>
          <TabsTrigger value="scripts">Scripts</TabsTrigger>
        </TabsList>
        
        <TabsContent value="campaigns">
          <DashboardCard 
            title="Campanhas de Ligações" 
            description="Desempenho das campanhas ativas e recentes"
          >
            <DataTable 
              columns={campaignColumns}
              data={campaignData}
            />
          </DashboardCard>
        </TabsContent>
        
        <TabsContent value="operators">
          <DashboardCard 
            title="Desempenho dos Operadores" 
            description="Estatísticas por operador de telemarketing"
          >
            <DataTable 
              columns={operatorColumns}
              data={operatorData}
            />
          </DashboardCard>
        </TabsContent>
        
        <TabsContent value="scripts">
          <DashboardCard 
            title="Efetividade de Scripts" 
            description="Taxa de sucesso por script utilizado"
          >
            <div className="space-y-6 py-2">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Script A - Abordagem Consultiva</span>
                      <TagBadge text="Mais efetivo" variant="success" />
                    </div>
                    <span className="font-medium">82.3%</span>
                  </div>
                  <Progress value={82.3} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Script B - Abordagem Direta</span>
                    <span className="font-medium">68.7%</span>
                  </div>
                  <Progress value={68.7} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Script C - Abordagem Educacional</span>
                    <span className="font-medium">74.5%</span>
                  </div>
                  <Progress value={74.5} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Script D - Abordagem Solução</span>
                    <span className="font-medium">76.9%</span>
                  </div>
                  <Progress value={76.9} className="h-2" />
                </div>
              </div>
              
              <div className="text-muted-foreground text-sm mt-4">
                * Taxas de sucesso baseadas em ligações atendidas
              </div>
            </div>
          </DashboardCard>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LigacoesDashboard;
