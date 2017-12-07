export const fetchProject = (projectId) => (
  $.ajax({
    url: `api/projects/${projectId}`,
    method: 'GET',
    data: { projectId }
  })
);

export const fetchAllProjects = () => (
  $.ajax({
    url: `api/projects/`,
    method: 'GET'
  })
);

export const postProject = (project) => (
  $.ajax({
    url: 'api/projects',
    method: 'POST',
    data: { project }
  })
);

export const updateProject = (projectFormData) => (
  $.ajax({
    url: `api/projects/${projectFormData.id}`,
    method: 'PATCH',
    data: { project: projectFormData}
  })
);

export const deleteProject = (projectId) => (
  $.ajax({
    url: `api/projects/${projectId}`,
    method: 'DELETE',
    data: { projectId }
  })
);

export const postProjectMembership = (projectMembership) => (
  $.ajax({
    url: 'api/project_memberships/',
    method: 'POST',
    data: { project_membership: projectMembership }
  })
);
