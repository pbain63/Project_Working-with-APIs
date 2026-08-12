const img = document.querySelector("img");

fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=JxoghZbdsbGeUxaK82pDSgRxEX40cj8U&s=dogs"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response);
  });
