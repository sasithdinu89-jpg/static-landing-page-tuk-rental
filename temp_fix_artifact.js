const fs = require('fs');
const filepath = String.raw`D:\working_for_side_projects\tuk-rental\ru\index.html`;
const data = fs.readFileSync(filepath);
const marker = Buffer.from('спокойствие.</p>', 'utf8');
const pos = data.indexOf(marker);
if (pos === -1) { console.log('Marker not found!'); process.exit(1); }
const afterPos = pos + marker.length;
const crlfPos = data.indexOf(Buffer.from('\r\n'), afterPos);
if (crlfPos === -1) { console.log('CRLF not found!'); process.exit(1); }
const artifact = data.slice(afterPos, crlfPos);
console.log('Artifact bytes:', artifact);
console.log('Artifact hex:', artifact.toString('hex'));
console.log('Artifact length:', artifact.length);
const newData = Buffer.concat([data.slice(0, afterPos), data.slice(crlfPos)]);
fs.writeFileSync(filepath, newData);
console.log('File fixed successfully.');
