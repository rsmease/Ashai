export const fetchUsers = (users) => (
  $.ajax({
    url: '/api/users',
    method: 'GET',
    data: { users }
  })
);
