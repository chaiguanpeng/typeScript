//重载
function attr(key:string):any;
function attr(key:string,val:any):void;

let objA:any = {};
function attr(key:string,val:any){
    if(val){
        objA[key] = val;
    }else{
        return objA[key]
    }
}

attr('name','zfpx');
console.log(attr('name'));




