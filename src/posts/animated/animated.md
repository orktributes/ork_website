---
title: Animated
layout: layout_home.html
description: Recommendations Of Animated Porn
---
{%- for post in collections.animatedposts %}
- [{{ post.data.title }}]({{ post.url}})
    <!-- - Release {{post.data.release_date}} -->
{%- endfor %}