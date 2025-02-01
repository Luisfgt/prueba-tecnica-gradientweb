const express = require('express');
const { Liquid } = require('liquidjs');
const path = require('path');
const fs = require('fs');

const app = express();

const engine = new Liquid({
  root: [
    path.resolve(__dirname, 'templates'),
    path.resolve(__dirname, 'sections'),
    path.resolve(__dirname, 'snippets')
  ],
  extname: '.liquid',
});

app.engine('liquid', engine.express());
app.set('views', path.resolve(__dirname, 'templates'));
app.set('view engine', 'liquid');

app.use(express.static('public'));
app.use('/assets', express.static('assets'));

const products = require('./data/products.json');
const collections = require('./data/collections.json');
const stores = require('./data/stores.json');
const settings = JSON.parse(fs.readFileSync('./config/settings_data.json', 'utf-8'));
const assetsPath = path.join(__dirname, 'assets');
console.log('Assets path:', assetsPath);

console.log(settings.sections.header.settings.store_logo_url);


app.get('/', (req, res) => {
  res.render('index', { 
    products, 
    collections, 
    stores,
    settings: settings.sections,
    currentPath: req.path
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
