---
title: How To Make a Stopwatch with Python  
tags: 
- coding
- python
author:
- Benny
authorPfp: https://cdn.grandswager.repl.co/94ada1
category: coding
---

Generally, we are all aware of stopwatches. There is a possible way to create a stopwatch in Python. Let's start!

![Result, Full Code at the bottom.](https://cdn.grandswager.repl.co/6fcb60)

1. Open your code editor and create the file `countdown.py`.
2. First, we need to import the libraries/packages.

        import time # for tracking the time
        import os # for wiping the screen


3. Secondly, you will need to declare a variable `clearConsole`. This will be for clearing the console. This is a lambda value, also this uses `os.system`. For more information on lambda click [here](https://www.w3schools.com/python/python_lambda.asp).

        clearConsole = lambda: os.system('cls' if os.name in ('nt', 'dos') else 'clear')


4. Next, is the while statement with a try.

        while True:
          try:
            input("Press Enter to continue and ctrl+C to stop the stopwatch. ")
            start_time=time.time()
            print("Stopwatch has started")
            while True:
              clearConsole()
              print("Time elapsed:",round(time.time()-start_time,1),'secs',end='\n')
              time.sleep(0.1)


5. Finally is the exception for the try statement:

        except KeyboardInterrupt:
          clearConsole()
          print("Timer has stopped")
          end_time=time.time()
          print("The time elapsed:",round(end_time-start_time,2),'secs')
          break

### Replit Full Code
---
<iframe frameborder="0" src="https://replit.com/@grandswager/Stopwatch?embed=true" width="100%" height="500px"></iframe>