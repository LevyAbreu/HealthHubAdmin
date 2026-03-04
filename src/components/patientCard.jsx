import { CalendarDays } from 'lucide-react';
import { ActivityBtn } from './actionBtn';
import Btn from './btn';

export default function PatientCard({ patient, viewMode }) {
  const currentDiff = patient.weight - patient.targetWeight;
  const progress = Math.max(5, Math.min(100, 100 - (currentDiff * 4)));

  return (
    <div className={`bg-card border border-accent/20 p-8 rounded-[3rem] shadow-sm flex flex-col justify-between hover:border-primary/30 transition-all duration-500 group relative overflow-hidden ${viewMode === 'list' ? 'md:flex-row md:items-center py-4' : 'h-full'}`}>
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-background rounded-full overflow-hidden border-2 border-accent/20 group-hover:border-primary/40 transition-all">
            <img 
              src={patient.avatar || `https://ui-avatars.com/api/?name=${patient.name}`} 
              className="w-full h-full object-cover" 
              alt={patient.name} 
            />
          </div>
          <div>
            <h3 className="font-bold text-lg text-text-muted/90">{patient.name}</h3>
            <div className="flex items-center gap-1.5 text-text-muted/40">
              <CalendarDays size={12} />
              <span className="text-[10px] uppercase tracking-wider">{patient.lastSync}</span>
            </div>
          </div>
        </div>
      </div>

      {viewMode === 'grid' && (
        <>
          <div className="grid grid-cols-2 gap-3 mb-8">
            <div className="bg-background/40 p-4 rounded-[1.8rem] border border-accent/10">
              <span className="text-[9px] text-text-muted/40 font-black uppercase block mb-1">Atual</span>
              <span className="text-3xl font-black text-primary">{patient.weight}kg</span>
            </div>
            <div className="bg-background/20 p-4 rounded-[1.8rem] flex flex-col justify-center">
              <span className="text-[9px] text-text-muted/40 font-black uppercase block mb-1">Meta</span>
              <span className="text-2xl font-bold text-text-muted/60">{patient.targetWeight}kg</span>
            </div>
          </div>
          <div className="mb-8 px-1">
            <div className="flex justify-between mb-2">
              <span className="text-[10px] font-black text-text-muted/40 uppercase">Evolução</span>
              <span className="text-xs font-bold text-primary italic">-{currentDiff.toFixed(1)}kg</span>
            </div>
            <div className="h-2.5 w-full bg-background rounded-full p-0.5 border border-accent/10 overflow-hidden">
                <div className="bg-primary h-full rounded-full transition-all duration-1000" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </>
      )}

      <div className={`flex gap-3 mt-auto ${viewMode === 'list' ? 'md:mt-0' : ''}`}>
        <Btn label="Ver Perfil" variant="opencard" className="flex-1 !rounded-[1.3rem]" />
        <ActivityBtn onClick={() => {}} />
      </div>
    </div>
  );
}