const fs = require('fs');

const findTarget = /else if \(name === 'Lihat Detail Forecast'\) \{[\s\S]*?Apa artinya ini\?<\/div>.*<\/div>';\r?\n\s*\}/g;

const replacement = `else if (name === 'Lihat Detail Forecast') {
    b = '<div style="margin-bottom:12px;font-size:13px;color:#6b7280">Prediksi harga jagung berdasarkan data harian BMKG + historis 3 tahun:</div>'+
        bigChart([6200,6100,6050,5950,5850,5800,5400,5100,4800], 'down')+
        '<div class="tech-spec">LSTM Model: Penurunan 18% dalam 30 hari.<br>Sourcing prioritas: Jawa Timur.</div>'+
        '<div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:10px;margin-top:10px;cursor:pointer" onclick="this.querySelector(\\'div:last-child\\').style.display=this.querySelector(\\'div:last-child\\').style.display===\\'none\\'?\\'block\\':\\'none\\'"><div style="font-size:12px;color:#1d4ed8;font-weight:600">💡 Apa artinya ini?</div><div style="display:none;font-size:12px;color:#3b82f6;margin-top:6px;line-height:1.6">Harga jagung terus turun karena anomali curah hujan. Siapkan stok alternatif dari Jatim atau naikkan buffer.</div></div>'+
        supBlock('<div style="font-size:12px;font-weight:700;margin-top:14px;margin-bottom:6px">Opsi Eksekusi Mitigasi</div><select style="width:100%;border:1px solid #e8e4dd;border-radius:8px;padding:8px;font-size:13px;font-family:inherit"><option>Alihkan Sourcing ke Gudang Jawa Timur (+ 5,000 ton)</option><option>Alihkan Sourcing ke Gudang Jawa Barat (+ 2,000 ton)</option><option>Hanya naikkan batas Safety Buffer</option></select>');
    f = '<button class="btn-ghost" onclick="closeModal()">Batal</button><button class="btn-primary" onclick="window._vExec(\\'Sourcing Diaktifkan\\',\\'Sourcing alternatif dialihkan dan parameter safety buffer telah disesuaikan berdasarkan prediksi AI.\\')">Eksekusi Mitigasi </button>';
  }`;

for (const file of ['c:\\Prospects\\panenhub\\v2.html', 'c:\\Prospects\\panenhub\\desktop-v2.html']) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    if (findTarget.test(content)) {
      content = content.replace(findTarget, replacement);
      fs.writeFileSync(file, content, 'utf8');
      console.log('Fixed', file);
    } else {
      console.log('Not found in ', file);
    }
  }
}
