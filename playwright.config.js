/* eslint-disable linebreak-style */
/* eslint-disable semi */
import { defineConfig } from '@playwright/test'
export default defineConfig({
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:8080',
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:8080/',
  },
});