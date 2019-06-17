function apiRoutes(app){
    app.get("/api/test", function(req, res){
        res.json("testing /api/test")
    })
}

module.exports = apiRoutes;