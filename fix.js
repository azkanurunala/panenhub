const fs = require('fs');

const replaces = [
  ["foto:'ðŸŒ¾'", "foto:'🌾'"],
  ["foto:'ðŸŒ½'", "foto:'🌽'"],
  ["foto:'ðŸ«˜'", "foto:'🫘'"],
  ["foto:'ðŸŒ¶ï¸ '", "foto:'🌶️'"],
  ["foto:'ðŸ§…'", "foto:'🧅'"],
  ["icon:'ðŸ”´'", "icon:'🔴'"],
  ["icon:'ðŸŸ¡'", "icon:'🟡'"],
  ["icon:'ðŸ”µ'", "icon:'🔵'"],
  ["e:'ðŸ ›ï¸ '", "e:'🏢'"],
  ["e:'ðŸ‘¨â€ ðŸŒ¾'", "e:'👨‍🌾'"],
  ["e:'ðŸ“‹'", "e:'📋'"],
  ["e:'ðŸ› ï¸ '", "e:'🛒'"],
  ["e:'âš¡'", "e:'⚡'"],
  ["ðŸ”„", "🔄"],
  ["â†’", "→"],
  ["Â·", "·"],
  ["â€”", "—"],
  ["â€“", "–"],
  ["ðŸ¤–", "🤖"],
  ["â• ", "═"]
];

for (const file of ['c:\\Prospects\\panenhub\\v2.html', 'c:\\Prospects\\panenhub\\desktop-v2.html']) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    for (const [a, b] of replaces) {
      content = content.split(a).join(b);
    }
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed', file);
  }
}
