
function restart() {
    location.reload();
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = '';
}

flag = 1;
function func1() {
    if (flag == 1) {
        document.getElementById("t1").value = "X";
        document.getElementById("t1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("t1").value = "O";
        document.getElementById("t1").disabled = true;
        flag = 1;
    }
}

function func2() {
    if (flag == 1) {
        document.getElementById("t2").value = "X";
        document.getElementById("t2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("t2").value = "O";
        document.getElementById("t2").disabled = true;
        flag = 1;
    }
}

function func3() {
    if (flag == 1) {
        document.getElementById("t3").value = "X";
        document.getElementById("t3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("t3").value = "O";
        document.getElementById("t3").disabled = true;
        flag = 1;
    }
}
function func4() {
    if (flag == 1) {
        document.getElementById("t4").value = "X";
        document.getElementById("t4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("t4").value = "O";
        document.getElementById("t4").disabled = true;
        flag = 1;
    }
}

function func5() {
    if (flag == 1) {
        document.getElementById("t5").value = "X";
        document.getElementById("t5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("t5").value = "O";
        document.getElementById("t5").disabled = true;
        flag = 1;
    }
}

function func6() {
    if (flag == 1) {
        document.getElementById("t6").value = "X";
        document.getElementById("t6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("t6").value = "O";
        document.getElementById("t6").disabled = true;
        flag = 1;
    }
}

function func7() {
    if (flag == 1) {
        document.getElementById("t7").value = "X";
        document.getElementById("t7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("t7").value = "O";
        document.getElementById("t7").disabled = true;
        flag = 1;
    }
}

function func8() {
    if (flag == 1) {
        document.getElementById("t8").value = "X";
        document.getElementById("t8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("t8").value = "O";
        document.getElementById("t8").disabled = true;
        flag = 1;
    }
}

function func9() {
    if (flag == 1) {
        document.getElementById("t9").value = "X";
        document.getElementById("t9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("t9").value = "O";
        document.getElementById("t9").disabled = true;
        flag = 1;
    }
}

function tablefunc(params) {
    var b1,b2,b3,b4,b5,b6,b7,b8,b9;

    b1 = document.getElementById("t1").value;
    b2 = document.getElementById("t2").value;
    b3 = document.getElementById("t3").value;
    b4 = document.getElementById("t4").value;
    b5 = document.getElementById("t5").value;
    b6 = document.getElementById("t6").value;
    b7 = document.getElementById("t7").value;
    b8 = document.getElementById("t8").value;
    b9 = document.getElementById("t9").value;

    var bt1,bt2,bt3,bt4,bt5,bt6,bt7,bt8,bt9;

    bt1 = document.getElementById("t1");
    bt2 = document.getElementById("t2");
    bt3 = document.getElementById("t3");
    bt4 = document.getElementById("t4");
    bt5 = document.getElementById("t5");
    bt6 = document.getElementById("t6");
    bt7 = document.getElementById("t7");
    bt8 = document.getElementById("t8");
    bt9 = document.getElementById("t9");
      

    if ((b1 == 'X' && b2 == 'X' && b3 == 'X')) {
        
        bt1.style.color = 'red';
        bt2.style.color = 'red';
        bt3.style.color = 'red';
        
        bt4.disabled = true;
        bt5.disabled = true;
        bt6.disabled = true;
        bt7.disabled = true;
        bt8.disabled = true;
        bt9.disabled = true;

        setTimeout(function(params) {
            alert("X is the winner")
        }, 50);

    }else if ((b1 == 'X' && b4 == 'X' && b7 == 'X')) {

        bt1.style.color = 'red';
        bt4.style.color = 'red';
        bt7.style.color = 'red';

        bt2.disabled = true;
        bt3.disabled = true;
        bt5.disabled = true;
        bt6.disabled = true;
        bt8.disabled = true;
        bt9.disabled = true;

        setTimeout(function(params) {
            alert("X is the winner")
        }, 50);

    }else if ((b7 == 'X' && b8 == 'X' && b9 == 'X')) {
        
        bt7.style.color = 'red';
        bt8.style.color = 'red';
        bt9.style.color = 'red';

        bt1.disabled = true;
        bt2.disabled = true;
        bt3.disabled = true;
        bt4.disabled = true;
        bt5.disabled = true;
        bt6.disabled = true;

        setTimeout(function(params) {
            alert("X is the winner")
        }, 50);

    }else if (b3 == 'X' && b6 == 'X' && b9 == 'X') {
        
        bt3.style.color = 'red';
        bt6.style.color = 'red';
        bt9.style.color = 'red';

        bt1.disabled = true;
        bt2.disabled = true;
        bt7.disabled = true;
        bt4.disabled = true;
        bt5.disabled = true;
        bt8.disabled = true;

        setTimeout(function(params) {
            alert("X is the winner")
        }, 50);

    }else if (b1 == 'X' && b5 == 'X' && b9 == 'X') {
        
        bt1.style.color = 'red';
        bt5.style.color = 'red';
        bt9.style.color = 'red';

        bt3.disabled = true;
        bt2.disabled = true;
        bt7.disabled = true;
        bt4.disabled = true;
        bt6.disabled = true;
        bt8.disabled = true;

        setTimeout(function(params) {
            alert("X is the winner")
        }, 50);

    }else if (b3 == 'X' && b5 == 'X' && b7 == 'X') {
        
        bt3.style.color = 'red';
        bt5.style.color = 'red';
        bt7.style.color = 'red';

        bt1.disabled = true;
        bt2.disabled = true;
        bt9.disabled = true;
        bt4.disabled = true;
        bt6.disabled = true;
        bt8.disabled = true;

        setTimeout(function(params) {
            alert("X is the winner")
        }, 50);

    }else if (b2 == 'X' && b5 == 'X' && b8 == 'X') {
        
        bt2.style.color = 'red';
        bt5.style.color = 'red';
        bt8.style.color = 'red';

        bt1.disabled = true;
        bt3.disabled = true;
        bt9.disabled = true;
        bt4.disabled = true;
        bt6.disabled = true;
        bt7.disabled = true;

        setTimeout(function(params) {
            alert("X is the winner")
        }, 50);

    }else if (b4 == 'X' && b5 == 'X' && b6 == 'X') {
        
        bt4.style.color = 'red';
        bt5.style.color = 'red';
        bt6.style.color = 'red';

        bt1.disabled = true;
        bt3.disabled = true;
        bt9.disabled = true;
        bt2.disabled = true;
        bt8.disabled = true;
        bt7.disabled = true;

        setTimeout(function(params) {
            alert("X is the winner")
        }, 50);
    }else if ((b1 == 'O' && b2 == 'O' && b3 == 'O')) {
        
        bt1.style.color = 'red';
        bt2.style.color = 'red';
        bt3.style.color = 'red';
        
        bt4.disabled = true;
        bt5.disabled = true;
        bt6.disabled = true;
        bt7.disabled = true;
        bt8.disabled = true;
        bt9.disabled = true;

        setTimeout(function(params) {
            alert("O is the winner")
        }, 50);

    }else if ((b1 == 'O' && b4 == 'O' && b7 == 'O')) {

        bt1.style.color = 'red';
        bt4.style.color = 'red';
        bt7.style.color = 'red';

        bt2.disabled = true;
        bt3.disabled = true;
        bt5.disabled = true;
        bt6.disabled = true;
        bt8.disabled = true;
        bt9.disabled = true;

        setTimeout(function(params) {
            alert("O is the winner")
        }, 50);

    }else if ((b7 == 'O' && b8 == 'O' && b9 == 'O')) {
        
        bt7.style.color = 'red';
        bt8.style.color = 'red';
        bt9.style.color = 'red';

        bt1.disabled = true;
        bt2.disabled = true;
        bt3.disabled = true;
        bt4.disabled = true;
        bt5.disabled = true;
        bt6.disabled = true;

        setTimeout(function(params) {
            alert("O is the winner")
        }, 50);

    }else if (b3 == 'O' && b6 == 'O' && b9 == 'O') {
        
        bt3.style.color = 'red';
        bt6.style.color = 'red';
        bt9.style.color = 'red';

        bt1.disabled = true;
        bt2.disabled = true;
        bt7.disabled = true;
        bt4.disabled = true;
        bt5.disabled = true;
        bt8.disabled = true;

        setTimeout(function(params) {
            alert("O is the winner")
        }, 50);

    }else if (b1 == 'O' && b5 == 'O' && b9 == 'O') {
        
        bt1.style.color = 'red';
        bt5.style.color = 'red';
        bt9.style.color = 'red';

        bt3.disabled = true;
        bt2.disabled = true;
        bt7.disabled = true;
        bt4.disabled = true;
        bt6.disabled = true;
        bt8.disabled = true;

        setTimeout(function(params) {
            alert("O is the winner")
        }, 50);

    }else if (b3 == 'O' && b5 == 'O' && b7 == 'O') {
        
        bt3.style.color = 'red';
        bt5.style.color = 'red';
        bt7.style.color = 'red';

        bt1.disabled = true;
        bt2.disabled = true;
        bt9.disabled = true;
        bt4.disabled = true;
        bt6.disabled = true;
        bt8.disabled = true;

        setTimeout(function(params) {
            alert("O is the winner")
        }, 50);

    }else if (b2 == 'O' && b5 == 'O' && b8 == 'O') {
        
        bt2.style.color = 'red';
        bt5.style.color = 'red';
        bt8.style.color = 'red';

        bt1.disabled = true;
        bt3.disabled = true;
        bt9.disabled = true;
        bt4.disabled = true;
        bt6.disabled = true;
        bt7.disabled = true;

        setTimeout(function(params) {
            alert("O is the winner")
        }, 50);

    }else if (b4 == 'O' && b5 == 'O' && b6 == 'O') {
        
        bt4.style.color = 'red';
        bt5.style.color = 'red';
        bt6.style.color = 'red';

        bt1.disabled = true;
        bt3.disabled = true;
        bt9.disabled = true;
        bt2.disabled = true;
        bt8.disabled = true;
        bt7.disabled = true;

        setTimeout(function(params) {
            alert("O is the winner")
        }, 50);
    }else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X' || b2 == 'O') && (b3 == 'X' || b3 == 'O') &&(b4 == 'X' || b4 == 'O') && (b5 == 'X' ||b5 == 'O') && (b6 == 'X' || b6 == 'O') &&(b7 == 'X' || b7 == 'O') && (b8 == 'X' ||b8 == 'O') && (b9 == 'X' || b9 == 'O')) {
            setTimeout(function(params) {
                alert("The match is draw")
            }, 50);
    }
}