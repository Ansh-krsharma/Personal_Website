import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'personal-website';
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? `/${repositoryName}/` : '/',
  server: {
    port: 5173
  }
});
