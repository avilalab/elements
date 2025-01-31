import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [react(), dts()],
	build: {
		lib: {
			entry: 'src/index.ts',
			name: 'avilalab-elements',
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
			  additionalData: `@import "bootstrap/scss/bootstrap";
			  					@import "${__dirname}/src/scss/_variables.scss";
								@import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');
								@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');
								@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css');`,
			},
		},
	}
})
