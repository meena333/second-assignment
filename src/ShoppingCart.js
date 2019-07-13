const ShoppingCart = class ShoppingCart {
  constructor() {
    this.items = [];
  }
  getItems() {
    return this.items;
  }
  addItem(itemName, quantity, price) {
    const newItemObject = {
      name: itemName,
      quantity: quantity,
      pricePerUnit: price
    };
    this.items.push(newItemObject);
  }
  clear() {
    this.items = [];
  }
  total() {
    return this.items.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.quantity * currentItem.pricePerUnit;
    }, 0);
  }
};

module.exports = ShoppingCart;
