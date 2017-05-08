# 100 Days Of Code - Log

### Day 1: May 1, 2017

**Today's Progress**: I cloned Kallaway's 100 Days of Code repo and will be logging my progress here for the next 100\(!\) days. I worked on expanding my simple map to take an address that is passed via an input field. I have not been able to update the address variable with JavaScript so that it works.   

**Thoughts:** I need to gain more practice in using JavaScript to store information from field elements and calling functions through click events.

**Link to work:** [Simple Map](https://github.com/ccania/map-simple.git)

### Day 2: May 2, 2017 

**Today's Progress**: I worked out a solution in JavaScript to take the value of an input field and print it to an element. I know this is an incredibly basic cornerstone in JavaScript, but it was tripping me up in expanding my [current map project](https://github.com/ccania/map-places.git). Now that I have it figured out, I should be able to use the same logic to allow a user to enter a location into a field for my Google map, and have the map render the location based on a given location. And guess what? IT WORKED! :clap: I ended up calling initMap() from a submit button that passed the value of an input field into a variable that points the map at the given location.   

**Thoughts:** Sometimes you have to take a step back and concentrate on the basics in order to get to the next level of more sophisticated coding. 

**Link(s) to work:** 
1. [Click Function - practice work](https://github.com/ccania/100-days-of-code/blob/ee8575c69e0b52f12e21d9ca3e0f98a4ddfe7641/100DaysPractice/clickfunctions.html)
2. [Places Locator Map](https://github.com/ccania/map-places.git)

### Day 3: May 3, 2017 

**Today's Progress**: I am working on solving the third practice item in the second chapter of Haverbeke's [Eloquent Javascript](http://eloquentjavascript.net/02_program_structure.html). I am working on loops within loops, and how to output a specific variable based on if the character position is odd or even. I think I'm close to the solution, but I am struggling to put it all together.

**Thoughts:** If it takes an average of 10,000 hours for mastery, at this rate of an hour a day, I will have something to look forward to on September 18, 2044.

**Link to work:** 
Nothing to see here

### Day 4: May 4, 2017 

**Today's Progress**: I worked some more on solving part 1 of Haverbeke's Chess Board problem. In this problem I am to create and 8X8 grid in which the odd rows are offset by a space, and each row contains a pattern of alternating hashes and spaces. I have conceived that the solution involves a loop within a loop, where the outer loop prints out an 8 character line, and the inner loop prints a string of 8 characters, alternating between a space and a hash. I found a very helpful code example of how nested loops operate and used this code as a framework for my solution. The challenge that I am encountering is that my solution works okay when I used document.write, plus HTML for line breaks and spaces, but when I console log, my output is all on individual lines. I'm hoping that that is the result of a setting in Chrome Dev Tools. Take a look at my [Chess Board solution](https://github.com/ccania/100-days-of-code/blob/ee8575c69e0b52f12e21d9ca3e0f98a4ddfe7641/100DaysPractice/chessboard.html) in process.

**Thoughts:** Sometimes what seems impossible is less so once you try. I am going to continue working through Eloquent Javascript between larger projects. 

**Link to work:**
[Chess Board](https://github.com/ccania/100-days-of-code/blob/ee8575c69e0b52f12e21d9ca3e0f98a4ddfe7641/100DaysPractice/chessboard.html)


### Day 5: May 5, 2017 

**Today's Progress**: I didn't have much time today, but I reviewed and tested the examples of functions and scope in chapter 3 of [Eloquent Javascript](http://eloquentjavascript.net/02_program_structure.html).

**Thoughts:** I learned the power of var in setting a variable. I didn't realize that var X = something is different from  x = something. I'm finding that [Eloquent Javascript](http://eloquentjavascript.net/02_program_structure.html) is great for teaching the nuances of JavaScript.

**Link to work:** Nothing to see here.

### Day 6: May 6, 2017 

**Today's Progress**: Tonight I worked on running a geolocation plugin for an app that I am building using Apache Cordova. I'm having a difficult time getting my Android emulator to render the map. I'm not sure if it's my code or the emulator. The code I am using was for a different project and I'm trying to port it into the app. I suspect that there is something small that I have overlooked. The alternative is that I need to set a latitude and longitude in the emulator in a different way. 

**Thoughts:** My next step will be to simplify my code just get the app to print out a latitude and longitude and, for now, disregard plotting a map.

**Link to work:** [Cordova App](https://github.com/ccania/100-days-of-code/tree/master/cordova-app)

### Day 7: May 7, 2017 

**Today's Progress**: I had success with the geolocation plugin for my Cordova app. I simplified the JavaScript and used a solution from [this tutorial](https://www.tutorialspoint.com/cordova/cordova_geolocation.htm). I think the ultimate issue was that I did not have high accuracy turned on within the Android Emulator. Upon turning it on, I was able to push my location information to trigger an alert. 

**Thoughts:** My next step will be to customize my geolocation code to do something more interesting, like plot the device's distance to a specific location. I would like to be able to find my errors faster. 

**Links to work:** 
1. [Cordova App](https://github.com/ccania/100-days-of-code/tree/master/cordova-app)
2. [Geolocation running in app (screenshot)](https://github.com/ccania/100-days-of-code/blob/master/cordova-app/geolocation-example.png)

