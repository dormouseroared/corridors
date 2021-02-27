---
title: date format
date: 2021-02-27
---
This is the first note to document using eleventy for the corridors blog. These notes won't be explicitly displayed on the corridors website, but they are available if needed.

When displaying the date the output is very, very long, so this method seems to work and we have a more readable date.

This [tutorial](https://w3collective.com/add-blog-functionality-eleventy/) has some instructions for adding an NPM module `eleventy-plugin-date` to handle date formats, including setting up `.eleventy.js` and using `readableDate` to format a date.

More details [here](https://github.com/NotWoods/11ty-plugins/tree/main/packages/date)

Don't know if other date formats are available, but the default `27 February 2021` when using `readableDate` is a great improvement.