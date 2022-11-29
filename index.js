// index.js
console.log("index.js")

var owl_url = "https://api.overwatchleague.com/"

class Hero {
    constructor() {
        this.user = "username"
        this.secret = "accesstoken"
    }

    async getUser(id) {
        const url = "https://ow-api.com/v1/stats/pc/us/`$id`/profile"
        const req = await fetch(url)
        const res = await req.json()
        return {res}
    }

    async displayUser(id) {
        let html = `<div></div>`
        $("")
    }
}

let hero = null

document.onload = function() {
    // display heroes
    $.getJSON("index.json", function(data) {
        $.each(data.profile_pic, function(o) {
            console.log(o)
        })
    })

    // mouse click listener
    
    // create mouse hover event handler
    $("").on("keyup", function(e) {
        console.log(e)
        if (e) {
            hero.getProfile(e.target.value).then(data => {
                if (data) {
                    hero.showData()
                } else {
                    console.log(data)
                }
            })
        }
    })

}

