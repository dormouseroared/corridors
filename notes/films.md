---
title: Using external data api (see _data folder for fetch)
tags: note
---
## Star Wars Films

{% for film in films %}
* {{ film.title }}
{% endfor %}

This is from [Raymond Camden](https://www.raymondcamden.com/2019/10/12/why-im-digging-eleventy) and included `npm install node-fetch` and changing the _data films.js to use a revised url for the API. 