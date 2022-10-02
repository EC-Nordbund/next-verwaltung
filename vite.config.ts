import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from "vite-plugin-vuetify";
import Pages from 'vite-plugin-pages'

export default defineConfig({
  base: "/verwaltung/",
  server: {
    port: 3001,
  },
  plugins: [
    vue(),
    vuetify({
      styles: {
        configFile: './src/vuetify.config.scss'
      }
    }),
    Pages(),
  ],
  build: {
    target: [
      'chrome89', 'edge89', 'safari15.4', 'firefox96', 'opera75', 'ios15.4'
    ],
    cssTarget: [
      'chrome89', 'edge89', 'safari15.4', 'firefox96', 'opera75', 'ios15.4'
    ]
  }
})
