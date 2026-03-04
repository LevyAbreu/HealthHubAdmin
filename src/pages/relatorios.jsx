import { FileText, Download, TrendingUp, Users, Calendar, ArrowUpRight, BarChart3, PieChart } from 'lucide-react';
import Btn from '../components/btn';

export default function Relatorios() {
  return (
    <div className="flex flex-col h-full bg-background p-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-10">
        <div className="lg:col-span-1">
           <h2 className="text-2xl font-black text-text-muted/90 tracking-tight mb-2">Performance</h2>
           <p className="text-text-muted/40 text-xs font-bold uppercase tracking-widest italic">Visão Geral Mensal</p>
        </div>
        
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Pacientes Ativos" value="128" icon={<Users size={18} />} trend="+12%" />
          <StatCard title="Consultas Realizadas" value="45" icon={<Calendar size={18} />} trend="+5%" />
          <StatCard title="Taxa de Evolução" value="92%" icon={<TrendingUp size={18} />} trend="+2%" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card border border-accent/20 rounded-[3rem] p-10 shadow-xl shadow-black/5 relative overflow-hidden">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-text-muted/90 flex items-center gap-3">
                <FileText className="text-primary" size={24} />
                Relatórios Gerados
              </h3>
              <Btn label="Exportar Tudo" icon={Download} variant="outline" className="!py-2 !text-xs" />
            </div>

            <div className="space-y-3">
              <ReportItem title="Análise Mensal de Emagrecimento" date="01 Mar 2026" size="2.4 MB" type="PDF" />
              <ReportItem title="Relatório de Performance - Mariana Souza" date="28 Fev 2026" size="1.1 MB" type="XLS" />
              <ReportItem title="Estatísticas de Consultas Trimestrais" date="15 Fev 2026" size="4.8 MB" type="PDF" />
              <ReportItem title="Mapeamento de Metas Globais" date="10 Fev 2026" size="3.2 MB" type="PDF" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <div className="bg-primary p-8 rounded-[2.5rem] text-white shadow-lg shadow-primary/20 relative overflow-hidden group">
            <BarChart3 className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10 group-hover:scale-110 transition-transform duration-700" />
            <h4 className="font-bold text-lg mb-2">Insight do Mês</h4>
            <p className="text-white/70 text-sm leading-relaxed mb-6">Sua taxa de retenção subiu 8% após a implementação do novo acompanhamento semanal.</p>
            <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:gap-3 transition-all cursor-pointer">
              Ver Análise Detalhada <ArrowUpRight size={14} />
            </button>
          </div>

          <div className="bg-card/50 border border-accent/10 p-8 rounded-[2.5rem] flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-4 border border-accent/10">
              <PieChart className="text-primary/40" size={28} />
            </div>
            <span className="text-xs font-bold text-text-muted/30 uppercase tracking-[0.2em]">Distribuição de Metas</span>
            <p className="text-[10px] text-text-muted/20 mt-2 italic">Novos gráficos em breve</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, trend }) {
  return (
    <div className="bg-card/40 border border-accent/10 p-6 rounded-[2rem] hover:bg-card hover:border-primary/20 transition-all duration-500 group">
      <div className="flex justify-between items-center mb-4">
        <div className="p-2.5 bg-background rounded-xl text-primary/60 group-hover:text-primary transition-colors">
          {icon}
        </div>
        <div className="flex items-center gap-1 text-[10px] font-black text-green-500 bg-green-500/5 px-2 py-1 rounded-lg">
          <ArrowUpRight size={10} />
          {trend}
        </div>
      </div>
      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-text-muted/30 mb-1">{title}</p>
      <span className="text-2xl font-black text-text-muted/80 tracking-tighter">{value}</span>
    </div>
  );
}

function ReportItem({ title, date, size, type }) {
  return (
    <div className="flex items-center justify-between p-4 bg-background/20 border border-accent/5 rounded-2xl hover:bg-background/50 hover:border-primary/20 transition-all group cursor-pointer">
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-[10px] ${type === 'PDF' ? 'bg-red-500/10 text-red-500' : 'bg-green-500/10 text-green-500'}`}>
          {type}
        </div>
        <div>
          <h4 className="font-bold text-text-muted/80 text-sm group-hover:text-primary transition-colors">{title}</h4>
          <span className="text-[10px] text-text-muted/30 font-bold uppercase tracking-widest">{date} • {size}</span>
        </div>
      </div>
      <div className="p-2 text-text-muted/20 group-hover:text-primary transition-all group-hover:rotate-12">
        <Download size={18} />
      </div>
    </div>
  );
}   