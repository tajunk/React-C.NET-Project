export const server = 'http://localhost:52823';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: 'dev--xdiqd25.us.auth0.com',
  client_id: 'TK3OxEa7uvLKaASRPUc5m0MEUyiebEUp',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'https://qanda',
};
