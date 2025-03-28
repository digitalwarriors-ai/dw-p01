
import { useState } from "react";
import { AreaChart } from "@/components/charts/AreaChart";
import { PieChart } from "@/components/charts/PieChart";
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
  Target, 
  TrendingUp, 
  BarChart3,
  ArrowUpDown,
  DollarSign,
  Users,
  Activity,
  AlertTriangle,
  Lightbulb,
  CheckCircle,
  XCircle
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const AnaliseDashboard = () => {
  const [period, setPeriod] = useState("7d");
  
  // Dados simulados para métricas principais
  const roi = 285;
  const cac = 128.42;
  const ltv = 897.35;
  const aov = 352.68;
  
  // Dados simulados para o gráfico de área (métricas ao longo do tempo)
  const areaChartData = [
    { name: "Jan", receita: 45280, custo: 18520, lucro: 26760 },
    { name: "Fev", receita: 52350, custo: 20150, lucro: 32200 },
    { name: "Mar", receita: 48290, custo: 19850, lucro: 28440 },
    { name: "Abr", receita: 58780, custo: 22450, lucro: 36330 },
    { name: "Mai", receita: 62540, custo: 24120, lucro: 38420 },
    { name: "Jun", receita: 54320, custo: 20980, lucro: 33340 },
    { name: "Jul", receita: 57680, custo: 21650, lucro: 36030 },
  ];
  
  // Dados simulados para o gráfico de barras (canais)
  const barChartData = [
    { canal: "Email", conversao: 3.8, cac: 82.50, roi: 320 },
    { canal: "WhatsApp", conversao: 4.2, cac: 75.30, roi: 345 },
    { canal: "SMS", conversao: 2.5, cac: 68.20, roi: 285 },
    { canal: "Tráfego Pago", conversao: 2.9, cac: 152.40, roi: 210 },
    { canal: "Orgânico", conversao: 1.8, cac: 45.60, roi: 380 },
  ];
  
  // Dados simulados para o gráfico de pizza (distribuição de clientes)
  const pieChartData = [
    { name: "Novos", value: 42.5 },
    { name: "Recorrentes", value: 35.2 },
    { name: "Reativados", value: 22.3 },
  ];
  
  // Dados simulados para a tabela de campanhas
  const campaignData = [
    { 
      campanha: "Lançamento Curso A", 
      canal: "Multi-canal", 
      conversao: 4.2, 
      cac: 125.80, 
      receita: 58450.20, 
      roi: 315,
      status: "success" 
    },
    { 
      campanha: "Reativação Clientes", 
      canal: "Email + SMS", 
      conversao: 3.8, 
      cac: 85.30, 
      receita: 32150.50, 
      roi: 375,
      status: "success" 
    },
    { 
      campanha: "Lead Magnet Ebook", 
      canal: "Tráfego Pago", 
      conversao: 2.5, 
      cac: 145.60, 
      receita: 28750.40, 
      roi: 215,
      status: "warning" 
    },
    { 
      campanha: "Webinar Introdutório", 
      canal: "Email + WhatsApp", 
      conversao: 3.2, 
      cac: 105.40, 
      receita: 42350.80, 
      roi: 295,
      status: "success" 
    },
    { 
      campanha: "Desconto Relâmpago", 
      canal: "WhatsApp", 
      conversao: 5.6, 
      cac: 92.20, 
      receita: 25480.60, 
      roi: 365,
      status: "success" 
    },
  ];
  
  // Colunas para a tabela de campanhas
  const campaignColumns = [
    { header: "Campanha", accessorKey: "campanha" },
    { header: "Canal", accessorKey: "canal" },
    { 
      header: "Conversão", 
      accessorKey: "conversao",
      cell: ({ row }: { row: any }) => `${row.conversao}%`
    },
    { 
      header: "CAC", 
      accessorKey: "cac",
      cell: ({ row }: { row: any }) => `R$ ${row.cac.toFixed(2)}`
    },
    { 
      header: "Receita", 
      accessorKey: "receita",
      cell: ({ row }: { row: any }) => `R$ ${row.receita.toFixed(2)}`
    },
    { 
      header: "ROI", 
      accessorKey: "roi",
      cell: ({ row }: { row: any }) => `${row.roi}%`
    },
    { 
      header: "Status", 
      accessorKey: "status",
      cell: ({ row }: { row: any }) => (
        <TagBadge 
          text={row.status === "success" ? "Acima da meta" : row.status === "warning" ? "Abaixo da meta" : "Crítico"}
          variant={row.status === "success" ? "success" : row.status === "warning" ? "warning" : "danger"}
        />
      )
    },
  ];

  // Dados simulados para a tabela de segmentos
  const segmentData = [
    { 
      segmento: "Clientes Premium", 
      quantidade: 385, 
      ltv: 1850.40, 
      recorrencia: 85.2,
      churn: 5.8,
    },
    { 
      segmento: "Iniciantes", 
      quantidade: 720, 
      ltv: 520.30, 
      recorrencia: 42.5,
      churn: 18.3,
    },
    { 
      segmento: "Intermediários", 
      quantidade: 580, 
      ltv: 950.70, 
      recorrencia: 65.8,
      churn: 9.2,
    },
    { 
      segmento: "Corporativos", 
      quantidade: 180, 
      ltv: 2450.20, 
      recorrencia: 78.5,
      churn: 7.4,
    },
    { 
      segmento: "Educadores", 
      quantidade: 260, 
      ltv: 1150.80, 
      recorrencia: 72.3,
      churn: 8.6,
    },
  ];
  
  const segmentColumns = [
    { header: "Segmento", accessorKey: "segmento" },
    { 
      header: "Quantidade", 
      accessorKey: "quantidade",
      cell: ({ row }: { row: any }) => row.quantidade.toLocaleString()
    },
    { 
      header: "LTV", 
      accessorKey: "ltv",
      cell: ({ row }: { row: any }) => `R$ ${row.ltv.toFixed(2)}`
    },
    { 
      header: "Taxa Recorrência", 
      accessorKey: "recorrencia",
      cell: ({ row }: { row: any }) => `${row.recorrencia}%`
    },
    { 
      header: "Taxa Churn", 
      accessorKey: "churn",
      cell: ({ row }: { row: any }) => `${row.churn}%`
    },
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Análise Avançada</h1>
          <p className="text-muted-foreground">
            Visão integrada e análise de performance de marketing e vendas
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
          title="ROI Geral" 
          value={`${roi}%`}
          trend={5.2}
          icon={<Target className="h-4 w-4" />}
        />
        <StatCard 
          title="CAC Médio" 
          value={`R$ ${cac.toFixed(2)}`}
          trend={-2.5}
          icon={<DollarSign className="h-4 w-4" />}
        />
        <StatCard 
          title="LTV Médio" 
          value={`R$ ${ltv.toFixed(2)}`}
          trend={3.8}
          icon={<Users className="h-4 w-4" />}
        />
        <StatCard 
          title="Valor Médio de Pedido" 
          value={`R$ ${aov.toFixed(2)}`}
          trend={1.2}
          icon={<BarChart3 className="h-4 w-4" />}
        />
      </div>
      
      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <DashboardCard 
          title="Análise Financeira" 
          description="Receita, custo e lucro ao longo do tempo"
          className="lg:col-span-3"
        >
          <AreaChart 
            data={areaChartData}
            categories={["receita", "custo", "lucro"]}
            index="name"
            colors={["#10b981", "#ef4444", "#3b82f6"]}
            valueFormatter={(value) => `R$ ${value.toLocaleString()}`}
            className="aspect-[4/3]"
          />
        </DashboardCard>
        
        <DashboardCard 
          title="Tipos de Clientes" 
          description="Distribuição por origem do cliente"
          className="lg:col-span-2"
        >
          <PieChart 
            data={pieChartData}
            className="aspect-[4/3]"
            colors={["#3b82f6", "#10b981", "#f59e0b"]}
          />
        </DashboardCard>
      </div>
      
      <DashboardCard 
        title="Comparativo de Canais" 
        description="Desempenho por canal de marketing"
      >
        <BarChart 
          data={barChartData}
          categories={["conversao", "cac", "roi"]}
          index="canal"
          colors={["#10b981", "#ef4444", "#3b82f6"]}
          valueFormatter={(value, category) => {
            if (category === "cac") return `R$ ${value.toFixed(2)}`;
            if (category === "roi") return `${value.toFixed(0)}%`;
            return `${value.toFixed(1)}%`;
          }}
          className="aspect-[6/2]"
        />
      </DashboardCard>
      
      {/* Seções de abas */}
      <Tabs defaultValue="campaigns" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="campaigns">Campanhas</TabsTrigger>
          <TabsTrigger value="segments">Segmentos</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>
        
        <TabsContent value="campaigns">
          <DashboardCard 
            title="Análise de Campanhas" 
            description="Desempenho comparativo das campanhas principais"
          >
            <DataTable 
              columns={campaignColumns}
              data={campaignData}
            />
          </DashboardCard>
        </TabsContent>
        
        <TabsContent value="segments">
          <DashboardCard 
            title="Análise de Segmentos" 
            description="Comportamento e valor por segmento de cliente"
          >
            <DataTable 
              columns={segmentColumns}
              data={segmentData}
            />
          </DashboardCard>
        </TabsContent>
        
        <TabsContent value="insights">
          <DashboardCard 
            title="Insights e Recomendações" 
            description="Análises geradas por IA com base nos dados coletados"
          >
            <div className="space-y-6 py-2">
              <div className="rounded-lg border p-4">
                <div className="flex items-start gap-3">
                  <Lightbulb className="mt-1 h-5 w-5 text-yellow-500" />
                  <div>
                    <h3 className="font-medium">Oportunidade de Crescimento Identificada</h3>
                    <p className="text-muted-foreground mt-1">
                      Os dados mostram que clientes do segmento "Intermediários" têm um alto potencial de upgrade para o segmento "Premium". 
                      Recomendamos uma campanha específica de email + WhatsApp para este grupo, destacando os benefícios adicionais 
                      dos produtos premium. Potencial de aumento de 15% no LTV médio.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg border p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="mt-1 h-5 w-5 text-amber-500" />
                  <div>
                    <h3 className="font-medium">Alerta de Desempenho</h3>
                    <p className="text-muted-foreground mt-1">
                      A campanha "Lead Magnet Ebook" está com ROI 32% abaixo da meta. 
                      A análise dos dados indica que o principal problema está no alto custo de aquisição 
                      nos anúncios de Google Ads. Recomendamos ajustar as palavras-chave e 
                      segmentação para reduzir o CAC.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg border p-4">
                <div className="flex items-start gap-3">
                  <Activity className="mt-1 h-5 w-5 text-blue-500" />
                  <div>
                    <h3 className="font-medium">Análise de Tendências</h3>
                    <p className="text-muted-foreground mt-1">
                      Observamos um aumento de 28% nas conversões via WhatsApp nos últimos 30 dias, 
                      enquanto o custo de aquisição permaneceu estável. Esta é uma oportunidade para 
                      aumentar o investimento neste canal, potencialmente realocando parte do orçamento 
                      de canais com menor desempenho.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 pt-4">
                <h3 className="font-medium">Previsões para o Próximo Período</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 rounded-lg border p-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <div>
                      <p className="font-medium">Aumento de receita projetado</p>
                      <p className="text-green-600">+8.2% em relação ao período atual</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 rounded-lg border p-3">
                    <XCircle className="h-5 w-5 text-red-500" />
                    <div>
                      <p className="font-medium">Churn projetado</p>
                      <p className="text-red-600">-1.8% em relação ao período atual</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 rounded-lg border p-3">
                    <TrendingUp className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="font-medium">Conversão média projetada</p>
                      <p className="text-blue-600">+1.2% em relação ao período atual</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 rounded-lg border p-3">
                    <ArrowUpDown className="h-5 w-5 text-purple-500" />
                    <div>
                      <p className="font-medium">ROI médio projetado</p>
                      <p className="text-purple-600">+5.5% em relação ao período atual</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DashboardCard>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnaliseDashboard;
