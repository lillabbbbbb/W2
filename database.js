let submitButton = document.getElementById("submit-data")
let emptyTableButton = document.getElementById("empty-table")


let div = document.getElementById("div")
let tbody = document.getElementById("tbody")

let usernames = []

submitButton.addEventListener("click", () => {

    console.log("Usernames: " + usernames)

    //save input as properties of an object
    let person = {
        username: document.getElementById("input-username").value,
        email: document.getElementById("input-email").value,
        admin: isAdmin(document.getElementById("input-admin").checked),
        file: document.getElementById("input-image").files[0]
    }

    //if no username was entered, the submitted data is not saved
    if(!person.username) return

    //check if username already exists
    if(usernames.includes(person.username)){
       console.log("This username already exists..") 

        //note: I discovered the .children method at https://stackoverflow.com/questions/61268190/change-table-tr-elements-using-js
       
        /*tbody.children[usernames.indexOf(person.username)].children[1].innerText = person.email
       tbody.children[usernames.indexOf(person.username)].children[2].innerText = person.admin
       tbody.children[usernames.indexOf(person.username)].children[3].innerText = person.file
        */
        //shorter way to do the same:
        let i = 0;
        Object.keys(person).forEach(key => {
            tbody.children[usernames.indexOf(person.username)].children[i++].innerText = person[key]
       
        })

        console.log("Submitting data: Username: " + person.username+ ", Email: " + person.email + ", Admin: " + person.admin + " , Image: " + person?.file)

        return
        }


    let tr = document.createElement("tr")

    //iterate through the properties of person object, adding each property value to the table as a cell
    Object.keys(person).forEach(key => {
        let newCell = document.createElement("td")
        newCell.innerText = person[key];
        console.log(key + ": " + person[key])
        tr.appendChild(newCell)
    })
    usernames.push(person.username)

    tbody.appendChild(tr)
    console.log("Submitting data: Username: " + person.username+ ", Email: " + person.email + ", Admin: " + person.admin + " , Image: " + person?.file)


})

emptyTableButton.addEventListener("click", () => {

    //remove all rows from the table. I used AI to figure out the right syntax
    while(tbody.lastElementChild){
        tbody.removeChild(tbody.lastElementChild)
    }

    //reset variables
    let usernames = []
    console.log("Usernames after reset: " + usernames)
})

//returns the corresponding letter depending on whether the @param boolean is true of false
function isAdmin(boolean){
    if(boolean){
        return "A"
    }
    else return "-"
}