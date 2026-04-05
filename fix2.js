const fs = require('fs');

const replaces = [
  ["ðŸ ›ï¸ ", "🏢"],
  ["ðŸ‘¨â€ ðŸŒ¾", "👨‍🌾"],
  ["ðŸ› ï¸ ", "🛒"],
  ["ðŸŒ¶ï¸ ", "🌶️"]
];

for (const file of ['c:\\Prospects\\panenhub\\v2.html', 'c:\\Prospects\\panenhub\\desktop-v2.html']) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    for (const [a, b] of replaces) {
      if (content.includes(a)) {
          content = content.split(a).join(b);
          console.log(`Replaced in ${file} : ${b}`);
      }
    }
    fs.writeFileSync(file, content, 'utf8');
  }
}
