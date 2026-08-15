const API_KEY = "JxoghZbdsbGeUxaK82pDSgRxEX40cj8U";
const GIPHY_SEARCH_URL = "https://api.giphy.com/v1/gifs/search";

const searchForm = document.getElementById("gif-search-form");
const searchInput = document.getElementById("gif-search");
const statusMessage = document.getElementById("status-message");
const gitContainer = document.getElementById("gif-container");
const loadMoreButton = document.getElementById("load-more-button");

const GIFS_PER_PAGE = 12;

let currentSearchTerm = "";
let currentOffset = 0;

// Fetch GIFs from GIPHY
async function fetchGifs(searchTerm, offset = 0) {

}

// Search for GIFs
async function searchGifs() {
    const searchTerm = searchInput.value.trim();

}