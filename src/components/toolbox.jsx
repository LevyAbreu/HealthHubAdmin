import SearchBar from './searchBar';
import { FilterBtn } from './actionbtn';
import Btn from './btn';
import { Plus, LayoutGrid, List, Users } from 'lucide-react';

export default function ToolBox({ searchTerm, setSearchTerm, viewMode, setViewMode }) {
    return (
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12 bg-card/30 p-4 rounded-[2.5rem] border border-accent/10 backdrop-blur-md shadow-sm">
            <div className="flex items-center gap-4 flex-1 w-full">
                <SearchBar 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    className="flex-1 max-w-md"
                    placeholder="Buscar por nome ou objetivo..."
                />
            </div>
    
            <div className="flex items-center gap-3 w-full md:w-auto">
                <div className="flex bg-background/50 rounded-2xl p-1 border border-accent/10 mr-2">
                    <button 
                        onClick={() => setViewMode('grid')}
                        className={`p-2.5 rounded-xl transition-all cursor-pointer ${viewMode === 'grid' ? 'bg-card text-primary shadow-sm' : 'text-text-muted/30 hover:text-text'}`}
                    >
                        <LayoutGrid size={18} />
                    </button>
                    <button 
                        onClick={() => setViewMode('list')}
                        className={`p-2.5 rounded-xl transition-all cursor-pointer ${viewMode === 'list' ? 'bg-card text-primary shadow-sm' : 'text-text-muted/30 hover:text-text'}`}
                    >
                        <List size={18} />
                    </button>
                </div>
    
                <FilterBtn onClick={() => {}} active={searchTerm !== ''} />
                <Btn label="Novo Paciente" icon={Plus} className="shadow-xl shadow-primary/20" />
            </div>
        </div>
    );
}