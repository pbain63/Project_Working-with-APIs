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
  url.searchParams.set("rating", "g");      //TODO
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
}
