export const fetchUserSearchResults = (query) => (
  $.ajax({
    method: 'GET',
    url: 'api/user_searches',
    data: {search: { query }}
  })
);

export const fetchProjectSearchResults = (query) => (
  $.ajax({
    method: 'GET',
    url: 'api/project_searches',
    data: {search: { query }}
  })
);

export const fetchTeamSearchResults = (query) => (
  $.ajax({
    method: 'GET',
    url: 'api/team_searches',
    data: {search: { query }}
  })
);
