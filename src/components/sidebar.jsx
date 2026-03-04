import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Calendar, FileText, Settings, LogOut } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="fixed left-5 top-5 h-[calc(100vh-40px)] z-50 w-20 hover:w-64 bg-primary border border-white/10 flex flex-col items-start py-8 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group shadow-2xl rounded-[2.5rem] overflow-hidden">
      <div className="px-5 mb-12 flex items-center gap-4 w-full">
        <div className="min-w-[40px] h-10 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-black/20 transition-transform duration-500">
          <span className="text-primary font-black text-xl tracking-tighter italic">HH</span>
        </div>
        <span className="text-white font-black text-xl tracking-tight opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
          Health<span className="text-white/50">Hub</span>
        </span>
      </div>

      <nav className="flex-1 w-full px-3 space-y-3">
        <SidebarItem to="/dashboard" icon={<LayoutDashboard size={22} />} label="Dashboard" />
        <SidebarItem to="/pacientes" icon={<Users size={22} />} label="Pacientes" />
        <SidebarItem to="/agenda" icon={<Calendar size={22} />} label="Agenda" />
        <SidebarItem to="/relatorios" icon={<FileText size={22} />} label="Relatórios" />
      </nav>

      <div className="w-full px-3 mt-auto space-y-3">
        <SidebarItem to="/configuracoes" icon={<Settings size={22} />} label="Configurações" />
        
        <button 
          onClick={() => console.log("Logout")}
          className="flex items-center gap-4 w-full p-4 rounded-2xl text-rose-300 hover:bg-rose-500/10 transition-all duration-300 group/logout cursor-pointer"
        >
          <div className="min-w-[24px] flex justify-center">
            <LogOut size={22} className="group-hover/logout:-translate-x-1 transition-transform" />
          </div>
          <span className="font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap uppercase tracking-widest">
            Sair
          </span>
        </button>
      </div>
    </aside>
  );
}

function SidebarItem({ icon, label, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `
        relative flex items-center gap-4 w-full p-4 rounded-2xl transition-all duration-500 group/item
        ${isActive 
          ? 'text-white' 
          : 'text-white/40 hover:text-white hover:bg-white/10'
        }
      `}
    >
      {({ isActive }) => (
        <>
          {isActive && (
            <div className="absolute left-0 w-1.5 h-6 bg-secondary rounded-r-full shadow-[2px_0_10px_rgba(165,216,255,0.4)]" />
          )}

          <div className={`min-w-[24px] flex justify-center transition-transform duration-300 ${
            isActive ? 'scale-110 text-secondary' : 'group-hover/item:scale-110'
          }`}>
            {icon}
          </div>
        
          <span className="font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 tracking-tight overflow-hidden">
            {label}
          </span>

          {isActive && (
            <div className="absolute inset-0 bg-white/5 rounded-2xl -z-10 backdrop-blur-sm" />
          )}
        </>
      )}
    </NavLink>
  );
}