---
layout: page
permalink: /contact-us/
title: Contact Us
nav: true
nav_order: 4
---
## Contact Us
<form>

 <div class="form-group">  
   <label for="Name">Name</label>
   <div class="row pb-3">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name">
    </div>
  </div>

 <div class="form-group">
    <label for="CommType">I would like a response via...</label>
    <select id="CommType" class="form-control">
    <option selected disabled value="">Choose...</option>
    <option>Email</option>
    <option>Phone call</option>
    <option>Text message</option>
    </select>
 </div>

 <div class="form-group">
   {% if "CommType" == Email %}
        <input type="email" class="form-control" placeholder="Email address">
   {% else %}
        <input type="text" class="form-control" placeholder="Else">
   {% endif %}    
 </div>

 <div class="form-group">
    <input type="text" class="form-control py-5 text-wrap" placeholder="Ask your question here...">
 </div>

 <div class="form-group form-check my-3">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">I would like to recieve email reminders for this event</label>
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>