// index.js
console.log("index.js")

$.getJSON("index.json", function(data) {
    $.each(data.profile_pic, function(o) {
        console.log(o)
    })
})
