const { request } = require("./request");

const URI = "https://my-json-server.typicode.com/achimonchi/mockUp/users/";
exports.login=async(data)=>{
    const users = await request(data, URI);
    const user = users.find((u)=>u.u_username === data.username && u.u_pass === data.password);
    if(user){
        return {data:user,message:"success",status:200};
    } else {
        return {status:401, message:"error"}
    }
}