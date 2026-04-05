const fs = require('fs');

const patterns = [
  { regex: /\{v:'[^\x00-\x7F]+'\+u\.rating/g, replace: "{v:'⭐ '+u.rating" },
  { regex: /Defisit [^\x00-\x7F]+/g, replace: "Defisit ⚠️" },
  { regex: /margin-top:2px">[^\x00-\x7F]+ \$\{esc\(u\.loc\)\}<\/div>/g, replace: 'margin-top:2px">📌 ${esc(u.loc)}</div>' },
  { regex: /Heatmap & Monitor [^\x00-\x7F]+'/g, replace: "Heatmap & Monitor 🗺️'" },
  { regex: /<span style="font-size:16px">[^\x00-\x7F]+<\/span>/g, replace: '<span style="font-size:16px">⚠️</span>' },
  { regex: /color:#9c9a92">[^\x00-\x7F]+ \$\{esc\(g\.lok\)\}/g, replace: 'color:#9c9a92">📌 ${esc(g.lok)}' },
  { regex: /,\['Rating','[^\x00-\x7F]+'\+a\.rating\]\]/g, replace: ",['Rating','⭐ '+a.rating]]" },
  { regex: /margin-top:4px">[^\x00-\x7F]+ \$\{l\.feedback\}/g, replace: 'margin-top:4px">📌 ${l.feedback}' },
  { regex: /\['Kondisi Cuaca','[^\x00-\x7F]+ Cerah'\]/g, replace: "['Kondisi Cuaca','☀️ Cerah']" },
  { regex: /\['Kondisi Cuaca','[^\x00-\x7F]+ Hujan'\]/g, replace: "['Kondisi Cuaca','🌧️ Hujan']" },
  { regex: /color:#9c9a92">[^\x00-\x7F]+ \$\{esc\(b\.lok\)\}/g, replace: 'color:#9c9a92">📌 ${esc(b.lok)}' },
  { regex: /color:#9c9a92">[^\x00-\x7F]+ \$\{s\.lok\} · [^\x00-\x7F]+ \$\{s\.rating\}<\/div>/g, replace: 'color:#9c9a92">📌 ${s.lok} · ⭐ ${s.rating}</div>' },
  { regex: /color:#92400e">[^\x00-\x7F]+ AKSI MANUAL/g, replace: 'color:#92400e">⚠️ AKSI MANUAL' }
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
