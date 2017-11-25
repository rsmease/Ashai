export const fetchTeam = (teamId) => (
  $.ajax({
    url: `api/teams/${teamId}`,
    method: 'GET',
    data: { teamId }
  })
);

export const fetchAllTeams = (teams) => (
  $.ajax({
    url: `api/teams/`,
    method: 'GET',
    data: { teams }
  })
);
