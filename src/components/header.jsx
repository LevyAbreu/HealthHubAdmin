import { Search, Bell, ChevronDown } from 'lucide-react';
import { PROFILE_DATA } from '../utils/mockData';

export default function Header() {
    const { user } = PROFILE_DATA;

    return (
        <header className="flex justify-between items-center mb-10 w-full">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-text-main tracking-tight">
              Bem-vinda, Dra. Milene
            </h1>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative group">
              <Search className="absolute left-3 top-2.5 text-text-muted group-focus-within:text-brand-blue transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Procurar paciente..." 
                className="pl-10 pr-4 py-2 rounded-medium bg-secondary/50 border border-accent/50 text-text-main text-sm w-64 focus:outline-none focus:border-brand-blue/50 transition-all placeholder:text-text-muted"
              />
            </div>

            <button className="relative p-2 text-text-muted hover:text-text-main transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-primary" />
            </button>

            <div className="flex items-center gap-3 pl-6 border-l border-accent/30">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-text-main leading-none">Milene Guirado</p>
                <p className="text-[10px] text-text-muted uppercase font-bold mt-1">Endocrinologista</p>
              </div>
              <div className="relative">
                <img 
                  src={user.initialImg} 
                  alt="Profile" 
                  className="w-10 h-10 rounded-full border-2 border-accent shadow-elevation object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-secondary rounded-full" />
              </div>
              <ChevronDown size={16} className="text-text-muted" />
            </div>
          </div>
        </header>
    );
}