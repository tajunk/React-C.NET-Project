export const server =
  process.env.REACT_APP_ENV === 'production'
    ? 'https://qa-backend.azurewebsites.net'
    : process.env.REACT_APP_ENV === 'staging'
    ? 'https://qa-backend-staging.azurewebsites.net'
    : 'http://localhost:52823';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: 'dev--xdiqd25.us.auth0.com',
  client_id: 'TK3OxEa7uvLKaASRPUc5m0MEUyiebEUp',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'https://qanda',
};
