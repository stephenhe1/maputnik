import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./rq6-agent",
  timeout: 30_000,
  expect: {
    timeout: 10_000,
  },
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: "list",
  use: {
    baseURL: "http://localhost:3018",
    headless: true,
    // Use software rendering args to avoid GPU issues in headless mode
    launchOptions: {
      args: [
        "--disable-gpu",
        "--enable-features=AllowSwiftShaderFallback,AllowSoftwareGLFallbackDueToCrashes",
        "--enable-unsafe-swiftshader",
        "--no-sandbox",
        "--disable-setuid-sandbox",
      ],
    },
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
