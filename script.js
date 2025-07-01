const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
  { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
  { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
  { text: "Great things never come from comfort zones.", author: "Unknown" },
  { text: "Dream it. Wish it. Do it.", author: "Unknown" },
  { text: "Don’t stop when you’re tired. Stop when you’re done.", author: "Marilyn Monroe" },
  { text: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown" },
  { text: "Do something today that your future self will thank you for.", author: "Sean Patrick Flanery" },
  { text: "Little things make big days.", author: "Isabel Marant" },
  { text: "It’s going to be hard, but hard does not mean impossible.", author: "Art Williams" },
  { text: "Don’t wait for opportunity. Create it.", author: "George Bernard Shaw" },
  { text: "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.", author: "Unknown" },
  { text: "The key to success is to start before you are ready.", author: "Marie Forleo" },
  { text: "Success doesn’t just find you. You have to go out and get it.", author: "Unknown" },
  { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
  { text: "Dream bigger. Do bigger.", author: "Unknown" },
  { text: "Don’t limit your challenges. Challenge your limits.", author: "Unknown" },
  { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
  { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Success is getting what you want, happiness is wanting what you get.", author: "W. P. Kinsella" },
  { text: "The best way to predict your future is to create it.", author: "Peter Drucker" },
  { text: "Don’t count the days, make the days count.", author: "Muhammad Ali" },
  { text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { text: "Hustle in silence and let your success make the noise.", author: "Unknown" },
  { text: "Make each day your masterpiece.", author: "John Wooden" },
  { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "Action is the foundational key to all success.", author: "Pablo Picasso" },
  { text: "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett" },
  { text: "Start today. Not tomorrow. If anything, you should have started yesterday.", author: "Emilia Clarke" },
  { text: "Fall seven times, stand up eight.", author: "Japanese Proverb" },
  { text: "It’s not whether you get knocked down. It’s whether you get up.", author: "Vince Lombardi" }
];

function generateQuote() {
  const quoteEl = document.getElementById("quote");
  const authorEl = document.getElementById("author");
  const random = Math.floor(Math.random() * quotes.length);
  const quote = quotes[random];

  quoteEl.style.opacity = 0;
  authorEl.style.opacity = 0;

  setTimeout(() => {
    quoteEl.textContent = quote.text;
    authorEl.textContent = quote.author ? `— ${quote.author}` : "— Unknown";
    quoteEl.style.opacity = 1;
    authorEl.style.opacity = 0.8;
  }, 300);
}

generateQuote();
