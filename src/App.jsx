import { Users, CalendarCheck, AlertCircle, CheckCircle2, Clock, Activity, Target, Scale, Zap } from 'lucide-react';
import Sidebar from './components/sidebar';
import Header from './components/header';

const ClinicStatCard = ({ label, value, icon: Icon, colorClass }) => (
  <div className="bg-card border border-accent p-5 rounded-large flex flex-col items-center justify-center hover:shadow-elevation transition-all group relative shadow-sm min-w-[180px]">
    <div className={`p-3 rounded-2xl mb-3 ${colorClass} bg-opacity-10 group-hover:scale-110 transition-transform`}>
      <Icon size={22} />
    </div>
    <p className="text-text-muted text-[11px] font-bold uppercase tracking-widest">{label}</p>
    <h3 className="text-2xl font-black text-primary mt-1">{value}</h3>
  </div>
);

export default function App() {
  return (
    <div className="flex h-screen bg-background text-text-main font-sans antialiased overflow-hidden">
      <Sidebar />

      <main className="flex-1 ml-32 mr-10 flex flex-col h-screen">
        
        <div className="pt-10 pb-6 bg-background z-20">
          <Header />
          <section className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
            <ClinicStatCard label="Pacientes" value="142" icon={Users} colorClass="bg-primary text-000000-900" />
            <ClinicStatCard label="Consultas" value="48" icon={CalendarCheck} colorClass="bg-emerald-500 text-emerald-900" />
            <ClinicStatCard label="Adesão" value="76%" icon={Activity} colorClass="bg-secondary text-brand-blue-900" />
            <ClinicStatCard label="Alertas" value="06" icon={AlertCircle} colorClass="bg-rose-500 text-rose-900" />
            <ClinicStatCard label="Check-ins" value="1.2k" icon={CheckCircle2} colorClass="bg-amber-500 text-amber-900" />
          </section>
        </div>
        <div className="flex-1 flex gap-10 overflow-hidden pb-10">
          
          <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar space-y-10">
            <div className="bg-card border border-accent rounded-large p-10 shadow-elevation">
              <div className="flex justify-between items-center mb-10">
                <div>
                  <h2 className="text-2xl font-black tracking-tight text-primary">Eficiência do protocolo</h2>
                  <p className="text-text-muted text-sm font-medium">Visualização do percentual dos aspectos do emagrecimento.</p>
                </div>
                <div className="bg-background p-3 rounded-2xl text-primary/40">
                  <Target size={24} />
                </div>
              </div>
              <div className="space-y-10">
                <ProtocolRow name="Taxa de emagrecimento" icon={<Scale size={18} />} value="84" color="bg-primary" desc="Média de evolução lipídica." />
                <ProtocolRow name="Taxa de hipertrofia" icon={<Zap size={18} />} value="62" color="bg-primary" desc="Ganho de massa magra." />
                <ProtocolRow name="Média de idade metabólica" icon={<Activity size={18} />} value="91" color="bg-primary" desc="Redução da idade biológica." />
                <ProtocolRow name="Adesão à Dieta" icon={<Activity size={18} />} value="75" color="bg-primary" desc="Consistência nos logs de refeição." />
              </div>
            </div>
            
            <div className="bg-card/50 border border-accent p-8 rounded-large">
              <h3 className="text-xs font-black text-text-muted uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                <Clock size={16} /> Agenda de Hoje
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <AppointmentItem time="14:00" patient="Mariana Souza" type="Retorno" active />
                <AppointmentItem time="15:30" patient="João Pedro" type="Bioimpedância" />
                <AppointmentItem time="16:30" patient="Ana Clara" type="Avaliação" />
                <AppointmentItem time="17:00" patient="Carlos V." type="Retorno" />
              </div>
            </div>
          </div>

          <div className="w-80 flex flex-col h-full">
            <h2 className="text-xl font-black tracking-tight text-primary mb-6">Alertas</h2>
            <div className="flex-1 overflow-y-auto overflow-x-hidden px-2 custom-scrollbar space-y-4">
              <NotificationItem title="Baixa Ingestão Hídrica" desc="Mariana Souza (24h sem registros)" time="10m" type="warning" />
              <NotificationItem title="Meta de Treino" desc="Grupo 'Hipertrofia A' concluiu o ciclo" time="1h" type="success" />
              <NotificationItem title="Falta de Registro" desc="8 pacientes pendentes hoje" time="4h" type="info" />
              <NotificationItem title="Check-in Crítico" desc="Luiz relatou fadiga extrema" time="5h" type="warning" />
              <NotificationItem title="Novo Paciente" desc="Fernanda Lima ativou o App" time="6h" type="info" />
              <NotificationItem title="Recorde de Peso" desc="3 pacientes atingiram a meta" time="8h" type="success" />
              <NotificationItem title="Alerta de Jejum" desc="Paciente Pedro interrompeu log" time="12h" type="warning" />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

function NotificationItem({ title, desc, time, type }) {
  const styles = {
    warning: "border-rose-100 text-rose-600",
    success: "border-emerald-100 text-emerald-600",
    info: "border-secondary/30 text-brand-blue",
  };

  return (
    <div className={`p-5 rounded-medium border ${styles[type]} bg-card shadow-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-md cursor-pointer w-full relative z-10 origin-center`}>
      <div className="flex justify-between items-start mb-1">
        <h4 className="font-bold text-xs text-text-main">{title}</h4>
        <span className="text-[10px] font-bold opacity-40">{time}</span>
      </div>
      <p className="text-[11px] text-text-muted font-medium leading-relaxed">{desc}</p>
    </div>
  );
}

// Subcomponentes com as cores do tema
function ProtocolRow({ name, icon, value, color, desc }) {
  return (
    <div>
      <div className="flex justify-between items-end mb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-background text-primary">{icon}</div>
          <div>
            <h4 className="text-sm font-bold text-text-main">{name}</h4>
            <p className="text-[11px] text-text-muted font-medium">{desc}</p>
          </div>
        </div>
        <span className="text-primary font-black text-xl">{value}%</span>
      </div>
      <div className="w-full bg-background h-3 rounded-full overflow-hidden p-0.5 border border-accent">
        <div className={`${color} h-full rounded-full transition-all duration-1000`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function AppointmentItem({ time, patient, type, active = false }) {
  return (
    <div className={`p-5 rounded-medium border transition-all flex items-center justify-between group ${active ? 'bg-primary border-primary shadow-lg shadow-primary/20' : 'bg-card border-accent hover:border-secondary'}`}>
      <div className="flex items-center gap-4">
        <div className={`text-xs font-black px-3 py-1.5 rounded-xl ${active ? 'bg-white/20 text-white' : 'bg-secondary/30 text-brand-blue'}`}>
          {time}
        </div>
        <div>
          <p className={`text-sm font-bold ${active ? 'text-white' : 'text-text-main'}`}>{patient}</p>
          <p className={`text-[10px] font-bold uppercase tracking-wider ${active ? 'text-white/70' : 'text-text-muted'}`}>{type}</p>
        </div>
      </div>
    </div>
  );
}