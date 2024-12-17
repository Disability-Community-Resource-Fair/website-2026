---
layout: default
permalink: /
title: Home
---

<div class="header-bar">
  <img src="{{ site.logo | prepend: '/assets/img/' | relative_url | bust_file_cache }}" style="height:200px" alt="Logo is a yellow circle with a light blue ring around it containing the words Disability Community Resource Fair. The center shows a brown male hand giving an information document to a caucasian female hand wearing a red bracelet."/>
  <h1>{{ site.blog_name }}</h1>
  <h2>{{ site.blog_description }}</h2>
</div>

<div class="vendor-buttons btn-toolbar justify-content-center my-2">
  <a href="/vendors" class="btn btn-primary">View Vendors</a>
  <a href="/register" class="btn btn-success">Signup for Notifications</a>
  <a href="https://forms.gle/uH2QFZQwvccxvC2r8" class="btn btn-secondary">Vendor Registration</a>
  <a href="/sponsor" class="btn btn-info">Sponsor Registration</a>
</div>

<hr class="mt-0"/>
<div class="post">
  <article>
    <h1 class="post-title text-center">
      Welcome!
    </h1>
    <p>Probably should start with a mission statment here.</p>
    <h1 class="post-title">Event at a Glance</h1>
    <ul class="list-unstyled">
      <li><b>What:</b> Disability related resources and info</li>
      <li><b>When:</b> 1-2pm ... time and date...</li>
    </ul>
    <element class="sr-only">
    Hi screen-reader user! You found an easter egg! This text does not show up visually on the website. We are so glad you are here
    </element>
  </article>
</div>
