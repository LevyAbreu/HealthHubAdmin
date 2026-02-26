import { LayoutDashboard, Users, Calendar, FileText, Settings, LogOut } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="fixed left-5 top-5 h-[calc(100vh-40px)] z-50 w-20 hover:w-64 bg-primary border border-white/10 flex flex-col items-start py-8 transition-all duration-300 ease-in-out group shadow-elevation rounded-large overflow-hidden">
      
      {/* Logo Area */}
      <div className="px-6 mb-12 flex items-center gap-4 w-full">
        {/* Quadrado Branco com iniciais em Azul Petróleo */}
        <div className="min-w-[40px] h-10 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-black/20">
          <span className="text-primary font-black text-xl tracking-tighter">HH</span>
        </div>
        {/* Texto HealthHub em Branco */}
        <span className="text-white font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          HealthHub
        </span>
      </div>

      {/* Navegação Principal */}
      <nav className="flex-1 w-full px-4 space-y-2">
        <SidebarItem icon={<LayoutDashboard size={24} />} label="Dashboard" active />
        <SidebarItem icon={<Users size={24} />} label="Pacientes" />
        <SidebarItem icon={<Calendar size={24} />} label="Agenda" />
        <SidebarItem icon={<FileText size={24} />} label="Relatórios" />
      </nav>

      {/* Footer / Configurações */}
      <div className="w-full px-4 mt-auto space-y-2">
        <SidebarItem icon={<Settings size={24} />} label="Configurações" />
        
        {/* Botão Sair - Mantido em Vermelho para destaque de ação crítica */}
        <button className="flex items-center gap-4 w-full p-3 rounded-medium text-rose-400 hover:bg-rose-400/10 transition-colors group/logout">
          <div className="min-w-[24px]">
            <LogOut size={24} className="group-hover/logout:translate-x-1 transition-transform" />
          </div>
          <span className="font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Sair
          </span>
        </button>
      </div>
    </aside>
  );
}

function SidebarItem({ icon, label, active = false }) {
  return (
    <a 
      href="#" 
      className={`flex items-center gap-4 w-full p-3 rounded-medium transition-all duration-200 group/item ${
        active 
          ? 'bg-white/15 text-white shadow-inner' 
          : 'text-white/60 hover:bg-white/5 hover:text-white'
      }`}
    >
      {/* Ícone: Fica branco puro se ativo ou em hover */}
      <div className={`min-w-[24px] transition-all duration-200 ${
        active ? 'text-white scale-110' : 'group-hover/item:text-white group-hover/item:scale-110'
      }`}>
        {icon}
      </div>
      
      {/* Label: Aparece apenas quando a sidebar expande */}
      <span className={`font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
        active ? 'text-white' : ''
      }`}>
        {label}
      </span>

      {/* Indicador lateral (ponto azul claro/secondary) para o item ativo */}
      {active && (
        <div className="ml-auto min-w-[6px] h-6 bg-secondary rounded-full shadow-[0_0_10px_rgba(165,216,255,0.6)]" />
      )}
    </a>
  );
}