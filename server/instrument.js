const Sentry = require("@sentry/node");

Sentry.init({
  dsn: "https://b1a09c8f55d8b6af33abf1d54af4a95e@o4509663941361664.ingest.de.sentry.io/4509663944769616",
  sendDefaultPii: true,
  tracesSampleRate: 1.0,
  _experiments: { enableLogs: true },
  integrations: []
});

module.exports = Sentry;
