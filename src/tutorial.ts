console.log("TypeScript Tutorial")

interface someValue {
    name: string;
    id: number;
}

let someObj: someValue = {
    name: "Ridwam",
    id: 123,
}
console.log(someObj);

let awesomeName:string = "shakeAndBake"
awesomeName = awesomeName.toUpperCase();
awesomeName
// awesomeName = 20;

let amount:number = 20;
amount= 12 - 1;
// amount = "pants"

let isAwesome:boolean =  true;
isAwesome= false;
// isAwesome = "shakeAndbake";

// typescript union
let tax: number | string = 10;
tax = 10;
tax = "$10"

// literal value
let requestStatus:"pending" | "success" | "error" = "pending";
requestStatus = "success";
// requestStatus = "random";

let notSure:any = 4;
notSure = "maybe a string";
notSure = false;

let random:number;

const books = ["1984", "Brave New World", "Fahrenheit 451"];
let foundBook:string | undefined;

for (let book of books) {
    if (book === "1984") {
        foundBook = book;
        foundBook = foundBook.toUpperCase()
        break;
    }
}

foundBook?.length


let discount: number | string = 20;
discount = "20%"
// discount = true;

let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';
orderStatus = 'shipped';
// orderStatus = 'cancelled'

// arrays in typescript
let prices:number[] = [100, 75, 42,];
prices.push(10);
// prices.push('hello')

let fruit: string[] = ['apple', 'orange'];
fruit.push('mango')
// fruit.push(false)

// let randomValues:[] = ['hello']
let emptyValues:number[] = []

let names = ['peter', 'susan', 1];
let arry:(string | boolean)[] = ['apple', true]

let temperatures:number[] = [20, 25, 30];
// temperatures.push('hot');

let colors:string[] = ['red', 'green', 'blue'];
// colors.push(true)

let mixedArray:(number | string)[] = [1, 'two', 3];

// objects in typescript
let car:{brand: string; year: number} = {brand: 'toyota', year: 2020};

car.brand = 'ford';
// car.color = 'blue';

let car1:{brand: string; year: number} = {brand: 'audi', year: 2022};

let book = {title: 'book', cost:20}
let pen = {title: 'pen', cost:10}
let notebook = {title: 'notebook'}

let items: { readonly title:string; cost?: number }[] = [book, pen, notebook];
// items[0].title = 'new book';

let bike:{brand:string; year:number} = {brand: 'yamaha', year: 2010};
// bike.year = 'old'
let laptop:{brand:string; year:number} = {brand: 'Dell', year: 2020};
// let laptop2:{brand:string; year:number} = {brand: 'HP'};

let product1 = {title: 'shirt', price:20};
let product2 = {title: 'pants'};
let products: {title:string; price?: number}[] = [product1, product2];

// products.push({title: "shoes", price: 'expensive'})

function sayHi(name:string){
    console.log(`Hello there ${name.toLocaleLowerCase()}`);
    
    
}
sayHi("Ridwan");
// sayHi(3);

