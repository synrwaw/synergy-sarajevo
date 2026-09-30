# Synergy Sarajevo Website

This is a static HTML/CSS/JavaScript starter designed for GitHub Pages.

## Folder structure

- `index.html` — homepage
- `events.html` — upcoming/past events
- `artists.html` — artist profiles
- `music.html` — mixes / SoundCloud
- `gallery.html` — event photos
- `about.html` — Synergy story
- `contact.html` — booking/contact
- `style.css` — all visual styling
- `script.js` — mobile menu + contact mailto
- `images/` — put your own JPG/PNG/WebP photos here

## Replacing the generated placeholders with real photos

The current starter uses CSS-only red/black placeholder blocks so the site works immediately.

For real photos, add files to `images/` and change the corresponding CSS backgrounds, e.g.:

```css
.photo-1 {
  background-image: url("images/synr.jpg");
  background-size: cover;
  background-position: center;
}
```

## GitHub Pages

Use a public repository on GitHub Free. In the repository go to:
Settings → Pages → Build and deployment → Source → Deploy from a branch → `main` → `/(root)` → Save.

GitHub documents this workflow here:
https://docs.github.com/en/pages/getting-started-with-github-pages


## Synergy-specific assets in this version

- `images/synergy-hero-artwork.jpg` — cropped hero artwork from the #2 visual mockup.
- `images/synergy-001-logo.png` — cropped Synergy Sarajevo event wordmark from the event artwork.

## Adding artist photos

Put your photos inside `images/`, for example `synr.jpg` and `maze.jpg`. Then in `style.css` change `.photo-1` and `.photo-2` to use `background-image: url("images/synr.jpg")` and `background-image: url("images/maze.jpg")`. Use JPG/PNG/WebP and keep filenames simple.

The artist social buttons currently open `@synr.waw` and `@daka.maze` on Instagram. If you later have actual Linktree URLs, replace those two `href` values in `artists.html`.
