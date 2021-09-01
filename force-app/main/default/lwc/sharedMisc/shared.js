const si=(p,t,r)=>{
    if(p && t && r){
         const simpleInt=(p*r*t)/100;
         return simpleInt;
    }
    return 0;
}
 

const add=(n1,n2)=>{return n1+n2;}
export{si,add}