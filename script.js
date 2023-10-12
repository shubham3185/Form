const express=require("express")
const app= express();
const bodyParser=require("body-parser");
const urlencodedParser=bodyParser.urlencoded({extended:false});
app.use(express.static('public'));
app.get("/", (req, res) =>{
    res.sendFile(__dirname+"/"+"form.html");
})
app.post("/process_post",urlencodedParser, (req, res) =>{
    response={
        first_name:req.body.first_name,
        middle_name:req.body.middle_name,
        last_name:req.body.last_name,
        firstname:req.body.firstname,
        middlename:req.body.middlename,
        lastname:req.body.lastname,
        mother_name:req.body.mother_name,
        date:req.body.date,
        // course:req.body.course,
        male:req.body.radio,
        female:req.body.radio,
        other:req.body.radio,
        gmail:req.body.gmail,
        Password:req.body.Password,
        Address:req.body.comment
    };
    console.log(response);
    res.end(JSON.stringify(response));
})
var server = app.listen(3000, function () {  
    var host = server.address().address  
    var port = server.address().port  
    console.log("Example app listening at http://%s:%s", host, port)  
  }) 