exports.helloWorld = function(req, res) {
    res.status(200);
    res.type('json');
    res.render('helloWorld');
}