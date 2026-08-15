const API_KEY = "JxoghZbdsbGeUxaK82pDSgRxEX40cj8U";
const GIPHY_SEARCH_URL = "https://api.giphy.com/v1/gifs/search";

const searchForm = document.getElementById("gif-search-form");
const searchInput = document.getElementById("gif-search");
const statusMessage = document.getElementById("status-message");
const gifContainer = document.getElementById("gif-container");
const loadMoreButton = document.getElementById("load-more-button");

const GIFS_PER_PAGE = 12;

let currentSearchTerm = "";
let currentOffset = 0;

// Fetch GIFs from GIPHY
async function fetchGifs(searchTerm, offset = 0) {
  const url = new URL(GIPHY_SEARCH_URL);

  url.searchParams.set("api_key", API_KEY);
  url.searchParams.set("q", searchTerm);
  url.searchParams.set("limit", GIFS_PER_PAGE);
  url.searchParams.set("offset", offset);
  url.searchParams.set("rating", "g"); //TODO

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

//Create a GIF card
function createGifCard(gif) {
  const article = document.createElement("article");
  article.classList.add("gif-card");

  const image = document.createElement("img");

  // console.log(gif);
  image.src = gif.images.fixed_width.webp;
  console.log(image.src);
  image.alt = gif.alt_text || "GIF";
  image.loading = "lazy";

  article.appendChild(image);
  return article;
}

//Display GIFS
function displayGifs(gifs) {
  const fragment = document.createDocumentFragment();

  gifs.forEach((gif) => {
    const gifCard = createGifCard(gif);

    fragment.appendChild(gifCard);
  });

  gifContainer.appendChild(fragment);
}

// Search for GIFs
async function searchGifs() {
  const searchTerm = searchInput.value.trim();

  if (!searchTerm) {
    statusMessage.textContent = "Please enter something to search for.";
    return;
  }

  currentSearchTerm = searchTerm;
  currentOffset = 0;

  gifContainer.replaceChildren();
  loadMoreButton.hidden = true;

  statusMessage.textContent = "Searching...";

  try {
    const response = await fetchGifs(currentSearchTerm, currentOffset);

    if (response.data.length === 0) {
      statusMessage.textContent = `No GIFs found for "${currentSearchTerm}".`;

      return;
    }

    displayGifs(response.data);
    currentOffset += response.data.length;

    statusMessage.textContent = `Showing GIFs for "${currentSearchTerm}"`;
    loadMoreButton.hidden = false;
  } catch (error) {}
}
