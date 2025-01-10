import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	build: {
		lib: {
			entry: 'src/main.tsx',
			name: 'avilalab-elements',
			formats: ['es', 'cjs'],
			fileName: (format) => `avilalab-elements.${format}.js`,
		  },
		  rollupOptions: {
			external: ['react', 'react-dom', 'bootstrap'],
			output: {
			  globals: {
				react: 'React',
				'react-dom': 'ReactDOM',
			  },
			},
		  },
		},
		css: {
		  preprocessorOptions: {
			scss: {
			  additionalData: `@import "bootstrap/scss/bootstrap";`,
			},
		},
	}
})
