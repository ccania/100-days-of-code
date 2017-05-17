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

### Day 8: May 8, 2017 

**Today's Progress**: As a follow-up to yesterday's project, I customized the JavaScript for my geolocation plugin to plot the distance between the device and the coordinates of a restaurant in New Hampshire. The code returns the device's location, calculates the distance in kilometers, and plots a marker for the device and the restaurant on a map. In addition to these changes to geolocation, I moved the navigation to the footer, updated text to the dialogs plugin to something taco-related (sticking to my Mexican restaurant theme), and added a brief restaurant description to the about screen.

**Thoughts:** I would like to next convert kilometers to miles and shorten the latitude and longitude output to three decimal points.

**Links to work:** 
1. [Cordova App](https://github.com/ccania/100-days-of-code/tree/master/cordova-app)
2. [Geolocation map and markers (screenshot)](https://github.com/ccania/100-days-of-code/blob/master/cordova-app/mapmarkers.png)
3. [Geolocation coordinates and distance (screenshot)](https://github.com/ccania/100-days-of-code/blob/master/cordova-app/coordsanddistance.png)
4. [Dialog plugin (screenshot)](https://github.com/ccania/100-days-of-code/blob/master/cordova-app/dialogs.png)
5. [About screen (screenshot)](https://github.com/ccania/100-days-of-code/blob/master/cordova-app/about.png)

### Day 9: May 9, 2017 

**Today's Progress**: I began working through Free Code Camp's front end developer course. I'm nearly done with the HTML5 and CSS part.

**Thoughts:** The first section of the front end developer course is a little mind-numbing for me since I've been working in HTML/CSS for so long. I'm eager to learn new skills. The Bootstrap section will be a good refresher, but I'm most excited for the jQuery and JavaScript portions. No doubt the difficulty level will ratchet up from here.

**Links to work:** 
Nothing to see here

### Day 10: May 10, 2017 

**Today's Progress**: I finished up HTML/CSS and Responsive Design with Bootstrap in the Free Code Camp front end developer lineup. Onto jQuery.

**Thoughts:** Yay! I made it 10 days! Looking forward to the jQuery and JavaScript portions of Free Code Camp. My shoulders and neck hurt from couch coding. 

**Links to work:** 
Nothing to see here

### Day 11: May 11, 2017 

**Today's Progress**: I took a break from Free Code Camp and built a random color generator which consists of a nested loop that randomly generates a hexadecimal code and changes a div to that color on button click. The program isn't "pretty" yet, but it's functional! First, I built a simple loop that looked at the following string, (the base 16 characters that comprise a Hex code): "0123456789ABCDEF" and created another random six character string from it to produce the hex code. Then, I wondered if maybe each position of the hex code should be created from a random character from the string above, so I created a nested loop in which the inner loop generates one random character from the string above, and the outer loop repeats the process six times.  

**Thoughts:** I'm excited about the color generator, and am going to look around to see if there are other, more elegent ways to create something similar. Next, I will work on adding more sophisticated styling to the generator. 

**Link to work:** 
1.  [Color Generator](https://github.com/ccania/100-days-of-code/tree/master/color-generator)
2.  [Try Color Generator in your browser](http://htmlpreview.github.io/?https://github.com/ccania/100-days-of-code/blob/master/color-generator/colorgenerator.html)

### Day 12: May 12, 2017 

**Today's Progress**: I worked on styling my random color generator using Materialize. I added a card with a button to change the color and a styled display for the hexadecimal code which is applied to the page background.

**Thoughts:** Materialize is super stylish. I'd like to work more with it. I especially enjoy its button styles, typography, and overall big, bold look. I can envision many ways that I could build out my color generator and allow for filtering by warm and cool palettes, or by mood, season, and other topical categories. It would be interesting to provide the ability to bookmark or save a color in some way, or create an illustration layer to colorize. I can see myself flipping through this just for fun. 

**Link to work:**
[Styled Color Generator](https://htmlpreview.github.io/?https://github.com/ccania/100-days-of-code/blob/master/color-generator/colorgenerator2.html)

### Day 13: May 13, 2017 

**Today's Progress**: Tonight I worked more on my color generator. I'm working on adding an option to save a color swatch.

**Thoughts:** I became discouraged when I looked online for other ways to create a random color generator using the hexadecimal system. I found (what appears to be) a very efficient and sophisticated way of doing this. The solution is by [Erin Heyming](http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript). I'm reminded that I have SO MUCH TO LEARN. Someone credits Paul Irish's work on random color generators, which I plan to look into as well.

```
var color = "#";
for (k = 0; k < 3; k++) {
    color += ("0" + (Math.random()*256|0).toString(16)).substr(-2);
}
```

**Link to work:**
Nothing to see here.

### Day 14: May 14, 2017 

**Today's Progress**: Tonight I continued to work through Free Code Camp's front end developer certificate. I have finished with jQuery and will begin JavaScript next. 

**Thoughts:** Feeling positive about my 14 day streak, and considering a night off this week.

**Link to work:**
Nothing to see here.

### Day 15: May 15, 2017 

**Today's Progress**: I launched a Codepen account and began working on my first Free Code Camp project, a tribute page. Although this is somewhat of a simplistic project, I have been looking for an excuse to use Codepen. I thought I'd make a web template for a bio page instead of writing an actual tribute to someone. I should have something to show by tomorrow night.

**Thoughts:** After I make it through this busy week, I plan to re-orient my code-learning strategies. I feel like I'm jumping around from project-to-project, and that it would be beneficial to focus on something more purposeful. I plan to continue through Free Code Camp's JavaScript section, but I would really like a bit more of a challenge.  

**Link to work:**
[Tribute page in-progress](https://codepen.io/ccania/full/dWKBZE/)

### Day 16: May 16, 2017 

**Today's Progress**: I finished my tribute page. It utilizes Bootstrap and consists of a fluid width jumbotron header, and cards for a bio image and sections for childhood, education and training, and work and accomplishments.

**Thoughts:** I'm tempted to replace Bootstrap with Materialize and add some icons to jazz this up.

**Link to work:**
[Tribute page in-progress](https://codepen.io/ccania/full/dWKBZE/)
