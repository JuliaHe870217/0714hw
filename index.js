var i = 0
var j = [];

function init() {
    axios
        .get("https://run.mocky.io/v3/08c763ab-5bb2-46b7-a504-b9f28a8ba050")
        .then(function (res) {
            document.getElementById("img").src = res.data.img[0]
            j = res.data.img
            setpage()
        })
        .catch(function (err) {
            console.log(err);
        });
}

function setpage() {
    document.getElementById("page").innerText = i+1 + "/8"
}

document.getElementById("right").addEventListener("click", function () {
    if (i == 7) {
        i = 0
        console.log(j);
        document.getElementById("img").src = j[i];
    } else {
        i += 1;
        document.getElementById("img").src = j[i];
    }
    setpage()

})


document.getElementById("left").addEventListener("click", function () {
    if (i == 0) {
        console.log(i + 1);
        i = 7
        document.getElementById("img").src = j[i];
    } else {
        console.log(i + 1);
        i -= 1;
        document.getElementById("img").src = j[i];
    }
    setpage()
})


init();

