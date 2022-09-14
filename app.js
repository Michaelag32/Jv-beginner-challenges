/*function isLoggedInAndSubscribed (loggedIn, Subscribed) {
return loggedIn === 'LOGGED_IN' && Subscribed === 'SUBSCRIBED'

}
console.log (isLoggedInAndSubscribed ('LOGGED_IN', 'SUBSCRIBED')); */

/* function arrSum (arr) {
let sum = 0
for (let i = 0 ; i < arr.length ; ++i) {
    sum = sum + arr[i]
}
return sum
}

console.log (arrSum([2, 2, 2])) */ 

/* function ProgressiveSum (num) {
let sum = 0 
for (let i = 1 ; i <= num ; ++i) {
    sum = sum + i
}
return sum
}

console.log (ProgressiveSum(3)); */ 

/* function calcTime(seconds) {
    let timerMinutes = Math.floor (seconds / 60);
    let timerSeconds = seconds % 60;

    if (timerMinutes.toString().length === 1) {
        timerMinutes = '0' + timerMinutes
    }

    return timerMinutes + ':' + timerSeconds
}

console.log (calcTime(500)); */ 


/* function getMax (arr) {
    let max = arr[0]
for (let i = 1; i < arr.length; ++i) {
    if (arr[i] > max){
        max = arr[i]
    }
}
return max
}

console.log (getMax ([5, 100, 900])); */

/*function convertToZeros (arr) {
    for (let i = 0 ; i < arr.length ; ++i) {
        arr[i] = 0
    }
    return arr
}

console.log (convertToZeros([5, 100, 0, 5, 6]))*/ 

/* function filterOutFalsy (arr) {
    let TruthyArr = []
    for (let i = 0; i < arr.length ; ++i) {
        if (!!arr[i] === true) {
            TruthyArr.push(arr[i])
        }
    }
    return TruthyArr
}
console.log (filterOutFalsy(['', [], 0, null, undefined, '0', 500])) */


/* function convertToBoolean (arr) {
    return arr.map (elem => !!elem);
    }

console.log (convertToBoolean ([500, 0, 'David', '', []])); */

/* function filterOutFalsy (elem1, elem2) {
if (!elem1 === true) {
    return elem1
}
else {
    return elem2
}
}
// or return !elem ? elem1 : elem2
console.log (filterOutFalsy(true, 'dog')) */


/* function arrSum (arr) {
    let sum = 0
for (let i = 0; i < arr.length; ++i) {
 sum = sum + arr[i]
}
return sum
}

console.log(arrSum([2, 2, 2])) */


/* function ProgressiveSum(num) {
    let sum = 0 
    for (let i = 0; i <= num; ++i) {
        sum = sum + i;
    }
    return sum
}
console.log(ProgressiveSum(3)); */

/* function getMax (arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}
console.log (getMax ([5, 100, 0,])) */


/* function calcTime (seconds) {
    let timerMinutes = Math.floor (seconds / 60)
    let timerSeconds = seconds % 60

    if (timerMinutes.toString().length === 1) {
        timerMinutes = '0' + timerMinutes
    }

    return timerMinutes + ":" + timerSeconds
}
console.log (calcTime(500)) */

/*function convertToZeros (arr) {
    for (let i = 0; i < arr.length; ++i){
        arr[i] = 0
    }
    return arr
}

console.log (convertToZeros([5, 100, 22])) */



///HARDDDDDD//// 



