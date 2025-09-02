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
   - Added CSS variables for colors in `:root` for light mode.
   - Added `.dark-theme` class with CSS variables for dark mode colors.
   - Refactored existing color and background properties to use these variables.
   - Added responsive styles to show/hide the theme toggle button appropriately.

2. **HTML Updates (`index.html`):**
   - Added Google Material Icons link.
   - Added a theme toggle button inside the navigation bar.
   - Moved the toggle button inside the dropdown menu for mobile view.

3. **JavaScript Updates (`script.js`):**
   - Added logic to toggle the `.dark-theme` class on the `body` element.
   - Changed the icon between moon and sun using Material Icons.
   - Saved the user's theme preference in `localStorage`.
   - Applied the saved theme on page load.

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
