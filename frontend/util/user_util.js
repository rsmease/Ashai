export const fetchAllUsers = () => (
  $.ajax({
    url: '/api/users',
    method: 'GET'
  })
);

export const fetchUser = (userId) => (
  $.ajax({
    url: `api/users/${userId}`,
    method: 'GET',
    data: { userId }
  })
);
