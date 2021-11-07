export default async function createReq({ query, method, content, id }) {
  const baseURL = 'http://localhost:7777/';
  const requestURL = method === 'DELETE' ? baseURL + `${id}` : baseURL + query;

  const request = await fetch(requestURL, {
    method: method,
    headers: new Headers({ 'content-type': 'application/json' }),
    body: content ? JSON.stringify({ content }) : null,
  });
  if (!request.ok) {
    throw new Error('Request error');
  }
  const response = request.status === 200 ? await request.json() : null;
  return response;
}