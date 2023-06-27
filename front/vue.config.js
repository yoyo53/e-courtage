import { defineConfig } from '@vue/cli-service';
import { config } from './config.js';

export default defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? config.base_url : '/'
})
