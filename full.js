const imageDir = 'http://pprs.vm/wp-content/uploads/store/';
const showInvalid = true;

const getURL = 'http://www.pikespeakrock.com/cgi-pikespeakrock/bo/db_xml.cgi?clientApp=1&dbname=products';


const fs = require('fs');
const Json2csvParser = require('json2csv').Parser;
const xml2js = require('xml2js');
const parser = new xml2js.Parser();

function convertXML(file) {
    fs.readFile(__dirname + file, function(err, data) {
        parser.parseString(data, function(err, result) {
           resolve(JSON.stringify(result, null, 4));
        });
    });
}

let full = new Promise((resolve,reject) => {
    resolve(convertXML('/data/pprsfull.xml')
    
    );
});


full.then(data => {
    console.log(data);
})
function eliminateSingleItems(items) {
    if(typeof items != "string") {
        if(items.constructor === Array) {
            if(items.length === 1) {
                return eliminateSingleItems(items[0]);
            } else if(items.length > 1) {
                if(items.every(function(i){ return typeof i === "string" })){
                    return items;
                } else {
                    let newArr = []
                    items.forEach( key => {
                        newArr.push(eliminateSingleItems(key));
                    });
                    return newArr;
                }
            }
        } else if(items.constructor === Object) {
            if(Object.keys(items).length === 1) {
                let mygosh = Object.keys(items)[0];
                return eliminateSingleItems(items[mygosh]);
            } else if(Object.keys(items).length > 1) {
                if(Object.keys(items).every(function(i){ 
                    return (typeof i === "string" &&  typeof items[i] === "string")
                    })
                ){
                    console.log(typeof items[i])
                    console.log("find me " + Object.keys(items).every(function(i){ 
                        return typeof i === "string" }))
                    return items;
                } else {
                     return cleanProduct(items);
                }
            }
        } 
    } else {
        return items;
    }
}

function variableProduct(productOptionsArr) {
    let returnProductOptions = [];
    let products = productOptionsArr[0]["ProductOption"];

    let name;

    try{
        if(products != "" || products != undefined){
            products.forEach(key => {
                let productOptions={};
        
                for (var item in key) {
                    if(item == "$") {
                        try {
                            productOptions["Name"] = key["$"]["name"];
                        }
                        catch(ex) {
                            console.error(ex);
                        }
                    } else {
                        try {
                            productOptions[item] = key[item][0];
                        }
                        catch (ex) {
                            console.error(ex);
                        }
                    } 
                }
                returnProductOptions.push(productOptions);
            })
            return returnProductOptions;
        }
        else {return};
        
    }
    catch(err) {
        variableproblems.push(globalstate["Name"]);
    }
}

function cleanProduct(i) {
    let newProduct = {};
    Object.keys(i).forEach( key => {
        if(i[key].constructor === Array) {
            if(key === "ProductOptions" && i[key][0] != "") {
                try {
                    globalstate = i;
                    newProduct[key] =  variableProduct(i[key]);
                } catch(err) {
                    console.error(err)
                }
            } else if(key === "Response") {
                return;
            } else if(i[key][0] != "" && i[key][0] != "\n") {
                newProduct[key] = eliminateSingleItems(i[key]);
            }
            
            
        } else if (i[key].constructor === Object) {
            if(Object.keys(i[key]) === "ProductOptions"){
                return cleanProduct(i[key]);
            } else if(i[key][0] != "" && i[key][0] != "\n") {
                newProduct[key] = eliminateSingleItems(i[key]);
            }
            
        }  else if(i === "ShopSiteProducts") {
            return;
            
        } else {
            console.log("logic needed");
        }
    });
    return newProduct;
}

function cleanShopSite(input) {
    let node = [];
    if(input.constructor === Object) {
        Object.keys(input).forEach(i => node = cleanProduct(input[i]))
    } else if(input.constructor === Array) {
        input.forEach(i => node = cleanProduct(i))
    }
    productsbuilt = node["Products"].length;
    return node;
}
// let result = cleanShopSite(full);




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
  "Attribute 1 visible"
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
  
  //Constants
  this['Published'] = 1; // 1 or 0
  this['Allow customer reviews?'] = 0;
  this['Attribute 1 name'] = 'options';

  this["buildProduct"] = function(product, type) {
    let visibility = product['Use'] === 'checked' ? 'visible' : 'hidden';
    this['Type'] = type;
    this['SKU'] = product['SKU'];
    this['Name'] = product['Name'];
    this['Visibility in catalog'] = visibility;
    this['In stock?'] = 1; // 1 or 0
    if(product["Image"] != "none"){
      this['Images'] = imageDir + product["Graphic"];
    }
    this['Position'] = 0; //Parent gets 0, everything else counts uses array index;
    this['Attribute 1 visible'] = 1; //parent will be 1 for visible unless otherwise marked;
    
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



function buildVariation(product, parentSKU, position, newJSON, parentPrice, parentDescription, parentName, passedName) {
  let revProduct = new SortProducts();
  
  let priceModifier = parseInt(product["PriceModifier"], 10);
  let price = product["PriceModifier"] != "" ? priceModifier : 0;
  revProduct.buildProduct(product, 'variation');
  let inStock = product['Use'] === 'checked' ? 1 : 0;
  revProduct['Name'] = parentName + ' - ' + product['Name'];
  revProduct['In stock?'] = inStock;
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
  revProduct['Attribute 1 value(s)'] = product["OptionMenus"].join(",");
  revProduct['Regular price']  =  product["Price"];
  revProduct['Description'] = product['ProductDescription'];
  revProduct['Attribute 1 visible'] = 1;
  product["ProductOptions"].forEach((k,position) => {
    buildVariation(k, product['SKU'], (position + 1), newJSON, product["Price"], product['ProductDescription'],product['Name'],product["OptionMenus"][position]);
  });

  newJSON.push(revProduct);
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


let data = buildJSON('/data/pprsfull-massaged.json');

function buildCSV(data, fields){
  const json2csvParser = new Json2csvParser({ fields });
  const csv = json2csvParser.parse(data);
  return csv;
}
