import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Clock, CheckCircle2, AlertCircle, Calendar as CalendarIcon, MoreVertical } from 'lucide-react';
import { appointmentsData } from '../utils/mockData';
import Btn from '../components/btn';

export default function Agenda() {
  const [selectedDate, setSelectedDate] = useState(4);

  const days = [
    { day: 'Seg', date: 2 },
    { day: 'Ter', date: 3 },
    { day: 'Qua', date: 4 },
    { day: 'Qui', date: 5 },
    { day: 'Sex', date: 6 },
    { day: 'Sab', date: 7 },
  ];

  return (
    <div className="flex flex-col h-full bg-background p-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        <div className="flex items-center gap-3 bg-card/50 p-2 rounded-[2.2rem] border border-accent/10 shadow-sm">
          {days.map((d) => (
            <button
              key={d.date}
              onClick={() => setSelectedDate(d.date)}
              className={`flex flex-col items-center justify-center w-14 h-20 rounded-[1.8rem] transition-all duration-300 cursor-pointer ${
                selectedDate === d.date 
                ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105' 
                : 'text-text-muted/40 hover:bg-background hover:text-text-muted'
              }`}
            >
              <span className="text-[10px] font-black uppercase tracking-widest mb-1">{d.day}</span>
              <span className="text-xl font-black">{d.date}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex flex-col items-end mr-4">
            <span className="text-2xl font-black text-text-muted/90 tracking-tighter">Março, 2026</span>
            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Quarta-feira</span>
          </div>
          <Btn label="Novo Horário" icon={Plus} className="shadow-xl shadow-primary/20" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar relative">
        <div className="absolute left-[78px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/20 via-primary/5 to-transparent hidden md:block" />

        <div className="space-y-6">
          {appointmentsData.map((apt) => (
            <AppointmentRow key={apt.id} apt={apt} />
          ))}
        </div>
      </div>
    </div>
  );
}

function AppointmentRow({ apt }) {
  const isConfirmed = apt.status === 'confirmed';

  return (
    <div className="group flex items-center gap-6 md:gap-10 w-full relative z-10">
      <div className="flex flex-col items-end min-w-[60px] group-hover:scale-110 transition-transform duration-300">
        <span className="text-xl font-black text-text-muted/80 leading-none group-hover:text-primary transition-colors">
          {apt.time}
        </span>
        <span className="text-[9px] font-black text-text-muted/20 uppercase tracking-widest">AM</span>
      </div>

      <div className={`hidden md:flex w-4 h-4 rounded-full border-4 border-background z-20 shadow-sm transition-all duration-500 ${
        isConfirmed ? 'bg-primary' : 'bg-orange-400'
      } group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(165,216,255,0.6)]`} />

      <div className={`flex-1 bg-card border border-accent/20 p-5 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between transition-all duration-500 
        group-hover:border-primary/40 group-hover:shadow-2xl group-hover:shadow-black/5
        ${!isConfirmed && 'border-l-4 border-l-orange-400/50'}`}>
        
        <div className="flex items-center gap-5 w-full md:w-auto">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-accent/10 p-0.5 group-hover:border-primary/30 transition-colors">
            <img src={apt.avatar} alt={apt.patientName} className="w-full h-full object-cover rounded-full" />
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-black text-text-muted/90 text-lg leading-tight tracking-tight">{apt.patientName}</h3>
              {!isConfirmed && <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />}
            </div>
            <div className="flex items-center gap-3">
              <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${
                isConfirmed ? 'bg-primary/10 text-primary' : 'bg-orange-500/10 text-orange-500'
              }`}>
                {apt.type}
              </span>
              <div className="flex items-center gap-1 text-text-muted/30">
                <Clock size={12} />
                <span className="text-[10px] font-bold italic">45 min</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4 md:mt-0 w-full md:w-auto justify-end">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-2xl bg-background/50 border border-accent/5 transition-all group-hover:border-accent/20`}>
            {isConfirmed ? (
              <CheckCircle2 size={16} className="text-primary" />
            ) : (
              <AlertCircle size={16} className="text-orange-500" />
            )}
            <span className={`text-[10px] font-black uppercase tracking-widest ${isConfirmed ? 'text-primary/60' : 'text-orange-500/60'}`}>
              {isConfirmed ? 'Confirmado' : 'Pendente'}
            </span>
          </div>
          
          <button className="p-3 rounded-2xl text-text-muted/20 hover:text-primary hover:bg-background transition-all cursor-pointer">
             <MoreVertical size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}