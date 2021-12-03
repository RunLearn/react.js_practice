// //011
// let s = 0;
// let ss = 0;
//
// //전체 스캔하는 법
// for (i=0; i<101; i++){
//     s += i
// }
// //공식으로 푸는 법
// let N = 100
// ss = (N + 1) * ( N / 2 )
//
// console.log(s)
// console.log(ss)

//012
// class Wizard {
//     constructor(health,mana,armor) {
//         this.health = health
//         this.mana = mana
//         this.armor = armor
//     }
//
//     attack(){
//         console.log('파이어볼')
//     }
// }
//
// const x = new Wizard(545,210,10)
// console.log(x.health, x.mana, x.armor)
// x.attack();

//013
// let planetList = ['수성','금성','지구','화성','목성','토성','천왕성','해왕성']
//
var reader = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});
//
// let N
//
// reader.on('line',function (line){
//
//     N = Number(line);
//     console.log(planetList[N-1])
//
//     reader.close();
// })

//014
reader.on('line',function (line))