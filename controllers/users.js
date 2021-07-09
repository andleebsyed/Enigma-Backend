
function UserSignIn(req, res) {
    res.json({status:true, message :"inside signin"})
}
function UserSignUp(req, res){
    res.json({status:true, message :"inside signup"})   
}
module.exports = {UserSignIn, UserSignUp}