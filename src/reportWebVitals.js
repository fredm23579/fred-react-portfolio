/**
 * Web Vitals reporter — updated for web-vitals v4.
 *
 * web-vitals v4 moved from imperative `getCLS()` style to callback-based
 * `onCLS()` style and replaced the deprecated FID metric with INP
 * (Interaction to Next Paint), which became a Core Web Vital in March 2024.
 *
 * Usage (optional — not called by default):
 *   import reportWebVitals from './reportWebVitals';
 *   reportWebVitals(console.log);         // log to console
 *   reportWebVitals(sendToAnalytics);     // forward to analytics endpoint
 *
 * @param {Function} onPerfEntry - callback receiving a Metric object
 */
const reportWebVitals = (onPerfEntry) => {
  if (typeof onPerfEntry !== 'function') return;

  import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
    // Cumulative Layout Shift
    onCLS(onPerfEntry);
    // Interaction to Next Paint (replaced FID as a Core Web Vital in 2024)
    onINP(onPerfEntry);
    // First Contentful Paint
    onFCP(onPerfEntry);
    // Largest Contentful Paint
    onLCP(onPerfEntry);
    // Time to First Byte
    onTTFB(onPerfEntry);
  });
};

export default reportWebVitals;
