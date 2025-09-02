# TODO: Add Light and Dark Mode

- [x] Update index.css
  - Define CSS variables for colors in :root for light mode.
  - Add a .dark-theme class with CSS variables for dark mode colors.
  - Refactor existing color and background properties to use these variables.

- [x] Update index.html
  - Add a theme toggle button (sun/moon icon) in the navigation bar.

- [x] Update script.js
  - Add JavaScript to toggle the .dark-theme class on the body element when the toggle button is clicked.
  - Save the user's theme preference in localStorage.
  - On page load, apply the saved theme preference.
