import { Search, X } from 'lucide-react';

export default function SearchBar({ value, onChange, placeholder = "Procurar paciente...", className = "w-64" }) {
    return (
        <div className={`relative group ${className}`}>
            <Search 
                className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors duration-300" 
                size={18} 
            />
            
            <input 
                type="text" 
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full bg-background border border-accent/20 h-[52px] pl-12 pr-10 rounded-2xl text-sm text-text-muted placeholder:text-text-muted/20 focus:outline-none focus:border-primary/40 focus:ring-[6px] focus:ring-primary/5 transition-all duration-500 shadow-inner"
            />

            {value && (
                <button 
                    onClick={() => onChange({ target: { value: '' } })}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-primary p-1 hover:scale-110 transition-all cursor-pointer"
                >
                    <X size={14} />
                </button>
            )}
        </div>
    );
}