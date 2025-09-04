# Light and Dark Mode Feature for Personal Website

## Overview
This project enhancement adds a light and dark mode toggle feature to the personal website. The toggle allows users to switch between light and dark themes for better accessibility and user experience.

## Features Implemented
- Defined CSS variables for light and dark themes in `index.css`.
- Added a theme toggle button using Material Icons.
- Implemented JavaScript in `script.js` to toggle themes and save user preference in `localStorage`.
- Responsive design: The theme toggle button is inside the dropdown menu on mobile (max-width: 600px) and visible in the navigation bar on larger screens.

## Steps Taken

1. **CSS Updates (`index.css`):**
   - **Added CSS Variables for Light Mode:** In the `:root` selector, defined custom properties (variables) for various colors used throughout the site, such as `--bg-color: #f4f4f4` for background, `--text-color: #333` for text, `--header-bg: #333` for header background, etc. These variables ensure consistent theming and easy switching between themes.
   - **Added Dark Theme Variables:** Created a `.dark-theme` class with overridden CSS variables for dark mode, e.g., `--bg-color: #121212`, `--text-color: #e0e0e0`, `--header-bg: #1e1e1e`. This class is applied to the `body` element to switch themes.
   - **Refactored Existing Properties:** Updated all color and background properties in the CSS to use these variables instead of hardcoded values. For example, `body { background-color: var(--bg-color); color: var(--text-color); }` and `header { background-color: var(--header-bg); }`. This allows the theme to change dynamically by toggling the class.
   - **Added Responsive Styles:** Used media queries to control the visibility of the theme toggle button. On screens wider than 600px, the button is shown in the navigation bar. On mobile (max-width: 600px), it's hidden in the nav and shown inside the dropdown menu for better UX. Added styles like `.theme-toggle-btn { display: block; }` in mobile media query and `.theme-toggle-li { display: block; }` to position it correctly.

2. **HTML Updates (`index.html`):**
   - **Added Feather Icons Link:** Included the Feather Icons library via `<script src="js/feather.min.js"></script>` in the head to provide scalable vector icons for the theme toggle button (moon and sun icons).
   - **Added Theme Toggle Button:** Inserted a button with id `theme-toggle` inside the navigation list (`<ul id="nav-links">`), wrapped in a list item with class `theme-toggle-li`. The button contains an `<i data-feather="moon"></i>` icon, which Feather replaces with the actual SVG icon.
   - **Mobile Responsiveness:** The button is placed inside the navigation list, so on mobile, when the hamburger menu is toggled, the button appears in the dropdown menu. This ensures accessibility on small screens without cluttering the desktop nav.

3. **JavaScript Updates (`script.js`):**
   - **Theme Toggle Logic:** Added an event listener to the `theme-toggle` button. On click, it checks if the body has the `dark-theme` class. If yes, removes it (switches to light); if no, adds it (switches to dark). This toggles the theme instantly.
   - **Icon Switching:** Used Feather Icons to change the icon dynamically. In the `applyTheme` function, set `icon.setAttribute('data-feather', 'moon')` for dark mode and `'sun'` for light mode, then called `feather.replace()` to update the icon.
   - **Persistence with localStorage:** On theme change, saved the current theme to `localStorage.setItem('theme', newTheme)`. On page load, retrieved the saved theme with `localStorage.getItem('theme')` and applied it using `applyTheme(savedTheme)`, ensuring the user's preference persists across sessions.
   - **Initialization:** Called `feather.replace()` at the start to initialize icons. The `applyTheme` function handles both initial load and toggles, logging to console for debugging.

## How to Use
- Open `index.html` in a browser.
- Click the theme toggle button (moon/sun icon) to switch between light and dark modes.
- On mobile devices or narrow screens, open the dropdown menu to access the theme toggle.
- The selected theme preference is saved and applied on subsequent visits.

## Testing
- Tested theme toggle functionality on desktop and mobile views.
- Verified visual consistency of themes across all sections.
- Confirmed persistence of theme preference on page reload.
- Checked responsiveness and toggle button placement on different screen sizes.

## Dependencies
- Google Material Icons (loaded via CDN).
- Font Awesome (already included for other icons).

## Notes
- The theme toggle button uses Material Icons for a modern and consistent look.
- The toggle button is hidden outside the menu on mobile and shown inside the dropdown menu for better UX.

---

This README documents the implementation and usage of the light/dark mode feature added to the personal website.
