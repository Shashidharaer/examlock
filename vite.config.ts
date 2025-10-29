import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/globals.css', 'resources/css/theme.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),

        // ✅ Only include wayfinder in non-production environments
        !isProduction &&
            wayfinder({
                formVariants: true,
            }),
    ].filter(Boolean), // filter out false values
    esbuild: {
        jsx: 'automatic',
    },
});
