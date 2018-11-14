const setAngularToken = (token) => {
  const AngularToken = {
    refreshToken: token.refresh_token,
    token: token.access_token,
    token_type: 'bearer',
    useRefreshTokens: true,
    userName: token.userName,
  };
  localStorage.setItem('ls.authorizationData', JSON.stringify(AngularToken));
};

export default setAngularToken;
