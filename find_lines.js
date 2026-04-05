const fs = require('fs');

const file = 'c:/Prospects/panenhub/v2.html';
const lines = fs.readFileSync(file, 'utf8').split('\n');
lines.forEach((l, i) => {
  if (l.includes('AI Insight') || l.includes('Rekomendasi operasional') || /[^\\x00-\\x7F]/.test(l)) {
     // only print if it has a weird encoding character
     if (l.includes('ð') || l.includes('â') || l.includes('Â')) {
       console.log('Line ' + (i+1) + ': ' + l.trim());
     }
  }
});
