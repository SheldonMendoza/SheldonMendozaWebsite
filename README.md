# sheldonmendoza.com

Official personal website for Sheldon Mendoza — Creative Director, Producer,
AI Media Creator and Entrepreneur.

This is a plain static site: HTML, CSS and a small amount of vanilla
JavaScript. No build step, no framework, no backend, no database.

## Structure

```
site/
├── index.html            Home
├── about/index.html       About
├── what-i-do/index.html   What I Do
├── books/index.html       Books
├── my-work/index.html     My Work
├── contact/index.html     Contact
├── 404.html               Not found page
├── css/styles.css
├── js/main.js
├── images/                Portrait, favicons, OG image, book covers
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── _headers               Cloudflare Pages response headers
└── _redirects             Cloudflare Pages redirects (clean URLs)
```

## Publishing to GitHub

From inside this folder:

```bash
git init
git add .
git commit -m "Initial launch of sheldonmendoza.com"
git branch -M main
git remote add origin https://github.com/SheldonMendoza/SheldonMendozaWebsite.git
git push -u origin main
```

(If the repo already has commits, use `git pull --rebase origin main` first,
or push to a new branch and open a pull request instead.)

## Deploying on Cloudflare Pages

1. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages →
   Connect to Git**, and select `SheldonMendoza/SheldonMendozaWebsite`.
2. Build settings:
   - **Framework preset:** None
   - **Build command:** (leave blank)
   - **Build output directory:** `/` (the repository root — since this
     `site/` folder's contents *are* the deploy root, either point Cloudflare
     at this folder directly, or move these files to the repo root before
     connecting)
3. Deploy. Cloudflare will build and host the site on a `*.pages.dev` URL.

## Connecting sheldonmendoza.com

1. In the Pages project, go to **Custom domains → Set up a custom domain**
   and add `sheldonmendoza.com` (and `www.sheldonmendoza.com` if desired).
2. If the domain is already on Cloudflare DNS, the CNAME record is added
   automatically. If it's registered elsewhere, point the domain's
   nameservers to Cloudflare, or add the CNAME record Cloudflare provides
   at your current DNS host.
3. SSL is issued automatically once DNS resolves.

## Editing content later

Every page is plain HTML — open the relevant `index.html` and edit the text
directly. The header, footer and navigation are duplicated per page (there's
no templating layer), so if you change the navigation or footer, update it
in all seven HTML files.

### Adding more books

Each book on `/books/` and the homepage is a `.book-card` block with a
cover image, title, description and Amazon link. To add one: drop a cover
image into `images/books/`, then copy an existing `.book-card` block in
`books/index.html` (and, if it should appear on the homepage too, in
`index.html`) and update the image path, title, description and link.

## Credits

Portrait and book cover artwork provided by Sheldon Mendoza.
