/* ───────────────────────────────────────────────────────────────
   GROWTH DARJI — INSIGHTS INDEX  (the single source of truth)

   This one file controls every article shown on the homepage
   AND on the full Insights page. You only ever edit this list.

   ▶ TO PUBLISH A NEW ARTICLE (2 steps):
     1. Put the article's .html file inside the  /posts  folder
        e.g.   posts/my-new-article.html
     2. Add ONE entry to the TOP of the list below, then save.
        Newest 'date' automatically appears first everywhere.

   ▶ FIELD GUIDE (per article):
     title    – the headline shown on the card
     excerpt  – 1–2 plain sentences summarising the piece
     topic    – ONE category word, e.g. "Retention"
                (this is what the topic filters are built from)
     date     – "YYYY-MM-DD"
     read     – e.g. "6 min"   (optional)
     url      – path to the file, always "posts/<filename>.html"

   Tip: keep 'topic' spelled consistently (e.g. always "Retention",
   not "retention" / "Retention systems") so filtering groups them.
   ─────────────────────────────────────────────────────────────── */

window.POSTS = [
  {
    title: "Retention is the holy grail. Most brands are digging in the wrong place.",
    excerpt: "Every founder says they care about it — almost none build for it. Why 80% of budgets chase acquisition, and where the real profit is actually buried.",
    topic: "Retention",
    date: "2026-06-20",
    read: "6 min",
    url: "posts/retention-holy-grail.html"
  }
  // ,{ title:"...", excerpt:"...", topic:"...", date:"YYYY-MM-DD", read:"5 min", url:"posts/next-article.html" }
];
