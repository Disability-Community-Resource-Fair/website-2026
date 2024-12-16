---
layout: default
permalink: /
title: Home
# nav: true
# nav_order: 1
# toc:
#   sidebar: left
pagination:
  enabled: false
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1 # The number of links before the current page
    after: 3 # The number of links after the current page
---

{% assign blog_name_size = site.blog_name | size %}
{% assign blog_description_size = site.blog_description | size %}

{% if (blog_name_size > 0 or blog_description_size > 0) %}

<div class="header-bar">
  <img src="{{ site.logo | prepend: '/assets/img/' | relative_url | bust_file_cache }}" style="height:200px"/>
  <h1>{{ site.blog_name }}</h1>
  <h2>{{ site.blog_description }}</h2>
</div>
{% endif %}

{% if site.display_tags and site.display_tags.size > 0 or site.display_categories and site.display_categories.size > 0
%}

<div class="tag-category-list">
  <ul class="p-0 m-0">
    {% for tag in site.display_tags %}
    <li>
      <i class="fa-solid fa-hashtag fa-sm"></i> <a
        href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">{{ tag | replace: "_"," " }}</a>
    </li>
    {% unless forloop.last %}
    <p>&bull;</p>
    {% endunless %}
    {% endfor %}
    {% if site.display_categories.size > 0 and site.display_tags.size > 0 %}
    <p>&bull;</p>
    {% endif %}
    {% for category in site.display_categories %}
    <li>
      <i class="fa-solid fa-tag fa-sm"></i> <a
        href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}">{{ category | replace: "_"," " }}</a>
    </li>
    {% unless forloop.last %}
    <p>&bull;</p>
    {% endunless %}
    {% endfor %}
  </ul>
</div>
{% endif %}

<div class="vendor-buttons">
  <a href="/vendors" class="btn btn-primary">View Vendors</a>
  <a href="/vendors/register" class="btn btn-secondary">Register as a Vendor</a>
  <a href="/register" class="btn btn-success">Signup for Notifications</a>
</div>
