export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#005f73',
        secondary: '#A5D8FF',
        background: '#F8FAFC',
        card: '#FFFFFF',
        textPrimary: '#1E293B',
        textSecondary: '#64748B',
        textBlue: '#004A77',
        border: '#E2E8F0',
        locked: '#94A3B8',
      },
      borderRadius: {
        'large': '24px',
        'medium': '15px',
      },
      boxShadow: {
        'elevation': '0 4px 10px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}