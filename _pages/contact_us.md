---
layout: page
permalink: /contact-us/
title: Contact Us
nav: true
nav_order: 4
---

<form
  action="https://formcarry.com/s/Y80V8S1AIqX"
  class="formcarryform"
  enctype="multipart/form-data">

  <div class="form-group">
    <label for="Name">Name</label>
    <div class="row pb-3">
      <div class="col">
        <input
          type="text"
          class="form-control"
          name="first_name"
          placeholder="First name">
      </div>
      <div class="col">
        <input
          type="text"
          class="form-control"
          name="last_name"
          placeholder="Last name">
      </div>
    </div>
  </div>
  <div class="form-group">
    <label for="CommType">I would like a response via...</label>
    <select
      id="CommType"
      class="form-control"
      name="comm_type">
      <option
        selected
        disabled
        value="">Choose...</option>
      <option>Email</option>
      <option>Phone call</option>
      <option>Text message</option>
    </select>
  </div>

  <div class="form-group">
    <label for="email_input">Email address</label>
    <input
      type="email"
      class="form-control"
      id="email_input"
      name="email"
      aria-describedby="emailHelp">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  <div class="form-group">
    <label for="phone_input">Phone Number</label>
    <input
      type="text"
      class="form-control"
      name="phone"
      id="phone_input">
  </div>

  <div class="form-group">
    <label for="question">Question</label>
    <textarea
      type="text"
      class="form-control text-wrap"
      placeholder="Ask your question here..."
      name="question"
      rows="4"></textarea>
  </div>

  <div class="form-group custom-control custom-checkbox my-3">
    <input
      type="checkbox"
      class="custom-control-input"
      name="receive_emails"
      id="receive_emails">
    <label class="custom-control-label" for="receive_emails">I would like to receive email reminders for this event</label>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>