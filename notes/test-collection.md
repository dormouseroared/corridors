---
title: test collection
breed: whippet
name: dasher
tags: [dog, pet, note]
debugFlag: true
---

{% for dog in collections.dog %}

<p>{{ dog.data.name }} is a {{ dog.data.breed }}</p>

{% if debugFlag %}
<hr>
<h3>debug:</h3>
<p>url: {{ dog.url }}</p>
<p>fileSlug: {{ dog.fileSlug }}</p>
<p>date: {{ dog.date }}</p>
<pre><p>data dump: {{ dog.data | dump | safe }}</p></pre>
{% endif %}

{% endfor %}
