import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
    output: 'server',
    vite: {
        plugins: [tailwindcss()],
    },
    adapter: cloudflare(),
    integrations: [react()],
});
