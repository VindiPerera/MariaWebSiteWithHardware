const zlib = require('zlib');
const fs = require('fs');

const content = fs.readFileSync('docs/MariaPoS-Website.html', 'utf8');
const match = content.match(/"bb8cf9c0-e090-4045-9429-0aa8dce00411":\{"mime":"text\/html","compressed":true,"data":"([^"]+)"/);
if (match) {
  const buf = Buffer.from(match[1], 'base64');
  const decomp = zlib.gunzipSync(buf).toString('utf8');
  console.log('Length:', decomp.length);
  console.log(decomp.slice(0, 1500));
} else {
  console.log('Not found');
}
