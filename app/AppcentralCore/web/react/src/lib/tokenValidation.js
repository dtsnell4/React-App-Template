// var _apiUrl = 'https://api.nova.edu/appcentral';

// var attempNumber = 4;
// var currentAttemp = 1;


/** ********************jwt utils******************************** */

function urlBase64Decode(str) {
  let output = str.replace(/-/g, '+').replace(/_/g, '/');
  switch (output.length % 4) {
    case 0: { break; }
    case 2: { output += '=='; break; }
    case 3: { output += '='; break; }
    default: {
      throw new Error('Illegal base64url string!');
    }
  }
  return decodeURIComponent(escape(window.atob(output))); // polifyll https://github.com/davidchambers/Base64.js
}

function decodeToken(token) {
  const parts = token.split('.');
  if (parts.length !== 3) {
    throw new Error('JWT must have 3 parts');
  }
  const decoded = urlBase64Decode(parts[1]);
  if (!decoded) {
    throw new Error('Cannot decode the token');
  }
  return JSON.parse(decoded);
}

function getTokenExpirationDate(token) {
  const decoded = decodeToken(token);
  if (typeof decoded.exp === 'undefined') {
    return null;
  }
  const d = new Date(0); // The 0 here is the key, which sets the date to the epoch
  d.setUTCSeconds(decoded.exp);
  return d;
}

function isTokenExpired(token, offsetSeconds = 0) {
  const d = getTokenExpirationDate(token);
  return !(d.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
}


/** ************************************************************* */

export default function checkToken(token) {
  if (!token || !token.access_token) { return false; }
  const expired = isTokenExpired(token.access_token);
  if (!expired) {
    return token;
  }

  return false;
}
