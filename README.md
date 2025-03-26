# Dev Taluja - AI Developer Portfolio Website

A modern, responsive portfolio website showcasing Dev Taluja's skills, experience, and projects as an AI Developer/Designer.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations and transitions
- Dark mode toggle
- Projects showcase page
- Interactive elements
- Smooth scrolling navigation
- Automatic random placeholder images using Unsplash API

## Project Structure

- `index.html` - Main resume page
- `projects.html` - Projects showcase page
- `styles.css` - Main stylesheet
- `projects.css` - Projects page specific styles
- `script.js` - JavaScript for interactive features
- `placeholder.js` - Script to generate random placeholder images

## How to Run

This is a static HTML website that can be opened directly in any modern web browser.

1. Download or clone this repository
2. Open `index.html` in your web browser
3. Navigate through the website using the navigation menu

## Image Placeholders

This website automatically generates random placeholder images using the Unsplash API:

- The profile image in the hero section is a random professional portrait
- Project images are random technology/AI related images
- Background images for the hero and contact sections are also randomly generated

If you want to use your own images instead of the random placeholders:

### Using Your Own Profile Image

Add your profile photo as `profile.jpg` in the root directory and modify the `profile-shape` in styles.css:

```css
.profile-shape {
    /* ... existing styles ... */
    background-image: url('profile.jpg');
}
```

### Using Your Own Project Images

Replace the placeholder.js script with your own project images:

1. Add project1.jpg through project6.jpg to the root directory
2. Remove the placeholder.js script from both HTML files

## Customization

You can easily customize this website by:

1. Changing the colors in the `:root` section of `styles.css`
2. Updating the content in the HTML files
3. Adding or removing sections as needed
4. Modifying the project cards in `projects.html`

## Browser Compatibility

This website is compatible with all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Credits

- FontAwesome for icons
- Google Fonts for typography
- Unsplash for placeholder images

## License

This project is open source and available under the MIT License. 