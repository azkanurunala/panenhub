const fs = require('fs');
const files = ['c:\\Prospects\\panenhub\\v2.html', 'c:\\Prospects\\panenhub\\desktop-v2.html'];

for (const file of files) {
  if (fs.existsSync(file)) {
    const text = fs.readFileSync(file, 'utf8');
    const matches = new Set(text.match(/[^\x00-\x7F]+/g) || []);
    
    // Convert Set into array and print each
    console.log('--- ' + file + ' ---');
    for (const m of matches) {
      if (m.includes('ð') || m.includes('â') || m.includes('Â') || m.includes('ï') || m.includes('œ')) {
         console.log(m);
      }
    }
  }
}
