let result = document.getElementById("display");

//inseir numeros na calculadora 
let insert = (num) =>{
    result.value += num;
}

//inserir operadores na calculadora
// Obs: eu dividi em duas classes pois fiz uma rotina para não aceitar dois operadores em sequencia...

let operator = (oper) =>{
    if(result.value.indexOf("-") < 0){ 
        if(result.value.indexOf("+")<0){
            if(result.value.indexOf("*")<0){
                if(result.value.indexOf("/")){
                    result.value += oper
                }

            }
        }
        
    }
    
    
}

//resetar calculadora 
function Clear(){
    result.value = " ";
}

//remover o ultimo numero
function Del(){
    result.value = result.value.slice(0,-1);
}

// calculo com eval
function Calcular(){
    result.value = eval(result.value)
}

