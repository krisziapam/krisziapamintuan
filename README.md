# Portfolio: Kriszia Mae Pamintuan

Static website for GitHub Pages. No build step, no framework, no dependencies to install.
Open the folder in Visual Studio Code and edit the files directly.

```
index.html        Home
about.html        About
projects.html     All projects, with technology filter
project.html      One page for every project (reads js/projects-data.js, example: project.html?id=etala-v2)
skills.html       Skills & Technologies, technology-by-project table, workflow
contact.html      Contact form
css/style.css     All styles. Colors, spacing and fonts are variables at the top.
js/components.js  Shared header and footer. Edit the menu or footer here once.
js/projects-data.js  All project content (text, screenshots, tags, technology table)
js/config.js      Contact form endpoint and email address
js/main.js        Filters, project pages, image viewer, code block, contact form
images/           profile.jpg, project screenshots, e-TALA diagrams and screenshots
```

## 1. Connect the contact form (one time)

GitHub Pages cannot send email by itself, so the form uses Formspree (free plan available).

1. Create an account at https://formspree.io with kriszia.vaa@gmail.com and confirm their email.
2. Create a new form. You get a URL like `https://formspree.io/f/abcdwxyz`.
3. Open `js/config.js` and paste that URL between the quotes after `formEndpoint:`.
4. Publish, send yourself a test message and check your inbox and spam folder.

Until step 3 is done the form says it is not connected and shows your email address. It never pretends to send.

## 2. Add or edit a project

1. Open `js/projects-data.js` and copy an existing project block.
2. Change the `id` (short, lowercase, dashes), the text, the technology lists and `tags`.
3. Put screenshots in `images/projects/` and list them in `gallery` with an `alt` description.
4. Leave `repo` and `demo` as `null` until you have real links. They then stay hidden.
5. The card on the Projects page, the filter, the technology table and the project page update by themselves.

Hide or blur names and private data in every screenshot before adding it.

## 3. Publish

Upload everything to your GitHub repository (replace the old files, keep the `images` folder) and keep GitHub Pages on the main branch.
GitHub Pages cannot run PHP. A PHP demo such as e-TALA V2 needs PHP hosting (for example InfinityFree). Put its link in `demo`.

## Notes

- Technology icons on the Skills page load from the Devicon library (jsDelivr). If an icon is missing the label still shows.
- The e-TALA diagrams in `images/etala/` were drawn from `database/schema.sql` and the project files. If the schema changes, the diagram needs to be redrawn.
