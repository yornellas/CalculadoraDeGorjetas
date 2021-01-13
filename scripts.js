function calcTip(event) {
    event.preventDefault();
    var bill = document.getElementById('bill').value;
    var serviceQual = document.getElementById('serviceQuality').value;
    var people = document.getElementById('people').value;

    if (bill == '' | serviceQual == 0){
        alert("Por favor, preencha os valores.");
        return;
    }

    if (people == 0 | people <= 1){
        people = 1;
        document.getElementById('each').style.display = "none";
    } else {
        document.getElementById('each').style.display = "block";
    }

    let total = (bill * serviceQual) / people;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calcTip);