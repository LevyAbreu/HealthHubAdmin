const initialImage = "https://ui-avatars.com/api/?name=Milene+Guirado&background=A5D8FF&color=004A77";

export const PROFILE_DATA = {
  user: {
    name: 'Milene Guirado',
    funcition: "Endocrinologista",
    city: 'Manaus',
    initialImg: initialImage,
  },
  performance: [
    { id: '1', title: 'Massa Magra', value: '30%', color: '#4ADE80' },
    { id: '2', title: 'Hidratação', value: '1.5L / 2L', color: '#38BDF8' },
    { id: '3', title: 'Sono', value: '5h / 8h', color: '#818CF8' },
    { id: '4', title: 'Atividade', value: '30 min', color: '#FB923C' },
  ]
};

export const patientsData = [
  { 
    id: 1, 
    name: "Mariana Souza", 
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    age: 28, 
    goal: "Emagrecimento", 
    lastSync: "2h atrás", 
    weight: 82, 
    targetWeight: 70 
  },
  { 
    id: 2, 
    name: "João Pedro", 
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    age: 34, 
    goal: "Emagrecimento", 
    lastSync: "5h atrás", 
    weight: 95, 
    targetWeight: 85 
  },
  { 
    id: 3, 
    name: "Ana Clara", 
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    age: 22, 
    goal: "Emagrecimento", 
    lastSync: "1d atrás", 
    weight: 68, 
    targetWeight: 60 
  },
  { 
    id: 4, 
    name: "Carlos V.", 
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    age: 45, 
    goal: "Saúde", 
    lastSync: "10m atrás", 
    weight: 110, 
    targetWeight: 90 
  },
  { 
    id: 5, 
    name: "Fernanda Lima", 
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    age: 31, 
    goal: "Emagrecimento", 
    lastSync: "1h atrás", 
    weight: 75, 
    targetWeight: 68 
  },
  { 
    id: 6, 
    name: "Lucas Silva", 
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    age: 29, 
    goal: "Emagrecimento", 
    lastSync: "3h atrás", 
    weight: 88, 
    targetWeight: 80 
  },
];

export const appointmentsData = [
  {
    id: 1,
    patientName: "Mariana Souza",
    time: "09:00",
    type: "Retorno",
    status: "confirmed",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
  },
  {
    id: 2,
    patientName: "João Pedro",
    time: "10:30",
    type: "Primeira Consulta",
    status: "confirmed",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
  },
  {
    id: 3,
    patientName: "Carlos V.",
    time: "14:00",
    type: "Acompanhamento",
    status: "pending",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
  },
  {
    id: 4,
    patientName: "Ana Clara",
    time: "16:30",
    type: "Bioimpedância",
    status: "confirmed",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
  }
];