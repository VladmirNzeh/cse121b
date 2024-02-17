// Function to fetch a random quote from an external API
async function fetchRandomQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching random quote:', error);
        return null;
    }
}

// Function to display the random quote on the webpage
async function displayRandomQuote() {
    const quoteDisplay = document.getElementById("quote-display");
    const randomQuote = await fetchRandomQuote();
    if (randomQuote) {
        const quoteText = `"${randomQuote.content}" - ${randomQuote.author}`;
        quoteDisplay.textContent = quoteText;
    } else {
        quoteDisplay.textContent = "Failed to fetch quote. Please try again later.";
    }
}

// Add event listener to button element
const generateButton = document.getElementById("generate-button");
generateButton.addEventListener("click", displayRandomQuote);
