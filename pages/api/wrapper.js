import fetch from 'node-fetch';

const customFetch = (url, options = {}) => {
  const headers = new fetch.Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6IjE5OTE5MTEwMTA4Iiwib3RwIjo3NTA2NzYsImlhdCI6MTY4MjQwNTUwNH0.vw6__2NK2hLVPqGlMlHDSJ6pLK788PyoObLVSyW0flI`);

  const fetchOptions = { ...options, headers };
  return fetch(url, fetchOptions);
};

export default customFetch;
