export const fetchProject = (projectId) => (
  $.ajax({
    url: `api/projects/${projectId}`,
    method: 'GET',
    data: { projectId }
  })
);

export const fetchAllTeams = () => (
  $.ajax({
    url: `api/projects/`,
    method: 'GET'
  })
);

export const postProject = (project) => (
  $.ajax({
    url: 'api/projects',
    method: 'Post',
    data: { project }
  })
);
