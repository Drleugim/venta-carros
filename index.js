//Ejercicio 3
const caracteresEnComun = (s1,s2)=>{
    let m=s1;
    let M=s2;
    if(s1.length>s2.length){
        m=s2;
        M=s1;
    }
    let aux=[]
    for(let char of m){
        if(M.includes(char)){
            aux.push(char)
        }
    }
    console.log(aux)
}