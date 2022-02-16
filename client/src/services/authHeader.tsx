export default function authHeader(): { 'x-access-token': string } {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    // For Spring Boot back-end
    // return { Authorization: "Bearer " + user.accessToken };

    // for Node.js Express back-end
    return { 'x-access-token': user.accessToken };
  } else {
    return {};
  }
}
