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
// reader.on('line',function (line){
//     N = Number(line)
//
//     !(N % 3) ? console.log('짝') : console.log(N)
// })

//015
// reader.on('line', function (line){
//     console.log("안녕하세요. 저는 " + line + "입니다.")
//     console.log(`안녕하세요. 저는 ${line}입니다.`)
// })

// //016
// reader.on('line',function (line){
//     let newString
//     //풀이
//     newString= line.split('').reverse().join('')
//     console.log(newString)
// })

//017
// reader.on('line', function (line){
//     (line >= 150) ? console.log('YES') : console.log('NO')
// })

//018
// reader.on('line', function (line){
//     let arr = line.split(' ')
//
//     //forEach
//     // arr.forEach( n => {
//     //     arr_sum += Number(n)
//     // })
//
//     //reduce
//     arr_sum = arr.reduce((a,b) => a + Number(b) , 0)
//
//     console.log(Math.floor( arr_sum / arr.length))
// })

//019
// reader.on('line',function (line){
//     let result = line.split(' ')
//
//     //풀이
//     console.log( Number(result[0]) ** Number(result[1]) )
//
//     //답안
//     console.log( Math.pow( parseInt(result[0],10), parseInt(result[1])))
//
// })

//020
reader.on('line', function (line){
    let number = line.split(' ').map(n => Number(n))

    console.log(`몫 : ${ parseInt(number[0]/number[1], 10) } 나머지 : ${ number[0] % number[1] }`)

})