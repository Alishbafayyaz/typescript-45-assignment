// function make_car(manufacturer:string , model:string , ...options:[string,any][]):Object{
//     let car = { manufacturer , model};
//     options.forEach(option => {
//         let [key, value] = option;  // Nested destructuring
//         car[key] = value;  // Optional properties ko car object mein add karna
//     });

//     return car;
// }

// console.log(make_car('Suzuki' , 'Alto' , ['color', 'red'] , ['year' , '2020']))
// console.log(make_car('Toyota' , 'Corolla' , ['color', 'black'] , ['year' , '2017'] , ['sunroof' , true]))

interface Car {
    manufacturer: string;
    model: string;
    [key: string]: string | number | boolean; // Index signature for optional properties
}

function createCar(manufacturer: string, model: string, ...options: [string, string | number | boolean][]) {
    let car: Car = { manufacturer, model };

    // Process optional properties
    options.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}

// Example usage:
let car1 = createCar('Toyota', 'Camry', ['color', 'blue'], ['year', 2022]);
let car2 = createCar('Honda', 'Civic', ['color', 'red'], ['year', 2020], ['sunroof', true]);

console.log(car1);
console.log(car2)