const fs = require('fs');

//This was my current idea for pulling in the full JSON for massaging, but I'm not
//convinced this is the best way.

const jsonFile = fs.readFileSync(__dirname + '/data/pprsfull.json', 'utf8');

let sample = {
    "ShopSiteProducts": {
        "Response": [{
            "ResponseCode": [
                "1"
            ],
            "ResponseDescription": [
                "success"
            ]
        }],
        "Products": [{
            "Product": [
                {
                "Name": [
                    "Brazilian Agate Bookend"
                ],
                "SaleAmount": [
                    ""
                ],
                "Graphic": [
                    "ABE-A.jpg"
                ],
                "ProductImageSize": [
                    "0"
                ],
                "ProductDescription": [
                    "<div><strong><font color=\"#0000ff\">Sold by the pair.  </font></strong></div>\n<p>Bookends range in cost from $5 per pair to $35 per pair.  This product is available in Black, Blue, Green, Natural, Pink, Purple, Red, and Teal.<br />\n<br />\n<strong>Below are the approximate sizes.  **Please note that this is a product of nature.  Size and shape WILL vary.**  Sizing is measured L x W x H: </strong><br />\nSmall ($5-$15): 5&quot; x 2&quot; x 3.5&quot; to 5.5&quot; x 2&quot; x 4&quot;<br />\nMedium ($16-$25): 5.5&quot; x 2.5&quot; x 4&quot; to 6&quot; x 3&quot; x 4.5&quot;<br />\nLarge ($26-$35): 6&quot; x 3.5&quot; x 4.5&quot; to 7&quot; x 4&quot; x 5.5&quot;</p>\n<p><strong style=\"color: rgb(255, 0, 0);\">**PLEASE NOTE!!**</strong><span style=\"color: rgb(255, 0, 0);\">  This product is dyed with a mineral based dye.  As with most artificially colored items, if this product is used or left in a wet environment, it may cause the dye to bleed from the stone.  </span><strong style=\"color: rgb(255, 0, 0);\">Pikes Peak Rock Shop will not be responsible for damage caused by using this product in a wet or damp environment.</strong></p>"
                ],
                "OptionMenus": [{
                    "Menu": [{
                        "MenuItem": [
                            "Assorted Colors Small: ABE/A/S $5-$15;",
                            "Assorted Colors Medium: ABE/A/M $16-$25;9",
                            "Assorted Colors Large: ABE/A/L $26-$35;19",
                            "Blue Small: ABE/B/S $5-$15;",
                            "Blue Medium: ABE/B/M $16-$25;9",
                        ]
                    }]
                }],
                "OptionColumnHeaders": [
                    "\n"
                ],
                "ProductOptions": [{
                    "ProductOption": [{
                            "$": {
                                "name": "Assorted Colors Small: ABE/A/S $5-$15"
                            },
                            "Use": [
                                ""
                            ],
                            "Menu1": [
                                "Assorted Colors Small: ABE/A/S $5-$15"
                            ],
                            "AppendText": [
                                "- OUT OF STOCK"
                            ],
                            "SKU": [
                                "ABE/A/S"
                            ],
                            "Image": [
                                "none"
                            ]
                        },
                        {
                            "$": {
                                "name": "Assorted Colors Medium: ABE/A/M $16-$25"
                            },
                            "Use": [
                                "checked"
                            ],
                            "Menu1": [
                                "Assorted Colors Medium: ABE/A/M $16-$25"
                            ]
                        },

                        
                    ]
                }]
            },
            {
                "Name": [
                    "Another Agate Bookend"
                ],
                "SaleAmount": [
                    ""
                ],
                "Graphic": [
                    "ABE-A.jpg"
                ],
                "ProductImageSize": [
                    "0"
                ],
                "ProductDescription": [
                    "<div><strong><font color=\"#0000ff\">Sold by the pair.  </font></strong></div>\n<p>Bookends range in cost from $5 per pair to $35 per pair.  This product is available in Black, Blue, Green, Natural, Pink, Purple, Red, and Teal.<br />\n<br />\n<strong>Below are the approximate sizes.  **Please note that this is a product of nature.  Size and shape WILL vary.**  Sizing is measured L x W x H: </strong><br />\nSmall ($5-$15): 5&quot; x 2&quot; x 3.5&quot; to 5.5&quot; x 2&quot; x 4&quot;<br />\nMedium ($16-$25): 5.5&quot; x 2.5&quot; x 4&quot; to 6&quot; x 3&quot; x 4.5&quot;<br />\nLarge ($26-$35): 6&quot; x 3.5&quot; x 4.5&quot; to 7&quot; x 4&quot; x 5.5&quot;</p>\n<p><strong style=\"color: rgb(255, 0, 0);\">**PLEASE NOTE!!**</strong><span style=\"color: rgb(255, 0, 0);\">  This product is dyed with a mineral based dye.  As with most artificially colored items, if this product is used or left in a wet environment, it may cause the dye to bleed from the stone.  </span><strong style=\"color: rgb(255, 0, 0);\">Pikes Peak Rock Shop will not be responsible for damage caused by using this product in a wet or damp environment.</strong></p>"
                ],
                "OptionMenus": [{
                    "Menu": [{
                        "MenuItem": [
                            "Assorted Colors Small: ABE/A/S $5-$15;",
                            "Assorted Colors Medium: ABE/A/M $16-$25;9",
                            "Assorted Colors Large: ABE/A/L $26-$35;19",
                            "Blue Small: ABE/B/S $5-$15;",
                            "Blue Medium: ABE/B/M $16-$25;9",
                        ]
                    }]
                }],
                "OptionColumnHeaders": [
                    "\n"
                ],
                "MoreInfoMetaKeywords": [
                    "Wholesale Fossils, Gems, Souvenirs, Rocks, Minerals, Crystals, Indian Jewelry, wholesale, fossils, gems, sourveirs, rocks, minerals, crystals, Brazilian agate, amethyst"
                ],
                "ProductOptions": [{
                    "ProductOption": [{
                            "$": {
                                "name": "Assorted Colors Small: ABE/A/S $5-$15"
                            },
                            "Use": [
                                ""
                            ],
                            "Menu1": [
                                "Assorted Colors Small: ABE/A/S $5-$15"
                            ],
                            "AppendText": [
                                "- OUT OF STOCK"
                            ],
                            "SKU": [
                                "ABE/A/S"
                            ],
                            "Image": [
                                "none"
                            ]
                        },
                        {
                            "$": {
                                "name": "Assorted Colors Medium: ABE/A/M $16-$25"
                            },
                            "Use": [
                                "checked"
                            ],
                            "Menu1": [
                                "Assorted Colors Medium: ABE/A/M $16-$25"
                            ]
                        },

                        
                    ]
                }]
            }
            ]
        }]
    }
}
let final = [

    {
        "Name": "Brazilian Agate Bookend",
        "Graphic": "ABE-A.jpg",
        "ProductImageSize": "0",
        "ProductDescription": "<div><strong><font color=\"#0000ff\">Sold by the pair.  </font></strong></div>\n<p>Bookends range in cost from $5 per pair to $35 per pair.  This product is available in Black, Blue, Green, Natural, Pink, Purple, Red, and Teal.<br />\n<br />\n<strong>Below are the approximate sizes.  **Please note that this is a product of nature.  Size and shape WILL vary.**  Sizing is measured L x W x H: </strong><br />\nSmall ($5-$15): 5&quot; x 2&quot; x 3.5&quot; to 5.5&quot; x 2&quot; x 4&quot;<br />\nMedium ($16-$25): 5.5&quot; x 2.5&quot; x 4&quot; to 6&quot; x 3&quot; x 4.5&quot;<br />\nLarge ($26-$35): 6&quot; x 3.5&quot; x 4.5&quot; to 7&quot; x 4&quot; x 5.5&quot;</p>\n<p><strong style=\"color: rgb(255, 0, 0);\">**PLEASE NOTE!!**</strong><span style=\"color: rgb(255, 0, 0);\">  This product is dyed with a mineral based dye.  As with most artificially colored items, if this product is used or left in a wet environment, it may cause the dye to bleed from the stone.  </span><strong style=\"color: rgb(255, 0, 0);\">Pikes Peak Rock Shop will not be responsible for damage caused by using this product in a wet or damp environment.</strong></p>",
        "MenuItem": [
                    "Assorted Colors Small: ABE/A/S $5-$15;",
                    "Assorted Colors Medium: ABE/A/M $16-$25;9",
                    "Assorted Colors Large: ABE/A/L $26-$35;19",
                    "Blue Small: ABE/B/S $5-$15;",
                    "Blue Medium: ABE/B/M $16-$25;9"
                    ],    
        "ProductOption": [
            {
                "name": "Assorted Colors Small: ABE/A/S $5-$15",
                "Menu1": "Assorted Colors Small: ABE/A/S $5-$15",
                "AppendText": "- OUT OF STOCK",
                "SKU": "ABE/A/S",
                "Image": "none",
            },
            {
                "name": "Assorted Colors Medium: ABE/A/M $16-$25",
                "Use": "checked",
                "Menu1": "Assorted Colors Medium: ABE/A/M $16-$25"
            },

        ]
    },
    {
        "Name": "Another Agate Bookend",
        "Graphic": "ABE-A.jpg",
        "ProductImageSize": "0",
        "ProductDescription": "<div><strong><font color=\"#0000ff\">Sold by the pair.  </font></strong></div>\n<p>Bookends range in cost from $5 per pair to $35 per pair.  This product is available in Black, Blue, Green, Natural, Pink, Purple, Red, and Teal.<br />\n<br />\n<strong>Below are the approximate sizes.  **Please note that this is a product of nature.  Size and shape WILL vary.**  Sizing is measured L x W x H: </strong><br />\nSmall ($5-$15): 5&quot; x 2&quot; x 3.5&quot; to 5.5&quot; x 2&quot; x 4&quot;<br />\nMedium ($16-$25): 5.5&quot; x 2.5&quot; x 4&quot; to 6&quot; x 3&quot; x 4.5&quot;<br />\nLarge ($26-$35): 6&quot; x 3.5&quot; x 4.5&quot; to 7&quot; x 4&quot; x 5.5&quot;</p>\n<p><strong style=\"color: rgb(255, 0, 0);\">**PLEASE NOTE!!**</strong><span style=\"color: rgb(255, 0, 0);\">  This product is dyed with a mineral based dye.  As with most artificially colored items, if this product is used or left in a wet environment, it may cause the dye to bleed from the stone.  </span><strong style=\"color: rgb(255, 0, 0);\">Pikes Peak Rock Shop will not be responsible for damage caused by using this product in a wet or damp environment.</strong></p>",
        "MenuItem": [
                    "Assorted Colors Small: ABE/A/S $5-$15;",
                    "Assorted Colors Medium: ABE/A/M $16-$25;9",
                    "Assorted Colors Large: ABE/A/L $26-$35;19",
                    "Blue Small: ABE/B/S $5-$15;",
                    "Blue Medium: ABE/B/M $16-$25;9"
                    ],    
        "ProductOption": [
            {
                "name": "Assorted Colors Small: ABE/A/S $5-$15",
                "Menu1": "Assorted Colors Small: ABE/A/S $5-$15",
                "AppendText": "- OUT OF STOCK",
                "SKU": "ABE/A/S",
                "Image": "none",
            },
            {
                "name": "Assorted Colors Medium: ABE/A/M $16-$25",
                "Use": "checked",
                "Menu1": "Assorted Colors Medium: ABE/A/M $16-$25"
            },

        ]
    }
]







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

function cleanProduct(i) {
    let newProduct = {};
    Object.keys(i).forEach( key => {
        if(i[key].constructor === Array) {
            if(key === "ProductOptions"){
                newProduct[key] =  variableProduct(i[key]);
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
        Object.keys(input).forEach(i => cleanProduct(input[i]))
        node[0] = input;
    } else if(input.constructor === Array) {
        input.forEach(i => node.push(cleanProduct(i)))
    }
    return node;
}


let result = cleanShopSite(sample.ShopSiteProducts.Products[0].Product)

fs.writeFile(__dirname + '/data/pprsfull-massaged.json', JSON.stringify(result, null, 4), () => {})