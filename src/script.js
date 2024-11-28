const quotesContainer = document.getElementById('quotes-container');

async function fetchQuotes() {
  const apiUrl = 'https://quoteslate.vercel.app/api/quotes/random'; // api endpoint (powered by QuoteSlate API )
  try {
    console.log("Fetching data from API...")
    const response = await axios.get(apiUrl); // using the axios library to fetch data from the API endpoint
    console.log("API Response: ", response.data);
    const quoteData = response.data;
    console.log("Quote Data: ", quoteData);


    quotesContainer.innerHTML = '';

    // displaying the quote
    const quoteElement = document.createElement('p');
    quoteElement.textContent = `"${quoteData.quote}"`;
    quoteElement.className = 'quote';

    // displaying the author of the quote
    const authorElement = document.createElement('p');
    authorElement.textContent = `– ${quoteData.author}`;
    authorElement.className = 'author';

    // appending the quote and its author to the quotesContainer 
    quotesContainer.appendChild(quoteElement);
    quotesContainer.appendChild(authorElement);

  } catch (error) {
    console.error('Error fetching quotes:', error);
    quotesContainer.textContent = 'Failed to load quotes. Please try again later.';
  }
}

// calls the function when the page reloads
fetchQuotes();