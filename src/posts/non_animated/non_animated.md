---
title: Non Animated
layout: layout_home.html
description: Recommendations Of Non Animated Porn
icon: /assets/posts/icons/non_animated.png
---
{%- for post in collections.nonanimatedposts %}
- [{{ post.data.title }}]({{ post.url}})
    <!-- - Release {{page.date}} -->
{%- endfor %}