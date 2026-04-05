const fs = require('fs');

const replacement = `else if (name === 'Lihat Detail Forecast') {
    b = \`<div style="margin-bottom:10px;font-size:12px;color:#6b7280">Prediksi harga jagung (LSTM + BMKG):</div>
        <div style="height:80px">\${sparkline([6200,6100,6050,5950,5850,5800,5400,5100,4800], false, 350, 70)}</div>
        <div class="tech-spec">LSTM: Penurunan 18% dalam 30 hari.<br>Sourcing: Jawa Timur.</div>
        <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:8px;margin-top:8px"><div style="font-size:10px;color:#1d4ed8;cursor:pointer" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='none'?'block':'none'">💡 Apa artinya ini?</div><div style="display:none;font-size:10px;color:#3b82f6;margin-top:4px;line-height:1.5">Harga jagung terus turun karena anomali curah hujan. Siapkan stok alternatif dari Jatim atau naikkan buffer.</div></div>\` +
        supBlock(\`<div style="font-size:12px;font-weight:700;margin-top:14px;margin-bottom:6px">Opsi Eksekusi Mitigasi</div><select style="width:100%;border:1px solid #e8e4dd;border-radius:8px;padding:8px;font-size:13px;font-family:inherit"><option>Alihkan Sourcing ke Jatim (+ 5,000 ton)</option><option>Alihkan Sourcing ke Jabar (+ 2,000 ton)</option><option>Hanya naikkan batas Safety Buffer</option></select>\`);
    f = \`<button class="btn-ghost" onclick="closeModal()">Batal</button><button class="btn-primary" onclick="window._vExec('Sourcing Diaktifkan','Sourcing alternatif dialihkan dan parameter safety buffer telah disesuaikan berdasarkan prediksi AI.')">Eksekusi </button>\`;
  }`;

const file = 'c:\\Prospects\\panenhub\\v2.html';
const content = fs.readFileSync(file, 'utf8');
const startIdx = content.indexOf("else if (name === 'Lihat Detail Forecast') {");
const endStr = "Apa artinya ini?</div><div style=\"display:none;font-size:10px;color:#3b82f6;margin-top:4px;line-height:1.5\">Harga jagung terus turun karena anomali curah hujan. Siapkan stok alternatif dari Jatim atau naikkan buffer.</div></div>`;\r\n  }";

let endIdx = content.indexOf(endStr);
if (endIdx === -1) {
  const endStr2 = "Apa artinya ini?</div><div style=\"display:none;font-size:10px;color:#3b82f6;margin-top:4px;line-height:1.5\">Harga jagung terus turun karena anomali curah hujan. Siapkan stok alternatif dari Jatim atau naikkan buffer.</div></div>`;\n  }";
  endIdx = content.indexOf(endStr2);
  if(endIdx !== -1) {
    const toReplace = content.substring(startIdx, endIdx + endStr2.length);
    fs.writeFileSync(file, content.replace(toReplace, replacement), 'utf8');
    console.log('Fixed v2.html (LF)');
  }
} else {
  const toReplace = content.substring(startIdx, endIdx + endStr.length);
  fs.writeFileSync(file, content.replace(toReplace, replacement), 'utf8');
  console.log('Fixed v2.html (CRLF)');
}

