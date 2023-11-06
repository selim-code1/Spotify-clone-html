// this


// function Person(name){
//     this.name = name;
// }
// const Muhammad = new Person('Muhammad')

// console.log(Muhammad);

// const car = {
//     brand: "Toyota",
//     year: 2003,
//     showModel: function(brand,year){
//         console.log(this.brand);
//     },
// };

// const anotherCar ={
//     brand: "BMW",
//     year: 1997,
//     showModel: function (brand, year){
//         console.log(this.brand);
//     },
// };
// car.showModel.call(anotherCar)


// Apply()


function Person(name){
    this.name = name;
}
const Muhammad = new Person('Muhammad')

console.log(Muhammad);

const car = {
    brand: "Toyota",
    year: 2003,
    showModel: function(brand, year){
        console.log(this.brand);
    },
};

const anotherCar ={
    brand: "BMW",
    year: 1997,
    showModel: function (color, fuil){
        console.log(this.brand);
    },
};
car.showModel.apply(anotherCar, ["green", "gazoline"])