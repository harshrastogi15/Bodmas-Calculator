// console.log("hello everyone");

let arr = new Array();

// function getelement(e) {
//     arr.push(e);
//     output();
// }

let html = ``;

function getarray(equation) {
    html = ``;
    arr = equation;
    return [output(), html];
}

function output() {
    // if (arr[0] == '-' || arr[0] == '*' || arr[0] == '/') {
    //     alert("SORRY, THIS CALCULATOR IS NOT WORKING FOR FIRST SIGN.");
    // }

    // var html = ``;
    // arr.forEach(function (element) {
    //     html += element;
    // });
    // input = document.getElementById("cal_input");
    // input.innerHTML = `<p>${html}</p>`
    // return e;
    return result();
}

function result() {
    var arr2 = new Array();
    var helper = ``;
    for (var i = 0; i < arr.length; i += 1) {
        if (arr[i] == '+' || arr[i] == '-' || arr[i] == '*' || arr[i] == '/') {
            arr2.push(helper);
            helper = ``;
            arr2.push(arr[i]);
        }
        else {
            helper += arr[i];
        }
    };
    arr2.push(helper);


    // calculation start
    html += `<li>`;
    for (var i = 0; i < arr2.length; i++) {
        html += `${arr2[i]}`
    }
    html += `</li>`;
    let len = arr2.length;

    let num;
    for (var i = 0; i < arr2.length; i += 1) {
        if (arr2[i] == '/') {
            num = (Number)(arr2[i - 1]) / (Number)(arr2[i + 1]);
            arr2.splice(i, 2)
            arr2[i - 1] = num;
            i = 0;
        }
    }
    if (arr2.length != len) {
        html += `<li>`;
        for (var i = 0; i < arr2.length; i++) {
            html += `${arr2[i]}`
        }
        html += `</li>`;
    }
    len = arr2.length;

    for (var i = 0; i < arr2.length; i += 1) {
        if (arr2[i] == '*') {
            num = (Number)(arr2[i - 1]) * (Number)(arr2[i + 1]);
            arr2.splice(i, 2)
            arr2[i - 1] = num;
            i = 0;
        }
    }

    if (arr2.length != len) {
        html += `<li>`;
        for (var i = 0; i < arr2.length; i++) {
            html += `${arr2[i]}`
        }
        html += `</li>`;
    }
    let plusarr = new Array;

    if (arr[0] != '-') {
        plusarr.push((Number)(arr2[0]));
    }
    for (var i = 0; i < arr2.length; i += 1) {
        if (arr2[i] == '+') {
            plusarr.push((Number)(arr2[i + 1]));
        }
    }
    let minusarr = new Array;
    for (var i = 0; i < arr2.length; i += 1) {
        if (arr2[i] == '-') {
            minusarr.push((Number)(arr2[i + 1]));
        }
    }

    let getsum = 0;
    // console.log(plusarr);
    plusarr.forEach(e => {
        getsum += e;
    })
    let getminus = 0;
    // console.log(minusarr);
    minusarr.forEach(e => {
        getminus += e;
    })

    let num2 = getsum - getminus;
    // input2 = document.getElementById("cal_output");
    // input2.innerHTML = `<p>${num2}</p>`
    // console.log(html);

    html += `<li>${num2}</li>`;
    return num2;
}

