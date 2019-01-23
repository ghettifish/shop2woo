const imageDir = 'http://staging-pikespeakrock.kinsta.com/wp-content/uploads/store/';
const showInvalid = true;

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
  "Attribute 1 global"
];


function SortProducts() {
  this['Type'] = 'simple'; //variable, variation or simple
  this['SKU']= 'TESTSKU';
  this['Name'] = 'TESTNAME';
  this['Visibility in catalog'] = 'visible'; //visible or hidden
  this['Description'] = 'ProductDescription';
  this['In stock?'] = 1; // 1 or 0
  this['Images'] = '';
  this['Parent'] =  '';
  this['Position'] = ''; //Parent gets 0, everything else counts uses array index;
  this['Attribute 1 value(s)'] = ''; //must be 1 for the parent
  this['Regular price']  =  0.00;  //May need to add with Price Modifier for variable products
  this['Attribute 1 global'] = 0;
  
  //Constants
  this['Published'] = 1; // 1 or 0
  this['Allow customer reviews?'] = 0;
  this['Attribute 1 name'] = 'options';
  let visibility;
  this["buildProduct"] = function(product, type) {
    if(product['ProductOptions']) {
      let productOptions = product['ProductOptions']
      let hasChecked = productOptions.some(function(element) {
       return element['Use'] === "checked";
      });
      visibility = hasChecked ? 'visible' : 'hidden'; 

    } else if (type === "simple") {
      visibility =  checkVisibility(product) ? 'visible' : 'hidden';
    } else if(type === "variation") {
      visibility = product['Use'] ? 'visible' : 'hidden';
    }
    
    this['Type'] = type;
    this['SKU'] = product['SKU'];
    this['Name'] = product['Name'];
    this['Visibility in catalog'] = visibility;
    this['In stock?'] = 1; // 1 or 0
    if(product["Image"] != "none"){
      this['Images'] = imageDir + product["Graphic"];
    }
    this['Position'] = 0; //Parent gets 0, everything else counts uses array index;
    this['Attribute 1 visible'] = ""; //parent will be 1 for visible unless otherwise marked;
    
    this['Published'] = 1; // 1 or 0
    this['Allow customer reviews?'] = 0;
    this['Attribute 1 name'] = 'options';
  }
  
}

function valid(product, logger) {
  //Validate products
  const valid = ["Name", "SKU", "Price"];

  if(valid.every(function(x) {
    return x in product;
  })) {
    return true;
  } else {
    logger.push(product);
    return false;
  }


}


function checkVisibility(obj) {
  if(obj.hasOwnProperty("ProductOnPages")) {
    if(obj["ProductOnPages"].length > 0) return true;
  } else false;
}

function getNames(products) {
  let arr = [];
  products.forEach(k => {
    arr.push(k['Name']);
  });
  return arr.join();
}

function buildVariation(product, parentSKU, position, newJSON, parentPrice, parentDescription, parentName, passedName) {
  let revProduct = new SortProducts();
  
  let priceModifier = parseInt(product["PriceModifier"], 10);
  let price = product["PriceModifier"] != "" ? priceModifier : 0;
  revProduct.buildProduct(product, 'variation');
  let inStock = product['Use'] === 'checked' ? 1 : 0;
  revProduct['Name'] = parentName + ' - ' + product['Name'];
  revProduct['In stock?'] = inStock;
  revProduct['Published'] = inStock;
  revProduct['Parent'] = parentSKU;
  revProduct['Position'] = position;
  revProduct['Regular price']  =  price + parseInt(parentPrice, 10);
  revProduct['Description'] = "";
  revProduct['Attribute 1 value(s)'] = passedName;



  newJSON.push(revProduct);
  return;
}

function buildVariable(product, newJSON) {
  let revProduct = new SortProducts();
  revProduct.buildProduct(product,"variable");
  // revProduct['Attribute 1 value(s)'] = product["OptionMenus"].join(",");
  revProduct['Attribute 1 value(s)'] = getNames(product["ProductOptions"]);
  revProduct['Regular price']  =  product["Price"];
  revProduct['Description'] = product['ProductDescription'].replace( /\s\s+/g, ' ' );
  revProduct['Attribute 1 visible'] = 1;
  newJSON.push(revProduct);
  product["ProductOptions"].forEach((k,position) => {
    // buildVariation(k, product['SKU'], (position + 1), newJSON, product["Price"], product['ProductDescription'],product['Name'],product["OptionMenus"][position]);
    buildVariation(k, product['SKU'], (position + 1), newJSON, product["Price"], product['ProductDescription'],product['Name'],k['Name']);

  });

  
  return;
}

function buildSimple(product, newJSON) {
  let revProduct = new SortProducts();
  revProduct.buildProduct(product,'simple');
  revProduct['Regular price']  =  product["Price"];
  revProduct['Description'] = product['ProductDescription'];

  newJSON.push(revProduct);
  return;
}

function buildJSON(filename) {
  let file = fs.readFileSync(__dirname + filename);
  let json = JSON.parse(file);
  let products = json["Products"];

  let newJSON = [];
  let invalidProducts = [];

  products.forEach(parent => {
    
    //Parent Level Products
    if (valid(parent, invalidProducts)){
      //Check for variable Products
      if(parent.hasOwnProperty("ProductOptions")) {
        if(parent["ProductOptions"].length >= 1) {
          buildVariable(parent, newJSON);
        } else {
          buildSimple(parent, newJSON);
        }
      } else {
        buildSimple(parent, newJSON);
      }

      Object.keys(parent).forEach(property => {
      });
    }
  });

  
  if(invalidProducts.length > 0) {
    console.log("There were problems with some of the products.");
    if(showInvalid === true) {
      invalidProducts.forEach(k => {
        console.log(k);
      })
    }
    
  } 
  return newJSON;
}

let data = buildJSON('/data/clean.json');

function buildCSV(data, fields){
  const json2csvParser = new Json2csvParser({ fields });
  const csv = json2csvParser.parse(data);
  return csv;
}

//fs.writeFile(__dirname + '/data/testing-buildJSON.json', data, () => {});

fs.writeFile(__dirname + '/data/pprsfull.csv', buildCSV(data,fields), () => {}); 