# monikasouza.cz

The website of Monika Souza, financial adviser in Brno. Plain HTML pages, published by GitHub Pages from the `main` branch to https://monikasouza.cz (see `CNAME`).

## Pages

`index.html` (home), `about.html`, `FAQ.html`, `Insights.html` (list of articles), `insight-may2026.html` (one article), `PrivacyPolicy.html`, `404.html` (shown for any missing page).

## Edit and publish

1. Edit the HTML file in any text editor. Shared styles are in `css/style.css`; small custom rules go in `css/default.css`.
2. Put new photos in `images/optimized/`, no wider than 1600 px (900 px for testimonial photos). Use lowercase file names without spaces: GitHub Pages treats `Photo.jpg` and `photo.jpg` as different files.
3. Commit and push to `main`. The site updates in about a minute.

To add an article, copy `insight-may2026.html`, change the text, and add a card for it in `Insights.html`.

## Script

`js/site.js` runs the mobile menu, the testimonial carousel, the photo/video pop-up and the fade-in animations. It is built from `js/src/site.js`. You only need to rebuild it if you change that file:

```
npm i esbuild alpinejs@3.10.3 swiper@8.4.2 scrollreveal@4.0.9 fslightbox@3.8.0
npx esbuild js/src/site.js --bundle --minify --outfile=js/site.js --loader:.css=css
```

esbuild also writes `js/site.css`, the carousel styles. Move it to `css/swiper.css`.
