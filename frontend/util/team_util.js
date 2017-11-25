export const fetchTeam = (teamId) => (
  $.ajax({
    url: `api/teams/${teamId}`,
    method: 'GET',
    data: { teamId }
  })
);

export const fetchAllTeams = () => (
  $.ajax({
    url: `api/teams/`,
    method: 'GET'
  })
);
