
fetch(`http://rest-stop-worldwide.penguinrandomhouse.com/rest/titles?author=Dan%20Brown&api_key=${API_KEY}`)
  .then((response) => {
    console.log(response.json());
  })
  .catch((error) => {
    console.error(error);
  });