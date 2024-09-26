const { withSentryConfig } = require('@sentry/nextjs');

const sentryWebpackPluginOptions = {
  silent: true,  // Disables errors for Sentry
};

module.exports = withSentryConfig({
  // Your Next.js config
}, sentryWebpackPluginOptions);
