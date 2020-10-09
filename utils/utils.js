module.exports.add = (a, b) => a + b ;

module.exports.addAsync = (a, b, callback) =>{
    setTimeout(()=>{
        callback(a + b)
    }, 1500)
}

module.exports.square = (x) => x * x;

module.exports.squareAsync = (a, callback) =>{
    setTimeout(()=>{
        callback(a * a)
    }, 1000)
}

module.exports.setName = (user, fullName) =>{
    //fullName = "Masoud Salehi"
    // user = ['Masoud','Salehi']
    var user = fullName.split(" ")
    user.firstname = user[0]
    user.lastname = user[1]
    return user
}