export const fetchTeam = (teamId) => (
  $.ajax({
    url: `api/teams/${teamId}`,
    method: 'GET',
    data: { teamId }
  })
);
