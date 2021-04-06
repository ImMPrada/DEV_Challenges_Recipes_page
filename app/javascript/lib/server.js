const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

const commonHeaders = {
  'X-CSRF-TOKEN': csrfToken,
  'Content-Type': 'application/json',
};

const server = {
  get: (url) => (fetch(url)),

  post: (url, data = {}, headers = {}) => (
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({ ...data, authenticity_token: csrfToken }),
      headers: {
        ...commonHeaders,
        ...headers,
      },
    })
  ),

  // TODO: Create remaining HTTP verbs here
};

export default server;
