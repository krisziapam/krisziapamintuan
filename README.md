# Portfolio: Kriszia Mae Pamintuan

Static site for GitHub Pages. No build step and no dependencies.

```
index.html          Home page (all sections)
project.html        Project detail page, filled from js/projects-data.js
css/style.css       All styles (colors and spacing are variables at the top)
js/config.js        Contact form endpoint and email
js/projects-data.js Project data
js/main.js          Navigation, project pages, contact form
images/             profile.jpg and project screenshots
favicon.svg
```

## 1. Connect the contact form (one time)

GitHub Pages cannot send email by itself, so the form uses Formspree (free plan available).

1. Create an account at https://formspree.io using kriszia.vaa@gmail.com and confirm the email they send you.
2. Create a new form. Formspree gives you a URL like `https://formspree.io/f/abcdwxyz`.
3. Open `js/config.js` and paste that URL between the quotes after `formEndpoint:`.
4. Publish, send yourself a test message, and check your inbox (and spam folder).

Until step 3 is done, the form shows an honest "not connected" message and does not pretend to send. Free plans have a monthly submission limit.

## 2. Add a project

1. Copy one project object in `js/projects-data.js` and give it a new `id`.
2. Fill in the fields. Leave `repo` and `demo` as `null` until you have real links. Empty fields are not shown.
3. Put screenshots in `images/projects/` and list them like this:
   `images: [{ src: "images/projects/name-1.jpg", alt: "What the screenshot shows" }]`
4. The card on the home page and the page `project.html?id=your-id` appear automatically.

Before you publish a screenshot, check that it shows no real names, phone numbers or private records.

## 3. Publish

Upload all files and folders to your GitHub repository (replace the old ones) and keep GitHub Pages pointed at the main branch.
PHP projects such as e-TALA V2 cannot run on GitHub Pages. If you host a demo on InfinityFree, put its link in `demo`.
