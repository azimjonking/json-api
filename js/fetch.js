const btn = document.getElementById("post");

btn.addEventListener("click", () => {
  fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "Buyuklik sari...",
      author: "Azimjon Jalilov",
      genre: "autobiographic",
      publicationYear: "2024",
      rating: 4.8,
    }),
  })
    .then((data) => data.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
});
