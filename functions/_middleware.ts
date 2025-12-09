/**
 * Cloudflare Pages Middleware for Security Headers
 * Applies best-practice security headers to all responses
 */

export async function onRequest(context: {
  request: Request;
  next: () => Promise<Response>;
}): Promise<Response> {
  const response = await context.next();

  // Clone the response to make it mutable
  const newResponse = new Response(response.body, response);

  // Security Headers - Astro Framework Best Practices

  // Content Security Policy (CSP)
  // Allow self, inline styles (for Tailwind), Google Fonts, and essential scripts
  newResponse.headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: https:",
      "connect-src 'self' https://www.google-analytics.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      'upgrade-insecure-requests',
    ].join('; ')
  );

  // Prevent clickjacking attacks
  newResponse.headers.set('X-Frame-Options', 'DENY');

  // Prevent MIME type sniffing
  newResponse.headers.set('X-Content-Type-Options', 'nosniff');

  // Enable browser XSS protection
  newResponse.headers.set('X-XSS-Protection', '1; mode=block');

  // Referrer Policy - balance privacy and functionality
  newResponse.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Permissions Policy - restrict powerful features
  newResponse.headers.set(
    'Permissions-Policy',
    ['camera=()', 'microphone=()', 'geolocation=()', 'interest-cohort=()'].join(', ')
  );

  // Strict Transport Security (HSTS) - force HTTPS
  // 2 years max-age, include subdomains, allow preloading
  newResponse.headers.set(
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains; preload'
  );

  return newResponse;
}
