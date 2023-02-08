$(()=> {
    // show/hide search tab click function
})

class Profile {
    constructor() {
        super()
         
    }
    async getProfile()

    showProfile(account) {
        
    }

    
}

profile = new Profile
const battletag = $("#battletag")
battletag.on("keyup", (e) => {
    const id = e.target.value
    if (id != '') {
        profile.getProfile(id)
        .then(data => {
            
        })
    }
})