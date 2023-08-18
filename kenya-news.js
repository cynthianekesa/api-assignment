const readline = import('readline');
const fetch = import('node-fetch'); // Make sure to install this package using npm or yarn

const API_KEY = 'dbe89cda90d2423d83079bddecc3b0bf'; 
const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=ke&apiKey=${API_KEY}`;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function displayMenu() {
  console.log("\nWelcome to the Kenya Info and Entertainment CLI App!");
  console.log("1. Display Current News");
  console.log("2. Show Upcoming Events");
  console.log("3. Display Fun Facts");
  console.log("4. Exit");
}

async function fetchNews() {
  try {
    const response = await fetch(NEWS_API_URL);
    const data = await response.json();

    if (data.status === 'ok') {
      const articles = data.articles;
      console.log("Current News in Kenya:");
      articles.forEach((article, index) => {
        console.log(`${index + 1}. ${article.title}`);
        console.log(`   Source: ${article.source.name}`);
        console.log(`   Description: ${article.description}`);
        console.log(`   URL: ${article.url}`);
        console.log();
      });
    } else {
      console.log("Failed to fetch news.");
    }
  } catch (error) {
    console.error("An error occurred while fetching news:", error);
  }
}

function handleChoice(choice) {
  switch (choice) {
    case '1':
      fetchNews();
      break;
    // Other cases...
    default:
      console.log("Invalid choice. Please select a valid option.");
      break;
  }
}

function startApp() {
  displayMenu();
  rl.question("Please select an option: ", function(choice) {
    handleChoice(choice);
    startApp(); // Continue the loop
  });
}

startApp(); // Start the CLI app
