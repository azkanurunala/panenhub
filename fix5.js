const fs = require('fs');

const map = {
  "â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• â• ": "═══════════════════════════════════",
  "â­ ": "⭐",
  "âš ï¸ ": "⚠️",
  "ðŸ“ ": "📌",
  "ðŸ§ ": "🧠",
  "ðŸ—ºï¸ ": "🗺️",
  "ðŸ“¦": "📦",
  "ðŸ“Š": "📊",
  "â˜€ï¸ ": "☀️",
  "ðŸŒ§ï¸ ": "🌧️",
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
