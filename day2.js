const express = require("express")
const axios = require("axios").default

const app = express()

// app.get("/", (req, res) => {
//     res.send("hello")
// })
// app.listen(3000)

    // app.get("/", async(req, res) => {
    //     const response = await axios.get("https://randomuser.me/api?results=5")
    //     res.send(response.data.results)
    // })
    // app.listen(3000)

    // app.get("/", async(req, res) => {
    //     const response = await axios.get("https://randomuser.me/api?results=5")
    //     const nameYears = response.data.results.map(user => {return{name : user.name.first, dateOfYear : user.dob.date.substring(0,4)}}) 
    //     res.send(nameYears)
    // })
    // app.listen(3000)

    // app.get("/", async(req, res) => {
    //     var todayDt = new Date();
    //     var tomorrowDt = new Date();
    //     tomorrowDt.setDate(todayDt.getDate()+1);
    //     res.send({today : todayDt, tomorrow : tomorrowDt})
    // })
    // app.listen(3000)


    // app.get("/", async(req, res) => {
    //     const response = await axios.get("https://randomuser.me/api?results=5")
    //     const users = response.data.results
    //     const user = users[0]
    //     const dob = new Date(user.dob.date)
    //     res.send({
    //         firstName: user.name.first,
    //         birthYear : dob.getFullYear()
    //     })
    // })
    // app.listen(3000)

    // app.get("/", async(req, res) => {
    //     const current = new Date();
    //     const maxIs = new Date('022-11-30T10:30:00.573Z')
    //     res.send({
    //         breakWillBe : current, 
    //         tomorrow : new Date(current.getTime()+24*60*60*1000).toString()})
    // })
    // app.listen(3000)

    // app.get("/", async(req, res) => {
    //     const current = new Date();
    //     const maxIs = new Date('November 30, 2022 16:00:00')
    //     const differIs = Math.abs(maxIs - current)
    //     const minIs = Math.floor((differIs/1000/60) << 0)
    //     const secIs = Math.floor((differIs/1000) % 60);
    //     res.send({
    //         breakWillBeIn : minIs + ":"+ secIs, 
    //     })
    // })
    // app.listen(3000)

    // app.get("/", async(req, res) => {
    //     const current = new Date().getTime();
    //     const maxIs = new Date("2022-11-30T16:00:00.000+05:30").getTime()
    //     const breaksIn = (maxIs - current) / 1000 /60
    
    //     res.send({
    //         breakWillBeIn : breaksIn 
    //     })
    // })
    // app.listen(3000)

    // app.get("/", async(req, res) => {
    //     const current = new Date();
    //     // const fullYear = current.getFullYear();
    //     // const sliced = "1976-01-07T19:07:31.379Z".slice(0,4);
    //     // const splitted = "1976-01-07T19:07:31.379Z".split("-")[0];
    //     // const subs = "1976-01-07T19:07:31.379Z".substring(0,4);
    //     // const times = current.getHours() +":"+ current.getMinutes();
    //     const fullYear = current.getHours();
    //     const sliced = "1976-01-07T19:07:31.379Z".slice(11,16);
    //     const splitted = "1976-01-07T19:07:31.379Z".split("T")[1].split(":")[0]+":"+[1];
    //     const subs = "1976-01-07T19:07:31.379Z".substring(11,16);
    //     const times = current.getUTCHours() +":"+ current.getUTCMinutes();
    //     res.send({
    //         date : current,
    //         full : fullYear,
    //         slice : sliced,
    //         split : splitted,
    //         substr : subs,
    //         timee : times 
    //     })
    // })
    // app.listen(3000)

    app.set("view engine", "ejs");

    // app.get("/", async (req, res) => {
    //     const response = await axios.get("https://randomuser.me/api?results=5")
    //     const users = response.data.results
    //     const user = users[0]
    //     res.render("user.ejs", {user});
    // })

    // app.get("/user-list", async (req, res) => {
    //     const response = await axios.get("https://randomuser.me/api?results=5");
    //     const userList = response.data.results;
    //     res.render("user-list.ejs", {userList});
    // });

    // app.listen(4004)


    app.get('/user-list', async(req,res) => {
        const response = await axios.get("https://randomuser.me/api?results=5")
        const json =response.data;
        const userList =json.results;
        res.render("user-list.ejs",{userList})
    });
    app.listen(4000)