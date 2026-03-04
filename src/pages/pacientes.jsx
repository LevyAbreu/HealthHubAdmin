import { useState } from 'react';
import { patientsData } from '../utils/mockData';
import { Users } from 'lucide-react';
import ToolBox from '../components/toolbox';
import PatientCard from '../components/patientCard';

export default function Pacientes() {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  const filteredPatients = patientsData.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.goal?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full bg-background p-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <ToolBox 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        viewMode={viewMode} 
        setViewMode={setViewMode} 
      />

      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar pb-10">
        <div className="flex items-center justify-between mb-8 px-2">
          <div className="flex flex-col">
            <span className="text-sm font-bold text-text-muted/60 tracking-tight">
              {filteredPatients.length} pacientes encontrados
            </span>
          </div>
        </div>

        {filteredPatients.length > 0 ? (
          <div className={`grid gap-8 transition-all duration-500 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredPatients.map((patient) => (
              <PatientCard 
                key={patient.id} 
                patient={patient} 
                viewMode={viewMode} 
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-40 bg-card/10 rounded-[3.5rem] border border-dashed border-accent/20">
            <Users size={48} className="text-text-muted/10 mb-4" />
            <p className="text-text-muted/40 font-medium italic tracking-tight">
              Nenhum registro encontrado.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}