import { Users, CalendarCheck, AlertCircle, Clock, Activity, Target, Scale, Zap, ArrowUpRight, MoreHorizontal } from 'lucide-react';
import Header from '../components/header';
import { appointmentsData } from '../utils/mockData';
import { useNavigate } from 'react-router-dom';

const ClinicStatCard = ({ label, value, icon: Icon, colorClass, trend }) => (
  <div className="bg-card border border-accent/20 p-6 rounded-[2.5rem] flex flex-col hover:border-primary/40 transition-all group relative shadow-sm min-w-[200px] flex-1">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-2xl ${colorClass} bg-opacity-10 text-current group-hover:scale-110 transition-transform duration-500`}>
        <Icon size={22} />
      </div>
      {trend && (
        <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full">
          <ArrowUpRight size={12} /> {trend}
        </span>
      )}
    </div>
    <p className="text-text-muted/50 text-[11px] font-black uppercase tracking-[0.15em]">{label}</p>
    <h3 className="text-3xl font-black text-text-main mt-1 tracking-tighter">{value}</h3>
  </div>
);

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background p-6 lg:p-10 animate-in fade-in duration-700">
      <Header />

      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-10">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ClinicStatCard label="Pacientes Ativos" value="142" icon={Users} colorClass="text-primary" trend="+12%" />
          <ClinicStatCard label="Consultas Hoje" value="12" icon={CalendarCheck} colorClass="text-emerald-500" trend="85%" />
          <ClinicStatCard label="Pendências" value="03" icon={AlertCircle} colorClass="text-orange-500" />
          <ClinicStatCard label="Taxa de Foco" value="92%" icon={Zap} colorClass="text-purple-500" trend="+4%" />
        </section>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
          <div className="xl:col-span-2 space-y-6">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-primary rounded-full" />
                <h2 className="text-xl font-black text-text-main tracking-tight">Próximos Pacientes</h2>
              </div>
              <button 
                className="text-xs font-bold text-primary hover:underline cursor-pointer"
                onClick={() => navigate('/agenda')}
              >
                Ver agenda completa
              </button>
            </div>

            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar scroll-smooth">
              {appointmentsData.slice(0, 3).map((apt, idx) => (
                <AppointmentItem 
                  key={apt.id}
                  time={apt.time}
                  patient={apt.patientName}
                  type={apt.type}
                  active={idx === 0}
                  avatar={apt.avatar}
                />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 px-2">
              <div className="w-1.5 h-6 bg-secondary rounded-full" />
              <h2 className="text-xl font-black text-text-main tracking-tight">Performance</h2>
            </div>

            <div className="bg-card border border-accent/20 rounded-[3rem] p-8 space-y-8 shadow-sm">
              <PerformanceMetric name="Perda de Peso" value={78} icon={<Scale size={18}/>} color="bg-primary" desc="Meta coletiva" />
              <PerformanceMetric name="Adesão ao Plano" value={92} icon={<Target size={18}/>} color="bg-emerald-500" desc="Pacientes em dia" />
              <PerformanceMetric name="Atividade Física" value={64} icon={<Activity size={18}/>} color="bg-orange-500" desc="Média semanal" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function PerformanceMetric({ name, value, icon, color, desc }) {
  return (
    <div className="space-y-3 group">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-background border border-accent/10 text-primary group-hover:border-primary/30 transition-colors">
            {icon}
          </div>
          <div>
            <h4 className="text-sm font-bold text-text-main leading-none">{name}</h4>
            <p className="text-[10px] text-text-muted/50 font-bold uppercase tracking-wider mt-1">{desc}</p>
          </div>
        </div>
        <span className="text-lg font-black text-text-main tracking-tighter">{value}%</span>
      </div>
      <div className="w-full bg-background h-2 rounded-full overflow-hidden p-0.5 border border-accent/5">
        <div 
          className={`${color} h-full rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(0,0,0,0.1)]`} 
          style={{ width: `${value}%` }} 
        />
      </div>
    </div>
  );
}

function AppointmentItem({ time, patient, type, active = false, avatar }) {
  return (
    <div className={`
      group p-4 rounded-[2rem] border transition-all duration-300 flex items-center justify-between
      ${active 
        ? 'bg-primary border-primary shadow-xl shadow-primary/20 scale-[1.02]' 
        : 'bg-card border-accent/20 hover:border-primary/40 hover:translate-x-1'}
    `}>
      <div className="flex items-center gap-4">
        <div className={`
          flex flex-col items-center justify-center min-w-[65px] py-2 rounded-2xl border
          ${active ? 'bg-white/10 border-white/20 text-white' : 'bg-background border-accent/10 text-primary'}
        `}>
          <Clock size={14} className="mb-1 opacity-60" />
          <span className="text-xs font-black tracking-tight">{time}</span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-accent/20 overflow-hidden">
            <img src={avatar || `https://ui-avatars.com/api/?name=${patient}`} className="w-full h-full object-cover" />
          </div>
          <div>
            <p className={`text-sm font-black ${active ? 'text-white' : 'text-text-main'}`}>{patient}</p>
            <span className={`text-[10px] font-bold uppercase tracking-widest ${active ? 'text-white/60' : 'text-text-muted/40'}`}>
              {type}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {active && (
          <span className="text-[9px] font-black uppercase bg-white/20 text-white px-3 py-1 rounded-full animate-pulse">
            Agora
          </span>
        )}
        <button className={`p-2 rounded-xl ${active ? 'text-white hover:bg-white/10' : 'text-text-muted/30 hover:text-primary'} transition-colors`}>
          <MoreHorizontal size={20} />
        </button>
      </div>
    </div>
  );
}