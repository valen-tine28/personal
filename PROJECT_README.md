# Personal Website Project

## Overview
This is a personal website project built with HTML, CSS, and JavaScript. It features a responsive design with sections for home, about, portfolio, and contact. The site includes a light and dark mode toggle for better user experience. For detailed information about the light/dark mode feature, see README.md.

## Technologies Used
- **HTML5**: For structuring the web pages.
- **CSS3**: For styling, including responsive design and animations.
- **JavaScript**: For interactive features like the theme toggle and menu functionality.

## Libraries and Dependencies
- **Font Awesome**: Used for icons in the contact section and navigation.
- **Feather Icons**: Used for the theme toggle button (moon/sun icons).
- **Google Fonts**: For custom fonts (not explicitly linked in the code, but can be added).

## Project Structure
```
ucheanu/
├── index.html          # Main HTML file
├── index.css           # Stylesheet
├── script.js           # JavaScript for interactivity
├── README.md           # Existing README for light/dark mode feature
├── PROJECT_README.md   # This file
├── TODO.md             # Task list for the project
├── package.json        # NPM package file
├── package-lock.json   # NPM lock file
├── assist/
│   └── my logo.jpg     # Logo image
└── project/            # Additional project files (if any)
```

## Installation and Setup
1. Clone or download the project files.
2. Open `index.html` in a web browser to view the site.
3. No server is required as it's a static website.

If you have Node.js installed and want to use a local server:
1. Run `npm install` to install dependencies (though minimal).
2. Use a simple HTTP server like `python -m http.server` or `npx serve`.

## Features
- **Responsive Navigation**: Hamburger menu for mobile devices.
- **Light/Dark Mode Toggle**: Switch between themes with persistence using localStorage.
- **Smooth Animations**: Fade-in effects for sections and hover animations.
- **Contact Links**: Direct links to email, phone, and social media.
- **Hero Section**: Background image with overlay text.

## Steps Taken for Implementation
1. **Initial Setup**:
   - Created basic HTML structure with header, navigation, sections, and footer.
   - Added CSS for styling and responsiveness.

2. **Navigation and Responsiveness**:
   - Implemented hamburger menu toggle using JavaScript.
   - Added media queries for mobile and desktop views.

3. **Theme Toggle Feature**:
   - Defined CSS variables for light and dark themes.
   - Added theme toggle button with Feather Icons.
   - Implemented JavaScript to toggle classes and save preference.

4. **Styling and Animations**:
   - Used CSS animations for section fades and hover effects.
   - Ensured consistent theming with CSS variables.

5. **Content and Assets**:
   - Added placeholder content for about, portfolio, and contact sections.
   - Included logo image in the navigation.

## Usage
- **Viewing the Site**: Open `index.html` in any modern web browser.
- **Theme Toggle**: Click the sun/moon icon in the navigation to switch themes.
- **Mobile Navigation**: On mobile, click the hamburger menu to expand navigation.
- **Contact**: Use the provided links to email or call.

## Browser Compatibility
- Tested on modern browsers like Chrome, Firefox, Safari, and Edge.
- Responsive design works on desktop, tablet, and mobile devices.

## Contributing
If you'd like to contribute:
1. Fork the repository.
2. Make your changes.
3. Test thoroughly.
4. Submit a pull request.

## License
This project is licensed under the ISC License.

## Recent Updates
- Updated dependencies to reflect actual icon libraries used (Feather Icons for theme toggle).
- Added reference to README.md for detailed light/dark mode documentation.

## Future Enhancements
- Add more interactive elements, such as a contact form with validation.
- Implement a blog section for articles or updates.
- Optimize images and assets for better performance.
- Add accessibility features like ARIA labels and keyboard navigation.

## Notes
- The site is static and does not require a backend.
- All assets (images, icons) are either local or loaded via CDN.
- The theme preference is saved locally in the browser's localStorage.
