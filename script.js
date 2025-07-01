let quotes = [];

async function fetchQuotes() {
  try {
    const res = await fetch("https://api.allorigins.win/raw?url=https://type.fit/api/quotes");
    quotes = await res.json();
    generateQuote();
  } catch (error) {
    document.getElementById('quote').textContent = "Failed to load quotes.";
    console.error("API Error:", error);
  }
}

function generateQuote() {
  if (!quotes.length) return;

  const quoteEl = document.getElementById("quote");
  const authorEl = document.getElementById("author");
  const random = Math.floor(Math.random() * quotes.length);
  const quote = quotes[random];

  quoteEl.style.opacity = 0;
  authorEl.style.opacity = 0;

  setTimeout(() => {
    quoteEl.textContent = quote.text || "No quote found.";
    authorEl.textContent = quote.author ? `— ${quote.author}` : "— Unknown";
    quoteEl.style.opacity = 1;
    authorEl.style.opacity = 0.8;
  }, 300);
}

fetchQuotes();
