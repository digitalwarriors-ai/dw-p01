
import { useState } from "react";
import { StatCard } from "@/components/charts/StatCard";
import { AreaChart } from "@/components/charts/AreaChart";
import { BarChart } from "@/components/charts/BarChart";
import { PieChart } from "@/components/charts/PieChart";
import { 
  BarChart3, 
  Mail, 
  MessageSquare, 
  Phone, 
  Zap, 
  Users,
  Search, 
  TrendingUp,
  Filter,
} from "lucide-react";
import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data for the dashboard
const weeklyData = [
  { name: 'Segunda', vendas: 400, leads: 240, opens: 180, clicks: 100 },
  { name: 'Terça', vendas: 300, leads: 198, opens: 200, clicks: 120 },
  { name: 'Quarta', vendas: 550, leads: 320, opens: 250, clicks: 150 },
  { name: 'Quinta', vendas: 420, leads: 280, opens: 220, clicks: 130 },
  { name: 'Sexta', vendas: 600, leads: 350, opens: 280, clicks: 170 },
  { name: 'Sábado', vendas: 380, leads: 220, opens: 190, clicks: 110 },
  { name: 'Domingo', vendas: 290, leads: 190, opens: 170, clicks: 90 },
];

const channelPerformance = [
  { channel: 'Email', conversoes: 65, falhas: 12 },
  { channel: 'WhatsApp', conversoes: 45, falhas: 8 },
  { channel: 'SMS', conversoes: 30, falhas: 15 },
  { channel: 'Ligações', conversoes: 25, falhas: 5 },
  { channel: 'Tráfego Pago', conversoes: 50, falhas: 10 },
];

const trafficSourceData = [
  { name: 'Google Ads', value: 35 },
  { name: 'Facebook Ads', value: 25 },
  { name: 'Instagram Ads', value: 20 },
  { name: 'Orgânico', value: 15 },
  { name: 'Referências', value: 5 },
];

export default function Dashboard() {
  const [period, setPeriod] = useState("week");
  const [campaign, setCampaign] = useState("all");

  const formatCurrency = (value: number) => {
    return `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
  };

  const formatNumber = (value: number) => {
    return value.toLocaleString('pt-BR');
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(2)}%`;
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">Dashboard de Lançamento Digital</h1>
        
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
          title="Vendas Totais" 
          value={formatCurrency(128500)}
          trend={12.5}
          icon={<TrendingUp className="h-4 w-4" />}
        />
        <StatCard 
          title="Leads Gerados" 
          value={formatNumber(1250)}
          trend={8.3}
          icon={<Users className="h-4 w-4" />}
        />
        <StatCard 
          title="Taxa de Conversão" 
          value={formatPercentage(5.78)}
          trend={-2.1}
          icon={<BarChart3 className="h-4 w-4" />}
        />
        <StatCard 
          title="ROI Médio" 
          value={formatPercentage(324.5)}
          trend={15.8}
          icon={<TrendingUp className="h-4 w-4" />}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AreaChart 
          title="Desempenho Semanal"
          description="Métricas principais de desempenho durante a semana"
          data={weeklyData}
          dataKey="vendas"
          xAxisKey="name"
          valueFormatter={formatNumber}
        />
        
        <BarChart 
          title="Desempenho por Canal"
          description="Conversões e falhas por canal de comunicação"
          data={channelPerformance}
          dataKey="channel"
          categories={["conversoes", "falhas"]}
          index="channel"
          valueFormatter={formatNumber}
        />
      </div>

      {/* Channel Summary */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card className="col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Email Marketing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <div className="text-2xl font-bold">68%</div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Taxa de abertura média</p>
            <div className="h-1 bg-muted mt-2 rounded-full overflow-hidden">
              <div className="h-full bg-dashboard-blue rounded-full" style={{ width: "68%" }} />
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              WhatsApp
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
              <div className="text-2xl font-bold">85%</div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Taxa de entrega</p>
            <div className="h-1 bg-muted mt-2 rounded-full overflow-hidden">
              <div className="h-full bg-dashboard-green rounded-full" style={{ width: "85%" }} />
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              SMS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <Zap className="h-4 w-4 text-muted-foreground" />
              <div className="text-2xl font-bold">72%</div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Taxa de cliques</p>
            <div className="h-1 bg-muted mt-2 rounded-full overflow-hidden">
              <div className="h-full bg-dashboard-yellow rounded-full" style={{ width: "72%" }} />
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Pesquisas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <Search className="h-4 w-4 text-muted-foreground" />
              <div className="text-2xl font-bold">43%</div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Taxa de resposta</p>
            <div className="h-1 bg-muted mt-2 rounded-full overflow-hidden">
              <div className="h-full bg-dashboard-purple rounded-full" style={{ width: "43%" }} />
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Ligações
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <div className="text-2xl font-bold">62%</div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Taxa de sucesso</p>
            <div className="h-1 bg-muted mt-2 rounded-full overflow-hidden">
              <div className="h-full bg-dashboard-pink rounded-full" style={{ width: "62%" }} />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Conversões por Campanha</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <BarChart 
                  title=""
                  data={[
                    { name: 'Campanha 1', vendas: 340, leads: 520 },
                    { name: 'Campanha 2', vendas: 280, leads: 410 },
                    { name: 'Campanha 3', vendas: 420, leads: 610 },
                    { name: 'Campanha 4', vendas: 180, leads: 290 },
                  ]}
                  dataKey="campaigns"
                  categories={["vendas", "leads"]}
                  index="name"
                  valueFormatter={formatNumber}
                  height={250}
                />
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <PieChart 
            title="Origem do Tráfego"
            description="Distribuição de leads por origem"
            data={trafficSourceData}
            valueFormatter={(value) => `${value} leads`}
          />
        </div>
      </div>
    </div>
  );
}
