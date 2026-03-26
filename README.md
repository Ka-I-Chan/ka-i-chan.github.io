# Personal Website — File Structure

```
├── index.html              ← Main page (edit content here)
├── css/
│   ├── variables.css       ← Colors, fonts, spacing (theme config)
│   ├── base.css            ← Reset, body, footer, container
│   ├── nav.css             ← Navigation bar + theme toggle
│   ├── hero.css            ← Hero section: bio, blob avatar, icons
│   ├── news.css            ← Recent news strip
│   ├── publications.css    ← Pub cards (selected) + compact rows (all)
│   └── animations.css      ← Scroll reveals, entrance animations, responsive
├── js/
│   └── main.js             ← Theme, news scroll, pub tabs, scroll spy
└── images/                 ← Put your photo and publication figures here
    └── (photo.jpg, chi26.png, etc.)
```

## Quick Start — What to Edit

| What you want to change        | File to edit          |
|--------------------------------|-----------------------|
| Your name, bio, school         | `index.html` → Hero section |
| Add/remove news items          | `index.html` → News section |
| Add/remove publications        | `index.html` → Publications section |
| Colors (light/dark)            | `css/variables.css`   |
| Fonts                          | `css/variables.css` + `<link>` in `index.html` |
| Avatar size or animation       | `css/hero.css`        |
| News visible rows (default: 5) | `js/main.js` → `VISIBLE_ROWS` |
| Publication card layout        | `css/publications.css`|
| Mobile breakpoints             | `css/animations.css`  |

## Adding Your Photo

1. Put your photo in `images/photo.jpg`
2. In `index.html`, find the `.blob-shape` div and uncomment the `<img>` tag
3. In `css/hero.css`, delete the `.blob-shape::after` rule

## Deploy to GitHub Pages

1. Create a repo named `yourusername.github.io`
2. Push all these files to the repo
3. Go to Settings → Pages → Source: main branch
4. Your site will be live at `https://yourusername.github.io`
