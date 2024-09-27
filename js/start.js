// GET REQUEST
function getTodos() {
  // axios("https://json-api.uz/api/project/rentbook/books", {
  //   method: "GET",
  //   params: {
  //     // _limit: 3, // Limit the number of items returned
  //     skip: 2,
  //     limit: 2,
  //     // _sort: "id", // Sort the items in ascending order by ID
  //     // _order: "asc", // Sort the items in ascending order by ID
  //   },
  // })

  axios
    .get("https://json-api.uz/api/project/rentbook/books?limit=3&skip=2")
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

// POST REQUEST
function addTodo() {
  axios
    .post("https://json-api.uz/api/project/rentbook/books", {
      title: "My React Book",
      author: "Azimjon Jalilov",
      genre: "Science",
      publicationYear: "2024",
      rating: 5,
    })
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

// PUT/PATCH REQUEST
function updateTodo() {
  // axios
  //   .put("https://json-api.uz/api/project/rentbook/books/2", {
  //     rating: 5,
  //   })
  //   .then((res) => showOutput(res))
  //   .catch((err) => console.log(err));

  axios
    .patch("https://json-api.uz/api/project/rentbook/books/3", {
      rating: 5,
      price: "120$",
    })
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

// DELETE REQUEST
function removeTodo() {
  axios
    .delete("https://json-api.uz/api/project/rentbook/books/2")
    .then((res) => showOutput(res))
    .catch((err) => showOutput(err));
}

// SIMULTANEOUS DATA
function getData() {}

function skipItems() {}

// Show output in browser
function showOutput(res) {
  document.getElementById("res").innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById("get").addEventListener("click", getTodos);
document.getElementById("post").addEventListener("click", addTodo);
document.getElementById("update").addEventListener("click", updateTodo);
document.getElementById("delete").addEventListener("click", removeTodo);
document.getElementById("sim").addEventListener("click", getData);
document.getElementById("skip").addEventListener("click", skipItems);
