const express = require('express');
const app = express();
const path = require("path");
const {join} = require("path");

app.get('/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, `style.css`));
}); 

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, `index.html`))
});

app.get('/docs/:version/:path', (req, res) => {
  let version = req.params.version;
  let path = req.params.path;
  res.sendFile(join(__dirname, 'docs', version || require('klae-djs').version, path+'.html' || 'index.html'), null, function(err) {
    res.status(404);
    res.send(`{ "error": "404 Not Found!" }`);
  });
});

app.listen(8080);