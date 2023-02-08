$(function() {
    console.log("league.js")
})

var schedule
displaySchedule()

function displaySchedule() {
    var url="https://api.overwatchleague.com/live-match"
    $.get(url)
    .done(function(data) {
        
    })
    .fail(function(jqXHR) {
        alert("error " + jqXHR.status)
    })
    .always(function() {
        console.log(data)
    })
}