var a=1,num;
num=prompt("Ingrese un número : ");
    for (var i=1; i<=num; i++) {
        a*=i;
    }
    mostrar(a);
function mostrar(resultado){
        document.write(resultado);
        console.log(resultado);
        alert(resultado);
    }    