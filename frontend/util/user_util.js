export const fetchAllUsers = () => (
  $.ajax({
    url: '/api/users',
    method: 'GET'
  })
);
