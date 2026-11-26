import { defineConfig } from 'vite';

export default defineConfig({
  // Situs di-deploy di root domain (Vercel), jadi aset memakai path absolut.
  base: '/',
  build: {
    rollupOptions: {
      // Dua halaman: portofolio di root dan aplikasi Todo Kuliah di /todo-kuliah/.
      input: {
        main: 'index.html',
        'todo-kuliah': 'todo-kuliah/index.html'
      }
    }
  }
});
