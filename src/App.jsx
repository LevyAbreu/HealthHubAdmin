import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Dashboard from './pages/dashboard';
import Pacientes from './pages/pacientes';
import Agenda from './pages/agenda';
import Relatorios from './pages/relatorios';
import Configuracoes from './pages/configurações';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-background text-text-main font-sans antialiased overflow-hidden">
        <Sidebar />
        <main className="flex-1 ml-20 flex flex-col h-screen overflow-y-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/pacientes" element={<Pacientes />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/relatorios" element={<Relatorios />} />
            <Route path="/configuracoes" element={<Configuracoes />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}