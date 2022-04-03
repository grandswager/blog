---
title: How To Make a Countdown with HTML, CSS, and JS
tags: 
- coding
- html, css, js
author:
- Benny
- Credits to w3schools.com
authorPfp: https://cdn.grandswager.repl.co/94ada1
---

![Result, Full Code at the bottom.](https://cdn.grandswager.repl.co/a07279) 

Today I will be showing all of you how to make a timer with html css, and javascript.

1. Open your code editor and create a file called `countdown.html`.
2. In the HTML document, type in this code for the HTML:

        <!DOCTYPE HTML>
        <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
        </style>
        </head>
        <body>
        
        <p id="demo"></p>
        
        <script>
   
        </script>
   
        </body>
        </html>

4. Now inside of the `<style></style>` tags enter this code:

        p {
          text-align: center;
          font-size: 60px;
          margin-top: 0px;
        }

5. Now in between the tags `<script></script>` enter this code:

        // Set the date we're counting down to
        var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
        
        // Update the count down every 1 second
        var x = setInterval(function() {
        
          // Get today's date and time
          var now = new Date().getTime();
            
          // Find the distance between now and the count down date
          var distance = countDownDate - now;
            
          // Time calculations for days, hours, minutes and seconds
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
          // Output the result in an element with id="demo"
          document.getElementById("demo").innerHTML = days + "d " + hours + "h "
          + minutes + "m " + seconds + "s ";
            
          // If the count down is over, write some text 
          if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "FINISHED";
          }
        }, 1000);

6. Now enjoy your countdown!
7. To change when the timer finishes, change in the javascript the countDownDate.
8. - Credits to w3schools.

---
### Codepen:
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="YzYQLeN" data-user="bennyscomputergaming" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/bennyscomputergaming/pen/YzYQLeN">
  Countdown</a> by Benny (<a href="https://codepen.io/bennyscomputergaming">@bennyscomputergaming</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>