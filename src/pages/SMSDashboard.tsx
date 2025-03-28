
import { useState } from "react";
import { AreaChart } from "@/components/charts/AreaChart";
import { PieChart } from "@/components/charts/PieChart";
import { StatCard } from "@/components/charts/StatCard";
import { DashboardCard } from "@/components/charts/DashboardCard";
import { DataTable } from "@/components/charts/DataTable";
import { TagBadge } from "@/components/charts/TagBadge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ListFilter, Download, Send, CheckCheck, AlertTriangle, Zap } from "lucide-react";

const SMSDashboard = () => {
  const [period, setPeriod] = useState("7d");
  
  // Dados simulados para métricas principais
  const messagesSent = 28450;
  const deliveryRate = 97.8;
  const clickRate = 15.2;
  const failureRate = 2.2;
  
  // Dados simulados para o gráfico de área
  const areaChartData = [
    { name: "Seg", enviados: 3850, entregues: 3780, cliques: 592 },
    { name: "Ter", enviados: 4100, entregues: 4010, cliques: 625 },
    { name: "Qua", enviados: 3920, entregues: 3830, cliques: 590 },
    { name: "Qui", enviados: 4200, entregues: 4100, cliques: 640 },
    { name: "Sex", enviados: 4400, entregues: 4290, cliques: 670 },
    { name: "Sáb", enviados: 3950, entregues: 3860, cliques: 580 },
    { name: "Dom", enviados: 3700, entregues: 3615, cliques: 540 },
  ];
  
  // Dados simulados para o gráfico de pizza
  const pieChartData = [
    { name: "Entregues", value: 97.8 },
    { name: "Falhas", value: 2.2 },
  ];
  
  // Dados simulados para a tabela de campanhas
  const campaignData = [
    { 
      nome: "Lançamento Produto X", 
      enviados: 8200, 
      taxa_entrega: 98.5, 
      taxa_clique: 17.3, 
      conversao: 5.3,
      status: "ativo" 
    },
    { 
      nome: "Promoção Final de Semana", 
      enviados: 5850, 
      taxa_entrega: 97.2, 
      taxa_clique: 19.8, 
      conversao: 6.5,
      status: "ativo" 
    },
    { 
      nome: "Recuperação Carrinho", 
      enviados: 3100, 
      taxa_entrega: 98.1, 
      taxa_clique: 22.3, 
      conversao: 8.2,
      status: "ativo" 
    },
    { 
      nome: "Webinar Introdução", 
      enviados: 6300, 
      taxa_entrega: 97.7, 
      taxa_clique: 16.4, 
      conversao: 4.9,
      status: "concluído" 
    },
    { 
      nome: "Aniversariantes do Mês", 
      enviados: 2420, 
      taxa_entrega: 98.3, 
      taxa_clique: 24.7, 
      conversao: 7.8,
      status: "concluído" 
    },
  ];
  
  // Colunas para a tabela de campanhas
  const campaignColumns = [
    { header: "Campanha", accessorKey: "nome" },
    { header: "Enviados", accessorKey: "enviados" },
    { 
      header: "Taxa de Entrega", 
      accessorKey: "taxa_entrega",
      cell: ({ row }: { row: any }) => `${row.taxa_entrega}%`
    },
    { 
      header: "Taxa de Clique", 
      accessorKey: "taxa_clique",
      cell: ({ row }: { row: any }) => `${row.taxa_clique}%`
    },
    { 
      header: "Conversão", 
      accessorKey: "conversao",
      cell: ({ row }: { row: any }) => `${row.conversao}%` 
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

  // Dados simulados para falhas
  const failureData = [
    { 
      tipo: "Número inválido", 
      quantidade: 245, 
      porcentagem: 39.5
    },
    { 
      tipo: "Caixa postal cheia", 
      quantidade: 187, 
      porcentagem: 30.2
    },
    { 
      tipo: "Tempo limite excedido", 
      quantidade: 112, 
      porcentagem: 18.1
    },
    { 
      tipo: "Bloqueado por operadora", 
      quantidade: 76, 
      porcentagem: 12.2
    },
  ];
  
  const failureColumns = [
    { header: "Tipo de Falha", accessorKey: "tipo" },
    { header: "Quantidade", accessorKey: "quantidade" },
    { 
      header: "Porcentagem", 
      accessorKey: "porcentagem",
      cell: ({ row }: { row: any }) => `${row.porcentagem}%`
    }
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard SMS</h1>
          <p className="text-muted-foreground">
            Monitore o desempenho de suas campanhas de SMS marketing
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
          title="SMS Enviados" 
          value={messagesSent.toLocaleString()}
          trend={3.7}
          icon={<Send className="h-4 w-4" />}
        />
        <StatCard 
          title="Taxa de Entrega" 
          value={`${deliveryRate}%`}
          trend={0.2}
          icon={<CheckCheck className="h-4 w-4" />}
        />
        <StatCard 
          title="Taxa de Clique" 
          value={`${clickRate}%`}
          trend={1.8}
          icon={<Zap className="h-4 w-4" />}
        />
        <StatCard 
          title="Taxa de Falha" 
          value={`${failureRate}%`}
          trend={-0.3}
          icon={<AlertTriangle className="h-4 w-4" />}
        />
      </div>
      
      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <DashboardCard 
          title="Métricas de SMS" 
          description="Enviados, entregues e cliques por dia"
          className="lg:col-span-2"
        >
          <AreaChart 
            data={areaChartData}
            categories={["enviados", "entregues", "cliques"]}
            index="name"
            colors={["#10b981", "#3b82f6", "#f59e0b"]}
            valueFormatter={(value) => value.toLocaleString()}
            className="aspect-[4/3]"
          />
        </DashboardCard>
        
        <DashboardCard 
          title="Taxa de Entrega" 
          description="Porcentagem de SMS entregues com sucesso"
        >
          <PieChart 
            data={pieChartData}
            className="aspect-[4/3]"
            colors={["#3b82f6", "#ef4444"]}
          />
        </DashboardCard>
      </div>
      
      {/* Seções de abas */}
      <Tabs defaultValue="campaigns" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="campaigns">Campanhas</TabsTrigger>
          <TabsTrigger value="failures">Falhas</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>
        
        <TabsContent value="campaigns">
          <DashboardCard 
            title="Campanhas de SMS" 
            description="Desempenho das campanhas ativas e recentes"
          >
            <DataTable 
              columns={campaignColumns}
              data={campaignData}
            />
          </DashboardCard>
        </TabsContent>
        
        <TabsContent value="failures">
          <DashboardCard 
            title="Análise de Falhas" 
            description="Principais motivos de falha na entrega"
          >
            <DataTable 
              columns={failureColumns}
              data={failureData}
            />
          </DashboardCard>
        </TabsContent>
        
        <TabsContent value="templates">
          <DashboardCard 
            title="Templates de SMS" 
            description="Modelos de mensagem e desempenho"
          >
            <div className="flex justify-center items-center p-6 text-center text-muted-foreground">
              Os dados de desempenho por template estão sendo processados
            </div>
          </DashboardCard>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SMSDashboard;
