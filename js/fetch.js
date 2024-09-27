const btn = document.getElementById("delete");

btn.addEventListener("click", () => {
  fetch("http://localhost:3000/products/5", {
    method: "DELETE",
  })
    .then((data) => data.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
});
