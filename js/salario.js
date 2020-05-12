var edad,salario,nombre,aumento=0,salariof=0;
nombre=prompt("Ingrese un Nombre: ");
edad=prompt("Ingrese una edad: ");
salario=parseFloat(prompt("Ingrese un sueldo de : "));
if(edad<=16){
   mostrar("El usuario "+nombre +" no puede trabajar, salario: ");
   salariof=0;
} else if(edad>=19&&edad<50){
    aumento=salario*0.05;
    salariof=salario+aumento;
} else if(edad>=51&&edad<60){
    aumento=salario*0.1;
    salariof=salario+aumento;
} else if(edad>=60){
    aumento=salario*0.15;
    salariof=salario+aumento;
}
  mostrar("El usuario " + nombre + " tiene de sueldo de "+ salariof);
function mostrar(resultado){
    document.write(resultado);
    console.log(resultado);
    alert(resultado);
}    