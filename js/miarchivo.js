let nombre, apellido, saludo, confirmacion, nota1, nota2, nota3, calculo, promedio

nombre=prompt("Ingresa tu nombre");
apellido=prompt("Ingresa tu apellido");
saludo="Bienvenido/a " + nombre + " " + apellido;
alert(saludo);

do{
    confirmacion=prompt("¿Completaste los tres exámenes de la asignatura? (S/N)").toLowerCase()
    if(confirmacion=="s"){
        alert("Puedes continuar y calcular tu promedio");
    }else{
        alert("No podremos calcular tu promedio");
        break;
    }
    nota1=parseInt(prompt("Ingresa nota de Examen Nº1"));
    nota2=parseInt(prompt("Ingresa nota de Examen Nº2"));
    nota3=parseInt(prompt("Ingresa nota de Examen Nº3"));
    calculo=(nota1 + nota2 + nota3)/3;
    if(calculo<0 || calculo>10) {
        alert("Ingresaste valores inválidos");
    }else{
        promedio="Obtuviste un promedio de: " + calculo;
        alert(promedio);
    }
}while(calculo<0 || calculo>10);
