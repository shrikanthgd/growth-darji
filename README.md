# Growth Darji — Site & Insights (How to publish)

This is your live website plus a self-updating Insights (blog) system.
You never touch the design. To publish an article you do **two small things**.

---

## 1. How the files fit together

```
your-repo/
├─ index.html        ← homepage (shows the 3 newest articles in the Insights section)
├─ insights.html     ← the full Insights archive, with topic filters
├─ posts.js          ← THE LIST. The only file you edit to publish. (source of truth)
└─ posts/            ← every article lives here, one .html file each
   └─ retention-holy-grail.html
```

- `posts.js` holds one entry per article. **Both** the homepage and the archive read
  from it automatically, so you only ever update this one list.
- Each actual article is its own standalone `.html` file inside the `posts/` folder.
- The homepage shows the **3 most recent**; “View all insights →” opens `insights.html`,
  which shows **everything**, with one filter button per topic. So your “separate,
  topic-wise blog section” already exists and grows on its own as you add posts.

---

## 2. Publishing a new article (the whole job)

**Step A — add the article file**
Put your new Claude-made HTML file in the `posts/` folder, e.g.
`posts/positioning-playbook.html`. Use a short, lowercase, hyphenated filename
(this becomes the web address: `growthdarji.com/posts/positioning-playbook.html`).

**Step B — add one entry to `posts.js`**
Open `posts.js` and add a block at the **top** of the list:

```js
{
  title:   "Positioning is a growth problem in disguise",
  excerpt: "One or two plain sentences that sell the click.",
  topic:   "Positioning",          // becomes a filter button on insights.html
  date:    "2026-07-02",           // YYYY-MM-DD — newest sorts to the top
  read:    "5 min",                // optional
  url:     "posts/positioning-playbook.html"
},
```

Keep the comma between entries. That’s it — save, push (next section), done.
The card appears on the homepage and in the archive, and a “Positioning” filter
button shows up automatically the first time you use a new topic.

> Tip: spell each `topic` the same way every time (“Retention”, not sometimes
> “retention” or “Retention Systems”) so articles group under one filter.

---

## 3. Pushing to GitHub → Vercel auto-deploys

Vercel watches your GitHub repo. Every push to the main branch redeploys the live
site in ~30–60 seconds. You have two ways to push.

### Option 1 — GitHub website (easiest, no tools to install)

Uploading the article file:
1. Go to your repo on github.com → open the `posts` folder.
2. **Add file → Upload files** → drag in your new `.html` → **Commit changes**.

Editing the list:
3. Back in the repo root, click `posts.js` → the **pencil (Edit)** icon.
4. Add your new entry at the top of the list → **Commit changes**.

Vercel deploys automatically. Refresh your site after a minute.

### Option 2 — On your computer (Git), once you’re comfortable

One-time setup:
```bash
git clone https://github.com/<you>/<your-repo>.git
cd <your-repo>
```

Each time you publish:
```bash
# 1. drop the new article into the posts/ folder, and edit posts.js
git add .
git commit -m "New insight: positioning playbook"
git push
```
Vercel redeploys on push.

---

## 4. Good habits

- **Filenames:** lowercase, hyphenated, no spaces (`retention-holy-grail.html`).
- **One topic per article** keeps the filters clean.
- **Newest date first** is automatic — you don’t have to reorder the list.
- **Test locally:** if you ever want to preview before pushing, run
  `python3 -m http.server` in the repo folder and open `http://localhost:8000`.
  (Opening files directly by double-click also works for a quick check.)
- **Removing a post:** delete its entry from `posts.js` (optionally delete the file
  in `posts/`), commit, push.

---

## 5. When you have lots of articles

Nothing changes in your workflow — the archive page keeps scaling:
- New topics automatically become new filter buttons.
- The homepage always shows just the latest 3 so it stays tight.
- If you later want sub-pages per topic (e.g. `/insights/retention`), search,
  or pagination, that’s a small add-on to `insights.html` — the data already
  lives in `posts.js`, so the foundation is ready.
