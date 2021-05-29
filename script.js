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

//