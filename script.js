const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "I don’t have dreams, I have goals.", author: "Harvey Specter" },
  { text: "Winners don’t make excuses when the other side plays the game.", author: "Harvey Specter" },
  { text: "Work until you no longer have to introduce yourself.", author: "Harvey Specter" },
  { text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
  { text: "If you’re not working to get better, you’re getting worse.", author: "Unknown" },
  { text: "Make today so awesome that yesterday gets jealous.", author: "Unknown" },
  { text: "You can either experience the pain of discipline or the pain of regret. The choice is yours.", author: "Craig Groeschel" },
  { text: "Stay away from those people who try to disparage your ambitions.", author: "Mark Twain" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Don’t raise your voice. Improve your argument.", author: "Harvey Specter" },
  { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
  { text: "Discipline is doing what needs to be done, even if you don’t want to do it.", author: "Unknown" },
  { text: "Don't be busy, be productive.", author: "Unknown" },
  { text: "You have to be at your strongest when you’re feeling at your weakest.", author: "Unknown" },
  { text: "The world rewards the driven, not the well-rested.", author: "Unknown" },
  { text: "Build a life you don’t need a vacation from.", author: "Unknown" },
  { text: "Success doesn’t come from what you do occasionally. It comes from what you do consistently.", author: "Marie Forleo" },
  { text: "Stop doubting yourself. Work hard and make it happen.", author: "Unknown" },
  { text: "If you want to fly, give up everything that weighs you down.", author: "Toni Morrison" },
  { text: "Dream big. Start small. Act now.", author: "Robin Sharma" },
  { text: "Success is not for the lazy.", author: "Unknown" },
  { text: "No one is going to hand me success. I must go out and get it myself.", author: "Tyra Banks" },
  { text: "Be so good they can’t ignore you.", author: "Steve Martin" },
  { text: "Work in silence. Let success make the noise.", author: "Frank Ocean" },
  { text: "Excuses don’t get results.", author: "Unknown" },
  { text: "Be the hardest working person you know.", author: "Dwayne Johnson" },
  { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  { text: "Energy and persistence conquer all things.", author: "Benjamin Franklin" },
  { text: "You become what you believe.", author: "Oprah Winfrey" },
  { text: "Work hard in silence, let your success be your noise.", author: "Frank Ocean" },
  { text: "If you don't build your dream, someone else will hire you to build theirs.", author: "Tony Gaskins" },
  { text: "The best revenge is massive success.", author: "Frank Sinatra" },
  { text: "I’m not lucky, I’m talented.", author: "Harvey Specter" },
  { text: "Go the extra mile. It’s never crowded.", author: "Wayne Dyer" },
  { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { text: "Effort never betrays you.", author: "Tim Grover" },
  { text: "If it was easy, everyone would do it.", author: "Unknown" },
  { text: "You didn’t come this far to only come this far.", author: "Eric Thomas" },
  { text: "Be fearless in the pursuit of what sets your soul on fire.", author: "Jennifer Lee" },
  { text: "Success is the result of preparation, hard work, and learning from failure.", author: "Colin Powell" },
  { text: "If you want to be successful, you must be willing to disappear for a while.", author: "Unknown" },
  { text: "You don’t get what you wish for. You get what you work for.", author: "Daniel Milstein" },
  { text: "Nobody cares, work harder.", author: "Cam Newton" },
  { text: "You are one decision away from a totally different life.", author: "Mel Robbins" },
  { text: "Comfort is the enemy of progress.", author: "Unknown" },
  { text: "I didn’t come this far to quit.", author: "Unknown" },
  { text: "The man who moves a mountain begins by carrying small stones.", author: "Confucius" },
  { text: "The secret of your future is hidden in your daily routine.", author: "Mike Murdock" },
  { text: "You don't find will power, you create it.", author: "Unknown" }
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
