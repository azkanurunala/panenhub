const fs = require('fs');

const patterns = [
  { regex: /\{v:'â­  '\+u\.rating/g, replace: "{v:'⭐ '+u.rating" },
  { regex: /Defisit âš ï¸ /g, replace: "Defisit ⚠️" },
  { regex: /margin-top:2px">ðŸ“  \$\{esc\(u\.loc\)\}<\/div>/g, replace: 'margin-top:2px">📌 ${esc(u.loc)}</div>' },
  { regex: /e:'ðŸ§ ',l:'AI Insight'/g, replace: "e:'🧠',l:'AI Insight'" },
  { regex: /AI Insight ðŸ§ <\/div>/g, replace: "AI Insight 🧠</div>" },
  { regex: /Heatmap & Monitor ðŸ—ºï¸ '/g, replace: "Heatmap & Monitor 🗺️'" },
  { regex: /<span style="font-size:16px">âš ï¸ <\/span>/g, replace: '<span style="font-size:16px">⚠️</span>' },
  { regex: /color:#9c9a92">ðŸ“  \$\{esc\(g\.lok\)\}/g, replace: 'color:#9c9a92">📌 ${esc(g.lok)}' },
  { regex: /,\['Rating','â­  '\+a\.rating\]\]/g, replace: ",['Rating','⭐ '+a.rating]]" },
  { regex: /margin-top:4px">ðŸ“  \$\{l\.feedback\}/g, replace: 'margin-top:4px">📌 ${l.feedback}' },
  { regex: /\['Kondisi Cuaca','â˜€ï¸  Cerah'\]/g, replace: "['Kondisi Cuaca','☀️ Cerah']" },
  { regex: /\['Kondisi Cuaca','ðŸŒ§ï¸  Hujan'\]/g, replace: "['Kondisi Cuaca','🌧️ Hujan']" },
  { regex: /color:#9c9a92">ðŸ“  \$\{esc\(b\.lok\)\}/g, replace: 'color:#9c9a92">📌 ${esc(b.lok)}' },
  { regex: /color:#9c9a92">ðŸ“  \$\{s\.lok\} · â­  \$\{s\.rating\}<\/div>/g, replace: 'color:#9c9a92">📌 ${s.lok} · ⭐ ${s.rating}</div>' },
  { regex: /color:#92400e">âš ï¸  AKSI MANUAL/g, replace: 'color:#92400e">⚠️ AKSI MANUAL' },
  
  // Clean up all the weird borderline comments:
  { regex: /\/\* â•[\s\S]*?â•[^\*]*\*\//g, replace: "/* ═══════════════════════════════════ */" }
];

for (const file of ['c:\\Prospects\\panenhub\\v2.html', 'c:\\Prospects\\panenhub\\desktop-v2.html']) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    for (const { regex, replace } of patterns) {
      content = content.replace(regex, replace);
    }
    
    // Also a general sweep for any "ðŸ“ " or "âš ï¸ " inside the raw string if they don't match exactly the full line context above:
    content = content.replace(/âš ï¸ /g, '⚠️');
    content = content.replace(/ðŸ“ /g, '📌');
    content = content.replace(/â­ /g, '⭐');
    content = content.replace(/ðŸ§ /g, '🧠');
    content = content.replace(/ðŸ—ºï¸ /g, '🗺️');
    
    // Check if the comment block regex worked, if not use a simpler approach
    content = content.replace(/â• /g, '═');

    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed', file);
  }
}
