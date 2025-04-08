import React, { useState } from "react";
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
  Users, 
  MousePointer, 
  BarChart3,
  ArrowUpDown,
  ExternalLink,
  Globe,
  Clock,
  Laptop
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const LandingPageDashboard = () => {
  const [period, setPeriod] = useState("7d");
  
  // Dados simulados para métricas principais
  const totalVisits = 18450;
  const conversionRate = 5.82;
  const bounceRate = 42.3;
  const averageTimeOnPage = "1:45";
  
  // Dados simulados para o gráfico de área
  const areaChartData = [
    { name: "Seg", visitas: 2450, conversoes: 142 },
    { name: "Ter", visitas: 2680, conversoes: 158 },
    { name: "Qua", visitas: 2520, conversoes: 145 },
    { name: "Qui", visitas: 2750, conversoes: 162 },
    { name: "Sex", visitas: 2980, conversoes: 175 },
    { name: "Sáb", visitas: 2580, conversoes: 148 },
    { name: "Dom", visitas: 2490, conversoes: 143 },
  ];
  
  // Dados simulados para o gráfico de pizza
  const pieChartData = [
    { name: "Desktop", value: 52.7 },
    { name: "Mobile", value: 42.3 },
    { name: "Tablet", value: 5.0 },
  ];
  
  // Dados simulados para a tabela de landing pages
  const pagesData = [
    { 
      pagina: "/curso-marketing-digital", 
      visitas: 5820, 
      taxaConversao: 6.2, 
      taxaRejeicao: 38.5, 
      tempoMedio: "1:58",
      status: "ativo" 
    },
    { 
      pagina: "/ebook-email-marketing", 
      visitas: 4250, 
      taxaConversao: 8.5, 
      taxaRejeicao: 35.2, 
      tempoMedio: "1:42",
      status: "ativo" 
    },
    { 
      pagina: "/webinar-vendas", 
      visitas: 3750, 
      taxaConversao: 5.8, 
      taxaRejeicao: 42.1, 
      tempoMedio: "1:35",
      status: "ativo" 
    },
    { 
      pagina: "/curso-redes-sociais", 
      visitas: 2850, 
      taxaConversao: 4.9, 
      taxaRejeicao: 45.3, 
      tempoMedio: "1:28",
      status: "ativo" 
    },
    { 
      pagina: "/consultoria-gratuita", 
      visitas: 1780, 
      taxaConversao: 7.2, 
      taxaRejeicao: 40.8, 
      tempoMedio: "1:45",
      status: "concluído" 
    },
  ];
  
  // Colunas para a tabela de landing pages
  const pagesColumns = [
    { 
      header: "Landing Page", 
      accessorKey: "pagina",
      cell: ({ row }: { row: any }) => (
        <div className="flex items-center gap-2">
          <ExternalLink className="h-3 w-3 text-muted-foreground" />
          <span>{row.pagina}</span>
        </div>
      )
    },
    { 
      header: "Visitas", 
      accessorKey: "visitas",
      cell: ({ row }: { row: any }) => row.visitas.toLocaleString()
    },
    { 
      header: "Taxa de Conversão", 
      accessorKey: "taxaConversao",
      cell: ({ row }: { row: any }) => `${row.taxaConversao}%`
    },
    { 
      header: "Taxa de Rejeição", 
      accessorKey: "taxaRejeicao",
      cell: ({ row }: { row: any }) => `${row.taxaRejeicao}%`
    },
    { header: "Tempo Médio", accessorKey: "tempoMedio" },
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

  // Dados simulados para elementos
  const elementData = [
    { 
      elemento: "Botão CTA Principal", 
      clicks: 1580, 
      ctr: 8.6,
      influencia: 85
    },
    { 
      elemento: "Formulário de Lead", 
      clicks: 1420, 
      ctr: 7.7,
      influencia: 100
    },
    { 
      elemento: "Vídeo Explicativo", 
      clicks: 980, 
      ctr: 5.3,
      influencia: 62
    },
    { 
      elemento: "Botão 'Saiba Mais'", 
      clicks: 840, 
      ctr: 4.6,
      influencia: 45
    },
    { 
      elemento: "Seção de Depoimentos", 
      clicks: 750, 
      ctr: 4.1,
      influencia: 53
    },
  ];
  
  const elementColumns = [
    { header: "Elemento", accessorKey: "elemento" },
    { 
      header: "Cliques", 
      accessorKey: "clicks",
      cell: ({ row }: { row: any }) => row.clicks.toLocaleString()
    },
    { 
      header: "CTR", 
      accessorKey: "ctr",
      cell: ({ row }: { row: any }) => `${row.ctr}%`
    },
    { 
      header: "Influência Conversão", 
      accessorKey: "influencia",
      cell: ({ row }: { row: any }) => (
        <div className="flex items-center gap-2">
          <Progress value={row.influencia} className="h-2 w-24" />
          <span>{row.influencia}%</span>
        </div>
      )
    },
  ];

  // Dados simulados para origens
  const sourcesData = [
    { 
      origem: "Google Ads", 
      visitas: 5840, 
      taxaConversao: 6.5,
      custo: 2850.42,
      cpa: 7.51
    },
    { 
      origem: "Facebook Ads", 
      visitas: 4250, 
      taxaConversao: 4.8,
      custo: 1950.20,
      cpa: 9.57
    },
    { 
      origem: "Email Marketing", 
      visitas: 3620, 
      taxaConversao: 8.2,
      custo: 850.00,
      cpa: 2.86
    },
    { 
      origem: "Orgânico", 
      visitas: 2580, 
      taxaConversao: 3.5,
      custo: 0,
      cpa: 0
    },
    { 
      origem: "Referência", 
      visitas: 2160, 
      taxaConversao: 5.1,
      custo: 0,
      cpa: 0
    },
  ];
  
  const sourcesColumns = [
    { header: "Origem", accessorKey: "origem" },
    { 
      header: "Visitas", 
      accessorKey: "visitas",
      cell: ({ row }: { row: any }) => row.visitas.toLocaleString()
    },
    { 
      header: "Taxa de Conversão", 
      accessorKey: "taxaConversao",
      cell: ({ row }: { row: any }) => `${row.taxaConversao}%`
    },
    { 
      header: "Custo", 
      accessorKey: "custo",
      cell: ({ row }: { row: any }) => 
        row.custo > 0 
          ? `R$ ${row.custo.toFixed(2)}`
          : "—"
    },
    { 
      header: "CPA", 
      accessorKey: "cpa",
      cell: ({ row }: { row: any }) => 
        row.cpa > 0 
          ? `R$ ${row.cpa.toFixed(2)}`
          : "—"
    },
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard de Landing Pages</h1>
          <p className="text-muted-foreground">
            Monitore o desempenho de suas páginas de conversão
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
          title="Total de Visitas" 
          value={totalVisits.toLocaleString()}
          trend={3.2}
          icon={<Users className="h-4 w-4" />}
        />
        <StatCard 
          title="Taxa de Conversão" 
          value={`${conversionRate}%`}
          trend={0.8}
          icon={<ArrowUpDown className="h-4 w-4" />}
        />
        <StatCard 
          title="Taxa de Rejeição" 
          value={`${bounceRate}%`}
          trend={-1.5}
          icon={<MousePointer className="h-4 w-4" />}
        />
        <StatCard 
          title="Tempo Médio" 
          value={averageTimeOnPage}
          trend={0.3}
          icon={<Clock className="h-4 w-4" />}
        />
      </div>
      
      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <DashboardCard 
          title="Desempenho de Landing Pages" 
          description="Visitas e conversões por dia"
          className="lg:col-span-2"
        >
          <AreaChart 
            title="Visitas e Conversões Diárias"
            data={areaChartData}
            categories={["visitas", "conversoes"]}
            index="name"
            colors={["#3b82f6", "#10b981"]}
            valueFormatter={(value) => value.toLocaleString()}
            className="aspect-[4/3]"
          />
        </DashboardCard>
        
        <DashboardCard 
          title="Tráfego por Dispositivo" 
          description="Distribuição de visitas por tipo de dispositivo"
        >
          <PieChart 
            title="Distribuição de Tráfego por Dispositivo"
            data={pieChartData}
            className="aspect-[4/3]"
            colors={["#3b82f6", "#10b981", "#f59e0b"]}
          />
        </DashboardCard>
      </div>
      
      {/* Seções de abas */}
      <Tabs defaultValue="pages" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="pages">Landing Pages</TabsTrigger>
          <TabsTrigger value="elements">Elementos</TabsTrigger>
          <TabsTrigger value="sources">Origens</TabsTrigger>
        </TabsList>
        
        <TabsContent value="pages">
          <DashboardCard 
            title="Desempenho das Landing Pages" 
            description="Métricas por página de conversão"
          >
            <DataTable 
              columns={pagesColumns}
              data={pagesData}
            />
          </DashboardCard>
        </TabsContent>
        
        <TabsContent value="elements">
          <DashboardCard 
            title="Análise de Elementos" 
            description="Desempenho de elementos interativos na landing page de Curso de Marketing Digital"
          >
            <DataTable 
              columns={elementColumns}
              data={elementData}
            />
          </DashboardCard>
        </TabsContent>
        
        <TabsContent value="sources">
          <DashboardCard 
            title="Origens de Tráfego" 
            description="Desempenho e custo por origem de tráfego"
          >
            <DataTable 
              columns={sourcesColumns}
              data={sourcesData}
            />
          </DashboardCard>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LandingPageDashboard;
