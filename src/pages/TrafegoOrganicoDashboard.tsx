
import { useState } from "react";
import { AreaChart } from "@/components/charts/AreaChart";
import { BarChart } from "@/components/charts/BarChart";
import { StatCard } from "@/components/charts/StatCard";
import { DashboardCard } from "@/components/charts/DashboardCard";
import { DataTable } from "@/components/charts/DataTable";
import { TagBadge } from "@/components/charts/TagBadge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ListFilter, 
  Download, 
  BarChart3, 
  Users, 
  Clock, 
  TrendingUp,
  Globe,
  Link,
  Bookmark,
  ExternalLink
} from "lucide-react";

const TrafegoOrganicoDashboard = () => {
  const [period, setPeriod] = useState("7d");
  
  // Dados simulados para métricas principais
  const totalVisits = 24680;
  const uniqueVisitors = 18250;
  const averageSessionTime = "2:42";
  const conversionRate = 2.85;
  
  // Dados simulados para o gráfico de área
  const areaChartData = [
    { name: "Seg", visitas: 3250, usuarios: 2580, conversoes: 84 },
    { name: "Ter", visitas: 3580, usuarios: 2750, conversoes: 95 },
    { name: "Qua", visitas: 3420, usuarios: 2630, conversoes: 89 },
    { name: "Qui", visitas: 3650, usuarios: 2780, conversoes: 98 },
    { name: "Sex", visitas: 3890, usuarios: 2950, conversoes: 112 },
    { name: "Sáb", visitas: 3520, usuarios: 2640, conversoes: 91 },
    { name: "Dom", visitas: 3370, usuarios: 2540, conversoes: 82 },
  ];
  
  // Dados simulados para o gráfico de barras
  const barChartData = [
    { fonte: "Pesquisa Orgânica", sessoes: 12480, conversoes: 382 },
    { fonte: "Direto", sessoes: 5250, conversoes: 125 },
    { fonte: "Referência", sessoes: 3850, conversoes: 98 },
    { fonte: "Social", sessoes: 3100, conversoes: 82 },
  ];
  
  // Dados simulados para a tabela de páginas mais acessadas
  const pagesData = [
    { 
      pagina: "/blog/como-criar-landing-page", 
      visualizacoes: 4850, 
      usuarios: 3920, 
      tempo_medio: "3:05", 
      taxa_rejeicao: 32.5,
      conversoes: 85,
      taxa_conversao: 2.17,
    },
    { 
      pagina: "/blog/email-marketing-guia", 
      visualizacoes: 3750, 
      usuarios: 3120, 
      tempo_medio: "4:15", 
      taxa_rejeicao: 28.3,
      conversoes: 72,
      taxa_conversao: 2.31,
    },
    { 
      pagina: "/blog/whatsapp-marketing", 
      visualizacoes: 3250, 
      usuarios: 2780, 
      tempo_medio: "3:42", 
      taxa_rejeicao: 30.1,
      conversoes: 68,
      taxa_conversao: 2.45,
    },
    { 
      pagina: "/servicos/consultoria", 
      visualizacoes: 2950, 
      usuarios: 2580, 
      tempo_medio: "2:38", 
      taxa_rejeicao: 35.7,
      conversoes: 92,
      taxa_conversao: 3.57,
    },
    { 
      pagina: "/ferramentas/teste-gratuito", 
      visualizacoes: 2650, 
      usuarios: 2280, 
      tempo_medio: "2:15", 
      taxa_rejeicao: 33.2,
      conversoes: 118,
      taxa_conversao: 5.18,
    },
  ];
  
  // Colunas para a tabela de páginas
  const pagesColumns = [
    { 
      header: "Página", 
      accessorKey: "pagina",
      cell: ({ row }: { row: any }) => (
        <div className="flex items-center gap-2">
          <ExternalLink className="h-3 w-3 text-muted-foreground" />
          <span className="truncate max-w-[200px]">{row.pagina}</span>
        </div>
      )
    },
    { 
      header: "Visualizações", 
      accessorKey: "visualizacoes",
      cell: ({ row }: { row: any }) => row.visualizacoes.toLocaleString()
    },
    { 
      header: "Usuários", 
      accessorKey: "usuarios",
      cell: ({ row }: { row: any }) => row.usuarios.toLocaleString()
    },
    { header: "Tempo Médio", accessorKey: "tempo_medio" },
    { 
      header: "Taxa Rejeição", 
      accessorKey: "taxa_rejeicao",
      cell: ({ row }: { row: any }) => `${row.taxa_rejeicao}%`
    },
    { header: "Conversões", accessorKey: "conversoes" },
    { 
      header: "Taxa Conversão", 
      accessorKey: "taxa_conversao",
      cell: ({ row }: { row: any }) => `${row.taxa_conversao}%`
    },
  ];

  // Dados simulados para palavras-chave
  const keywordData = [
    { 
      palavra: "landing page criação", 
      posicao: 3, 
      tendencia: 1,
      ctr: 8.5,
      sessoes: 1250
    },
    { 
      palavra: "como fazer email marketing", 
      posicao: 5, 
      tendencia: 2,
      ctr: 7.2,
      sessoes: 980
    },
    { 
      palavra: "whatsapp marketing guia", 
      posicao: 2, 
      tendencia: 0,
      ctr: 9.1,
      sessoes: 1420
    },
    { 
      palavra: "consultoria marketing digital", 
      posicao: 7, 
      tendencia: -1,
      ctr: 6.8,
      sessoes: 720
    },
    { 
      palavra: "ferramentas marketing grátis", 
      posicao: 4, 
      tendencia: 3,
      ctr: 7.9,
      sessoes: 950
    },
  ];
  
  const keywordColumns = [
    { header: "Palavra-chave", accessorKey: "palavra" },
    { 
      header: "Posição", 
      accessorKey: "posicao",
      cell: ({ row }: { row: any }) => `#${row.posicao}`
    },
    { 
      header: "Tendência", 
      accessorKey: "tendencia",
      cell: ({ row }: { row: any }) => {
        if (row.tendencia > 0) {
          return <div className="flex items-center text-green-500">▲ {row.tendencia}</div>
        } else if (row.tendencia < 0) {
          return <div className="flex items-center text-red-500">▼ {Math.abs(row.tendencia)}</div>
        } else {
          return <div className="flex items-center text-muted-foreground">–</div>
        }
      }
    },
    { 
      header: "CTR", 
      accessorKey: "ctr",
      cell: ({ row }: { row: any }) => `${row.ctr}%`
    },
    { 
      header: "Sessões", 
      accessorKey: "sessoes",
      cell: ({ row }: { row: any }) => row.sessoes.toLocaleString()
    },
  ];

  // Dados simulados para backlinks
  const backlinkData = [
    { 
      dominio: "blog.marketing.com", 
      da: 68, 
      tipo: "follow",
      paginas: 5,
      status: "ativo"
    },
    { 
      dominio: "marketingguia.com.br", 
      da: 52, 
      tipo: "follow",
      paginas: 3,
      status: "ativo"
    },
    { 
      dominio: "cursosdigitais.net", 
      da: 45, 
      tipo: "nofollow",
      paginas: 2,
      status: "ativo"
    },
    { 
      dominio: "ferradigital.com", 
      da: 61, 
      tipo: "follow",
      paginas: 4,
      status: "ativo"
    },
    { 
      dominio: "mktdigital.edu", 
      da: 57, 
      tipo: "follow",
      paginas: 1,
      status: "ativo"
    },
  ];
  
  const backlinkColumns = [
    { 
      header: "Domínio", 
      accessorKey: "dominio",
      cell: ({ row }: { row: any }) => (
        <div className="flex items-center gap-2">
          <Globe className="h-3 w-3 text-muted-foreground" />
          <span>{row.dominio}</span>
        </div>
      )
    },
    { 
      header: "DA", 
      accessorKey: "da",
      cell: ({ row }: { row: any }) => (
        <div className="flex items-center gap-1">
          <span className={`${row.da >= 60 ? 'text-green-500' : row.da >= 40 ? 'text-amber-500' : 'text-red-500'}`}>{row.da}</span>
          <span className="text-xs text-muted-foreground">/100</span>
        </div>
      )
    },
    { 
      header: "Tipo", 
      accessorKey: "tipo",
      cell: ({ row }: { row: any }) => (
        <TagBadge 
          text={row.tipo === "follow" ? "Follow" : "NoFollow"}
          variant={row.tipo === "follow" ? "success" : "warning"}
        />
      )
    },
    { header: "Páginas", accessorKey: "paginas" },
    { 
      header: "Status", 
      accessorKey: "status",
      cell: ({ row }: { row: any }) => (
        <TagBadge text="Ativo" variant="info" />
      )
    },
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard de Tráfego Orgânico</h1>
          <p className="text-muted-foreground">
            Monitore o desempenho de SEO e tráfego orgânico do seu site
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
          trend={4.2}
          icon={<BarChart3 className="h-4 w-4" />}
        />
        <StatCard 
          title="Visitantes Únicos" 
          value={uniqueVisitors.toLocaleString()}
          trend={3.8}
          icon={<Users className="h-4 w-4" />}
        />
        <StatCard 
          title="Tempo Médio na Sessão" 
          value={averageSessionTime}
          trend={0.5}
          icon={<Clock className="h-4 w-4" />}
        />
        <StatCard 
          title="Taxa de Conversão" 
          value={`${conversionRate}%`}
          trend={1.2}
          icon={<TrendingUp className="h-4 w-4" />}
        />
      </div>
      
      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <DashboardCard 
          title="Desempenho de Tráfego" 
          description="Visitas, usuários e conversões por dia"
          className="lg:col-span-2"
        >
          <AreaChart 
            data={areaChartData}
            categories={["visitas", "usuarios", "conversoes"]}
            index="name"
            colors={["#3b82f6", "#10b981", "#f59e0b"]}
            valueFormatter={(value) => value.toLocaleString()}
            className="aspect-[4/3]"
          />
        </DashboardCard>
        
        <DashboardCard 
          title="Origens de Tráfego" 
          description="Sessões e conversões por fonte"
        >
          <BarChart 
            data={barChartData}
            categories={["sessoes", "conversoes"]}
            index="fonte"
            colors={["#3b82f6", "#10b981"]}
            valueFormatter={(value) => value.toLocaleString()}
            className="aspect-[4/3]"
          />
        </DashboardCard>
      </div>
      
      {/* Seções de abas */}
      <Tabs defaultValue="pages" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="pages">Páginas</TabsTrigger>
          <TabsTrigger value="keywords">Palavras-chave</TabsTrigger>
          <TabsTrigger value="backlinks">Backlinks</TabsTrigger>
        </TabsList>
        
        <TabsContent value="pages">
          <DashboardCard 
            title="Páginas Mais Acessadas" 
            description="Desempenho das principais páginas do site"
          >
            <DataTable 
              columns={pagesColumns}
              data={pagesData}
            />
          </DashboardCard>
        </TabsContent>
        
        <TabsContent value="keywords">
          <DashboardCard 
            title="Palavras-chave Principais" 
            description="Ranking e desempenho das palavras-chave orgânicas"
          >
            <DataTable 
              columns={keywordColumns}
              data={keywordData}
            />
          </DashboardCard>
        </TabsContent>
        
        <TabsContent value="backlinks">
          <DashboardCard 
            title="Análise de Backlinks" 
            description="Links externos apontando para seu site"
          >
            <DataTable 
              columns={backlinkColumns}
              data={backlinkData}
            />
          </DashboardCard>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TrafegoOrganicoDashboard;
