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
  <img src="{{ site.logo | prepend: '/assets/img/' | relative_url | bust_file_cache }}" style="height:200px" alt="Logo is a yellow circle with a light blue ring around it containing the words Disability Community Resource Fair. The center shows a brown male hand giving an information document to a caucasian female hand wearing a red bracelet."/>
  <h1>{{ site.blog_name }}</h1>
  <h2>{{ site.blog_description }}</h2>
</div>
{% endif %}

<div class="vendor-buttons btn-toolbar justify-content-center my-2">
  <a href="/vendors" class="btn btn-primary">View Vendors</a>
  <a href="/register" class="btn btn-success">Signup for Notifications</a>
  <a href="/vendors/register" class="btn btn-secondary">Vendor Registration</a>
  <a href="/sponsor" class="btn btn-info">Sponsor Registration</a>
</div>

<hr class="mt-0"/>
<div class="post">
  <header class="post-header text-center">
    <h1 class="post-title">
      Welcome!
    </h1>
  </header>
  <p class="home-body">Probably should start with a mission statment here.</p>
  <h1 class="post-title text-center">Event at a Glance</h1>
  <ul class="list-unstyled home_body">
    <li><b>What:</b> Disability related resources and info</li>
    <li><b>When:</b> 1-2pm ... time and date...</li>
  </ul>
  <element class="sr-only">
  Hi screen-reader user! You found an easter egg! This text does not show up visually on the website. We are so glad you are here
  </element>
</div>
