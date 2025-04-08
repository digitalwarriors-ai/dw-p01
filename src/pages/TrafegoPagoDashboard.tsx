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
  DollarSign, 
  TrendingUp, 
  MousePointer, 
  BarChart3,
  ArrowDownUp
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const TrafegoPagoDashboard = () => {
  const [period, setPeriod] = useState("7d");
  
  // Dados simulados para métricas principais
  const totalSpend = 12580.42;
  const totalClicks = 35842;
  const averageCPC = 0.35;
  const conversionRate = 3.68;
  
  // Dados simulados para o gráfico de área
  const areaChartData = [
    { name: "Seg", gasto: 1658.32, cliques: 4850, conversoes: 178 },
    { name: "Ter", gasto: 1892.15, cliques: 5420, conversoes: 205 },
    { name: "Qua", gasto: 1748.60, cliques: 5120, conversoes: 190 },
    { name: "Qui", gasto: 1825.43, cliques: 5280, conversoes: 198 },
    { name: "Sex", gasto: 2105.27, cliques: 5980, conversoes: 224 },
    { name: "Sáb", gasto: 1785.32, cliques: 5100, conversoes: 186 },
    { name: "Dom", gasto: 1565.33, cliques: 4092, conversoes: 148 },
  ];
  
  // Dados simulados para o gráfico de barras
  const barChartData = [
    { plataforma: "Google Ads", gasto: 6285.24, conversoes: 682 },
    { plataforma: "Meta Ads", gasto: 3845.12, conversoes: 425 },
    { plataforma: "LinkedIn Ads", gasto: 1452.64, conversoes: 98 },
    { plataforma: "TikTok Ads", gasto: 997.42, conversoes: 124 },
  ];
  
  // Dados simulados para a tabela de campanhas
  const campaignData = [
    { 
      nome: "Lançamento Curso Principal", 
      plataforma: "Google Ads", 
      gasto: 3850.32, 
      impressoes: 285000, 
      cliques: 12850, 
      ctr: 4.51, 
      cpc: 0.30,
      conversoes: 485,
      cpa: 7.94,
      status: "ativo" 
    },
    { 
      nome: "Remarketing - Carrinho", 
      plataforma: "Meta Ads", 
      gasto: 1250.45, 
      impressoes: 175000, 
      cliques: 6250, 
      ctr: 3.57, 
      cpc: 0.20,
      conversoes: 312,
      cpa: 4.01,
      status: "ativo" 
    },
    { 
      nome: "Rede de Display", 
      plataforma: "Google Ads", 
      gasto: 2435.18, 
      impressoes: 450000, 
      cliques: 9850, 
      ctr: 2.19, 
      cpc: 0.25,
      conversoes: 197,
      cpa: 12.36,
      status: "ativo" 
    },
    { 
      nome: "Profissionais - B2B", 
      plataforma: "LinkedIn Ads", 
      gasto: 1452.64, 
      impressoes: 85000, 
      cliques: 2850, 
      ctr: 3.35, 
      cpc: 0.51,
      conversoes: 98,
      cpa: 14.82,
      status: "ativo" 
    },
    { 
      nome: "Público Jovem", 
      plataforma: "TikTok Ads", 
      gasto: 997.42, 
      impressoes: 210000, 
      cliques: 4042, 
      ctr: 1.92, 
      cpc: 0.25,
      conversoes: 124,
      cpa: 8.04,
      status: "ativo" 
    },
    { 
      nome: "Promoção Relâmpago", 
      plataforma: "Meta Ads", 
      gasto: 2594.67, 
      impressoes: 320000, 
      cliques: 9350, 
      ctr: 2.92, 
      cpc: 0.28,
      conversoes: 287,
      cpa: 9.04,
      status: "concluído" 
    },
  ];
  
  // Colunas para a tabela de campanhas
  const campaignColumns = [
    { header: "Campanha", accessorKey: "nome" },
    { header: "Plataforma", accessorKey: "plataforma" },
    { 
      header: "Gasto", 
      accessorKey: "gasto",
      cell: ({ row }: { row: any }) => `R$ ${row.gasto.toFixed(2)}`
    },
    { 
      header: "Impressões", 
      accessorKey: "impressoes",
      cell: ({ row }: { row: any }) => row.impressoes.toLocaleString()
    },
    { 
      header: "Cliques", 
      accessorKey: "cliques",
      cell: ({ row }: { row: any }) => row.cliques.toLocaleString()
    },
    { 
      header: "CTR", 
      accessorKey: "ctr",
      cell: ({ row }: { row: any }) => `${row.ctr}%`
    },
    { 
      header: "CPC", 
      accessorKey: "cpc",
      cell: ({ row }: { row: any }) => `R$ ${row.cpc.toFixed(2)}`
    },
    { 
      header: "Conv.", 
      accessorKey: "conversoes",
      cell: ({ row }: { row: any }) => row.conversoes
    },
    { 
      header: "CPA", 
      accessorKey: "cpa",
      cell: ({ row }: { row: any }) => `R$ ${row.cpa.toFixed(2)}`
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

  // Dados simulados para keywords
  const keywordData = [
    { 
      keyword: "curso online marketing", 
      cliques: 4250, 
      cpc: 0.42,
      conversoes: 157,
      taxa_conversao: 3.69
    },
    { 
      keyword: "aprender marketing digital", 
      cliques: 3850, 
      cpc: 0.38,
      conversoes: 143,
      taxa_conversao: 3.71
    },
    { 
      keyword: "curso completo marketing", 
      cliques: 2950, 
      cpc: 0.45,
      conversoes: 112,
      taxa_conversao: 3.80
    },
    { 
      keyword: "certificado marketing digital", 
      cliques: 2480, 
      cpc: 0.52,
      conversoes: 87,
      taxa_conversao: 3.51
    },
    { 
      keyword: "aulas marketing online", 
      cliques: 2250, 
      cpc: 0.33,
      conversoes: 78,
      taxa_conversao: 3.47
    },
  ];
  
  const keywordColumns = [
    { header: "Palavra-chave", accessorKey: "keyword" },
    { 
      header: "Cliques", 
      accessorKey: "cliques",
      cell: ({ row }: { row: any }) => row.cliques.toLocaleString()
    },
    { 
      header: "CPC Médio", 
      accessorKey: "cpc",
      cell: ({ row }: { row: any }) => `R$ ${row.cpc.toFixed(2)}`
    },
    { header: "Conversões", accessorKey: "conversoes" },
    { 
      header: "Taxa Conv.", 
      accessorKey: "taxa_conversao",
      cell: ({ row }: { row: any }) => `${row.taxa_conversao.toFixed(2)}%`
    },
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard de Tráfego Pago</h1>
          <p className="text-muted-foreground">
            Monitore o desempenho de suas campanhas de marketing pago
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
          title="Investimento Total" 
          value={`R$ ${totalSpend.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
          trend={5.2}
          icon={<DollarSign className="h-4 w-4" />}
        />
        <StatCard 
          title="Cliques Totais" 
          value={totalClicks.toLocaleString()}
          trend={3.8}
          icon={<MousePointer className="h-4 w-4" />}
        />
        <StatCard 
          title="CPC Médio" 
          value={`R$ ${averageCPC.toFixed(2)}`}
          trend={-0.5}
          icon={<ArrowDownUp className="h-4 w-4" />}
        />
        <StatCard 
          title="Taxa de Conversão" 
          value={`${conversionRate}%`}
          trend={0.8}
          icon={<TrendingUp className="h-4 w-4" />}
        />
      </div>
      
      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <DashboardCard 
          title="Métricas por Dia" 
          description="Gastos, cliques e conversões ao longo do tempo"
          className="lg:col-span-2"
        >
          <AreaChart 
            title="Performance de Investimento em Ads"
            data={areaChartData}
            categories={["gasto", "cliques", "conversoes"]}
            index="name"
            colors={["#ef4444", "#3b82f6", "#10b981"]}
            valueFormatter={(value, category) => {
              if (category === "gasto") return `R$ ${value.toFixed(2)}`;
              return value.toLocaleString();
            }}
            className="aspect-[4/3]"
          />
        </DashboardCard>
        
        <DashboardCard 
          title="Desempenho por Plataforma" 
          description="Gastos e conversões por plataforma de anúncio"
        >
          <BarChart 
            title="Conversões por Plataforma de Ads"
            data={barChartData}
            categories={["gasto", "conversoes"]}
            index="plataforma"
            colors={["#f97316", "#10b981"]}
            valueFormatter={(value, category) => {
              if (category === "gasto") return `R$ ${value.toFixed(2)}`;
              return value.toLocaleString();
            }}
            className="aspect-[4/3]"
          />
        </DashboardCard>
      </div>
      
      {/* Seções de abas */}
      <Tabs defaultValue="campaigns" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="campaigns">Campanhas</TabsTrigger>
          <TabsTrigger value="keywords">Palavras-chave</TabsTrigger>
          <TabsTrigger value="roi">Análise de ROI</TabsTrigger>
        </TabsList>
        
        <TabsContent value="campaigns">
          <DashboardCard 
            title="Campanhas Ativas" 
            description="Desempenho detalhado das campanhas de tráfego pago"
          >
            <DataTable 
              columns={campaignColumns}
              data={campaignData}
            />
          </DashboardCard>
        </TabsContent>
        
        <TabsContent value="keywords">
          <DashboardCard 
            title="Principais Palavras-chave" 
            description="Desempenho das palavras-chave mais relevantes"
          >
            <DataTable 
              columns={keywordColumns}
              data={keywordData}
            />
          </DashboardCard>
        </TabsContent>
        
        <TabsContent value="roi">
          <DashboardCard 
            title="Análise de ROI" 
            description="Retorno sobre investimento por campanha e plataforma"
          >
            <div className="space-y-6 py-2">
              <div className="space-y-4">
                <h3 className="font-medium">ROI por Plataforma</h3>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Google Ads</span>
                    <span className="font-medium">275%</span>
                  </div>
                  <Progress value={275} max={500} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Meta Ads</span>
                      <TagBadge text="Melhor ROI" variant="success" />
                    </div>
                    <span className="font-medium">320%</span>
                  </div>
                  <Progress value={320} max={500} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">LinkedIn Ads</span>
                    <span className="font-medium">185%</span>
                  </div>
                  <Progress value={185} max={500} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">TikTok Ads</span>
                    <span className="font-medium">240%</span>
                  </div>
                  <Progress value={240} max={500} className="h-2" />
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <h3 className="font-medium">ROI Geral das Campanhas</h3>
                <div className="flex items-center gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">ROI Médio</span>
                      <span className="font-medium">282%</span>
                    </div>
                    <Progress value={282} max={500} className="h-2" />
                  </div>
                  <div className="flex items-center gap-2 bg-muted p-2 rounded text-sm">
                    <BarChart3 className="h-4 w-4 text-primary" />
                    <div className="flex flex-col">
                      <span>Investimento: R$ 12.580,42</span>
                      <span>Retorno: R$ 48.057,20</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-muted-foreground text-sm mt-4">
                * Cálculo baseado no valor de cliente e taxa de conversão por campanha
              </div>
            </div>
          </DashboardCard>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TrafegoPagoDashboard;
