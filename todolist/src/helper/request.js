
exports.request=(data={}, url)=>{
    return new Promise(async(resolve, reject)=>{
        try{
            const req = await fetch(url);
            const json = await req.json();
            resolve(json);

        } catch(err){
            reject(err);
        }
    })
}