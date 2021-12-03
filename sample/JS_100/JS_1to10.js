// JS _ 1번
// var nums = [100,200,300,400,500];
//
// nums.pop();
// nums.pop();
//
// console.log(nums);

//JS _ 2번
// var arr = [200,100,300];

// 내가 한거
// arr.pop()
// arr.push(10000,300)

// 답안
// arr.splice(0,2,10000,300)
//
// console.log(arr);

// JS _ 3번
// var arr = [100,200,300];
// console.log(typeof(arr));

// 004
// const a = 1;
// const b = 2.22;
// const c = 'p'
// const d = [1,2,3,4]
//
// console.log( typeof (a) )
// console.log( typeof (b) )
// console.log( typeof (c) )
// console.log( typeof (d) )

// 005
// var a = 10;
// var b = 2;
//
// for(var i=1; i<5; i+=2){
//     a += i;
// }
//
// console.log(a+b)

//006
// function getFee(value){
//     return ( value ? 'True' : 'False')
// }
//
// console.log(getFee(NaN)) //False
// console.log(getFee(1)) // True!!
// console.log(getFee("")) //False
// console.log(getFee(0)) //False
// console.log(getFee(undefined)) //False

//007
// const age = 0
// const Age = 0
// // const let = 0 // 변수로 사용불가
// const _age = 0
// // const 1age = 0 // 변수로 사용불가

//008
// var d = {
//     'height':180,
//     'weight':78,
//     'weight':84,
//     'temperature':36,
//     'eyesight':1
// }
//
// console.log((d['weight']))

//009
// var year = '2019';
// var month = '04';
// var day = '26';
// var hour = '11';
// var minute = '34';
// var second = '27';
//
// //내가 한거
// var result = year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second
// //답안
// var result_ = year.concat('/',month,'/',day,' ',hour,':',minute,':',second)
//
// console.log(result)
// console.log(result_)

//010

// const treeHeight = prompt('트리의 높이를 알려주세요 : ')
var reader = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});

let N;

reader.on('line',function (line){
    N = Number(line);

    for (i=0; i<N; i+=1){
        let tree = ''
        for (j=0; j<(N-i-1); j+=1){
            tree += ' '
        }
        for (k=0; k<1+(i*2); k+=1){
            tree += '*'
        }
        console.log(tree)
    }

    reader.close();
})

