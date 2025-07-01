let quotes = [];

async function fetchQuotes() {
  try {
    const res = await fetch("https://type.fit/api/quotes");
    quotes = await res.json();
    generateQuote();
  } catch (err) {
    document.getElementById('quote').textContent = "Failed to load quotes.";
    console.error("API fetch error:", err);
  }
}

function generateQuote() {
  if (!quotes.length) return;

  const q = quotes[Math.floor(Math.random() * quotes.length)];
  const quoteEl = document.getElementById("quote");
  const authorEl = document.getElementById("author");

  quoteEl.style.opacity = 0;
  authorEl.style.opacity = 0;

  setTimeout(() => {
    quoteEl.textContent = q.text;
    authorEl.textContent = q.author ? `— ${q.author}` : "— Unknown";
    quoteEl.style.opacity = 1;
    authorEl.style.opacity = 0.8;
  }, 300);
}

fetchQuotes();
