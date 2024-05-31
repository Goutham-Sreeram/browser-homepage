window.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".cursor");
  const searchBar = document.querySelector(".search-bar");
  const suggestionsContainer = document.querySelector(".search-suggestions");

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  const interpolationFactor = 0.2;

  function updateCursorPosition() {
    cursorX += (mouseX - cursorX) * interpolationFactor;
    cursorY += (mouseY - cursorY) * interpolationFactor;

    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;

    requestAnimationFrame(updateCursorPosition);
  }

  function handleMouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }

  function handleSearch(event) {
    if (event.key === "Enter") {
      const query = searchBar.value;
      if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
          query
        )}`;
      }
    } else {
      updateSearchSuggestions();
    }
  }

  requestAnimationFrame(updateCursorPosition);
  document.addEventListener("mousemove", handleMouseMove);
  searchBar.addEventListener("keydown", handleSearch);
});
