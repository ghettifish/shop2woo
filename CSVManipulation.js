const fs = require('fs');
const Json2csvTransform = require('json2csv').Transform;

/*---------------------------------------------------

This is just a starter, I have not had time to get
it working

---------------------------------------------------*/

function readFile(path, name, extension = "") {
    return JSON.parse(fs.readFileSync(path + name + extension , 'utf8'));
};

let jsonFile = JSON.parse(fs.readFileSync(__dirname + '/data/pprsfull-massaged.json', 'utf8'));



function sortProducts() {
 const key = {
  'ID': 'generated automatically?',
  'Type': '', //variable or simple
  'SKU': 'SKU',
  'Name': 'Name',
  'Published': '', // 1 or 0
  'Is featured?': '', // 1 or 0
  'Visibility in catalog': '', //visible or hidden
  'Short description': '', // This is a variable Product
  'Description': 'ProductDescription',
  'Date sale price starts': '', // Not using?
  'Date sale price ends': '', // Not using?
  'Tax status': '', // Not using?
  'Tax class': '', // Not using?
  'In stock?': '', // 1 or 0
  'Stock': '', // Not using?
  'Backorders allowed?': '', // Not using?
  'Sold individually?': '', // Not using?
  'Weight (lbs)': '', // Not using?
  'Length (in)': '', // Not using?
  'Width (in)': '', // Not using?
  'Height (in)': '', // Not using?
  'Allow customer reviews?': '', // Not using?
  'Purchase note': '', // Not using
  'Sale price': '', // Not using?
  'Regular price': 'Price',  //May need to add with Price Modifier
  'Categories': '',  //Must build manually
  'Tags': '', //Must build manually
  'Shipping class': '', // Not using?
  'Images': 'Graphic', //Will need to concat with site directory.
  'Download limit': '', //Not Applicable
  'Download expiry days': '', //Not Applicable
  'Parent': '', //Not Applicable
  'Grouped products': '', //Not Applicable
  'Upsells': '', //Not Applicable
  'Cross-sells': '', //Not Applicable
  'External URL': '', //Not Applicable
  'Button text': '', //Not Applicable
  'Position': '', //Need to Research
  'Attribute 1 name': '', //This would have to some how match a list of variations to part of the Name prop in the $ prop
  'Attribute 1 value(s)': '', //This will have to pull variations out of products and fill the possible values here. For example, it might create a blue, red, and green
  'Attribute 1 visible': '', //This one works off of a set "Use" to 1 it will equal 1 if present, and 0 if not present
  'Attribute 1 global': '', //This one works off of a set "Use" to 1 it will equal 1 if present, and 0 if not present
  'Attribute 2 name': '', // Not sure if we will need this
  'Attribute 2 value(s)': '', // Not sure if we will need this either
  'Attribute 2 visible': '', // Not sure if we will need this either
  'Attribute 2 global': '', // Not sure if we will need this either
  'Meta: _wpcom_is_markdown': '', // Need to research *
  'Download 1 name': '', //Not Applicable
  'Download 1 URL': '', //Not Applicable
  'Download 2 name': '', //Not Applicable
  'Download 2 URL': '', //Not Applicable

  /* Variations:
    Perhaps the simplest way to make this work would be to take the Attribute 1 Name and call it "Choose an option" then take attribute avlues and map to "name" in "$". As long as those attributes get mapped by name in the other csv builder, the sku's and everything else should be good to go.
    //1. Look through each of the items in the array menu item.
    //2. Combine all and use for the Attribute 1 value(s) prop on the parent.
    //3. Then start to read through the Product option array.
    //4. For each product option we need a new object added with the name set to the menu1 prop on the variation
    //5. Type gets set to "variation".
    //6. Attribute 1 name will always be option
    //7. Tax class gets set to Parent
    //8. in stock will always be 1
    //9. Parent gets set to Sku of parent variable
    //10. 
    Functions:

    The main function is going to take the props and insert them into an Array that will be used for CSV. This will handle the general data that doesn't need manipulation.
    Next it calls a function that creates a new array by pulling all of the data from each of the items on the Pruned.json
    That function will need to call a function any time it encounters a "$" as that will indicate a variable property. 
    The variable function will need to somehow get the data to the appropriate index in the array. That won't always be the same due to increasing length.
    Once all of these have completed, we will need to pass the returned arrays to a function that converts them to a CSV.
    The csv function should loop through the overall array passing each of the inner arrays to the CSV.
    

  */

     //Can we create new attributes in our csv and upload?
     //Nothing is taxable?
 }
}

function variableProd(menuOptions, productOptions, mapped, index) {
    try {
        mapped["Attribute 1 value(s)"] = menuOptions.join();
        mapped["Type"] = "variable";
        //menuOptions.Menu.MenuItem.forEach();
    }
    catch(err) {
        console.error( index + err);
    }
    
}

function mapper(array,index, property, map) {
        array.push( Initial)
        array[index][property] = json[index][map];
    }
