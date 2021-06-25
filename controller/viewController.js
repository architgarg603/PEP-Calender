async function getView(req,res){
    res.render("index.ejs");
}
module.exports.getView = getView