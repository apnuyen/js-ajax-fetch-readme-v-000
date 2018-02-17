const app = "I don't do much.";

const token = '893cf05ed9a69b4e1e4faa1f454e7384cecbd0a4'

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).
  then(res => res.json()).
  then(json => console.log(json))
