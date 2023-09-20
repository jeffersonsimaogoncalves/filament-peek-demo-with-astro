import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
    server: {
        host: true,
        port: 3000,
    },
    integrations: [
        tailwind({
            applyBaseStyles: false,
        }),
        preact(),
    ],
});
