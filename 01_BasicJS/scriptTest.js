/* let year = 2001;
console.log(year)

switch(year%12){
case 0:
    animal = 'Monkey'
    break;
case 1:
    aniaml = 'Rooster'
    break;
case 2:
    aniaml = 'Dog'
    break;
case 3:
    animal = 'Pig'
    break;
case 4:
    aniaml = 'Rat'
    break;
case 5:
    aniaml = 'Ox'
    break;
case 6:
    aniaml = 'Tiger'
    break;
case 7:
    aniaml = 'Rabbit'
    break;
case 8:
    aniaml = 'Dragon'
    break;
case 9:
    animal = 'Snake'
    break;
case 10:
    aniaml = 'Horse'
    break;
case 11:
    aniaml = 'Sheep'
    break;
}
console.log(animal)
*/


/*function zodiac(year) {

    let zodiac = ['monkey','rooster','dog','pig','rat','ox','tiger','rabbit','dragon','snake','horses','sheep']

    let date = new Date;

    year = date.getFullYear() < year?year - 543:year;

    return zodiac[year%12];

}

console.log(zodiac(2001));

console.log(zodiac(2544)); */

// const kg = 0.453592
// const meter = 0.0254
// function BMI(k,m){
//     k = k*kg
//     m = m*meter
//     let b = k/(m*m)
//     return b
// } 
// console.log(BMI(36.5,39))
// console.log(BMI(130.1,66.63543307))
// console.log(BMI(150,88))

// function Payment(totalPrice, custPay){
//     let exchange = custPay - totalPrice;
//     console.log('ราคาสินค้า :'+' '+totalPrice+' '+'บาท');
//     console.log('รับเงินมา :'+' '+ custPay+' '+'บาท');
//     console.log('เงินทอน :'+' '+exchange +' '+'บาท');
//     let bank = {
//         bank_500_BTH : 0, 
//         bank_100_BTH : 0, 
//         bank_50_BTH : 0,  
//         bank_20_BTH : 0, 
//         coin_10_BTH : 0,  
//         coin_5_BTH : 0, 
//         coin_2_BTH : 0, 
//         coin_1_BTH : 0
//     }

//     while(exchange > 0){
//         if(exchange >= 500){
//             exchange = exchange-500;
//             bank.bank_500_BTH++;
//         } else if(exchange >= 100){
//             exchange = exchange-100;
//             bank.bank_100_BTH++;
//         } else if(exchange >= 50){
//             exchange = exchange-50;
//             bank.bank_50_BTH++;
//         } else if(exchange >= 20){
//             exchange = exchange-20;
//             bank.bank_20_BTH++;
//         } else if(exchange >= 10){
//             exchange = exchange-10;
//             bank.coin_10_BTH++;
//         } else if(exchange >= 5){
//             exchange = exchange-5;
//             bank.coin_5_BTH++;
//         } else if(exchange >= 2){
//             exchange = exchange-2;
//             bank.coin_2_BTH++;
//         } else {
//             exchange = exchange-1;
//             bank.coin_1_BTH++;
//         }
//     }

//     for(let money in bank){
//         if(bank[money] != 0){
//         console.log(`${money} : ${bank[money]}`)
//         }
//     }
//     //return bank;
// }

// console.log(Payment(200,1000))
// console.log('-----------------')
// console.log(Payment(124,500))
// console.log('-----------------')
// console.log(Payment(48,100))
let per1 = { id: 1, name: 'Joe' };

let per2 = per1;



doSomething(per2);

function doSomething(p) {

  p.name = 'Mary';

}

console.log(per1);


