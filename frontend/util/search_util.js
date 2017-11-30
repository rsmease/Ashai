export const fetchUserSearchResults = (query) => (
  $.ajax({
    method: 'GET',
    url: 'api/user_searches',
    data: {search: { query }}
  })
);
