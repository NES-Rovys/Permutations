var origin = [];
var permList = [];

function permute(list, current) {
    var current;
    for (let i = 0; i < list.length; i++) {
        if (list.length > 1) {
            var tempArr = [];
            for (let j = 0; j < list.length; j++) {
                if (list[j] != list[i]) {
                    tempArr[tempArr.length] = list[j];
                }
            }
            permute(tempArr, current + list[i]);
        } else {
            permList[permList.length] = current + list[i];
        }
    }
}

function addItem() {
    origin[origin.length] = document.getElementById("area").value + "";
    document.getElementById("list").innerText = "List:";
    for (let i = 0; i < origin.length; i++) {
        document.getElementById("list").innerText += "\n" + origin[i];
    }
    document.getElementById("area").value = "";
}

function reset() {
    origin = [];
    document.getElementById("list").innerText = "List:";
}

function setList() {
    document.getElementById("permuted").innerText = "Permutations:";
    for (let i = 0; i < permList.length; i++) {
        document.getElementById("permuted").innerText += "\n" + permList[i];
    }
    permList = [];
}