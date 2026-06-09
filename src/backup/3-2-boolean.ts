const checkAccess = (userRole:string):boolean => {
    return userRole==="admin"
}

let role:string="user"

console.log(`Access gramted : ${checkAccess(role)}`)