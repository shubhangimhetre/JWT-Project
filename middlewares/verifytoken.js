const jwt = require('jsonwebtoken');


function verifytoken(req, res, next) {
    
    const token = req.cookies.token;
    if (!token) return res.status(401).send("Access Denied..")


    verified = jwt.verify(token, process.env.token_secret, (err, tokendata) => {
        if (err) return res.send({ message: "Authentication error.." })
        res.tokendata = tokendata;
        next()
    })

}

module.exports = verifytoken;



