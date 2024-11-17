/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * Array of javascript objects containing properties for quotes
***/
var quotes = [
  {
    quote: "The only thing we have to fear is fear itself",
    source: "Franklin D. Roosevelt",
    citation: "https://blog.hubspot.com/sales/famous-quotes",
    tags: ["Presidents", "Inspirational"]
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    source: "Oscar Wilde",
  },
  {
    quote: "Don't worry when you are not recognized but strive to be worthy of recognition.",
    source: "Abraham Lincoln",
    tags: ["Presidents"]
  },
  {
    quote: "May you live all the days of your life.",
    source: "Jonathan Swift"
  },
  {
    quote: "Out of the mountain of despair, a stone of hope.",
    source: "Martin Luther King",
    year: 1963,
    tags: ["Inspirational"]
  }
]


/***
 * Returns a random quote object from the quotes array
***/
function getRandomQuote() {
  var max = quotes.length;
  var randomNumber = Math.floor(Math.random() * max);
  return quotes[randomNumber];
}


/***
 * Uses getRandomQuote to retrieve a random quote object and then builds two html paragraphs, 
 * inserting a citation and year span if included, and then sets the quote-box element to the new html
***/
function printQuote() {
  var quote = getRandomQuote();
  var html = `<p class="quote"> ${quote.quote} </p>
  <p class="source"> ${quote.source} `; // Closing tag will be added after if statements
  if ('citation' in quote) {
    html += `<span class="citation"> ${quote.citation} </span>`;
  }
  if ('year' in quote) {
    html += `<span class="year"> ${quote.year} </span>`;
  }
  if ('tags' in quote) {
    html += `<span class="tags"> tags: ${quote.tags} </span>`;
  }
  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html;

  // Change background color
  document.body.style.background = `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`;
}
/***
  * Used by the printQuote function to get a random value between 0 and 255 for 3 different red green and blue values
***/
function randomRGB() {
  return Math.floor(Math.random() * 256);
}

/***
 * Runs the printQuote function every 10 seconds
***/
setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);