export const jwtConfig = {
  tokenGetter: () => localStorage.getItem('access_token'),
  allowedDomains: ['your-api-domain.com'], // Replace with your API domain
  disallowedRoutes: ['your-api-domain.com/api/auth'], // Replace with your authentication API route
};
