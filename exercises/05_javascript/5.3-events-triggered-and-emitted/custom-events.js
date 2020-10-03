const dice_value = document.getElementById("roll-button");

document.addEventListener("rollDice", function(e) {
    // console.log(e.detail.value);
    var id_name;
    switch(e.detail.value) {
        case 1:
            id_name = "ones"
            break;
        case 2:
            id_name = "twos"
            break;
        case 3:
            id_name = "threes"
            break;
        case 4:
            id_name = "fours"
            break;
        case 5:
            id_name = "fives"
            break;
        case 6:
            id_name = "sixes"
            break;
    }

    var count = document.getElementById(id_name).querySelector("p");

    // console.log(count.querySelector("p").innerText);
    if (count.innerText === "-"){
        count.innerText = 1;
    } else {
        count.innerText = parseInt(count.innerText) + 1;
    }

    var current = document.getElementById("totals").querySelector("span");
    // console.log(current.textContent);
    current.innerText = parseInt(current.textContent) + e.detail.value;

});

dice_value.addEventListener("click" , rollDice);

