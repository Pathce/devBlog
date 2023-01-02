

export const login = (id: string, pw: string) => {
  fetch('http://localhost:3010/api/login', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: id,
      pw: pw
    })
  })
  .then((res) => res.json())
  .then((res) => {return res;})
  .catch((err) => {return err;})
}