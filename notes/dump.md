---
title: dump eleventy objects
tags: note
---

This [article](https://justbea.dev/notes/nunjucks-dump/) has a change to be added to `.eleventy.js` to allow the dump seen below to work.
This was tried in the collection of posts loop and seemed to work
`<pre>{{ post | dump }}</pre>`

perhaps a front matter variable like debugFlag could be tried out and the dump could be dependent on it.