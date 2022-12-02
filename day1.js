const axios = require("axios").default
async function run() {
    const response = await axios.get("https://randomuser.me/api?results=5")
    // console.log(response.data.results[0].name.first)
    // console.log(response)
    // let names=[];
    // response.data.results.forEach(values => {
    //     // console.log(data.name.first)
    //     name.push(values.name.first)// = name + data.name.first +", "
    // });
    // for(const data of response.data.results){
    //     name.push(data.name.first)
    // }
    // const names = response.data.results.sort(function(a,b){return a > b ? 1 : -1}).map(user => user.name.first +" "+ user.name.last)
    // const names = response.data.results.map(user => user.name.first +" "+ user.name.last)
    // console.log("\nThe first names are :\n"+names.join(", ")+"\n")

    // console.log(names.sort(function(a,b) { return a < b ? 1 : -1}))
    // console.log(names)
    // response.data.results.sort((a,b) => a.name.last.localeCompare(b.name.last))

    // const nameSS = response.data.results.map((a) => a.name.first + " " + a.name.last)

    // console.log(nameSS)
    
    let genders=[]
    var results=response.data.results.filter(function(a){ return a.gender==="male"})
    for(const data of results){
            genders.push(data.name.first)
    }
    console.log(genders)
}
run()