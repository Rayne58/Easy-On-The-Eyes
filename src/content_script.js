console.log('!hello');
var cssId = 'readable.css';  // you could encode the css path itself to generate id..
  if (!document.getElementById(cssId))
{
  var head  = document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.innerHTML = 'body{margin:1em auto;' +
    'max-width:40em;' +
    'padding:0 .62em;' +
    'font:1.2em/1.62em sans-serif;}' +
    'h1,h2,h3{line-height:1.2em;}' +
    '@media print{body{max-width:none}};';
  head.appendChild(style);
}
