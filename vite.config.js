import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

import crypto from 'crypto';

if (!crypto.hash) {
  crypto.hash = () => {
    throw new Error('crypto.hash is not a valid function. Use crypto.createHash() instead.');
  };
}
