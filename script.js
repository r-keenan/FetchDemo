fetch("https://reqres.in/api/Users")
  .then((res) => res.json())
  .then((data) => console.log(data));
