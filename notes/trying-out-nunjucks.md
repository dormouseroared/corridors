---
title: Trying out nunjucks
tags: note
templateEngineOverride: njk,md
happy: true
hungry: true
---
# {{ title | upper }}

## nunjucks: listing items from an array using for

* [nunjucks documentation: for](https://mozilla.github.io/nunjucks/templating.html#for)
* set is used instead of the var in the documentation.
* also, [templateEngineOverride](https://www.11ty.dev/docs/languages/#special-case-pairing-a-templating-engine-with-md-markdown) used in front matter for nunjucks then md
* this fragment creates an array called items with objects called foo, bar, etc
* data like this can also be set up in the _data folder to be used in a similar way
* the else is a good idea, in order to create something in the event of an error
### nunjucks fragment using set and for
{% set items = [{ title: "foo", id: 1 }, { title: "bar", id: 2}, {title: "extra", id: 3}] %}

<ul>
{% for item in items %}
  <li>{{ item.title }} ({{ item.id }}) loop.index0={{ loop.index0 }}</li>
{% else %}
  <li>This would display if the 'item' collection were empty</li>
{% endfor %}
</ul>

### Inside loops, you have access to a few special variables:

* loop.index: the current iteration of the loop (1 indexed)
* loop.index0: the current iteration of the loop (0 indexed)
* loop.revindex: number of iterations until the end (1 indexed)
* loop.revindex0: number of iterations until the end (0 based)
* loop.first: boolean indicating the first iteration
* loop.last: boolean indicating the last iteration
* loop.length: total number of items

### Special case: pairing a templating engine with md Markdown

Remember that—by default—Markdown files are processed with an additional preprocessor template engine set globally with the markdownTemplateEngine configuration option. So, when using templateEngineOverride on markdown files be sure to list each templating engine you’d like to use.

For example, you may want to process njk Nunjucks first and then md markdown afterwards. Markdown is supported either by itself or with another engine. No other templating engines can be combined in this way—Markdown is the exception here. Any other combination attempt will throw an error.
<hr>

## nunjucks: if

{% if happy %}
* happy is set to true
{% endif %}

{% if hungry %}
* hungry is set to true
{% else %}
* hungry is set to false or is missing
{% endif %}

{% if happy or hungry %}
* happy or hungry are true
{% else %}
* neither happy or hungry are true
{% endif %}

{% if happy and hungry %}
* happy and hungry are true
{% else %}
* happy and hungry are not both true
{% endif %}

<hr>

## comments (should be absent! from output)

{# this comment should be stripped out completely when the template is rendered #}

<hr>

## whitespace control

### whitespace is absent

{% for i in [1,2,3,4,5] -%}
  {{ i }}
{%- endfor %}

### whitespace is present

{% for i in [1,2,3,4,5] %}
  {{ i }}
{% endfor %}

<hr>

## log

{{ collections.all | log }}