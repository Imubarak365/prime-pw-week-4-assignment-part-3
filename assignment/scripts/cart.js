console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []

function addItem(item) {
    const before = basket.length
    const newBasket = basket.push(item)
    console.log(`basket is ${before}`);
    console.log(`new basket is ${newBasket}`);

    if (newBasket > before) {
        return true;
    }
}
// addItem(3)
console.log(addItem(4));

function listItems(items) {
    for (let i = 0; i < items.length; i++) {
        console.log(items[i]);
    }
}

let testArray = [1, 4, 3]
console.log(listItems(testArray));

function empty(values) {
    values = [];
}

console.log(empty([1, 2, 3]))