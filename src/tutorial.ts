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




