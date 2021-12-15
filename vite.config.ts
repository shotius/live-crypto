import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths';
import reactRefresh from '@vitejs/plugin-react-refresh';
import checker from 'vite-plugin-checker';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), tsconfigPaths(), checker({ typescript: true })],
})
