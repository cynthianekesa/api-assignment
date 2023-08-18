const readline = require('readline');
const fetch = require('node-fetch');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

import fetch from 'node-fetch';

function displayMenu() {
  console.log("\nWelcome to the Kenya Info and Entertainment CLI App!");
  console.log("1. Display Current News");
  console.log("2. Show Upcoming Events");
  console.log("3. Display Fun Facts");
  console.log("4. Exit");
}

function handleChoice(choice) {
  switch (choice) {
    case '1':
      const apiKey = 'dbe89cda90d2423d83079bddecc3b0bf';
      const newsUrl = 'https://newsapi.org/v2/top-headlines?country=ke&apiKey=dbe89cda90d2423d83079bddecc3b0bf'
.
    fetch(newsUrl)
    .then(response => response.json())
    .then(data => {
      if (data.status === 'ok') {
        console.log("Current News in Kenya:");
        data.articles.forEach((article, index) => {
          console.log(`${index + 1}. ${article.title}`);
          console.log(`   Source: ${article.source.name}`);
          console.log(`   Description: ${article.description}`);
          console.log(`   URL: ${article.url}`);
          console.log();
        });
      } else {
        console.log("Failed to fetch news.");
      }
    })
    .catch(error => {
      console.error("An error occurred while fetching news:", error);
    });
      break;
    case '2':
    
      console.log("Fetching upcoming events...");
      break;
    case '3':
      
      console.log("Here are some fun facts about Kenya...");
      break;
    case '4':
      console.log("Exiting. Goodbye!");
      rl.close();
      break;
    default:
      console.log("Invalid choice. Please select a valid option.");
      break;
  }
}

function startApp() {
  displayMenu();
  rl.question("Please select an option: ", function(choice) {
    handleChoice(choice);
    startApp(); 
  });
}

startApp(); 