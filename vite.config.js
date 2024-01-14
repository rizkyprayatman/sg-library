import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    build: {
        rollupOptions: {}
    },
    server: {
        hmr: {
            host: 'sglibrary.rprayatman.my.id',
        },
        cors: {
            origin: 'http://sglibrary.rprayatman.my.id',
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            allowedHeaders: 'Content-Type, Authorization', 
            exposedHeaders: '', 
            credentials: true,
        },
    },
    plugins: [
        laravel(['resources/js/app.jsx', 'resources/css/app.css']),
    ],
    resolve: {
        alias: {
            '@': '/resources/js',
        },
    },
});
