const fs = require('fs');

const patterns = [
  // Cabai keriting specific regex
  { regex: /name:'Cabai Keriting',\s*foto:'.*?'/g, replace: "name:'Cabai Keriting',     foto:'🌶️'" },
  
  // Roles array replacements
  { regex: /role:'koperasi',\s*e:'.*?',\s*label:'Koperasi Intelligence'/g, replace: "role:'koperasi',   e:'🏢', label:'Koperasi Intelligence'" },
  { regex: /role:'petani',\s*e:'.*?',\s*label:'Farmer Assistant'/g, replace: "role:'petani',     e:'👨‍🌾', label:'Farmer Assistant'" },
  { regex: /role:'pembeli',\s*e:'.*?',\s*label:'Buyer Platform'/g, replace: "role:'pembeli',    e:'🛒', label:'Buyer Platform'" }
];

for (const file of ['c:\\Prospects\\panenhub\\v2.html', 'c:\\Prospects\\panenhub\\desktop-v2.html']) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    for (const { regex, replace } of patterns) {
      content = content.replace(regex, replace);
    }
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed', file);
  }
}
