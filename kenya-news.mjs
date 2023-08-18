import readline from 'readline';
import fetch from 'node-fetch';

const API_KEY = 'dbe89cda90d2423d83079bddecc3b0bf'; 
const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=ke&apiKey=dbe89cda90d2423d83079bddecc3b0bf`;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function fetchNews() {
    try {
        const response = await fetch(NEWS_API_URL);
        const data = await response.json();

    console.log("API Response:", data);
}

catch (error) {
    console.error("An error occurred while fetching news:", error);
}
}
