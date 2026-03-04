import { Activity, Filter } from 'lucide-react';

export function ActivityBtn({ onClick, active = false }) {
    return (
        <button 
            onClick={onClick}
            className={`relative flex items-center justify-center px-5 rounded-[1.2rem] transition-all duration-300 cursor-pointer h-[52px]
                ${active ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-primary text-white shadow-lg shadow-primary/20'}
                hover:scale-105 active:scale-95 group/act`}
        >
            <Activity size={18} className="group-hover/act:rotate-[15deg] transition-transform" />
        </button>
    );
}

export function FilterBtn({ onClick, active = false }) {
    return (    
        <button 
            onClick={onClick}
            className={`relative flex items-center justify-center p-3.5 rounded-2xl bg-card border transition-all duration-300 cursor-pointer h-[52px] w-[52px]
                ${active ? 'border-primary text-primary shadow-lg shadow-primary/10 ring-4 ring-primary/5' : 'border-accent/50 text-text-muted/60 hover:text-primary hover:border-primary/50'}
                hover:scale-105 active:scale-95`}
        >
            <Filter size={20} />
            {active && <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-background animate-pulse" />}
        </button>
    );
}