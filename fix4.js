const fs = require('fs');

const map = {
  "â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• ": "═══════════════════════════════════",
  "Â±": "±",
  "â†‘": "↑",
  "â†“": "↓",
  "âˆ’": "−",
  "â­ ": "⭐",
  "âš ï¸ ": "⚠️",
  "ðŸ“ ": "📌",
  "ðŸ§ ": "🧠",
  "ðŸ“Š": "📊",
  "ðŸ—ºï¸ ": "🗺️",
  "ðŸ“¦": "📦",
  "ðŸŒ¾": "🌾",
  "ðŸ’°": "💰",
  "ðŸš›": "🚛",
  "ðŸ“‹": "📋",
  "ðŸ“ ": "📉",
  "â˜€ï¸ ": "☀️",
  "ðŸŒ½": "🌽",
  "ðŸŒ§ï¸ ": "🌧️",
  "ðŸ“ˆ": "📈",
  "ðŸ”§": "🔧",
  "âš¡": "⚡",
  "â• â• â• â• ": "════"
};

for (const file of ['c:\\Prospects\\panenhub\\v2.html', 'c:\\Prospects\\panenhub\\desktop-v2.html']) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    for (const [k, v] of Object.entries(map)) {
      content = content.split(k).join(v);
    }
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed', file);
  }
}
