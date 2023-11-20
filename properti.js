let shoppingCard = {
  book: 1,
  pen: 43,
  bottle: 6,
  mobile: 3,
};

// let propertiesName = shoppingCard["pen"];
// console.log(propertiesName);

// let properites = Object.keys(shoppingCard);
// console.log(properites);
// let properitesValues = Object.values(shoppingCard);
// console.log(properitesValues);

for (let propertyName in shoppingCard) {
  let value = shoppingCard[propertyName];
  console.log(propertyName, value);
}
