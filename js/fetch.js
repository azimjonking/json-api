const btn = document.getElementById("get");

btn.addEventListener("click", () => {
  console.log("api checking");

  fetch("https://json-api.uz/api/project/rentbook/books")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
