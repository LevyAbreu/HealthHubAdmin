import { User, Bell, Lock, Palette, Save, Camera } from 'lucide-react';
import Btn from '../components/btn';

export default function Configuracoes() {
  return (
    <div className="flex flex-col h-full bg-background p-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-start">
        <div className="lg:col-span-1 space-y-3 bg-card/30 p-2 rounded-[2.5rem] border border-accent/10">
          <ConfigTab icon={<User size={18} />} label="Perfil Profissional" active />
          <ConfigTab icon={<Bell size={18} />} label="Notificações" />
          <ConfigTab icon={<Lock size={18} />} label="Segurança & Acesso" />
          <ConfigTab icon={<Palette size={18} />} label="Personalização" />
        </div>

        <div className="lg:col-span-3">
          <div className="bg-card border border-accent/20 rounded-[3rem] p-10 shadow-xl shadow-black/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="relative z-10">
              <div className="flex items-center gap-8 mb-12">
                <div className="relative group cursor-pointer">
                  <div className="w-28 h-28 rounded-full border-4 border-background shadow-2xl overflow-hidden">
                    <img 
                      src="https://ui-avatars.com/api/?name=Milene+Guirado&background=A5D8FF&color=004A77" 
                      alt="Perfil" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="text-white" size={24} />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-text-muted/90 tracking-tight">Informações de Perfil</h3>
                  <p className="text-text-muted/40 text-sm font-medium">Gerencie seus dados públicos e profissionais.</p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField label="Nome de Exibição" placeholder="Dra. Milene Guirado" />
                  <InputField label="E-mail de Contato" placeholder="milene.g@healthhub.com" />
                  <InputField label="Especialidade Principal" placeholder="Endocrinologista" />
                  <InputField label="Número de Registro (CRM)" placeholder="123456-SP" />
                </div>

                <div className="pt-6 border-t border-accent/10 flex justify-end">
                  <Btn 
                    label="Salvar Alterações" 
                    icon={Save} 
                    className="!rounded-2xl !px-8 shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <p className="mt-6 text-[10px] text-center text-text-muted/30 uppercase tracking-[0.2em] font-bold">
            Última alteração realizada em 04 de Março às 14:20
          </p>
        </div>
      </div>
    </div>
  );
}

function ConfigTab({ icon, label, active = false }) {
  return (
    <button className={`w-full flex items-center gap-4 p-4 rounded-[1.8rem] font-bold text-xs transition-all duration-300 cursor-pointer group ${
      active 
        ? 'bg-primary text-white shadow-lg shadow-primary/25' 
        : 'text-text-muted/40 hover:bg-card hover:text-text-muted/80'
    }`}>
      <div className={`${active ? 'text-white' : 'text-primary/60 group-hover:text-primary'} transition-colors`}>
        {icon}
      </div>
      <span className="tracking-tight">{label}</span>
    </button>
  );
}

function InputField({ label, placeholder }) {
  return (
    <div className="space-y-2.5">
      <label className="text-[10px] font-black uppercase tracking-[0.15em] text-text-muted/30 ml-1">{label}</label>
      <input 
        type="text" 
        placeholder={placeholder}
        className="w-full bg-background border border-accent/10 p-4 rounded-2xl text-sm text-text-muted/80 font-medium placeholder:text-text-muted/20 focus:outline-none focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all duration-300"
      />
    </div>
  );
}