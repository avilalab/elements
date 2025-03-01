import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [react(), dts()],
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "@avilalab-elements",
            fileName: (format) => `@avilalab-elements.${format}.js`,
        },
        rollupOptions: {
            external: ["react", "react-dom", "bootstrap"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        }
    },
    resolve: {
        alias: {
            '~bootstrap': path.resolve('node_modules/bootstrap'),
        }
    }
});
