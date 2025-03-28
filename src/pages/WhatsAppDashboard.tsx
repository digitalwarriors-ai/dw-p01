
import { useState } from "react";
import { AreaChart } from "@/components/charts/AreaChart";
import { PieChart } from "@/components/charts/PieChart";
import { StatCard } from "@/components/charts/StatCard";
import { DashboardCard } from "@/components/charts/DashboardCard";
import { DataTable } from "@/components/charts/DataTable";
import { TagBadge } from "@/components/charts/TagBadge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Zap, Send, CheckCheck, ListFilter, Download } from "lucide-react";

const WhatsAppDashboard = () => {
  const [period, setPeriod] = useState("7d");
  
  // Dados simulados para métricas principais
  const messagesSent = 14582;
  const deliveryRate = 98.2;
  const responseRate = 27.5;
  const conversionRate = 12.4;
  
  // Dados simulados para o gráfico de área
  const areaChartData = [
    { name: "Seg", mensagens: 1850, respostas: 520, conversao: 120 },
    { name: "Ter", mensagens: 2100, respostas: 580, conversao: 140 },
    { name: "Qua", mensagens: 1920, respostas: 530, conversao: 130 },
    { name: "Qui", mensagens: 2200, respostas: 610, conversao: 150 },
    { name: "Sex", mensagens: 2400, respostas: 670, conversao: 165 },
    { name: "Sáb", mensagens: 1950, respostas: 540, conversao: 135 },
    { name: "Dom", mensagens: 1700, respostas: 480, conversao: 110 },
  ];
  
  // Dados simulados para o gráfico de pizza
  const pieChartData = [
    { name: "Abertas", value: 75.3 },
    { name: "Não abertas", value: 24.7 },
  ];
  
  // Dados simulados para a tabela de campanhas
  const campaignData = [
    { 
      nome: "Lançamento Curso A", 
      mensagens: 5200, 
      taxa_entrega: 99.1, 
      taxa_resposta: 32.5, 
      conversao: 15.3,
      status: "ativo" 
    },
    { 
      nome: "Sequência Nutrição", 
      mensagens: 3850, 
      taxa_entrega: 98.7, 
      taxa_resposta: 25.2, 
      conversao: 11.5,
      status: "ativo" 
    },
    { 
      nome: "Recuperação Leads", 
      mensagens: 2100, 
      taxa_entrega: 97.5, 
      taxa_resposta: 18.3, 
      conversao: 8.2,
      status: "ativo" 
    },
    { 
      nome: "Webinar Julho", 
      mensagens: 3432, 
      taxa_entrega: 98.2, 
      taxa_resposta: 28.7, 
      conversao: 13.9,
      status: "concluído" 
    },
  ];
  
  // Colunas para a tabela de campanhas
  const campaignColumns = [
    { header: "Campanha", accessorKey: "nome" },
    { header: "Mensagens", accessorKey: "mensagens" },
    { 
      header: "Taxa de Entrega", 
      accessorKey: "taxa_entrega",
      cell: ({ row }: { row: any }) => `${row.taxa_entrega}%`
    },
    { 
      header: "Taxa de Resposta", 
      accessorKey: "taxa_resposta",
      cell: ({ row }: { row: any }) => `${row.taxa_resposta}%`
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
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard WhatsApp</h1>
          <p className="text-muted-foreground">
            Monitore o desempenho de suas campanhas e mensagens de WhatsApp
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
          title="Mensagens Enviadas" 
          value={messagesSent.toLocaleString()}
          trend={4.2}
          icon={<Send className="h-4 w-4" />}
        />
        <StatCard 
          title="Taxa de Entrega" 
          value={`${deliveryRate}%`}
          trend={0.3}
          icon={<CheckCheck className="h-4 w-4" />}
        />
        <StatCard 
          title="Taxa de Resposta" 
          value={`${responseRate}%`}
          trend={2.8}
          icon={<MessageSquare className="h-4 w-4" />}
        />
        <StatCard 
          title="Conversão" 
          value={`${conversionRate}%`}
          trend={1.5}
          icon={<Zap className="h-4 w-4" />}
        />
      </div>
      
      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <DashboardCard 
          title="Desempenho WhatsApp" 
          description="Mensagens, respostas e conversões por dia"
          className="lg:col-span-2"
        >
          <AreaChart 
            data={areaChartData}
            categories={["mensagens", "respostas", "conversao"]}
            index="name"
            colors={["#10b981", "#3b82f6", "#f59e0b"]}
            valueFormatter={(value) => value.toLocaleString()}
            className="aspect-[4/3]"
          />
        </DashboardCard>
        
        <DashboardCard 
          title="Taxa de Abertura" 
          description="Porcentagem de mensagens abertas"
        >
          <PieChart 
            data={pieChartData}
            className="aspect-[4/3]"
            colors={["#3b82f6", "#e5e5e5"]}
          />
        </DashboardCard>
      </div>
      
      {/* Seções de abas */}
      <Tabs defaultValue="campaigns" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="campaigns">Campanhas</TabsTrigger>
          <TabsTrigger value="broadcast">Broadcasts</TabsTrigger>
          <TabsTrigger value="messages">Mensagens Personalizadas</TabsTrigger>
        </TabsList>
        
        <TabsContent value="campaigns">
          <DashboardCard 
            title="Campanhas de WhatsApp" 
            description="Desempenho das campanhas ativas e recentes"
          >
            <DataTable 
              columns={campaignColumns}
              data={campaignData}
            />
          </DashboardCard>
        </TabsContent>
        
        <TabsContent value="broadcast">
          <DashboardCard 
            title="Broadcasts" 
            description="Mensagens em massa enviadas"
          >
            <div className="flex justify-center items-center p-6 text-center text-muted-foreground">
              Nenhum broadcast realizado no período selecionado
            </div>
          </DashboardCard>
        </TabsContent>
        
        <TabsContent value="messages">
          <DashboardCard 
            title="Mensagens Personalizadas" 
            description="Mensagens enviadas individualmente"
          >
            <div className="flex justify-center items-center p-6 text-center text-muted-foreground">
              Dados de mensagens personalizadas em processamento
            </div>
          </DashboardCard>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WhatsAppDashboard;
