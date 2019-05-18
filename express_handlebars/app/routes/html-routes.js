function htmlRoutes(app){
    app.get("/", function(req, res){
        res.render("home");
    })
}

module.exports = htmlRoutes;