const btn = document.getElementById("get");

btn.addEventListener("click", () => {
  fetch("http://localhost:3000/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => data.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
});
