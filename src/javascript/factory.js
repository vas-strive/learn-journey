function factories() {

    let productCount = 0;

    return ()=>  ({
        produces: ()=> {
            return `Product A + ${productCount+=1} `;
        },
        getCount: ()=> productCount
    });
}

const company = factories();

const factoryA = company();
const factoryB = company();
const factoryC = company();

console.log(factoryA.produces());// Product A + 1
console.log(factoryA.getCount());// 1


console.log(factoryB.produces());// Product A + 2
console.log(factoryB.getCount());// 2

console.log(factoryC.produces());// Product A + 3
console.log(factoryC.getCount());// 3