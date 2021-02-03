const fs   = require('fs');
const sass = require('sass');

const res  = sass.renderSync({file: 'pixels.scss'});

fs.writeFileSync('pixels.css', res.css);

console.log('✅ CSS file created');