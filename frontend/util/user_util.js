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

export const updateUser = (userFormData) => (
  $.ajax({
    url: `api/users/${userFormData.id}`,
    method: 'PATCH',
    data: { user: userFormData}
  })
);
