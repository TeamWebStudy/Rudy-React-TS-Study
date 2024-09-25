const quotes = [
    {
      quote: "Code is like humor. When you have to explain it, it’s bad.",
      author: "Cory House"
    },
    {
      quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      author: "Martin Fowler"
    },
    {
      quote: "Programming isn't about what you know; it's about what you can figure out.",
      author: "Chris Pine"
    },
    {
      quote: "First, solve the problem. Then, write the code.",
      author: "John Johnson"
    },
    {
      quote: "Experience is the name everyone gives to their mistakes.",
      author: "Oscar Wilde"
    },
    {
      quote: "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
      author: "Edsger Dijkstra"
    },
    {
      quote: "Simplicity is the soul of efficiency.",
      author: "Austin Freeman"
    },
    {
      quote: "The only way to go fast is to go well.",
      author: "Robert C. Martin"
    },
    {
      quote: "Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.",
      author: "Mosher’s Law of Software Engineering"
    },
    {
      quote: "Walking on water and developing software from a specification are easy if both are frozen.",
      author: "Edward V. Berard"
    }
  ];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const index = Math.floor(Math.random() * quotes.length);

//Math.ceil(1.1)
//Math.round(1.1)
//Math.floor(1.1)

const todaysQuote = quotes[index];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;