//Generate a Map based on the object provided in Woo Commerce > Products > Export
function mapCSV(json) {
    var mapped = [];
    class Initial {
        constructor (Name, SKU, Description, Images, Price, MenuItems, Type) {
            this["Name"] = Name;
            this["SKU"] = SKU;
            this["Description"] = Description;
            this["Images"] = Images;
            this["Regular price"] = Price;
            this["Attribute 1 value(s)"] = MenuItems;
            this["Type"] = Type;
        }

        toString() {
            return `${this["Name"]}`;
        }

        print () {
            console.log(this.toString() );
        }
        // 'ID': '',
        // 'Type': 'simple',
        // 'SKU': 'SKU',
        // 'Name': 'Name',
        // 'Published': '1',
        // 'Is featured?': '',
        // 'Visibility in catalog': '',
        // 'Short description': '',
        // 'Description': 'ProductDescription',
        // 'Date sale price starts': '',
        // 'Date sale price ends': '',
        // 'Tax status': '',
        // 'Tax class': '', 
        // 'In stock?': '',
        // 'Stock': '', 
        // 'Backorders allowed?': '', 
        // 'Sold individually?': '', 
        // 'Weight (lbs)': '', 
        // 'Length (in)': '', 
        // 'Width (in)': '', 
        // 'Height (in)': '', 
        // 'Allow customer reviews?': '', 
        // 'Purchase note': '',
        // 'Sale price': '', 
        // 'Regular price': 'Price',
        // 'Categories': '',
        // 'Tags': '',
        // 'Shipping class': '', 
        // 'Images': 'Graphic',
        // 'Download limit': '',
        // 'Download expiry days': '',
        // 'Parent': '',
        // 'Grouped products': '',
        // 'Upsells': '',
        // 'Cross-sells': '',
        // 'External URL': '',
        // 'Button text': '',
        // 'Position': '',
        // 'Attribute 1 name': '', //This would have to some how match a list of variations to part of the Name prop in the $ prop
        // 'Attribute 1 value(s)': '', //This will have to pull variations out of products and fill the possible values here. For example, it might create a blue, red, and green
        // 'Attribute 1 visible': '', //This one works off of a set "Use" to 1 it will equal 1 if present, and 0 if not present
        // 'Attribute 1 global': '', //This one works off of a set "Use" to 1 it will equal 1 if present, and 0 if not present
        // 'Attribute 2 name': '', // Not sure if we will need this
        // 'Attribute 2 value(s)': '', // Not sure if we will need this either
        // 'Attribute 2 visible': '', // Not sure if we will need this either
        // 'Attribute 2 global': '', // Not sure if we will need this either
        // 'Meta: _wpcom_is_markdown': '', // Need to research *
        // 'Download 1 name': '',
        // 'Download 1 URL': '',
        // 'Download 2 name': '',
        // 'Download 2 URL': ''
    };
    
    json.forEach(function(item, index) {
        mapped.push( new Initial);
        Object.keys(item).forEach(key => {
            // console.log(key)
            
            switch(key) {
                case "Name":
                    mapped[index]["Name"] = json[index]["Name"];
                    break;
                case "SKU":
                    if(json[index]["SKU"] == "WSLCH"){
                    }
                    mapped[index]["SKU"] = json[index]["SKU"];
                    break;
                case "ProductDescription":
                    mapped[index]["Description"] = json[index]["ProductDescription"];
                    break;
                case "Graphic":
                    mapped[index]["Images"] = "/wp-content/images/oldimages/" + json[index]["Graphic"];
                    break;
                case "Price":
                    mapped[index]["Regular price"] = json[index]["Price"];
                    break;
            }
            
        });
        if(!json[index].hasOwnProperty('OptionMenus')){
            mapped[index]["Type"] = "simple";
            mapped[index]["Attribute 1 value(s)"] = "";
        } else if(json[index].hasOwnProperty('OptionMenus') && json[index].hasOwnProperty('ProductOptions')) {
            try {
                variableProd(json[index]["OptionMenus"]["Menu"]["MenuItem"], json[index]["ProductOptions"]["ProductOption"]["MenuItem"], mapped[index],json[index]);
            }
            catch(err) {
                console.error( json[index] + err);
            }
        }
    });
    return mapped;
}
function buildCSV(sourceJson) {
     
    const fields = ['ShopSiteProducts.Products.Product[0].Name', 'ShopSiteProducts.Products.Product[0].SKU', 'ShopSiteProducts.Products.Product[0].Price'];
    const opts = { fields };
    const transformOpts = { highWaterMark: 16384, encoding: 'utf-8' };
     
    const input = fs.createReadStream(sourceJson +".json", { encoding: 'utf8' });
    const output = fs.createWriteStream(sourceJson + ".csv", { encoding: 'utf8' });
    const json2csv = new Json2csvTransform(opts, transformOpts);
     
    const processor = input.pipe(json2csv).pipe(output);
     
    // You can also listen for events on the conversion and see how the header or the lines are coming out.
    json2csv
      .on('header', header => console.log(header))
      .on('line', line => console.log(line))
      .on('error', err => console.log(err));
}


//This is a small utility to pop the top row off of Woo's CSV and stash in an array.

let fields = ["ID","Type","SKU","Name","Published","Is featured?","Visibility in catalog","Short description","Description","Date sale price starts","Date sale price ends","Tax status","Tax class","In stock?","Stock","Backorders allowed?","Sold individually?","Weight (lbs)","Length (in)","Width (in)","Height (in)","Allow customer reviews?","Purchase note","Sale price","Regular price","Categories","Tags","Shipping class","Images","Download limit","Download expiry days","Parent","Grouped products","Upsells","Cross-sells","External URL","Button text","Position","Attribute 1 name","Attribute 1 value(s)","Attribute 1 visible","Attribute 1 global","Attribute 2 name","Attribute 2 value(s)","Attribute 2 visible","Attribute 2 global","Meta: _wpcom_is_markdown","Download 1 name","Download 1 URL","Download 2 name","Download 2 URL"
]

function makeCSV(array) {
    let obj = {};
    array.forEach((value) => {
        obj[value] = "";
    });
    console.log(obj);
}


function strip(file) {
    let result = file.ShopSiteProducts.Products.Product;
            fs.writeFile("stripped-pprsfull.json", JSON.stringify(result, null,4), () => {});
}

// writeFile("pruned", "./data/", "091618", ".json", JSON.stringify(mapCSV(jsonFile), null, 4));

buildCSV(jsonFile);