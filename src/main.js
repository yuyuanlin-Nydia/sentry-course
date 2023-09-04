import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/main.pcss";
import * as Sentry from "@sentry/vue";

const app = createApp(App);
Sentry.init({
  app,
  dsn: "https://f8af3cc41e70e26ddaed761c9aa7ba16@o4505804213190656.ingest.sentry.io/4505804223676416",
  logErrors: true,
  release: __SENTRY_RELEASE__,
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["localhost", "https:yourserver.io/api/"],
      routingInstrumentation: Sentry.vueRouterInstrumentation(router)
    }),
    new Sentry.Replay()
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0 // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

app.use(router).mount("#app");
