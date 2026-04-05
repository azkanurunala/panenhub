const fs = require('fs');

for (const file of ['c:\\Prospects\\panenhub\\v2.html', 'c:\\Prospects\\panenhub\\desktop-v2.html']) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/\{v:'[^\x00-\x7F]+ '\+u\.rating/g, "{v:'⭐ '+u.rating");
    content = content.replace(/,\['Rating','[^\x00-\x7F]+ '\+a\.rating\]\]/g, ",['Rating','⭐ '+a.rating]]");
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed', file);
  }
}
