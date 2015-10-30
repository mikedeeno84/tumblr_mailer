  <html>
  <head><meta charset='utf-8'></head>
  <body>
    <p>Hey Yo!, yo <%= firstName %>!,</p>
    <br>
    <p>
      Whattup?!? How are ya doing? I'm doing aight. It's been while since we last talked, like <%= numMonthsSinceContact %> months. I'm learning to code full-time at Fullstack Academy and enjoying my time.  This is an auto generated email I learned to make and send... isn't zat weird?
    </p>
    <p>
      I've been blogging about my experiences at Fullstack on my blog. 
      Check out my most recent posts; 
      <ul>
      <% for(var m=0; m<latestPosts.length; m++) {%>
         <li><a href=<%= latestPosts[m].post_url %>> <%= latestPosts[m].title %></a>  </li>
      <% } %>
    </ul>
    </p>
    <p>
      Talk soon,<br>
      MikeD
    </p>
  </body>
  </html>
