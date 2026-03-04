import { Plus, ChevronRight } from 'lucide-react';

export default function Btn({ 
  onClick, 
  label, 
  icon: Icon, 
  variant = 'primary',
  className = "" 
}) {
  const variants = {
    primary: "bg-primary text-white shadow-lg shadow-primary/20",
    opencard: "bg-primary text-white shadow-lg shadow-primary/20",
    secondary: "bg-background border border-accent/20 text-text-muted hover:border-secondary"
  };

  return (
    <button 
      onClick={onClick}
      className={`
        ${variants[variant]}
        font-bold px-6 py-3 rounded-2xl 
        flex items-center justify-center gap-2 
        hover:scale-105 active:scale-95 
        transition-all duration-300 cursor-pointer 
        group whitespace-nowrap text-sm ${className}
      `}
    >
      {Icon ? <Icon size={18} strokeWidth={3} /> : (variant === 'primary' && <Plus size={18} strokeWidth={3} />)}
        
      <span>{label}</span>

      {variant === 'opencard' && <ChevronRight size={14} className=" group-hover:opacity-100 group-hover:translate-x-1 transition-all" />}
    </button>
  );
}