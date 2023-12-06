function FindRefRecursively(obj, id){
    if(!obj) return;
    
    if(obj["$id"] && obj["$id"] == id)
        return obj;
    else if (typeof obj === 'object'
        && !Array.isArray(obj)
        && obj !== null)
    {
        var keys = Object.keys(obj);
        for(var i=0;i<keys.length;i++){
            var item = FindRefRecursively(obj[keys[i]], id);
            if(item)
                return item;
        }
    };
}