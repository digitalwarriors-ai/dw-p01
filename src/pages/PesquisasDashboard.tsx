
import { useState } from "react";
import { BarChart } from "@/components/charts/BarChart";
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
  Search, 
  Users, 
  Clock, 
  CheckCircle,
  ArrowUpDown
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const PesquisasDashboard = () => {
  const [period, setPeriod] = useState("7d");
  
  // Dados simulados para métricas principais
  const surveysCount = 12;
  const responseRate = 42.6;
  const averageTime = "3:47";
  const completionRate = 86.3;
  
  // Dados simulados para o gráfico de barras
  const barChartData = [
    { pesquisa: "Satisfação Curso", respostas: 452, concluidas: 412 },
    { pesquisa: "Feedback Plataforma", respostas: 387, concluidas: 325 },
    { pesquisa: "Pré-lançamento", respostas: 583, concluidas: 510 },
    { pesquisa: "Avaliação Suporte", respostas: 274, concluidas: 226 },
    { pesquisa: "Pós-compra", respostas: 421, concluidas: 375 },
  ];
  
  // Dados simulados para o gráfico de pizza
  const pieChartData = [
    { name: "Muito satisfeito", value: 48.3 },
    { name: "Satisfeito", value: 32.7 },
    { name: "Neutro", value: 12.5 },
    { name: "Insatisfeito", value: 4.8 },
    { name: "Muito insatisfeito", value: 1.7 },
  ];
  
  // Dados simulados para a tabela de pesquisas
  const surveyData = [
    { 
      nome: "Satisfação com o Curso", 
      enviados: 850, 
      respostas: 452, 
      taxa_resposta: 53.2, 
      tempo_medio: "3:21",
      status: "ativo" 
    },
    { 
      nome: "Feedback da Plataforma", 
      enviados: 1250, 
      respostas: 387, 
      taxa_resposta: 31.0, 
      tempo_medio: "4:12",
      status: "ativo" 
    },
    { 
      nome: "Pesquisa Pré-lançamento", 
      enviados: 1500, 
      respostas: 583, 
      taxa_resposta: 38.9, 
      tempo_medio: "5:03",
      status: "ativo" 
    },
    { 
      nome: "Avaliação de Suporte", 
      enviados: 620, 
      respostas: 274, 
      taxa_resposta: 44.2, 
      tempo_medio: "2:45",
      status: "ativo" 
    },
    { 
      nome: "Pesquisa Pós-compra", 
      enviados: 750, 
      respostas: 421, 
      taxa_resposta: 56.1, 
      tempo_medio: "3:35",
      status: "ativo" 
    },
    { 
      nome: "NPS Trimestral", 
      enviados: 1800, 
      respostas: 734, 
      taxa_resposta: 40.8, 
      tempo_medio: "2:18",
      status: "concluído" 
    },
  ];
  
  // Colunas para a tabela de pesquisas
  const surveyColumns = [
    { header: "Pesquisa", accessorKey: "nome" },
    { header: "Enviados", accessorKey: "enviados" },
    { header: "Respostas", accessorKey: "respostas" },
    { 
      header: "Taxa de Resposta", 
      accessorKey: "taxa_resposta",
      cell: ({ row }: { row: any }) => `${row.taxa_resposta}%`
    },
    { 
      header: "Tempo Médio", 
      accessorKey: "tempo_medio" 
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

  // Dados simulados para perguntas
  const questionData = [
    { 
      pergunta: "Qual é o seu nível de satisfação com o curso?", 
      respostas: 452, 
      tipo: "Escala (1-5)",
      indice_satisfacao: 87
    },
    { 
      pergunta: "O material didático atendeu suas expectativas?", 
      respostas: 448, 
      tipo: "Escala (1-5)",
      indice_satisfacao: 82
    },
    { 
      pergunta: "Quão provável é você recomendar nosso curso?", 
      respostas: 445, 
      tipo: "NPS (0-10)",
      indice_satisfacao: 78
    },
    { 
      pergunta: "A plataforma foi fácil de usar?", 
      respostas: 437, 
      tipo: "Escala (1-5)",
      indice_satisfacao: 73
    },
    { 
      pergunta: "O instrutor demonstrou domínio do conteúdo?", 
      respostas: 442, 
      tipo: "Escala (1-5)",
      indice_satisfacao: 92
    },
  ];
  
  const questionColumns = [
    { header: "Pergunta", accessorKey: "pergunta" },
    { header: "Respostas", accessorKey: "respostas" },
    { header: "Tipo", accessorKey: "tipo" },
    { 
      header: "Índice Satisfação", 
      accessorKey: "indice_satisfacao",
      cell: ({ row }: { row: any }) => (
        <div className="flex items-center gap-2">
          <Progress value={row.indice_satisfacao} className="h-2 w-24" />
          <span>{row.indice_satisfacao}%</span>
        </div>
      )
    }
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard de Pesquisas</h1>
          <p className="text-muted-foreground">
            Monitore o desempenho e resultados de suas pesquisas e feedback
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
          title="Total de Pesquisas" 
          value={surveysCount}
          trend={1}
          icon={<Search className="h-4 w-4" />}
        />
        <StatCard 
          title="Taxa de Resposta" 
          value={`${responseRate}%`}
          trend={3.2}
          icon={<Users className="h-4 w-4" />}
        />
        <StatCard 
          title="Tempo Médio" 
          value={averageTime}
          trend={-0.5}
          icon={<Clock className="h-4 w-4" />}
        />
        <StatCard 
          title="Taxa de Conclusão" 
          value={`${completionRate}%`}
          trend={1.7}
          icon={<CheckCircle className="h-4 w-4" />}
        />
      </div>
      
      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <DashboardCard 
          title="Respostas por Pesquisa" 
          description="Total de respostas e conclusões"
          className="lg:col-span-2"
        >
          <BarChart 
            data={barChartData}
            categories={["respostas", "concluidas"]}
            index="pesquisa"
            colors={["#3b82f6", "#10b981"]}
            valueFormatter={(value) => value.toLocaleString()}
            className="aspect-[4/3]"
          />
        </DashboardCard>
        
        <DashboardCard 
          title="Níveis de Satisfação" 
          description="Distribuição das avaliações de satisfação"
        >
          <PieChart 
            data={pieChartData}
            className="aspect-[4/3]"
            colors={["#22c55e", "#84cc16", "#facc15", "#f97316", "#ef4444"]}
          />
        </DashboardCard>
      </div>
      
      {/* Seções de abas */}
      <Tabs defaultValue="surveys" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="surveys">Pesquisas</TabsTrigger>
          <TabsTrigger value="questions">Perguntas</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>
        
        <TabsContent value="surveys">
          <DashboardCard 
            title="Pesquisas Ativas e Recentes" 
            description="Lista de pesquisas e estatísticas de resposta"
          >
            <DataTable 
              columns={surveyColumns}
              data={surveyData}
            />
          </DashboardCard>
        </TabsContent>
        
        <TabsContent value="questions">
          <DashboardCard 
            title="Análise por Pergunta" 
            description="Desempenho de perguntas individuais - Pesquisa de Satisfação com o Curso"
          >
            <DataTable 
              columns={questionColumns}
              data={questionData}
            />
          </DashboardCard>
        </TabsContent>
        
        <TabsContent value="insights">
          <DashboardCard 
            title="Insights de Respostas" 
            description="Análise das respostas abertas e padrões identificados"
          >
            <div className="space-y-6 py-2">
              <div className="space-y-2">
                <h3 className="font-medium">Principais pontos positivos mencionados:</h3>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Qualidade do material didático (mencionado em 78% das respostas)</li>
                  <li>Conhecimento do instrutor (82% das respostas)</li>
                  <li>Facilidade de uso da plataforma (65% das respostas)</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium">Principais pontos de melhoria:</h3>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Mais exercícios práticos (45% das respostas)</li>
                  <li>Aumento da carga horária (32% das respostas)</li>
                  <li>Melhorias no sistema de dúvidas (28% das respostas)</li>
                </ul>
              </div>
              
              <div className="text-muted-foreground italic text-sm">
                * Análise baseada em processamento de linguagem natural das respostas abertas
              </div>
            </div>
          </DashboardCard>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PesquisasDashboard;
