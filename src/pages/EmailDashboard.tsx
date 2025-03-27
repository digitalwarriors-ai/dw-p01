
import { useState } from "react";
import { AreaChart } from "@/components/charts/AreaChart";
import { BarChart } from "@/components/charts/BarChart";
import { PieChart } from "@/components/charts/PieChart";
import { StatCard } from "@/components/charts/StatCard";
import { Mail, TrendingUp, TrendingDown, Clock, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

// Mock data
const emailData = [
  { date: '01/05', enviados: 1200, abertos: 720, cliques: 216, conversoes: 43 },
  { date: '02/05', enviados: 1500, abertos: 975, cliques: 244, conversoes: 62 },
  { date: '03/05', enviados: 1350, abertos: 877, cliques: 236, conversoes: 59 },
  { date: '04/05', enviados: 1400, abertos: 910, cliques: 228, conversoes: 57 },
  { date: '05/05', enviados: 1600, abertos: 1024, cliques: 307, conversoes: 77 },
  { date: '06/05', enviados: 1800, abertos: 1170, cliques: 351, conversoes: 88 },
  { date: '07/05', enviados: 1250, abertos: 813, cliques: 203, conversoes: 51 },
];

const emailTypeData = [
  { name: 'Newsletters', value: 35 },
  { name: 'Promoções', value: 25 },
  { name: 'Eventos', value: 15 },
  { name: 'Produtos', value: 15 },
  { name: 'Outros', value: 10 },
];

const bounceData = [
  { name: 'Hard Bounce', value: 30 },
  { name: 'Soft Bounce', value: 45 },
  { name: 'Spam Reports', value: 15 },
  { name: 'Invalid Email', value: 10 },
];

export default function EmailDashboard() {
  const [period, setPeriod] = useState("week");
  const [campaign, setCampaign] = useState("all");

  const formatNumber = (value: number) => {
    return value.toLocaleString('pt-BR');
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(2)}%`;
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Mail className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">Email Marketing</h1>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex items-center gap-2">
            <Select value={period} onValueChange={setPeriod}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Período" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Período</SelectLabel>
                  <SelectItem value="today">Hoje</SelectItem>
                  <SelectItem value="yesterday">Ontem</SelectItem>
                  <SelectItem value="week">Esta Semana</SelectItem>
                  <SelectItem value="month">Este Mês</SelectItem>
                  <SelectItem value="quarter">Este Trimestre</SelectItem>
                  <SelectItem value="year">Este Ano</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            
            <Select value={campaign} onValueChange={setCampaign}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Campanha" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Campanha</SelectLabel>
                  <SelectItem value="all">Todas Campanhas</SelectItem>
                  <SelectItem value="launch1">Lançamento Primavera</SelectItem>
                  <SelectItem value="launch2">Black Friday</SelectItem>
                  <SelectItem value="launch3">Lançamento Ano Novo</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          
          <Button variant="secondary" size="icon" className="ml-auto">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* KPI Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Taxa de Abertura" 
          value="65%"
          trend={2.5}
          icon={<Mail className="h-4 w-4" />}
        />
        <StatCard 
          title="Taxa de Cliques" 
          value="23%"
          trend={-1.3}
          icon={<TrendingUp className="h-4 w-4" />}
        />
        <StatCard 
          title="Taxa de Conversão" 
          value="3.8%"
          trend={0.7}
          icon={<TrendingDown className="h-4 w-4" />}
        />
        <StatCard 
          title="Tempo Médio de Leitura" 
          value="2:15"
          trend={1.2}
          icon={<Clock className="h-4 w-4" />}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AreaChart 
          title="Desempenho de Email"
          description="Análise diária de métricas de email"
          data={emailData}
          dataKey="abertos"
          xAxisKey="date"
          valueFormatter={formatNumber}
          color="#2563EB"
        />
        
        <BarChart 
          title="Comparativo por Métrica"
          data={emailData}
          dataKey="date"
          categories={["abertos", "cliques", "conversoes"]}
          index="date"
          valueFormatter={formatNumber}
        />
      </div>

      {/* Email Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Desempenho por Horário</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">08:00</span>
                <div className="w-[60%] h-3 bg-muted rounded-full">
                  <div className="h-full bg-dashboard-green rounded-full" style={{ width: "65%" }}></div>
                </div>
                <span className="text-sm font-medium">65%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">12:00</span>
                <div className="w-[60%] h-3 bg-muted rounded-full">
                  <div className="h-full bg-dashboard-blue rounded-full" style={{ width: "48%" }}></div>
                </div>
                <span className="text-sm font-medium">48%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">15:00</span>
                <div className="w-[60%] h-3 bg-muted rounded-full">
                  <div className="h-full bg-dashboard-purple rounded-full" style={{ width: "72%" }}></div>
                </div>
                <span className="text-sm font-medium">72%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">19:00</span>
                <div className="w-[60%] h-3 bg-muted rounded-full">
                  <div className="h-full bg-dashboard-yellow rounded-full" style={{ width: "82%" }}></div>
                </div>
                <span className="text-sm font-medium">82%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">22:00</span>
                <div className="w-[60%] h-3 bg-muted rounded-full">
                  <div className="h-full bg-dashboard-pink rounded-full" style={{ width: "35%" }}></div>
                </div>
                <span className="text-sm font-medium">35%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <PieChart 
          title="Tipos de Email"
          description="Distribuição por tipo de conteúdo"
          data={emailTypeData}
          valueFormatter={(value) => `${value}%`}
        />

        <PieChart 
          title="Análise de Bounces"
          description="Motivos de falha de entrega"
          data={bounceData}
          valueFormatter={(value) => `${value}%`}
          colors={["#EF4444", "#F59E0B", "#8B5CF6", "#EC4899"]}
        />
      </div>

      {/* Email Content Metrics */}
      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Desempenho por Assunto de Email</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2">Assunto</th>
                    <th className="text-center py-3 px-2">Enviados</th>
                    <th className="text-center py-3 px-2">Abertos</th>
                    <th className="text-center py-3 px-2">Taxa</th>
                    <th className="text-center py-3 px-2">Cliques</th>
                    <th className="text-center py-3 px-2">CTR</th>
                    <th className="text-center py-3 px-2">Conversões</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-2">Última chance: oferta especial</td>
                    <td className="text-center py-2 px-2">2.500</td>
                    <td className="text-center py-2 px-2">1.875</td>
                    <td className="text-center py-2 px-2 text-dashboard-green">75%</td>
                    <td className="text-center py-2 px-2">563</td>
                    <td className="text-center py-2 px-2">30%</td>
                    <td className="text-center py-2 px-2">112</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-2">Novidades para você [Nome]</td>
                    <td className="text-center py-2 px-2">3.200</td>
                    <td className="text-center py-2 px-2">2.080</td>
                    <td className="text-center py-2 px-2 text-dashboard-green">65%</td>
                    <td className="text-center py-2 px-2">416</td>
                    <td className="text-center py-2 px-2">20%</td>
                    <td className="text-center py-2 px-2">83</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-2">Lançamento exclusivo</td>
                    <td className="text-center py-2 px-2">1.800</td>
                    <td className="text-center py-2 px-2">1.260</td>
                    <td className="text-center py-2 px-2 text-dashboard-green">70%</td>
                    <td className="text-center py-2 px-2">378</td>
                    <td className="text-center py-2 px-2">30%</td>
                    <td className="text-center py-2 px-2">76</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-2">Não perca esta oportunidade</td>
                    <td className="text-center py-2 px-2">2.100</td>
                    <td className="text-center py-2 px-2">1.155</td>
                    <td className="text-center py-2 px-2 text-dashboard-yellow">55%</td>
                    <td className="text-center py-2 px-2">231</td>
                    <td className="text-center py-2 px-2">20%</td>
                    <td className="text-center py-2 px-2">46</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-2">Desconto especial só hoje</td>
                    <td className="text-center py-2 px-2">1.600</td>
                    <td className="text-center py-2 px-2">1.280</td>
                    <td className="text-center py-2 px-2 text-dashboard-green">80%</td>
                    <td className="text-center py-2 px-2">384</td>
                    <td className="text-center py-2 px-2">30%</td>
                    <td className="text-center py-2 px-2">77</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
