const headerArray = ["Elimination", "Assist", "Death", "Damage", "Heal", "Mitigation"]

var table = document.getElementById("table-data")

for (let i = 1; i <= 10; i++) {
    var row = document.createElement("tr")
    row.innerHTML += "<th scope='row'>" + `${i}` + "</th>" 
    row.innerHTML += "<td><input type='text' id=" + `${i}` + " class=" + `${headerArray[0]}` + " pattern='[0-99999]'></td>"
    row.innerHTML += "<td><input type='text' id=" + `${i}` + " class=" + `${headerArray[1]}` + " pattern='[0-99999]'></td>"
    row.innerHTML += "<td><input type='text' id=" + `${i}` + " class=" + `${headerArray[2]}` + " pattern='[0-99999]'></td>"
    row.innerHTML += "<td><input type='text' id=" + `${i}` + " class=" + `${headerArray[3]}` + " pattern='[0-99999]'></td>"
    row.innerHTML += "<td><input type='text' id=" + `${i}` + " class=" + `${headerArray[4]}` + " pattern='[0-99999]'></td>"
    row.innerHTML += "<td><input type='text' id=" + `${i}` + " class=" + `${headerArray[5]}` + " pattern='[0-99999]'></td>"

    table.append(row)
}