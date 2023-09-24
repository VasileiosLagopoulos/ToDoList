import express, { urlencoded } from "express"
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    const data = {
        title:"To Do List",
        items: itemsDay
    }
    res.render("index.ejs",{
        info : data
    });
});

app.get("/work", (req, res) => {
    const data = {
        title:"Work List",
        items: itemsWork
    }
    res.render("index.ejs",{
        info : data
    });
});

app.post("/", (req, res) =>{
    console.log(req.body);
    itemsDay.push(req.body.text);
    const data = {
        title:"To Do List",
        items: itemsDay
    }
    res.render("index.ejs",{
        info : data
    });
})

app.post("/work", (req, res) =>{
    console.log(req.body);
    itemsWork.push(req.body.text);
    const data = {
        title:"Work List",
        items: itemsWork
    }
    res.render("index.ejs",{
        info : data
    });
})

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
});


var itemsDay = ["Do my Homework"];
var itemsWork = ["Deliver the project","Make happy the manager", "Try harder"];
