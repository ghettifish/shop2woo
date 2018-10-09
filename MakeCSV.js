const fs = require('fs');
const Json2csvParser = require('json2csv').Parser;
const fields = [
  "Type",
  "SKU",
  "Name",
  "Published",
  "Visibility in catalog",
  "Description",
  "In stock?",
  "Allow customer reviews?",
  "Regular price",
  "Images",
  "Parent",
  "Position",
  "Attribute 1 name",
  "Attribute 1 value(s)",
  "Attribute 1 visible",
];


function SortProducts() {
  this['Type'] = 'simple'; //variable, variation or simple
  this['SKU']= 'TESTSKU';
  this['Name'] = 'TESTNAME';
  this['Visibility in catalog'] = 'visible'; //visible or hidden
  this['Description'] = 'ProductDescription';
  this['In stock?'] = 1; // 1 or 0
  this['Images'] = 'http://pprs.vm/wp-content/uploads/store/3LED-B-Lrg.jpg';
  this['Parent'] =  '';
  this['Position'] = ''; //Parent gets 0, everything else counts uses array index;
  this['Attribute 1 value(s)'] = ''; //must be 1 for the parent
  this['Attribute 1 visible'] = ''; //parent will be 1 for visible unless otherwise marked;
  this['Regular price']  =  0.00;  //May need to add with Price Modifier for variable products
  
  //Constants
  this['Published'] = 1; // 1 or 0
  this['Allow customer reviews?'] = 0;
  this['Attribute 1 name'] = 'options';
  
}

let data = new SortProducts();

const json2csvParser = new Json2csvParser({ fields });
const csv = json2csvParser.parse(data);

fs.writeFile(__dirname + '/data/testing-MakeCSV.csv', csv, () => {});

