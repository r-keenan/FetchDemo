//Getting data from a server does not require the options in the fetch request.
fetch("https://reqres.in/api/Users")
  .then((res) => {
    if (res.ok) {
      console.log("Success");
    } else {
      console.log("Error");
    }
    res.json();
  })
  .then((data) => console.log(data));

//Posting new user to the server.
fetch("https://reqres.in/api/Users", {
  method: "Post",
  headers: {
      "Content-Type" : "application/json"
  },
  body: JSON.stringify({
    name: "User 1",
  }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data));
