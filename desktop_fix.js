const fs = require('fs');

const file = 'c:\\Prospects\\panenhub\\desktop-v2.html';
const content = fs.readFileSync(file, 'utf8');

const regex = /(<div style="display:none;font-size:12px;color:#3b82f6;margin-top:6px;line-height:1\.6">Harga jagung terus turun karena anomali curah hujan\. Siapkan stok alternatif dari Jatim atau naikkan buffer\.<\/div><\/div>';)/;

const repl = `$1
        + supBlock('<div style="font-size:12px;font-weight:700;margin-top:14px;margin-bottom:6px">Opsi Sourcing Mitigasi</div><select style="width:100%;border:1px solid #e8e4dd;border-radius:8px;padding:8px;font-size:13px;font-family:inherit"><option>Alihkan ke Gudang Jatim (+ 5,000 ton)</option><option>Alihkan ke Gudang Jabar (+ 2,000 ton)</option><option>Hanya tingkatkan Safety Buffer</option></select>');
    f = '<button class="btn-ghost" onclick="closeModal()">Batal</button><button class="btn-primary" onclick="window._vExec(\\'Sourcing Diaktifkan\\',\\'Sourcing alternatif dialihkan dan parameter safety buffer disesuaikan.\\')">Eksekusi Mitigasi </button>';`;

if (regex.test(content)) {
  fs.writeFileSync(file, content.replace(regex, repl), 'utf8');
  console.log('Fixed desktop-v2.html');
} else {
  console.log('Did not match');
}
