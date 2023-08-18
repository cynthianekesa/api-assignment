const readline = require('readline');

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

function handleChoice(choice) {
  switch (choice) {
    case '1':
      // Implement code to fetch and display current news
      console.log("Fetching current news...");
      break;
    case '2':
      // Implement code to fetch and display upcoming events
      console.log("Fetching upcoming events...");
      break;
    case '3':
      // Implement code to display fun facts about Kenya
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
    startApp(); // Continue the loop
  });
}

startApp(); // Start the CLI app