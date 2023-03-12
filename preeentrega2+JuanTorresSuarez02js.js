 for(let i =1 ; i <=5; i++){
    let materiaingresada = prompt('ingrese la materia')
    if(materiaingresada === 'matematicas'){
        alert('ha ingresado la materia matematicas')
        break
    }else if(materiaingresada === 'ingles'){
        alert('ha ingresado materia ingles')
        break
    }
    else if(materiaingresada === 'ciencias'){
        alert('ha ingresado materia biologia')
        break
    }
    else if(materiaingresada === 'geografia'){
        alert('ha ingresado materia geografia')
        break
    }else{
        alert('la materia ingresada no esta en la lista ')
    }
}

{
const nota1 = parseInt(prompt('ingrese la primera nota de alejandro de 1 a 10'));
const nota2 = parseInt(prompt('ingrese la segunda nota de alejadro de 1 a 10'));
const nota3 = parseInt(prompt('ingrese la tercera nota de alejadro de 1 a 10'));
const nota4 = parseInt(prompt('ingrese la cuarta nota de alejadro de 1 a 10'));
const nota5 = parseInt(prompt('ingrese la quinta nota de alejadro de 1 a 10'));

const promedio = (nota1 + nota2 + nota3 + nota4+ nota5)/5;
    alert ("el promedio de alejadro es: "+ promedio);

    if(promedio>10){
    alert('el promedio no puede ser mayor a 10 ingrese las notas nuevamente')
    }else if (promedio>5.9) {
        alert('alejadro aprobo la materia');
    }else{
        alert('alejadro reprobo la materia');
    }
}

{
   const nota1 = parseInt(prompt('ingrese la primera nota de esteban de 1 a 10'));
    const nota2 = parseInt(prompt('ingrese la segunda nota de esteban de 1 a 10'));
    const nota3 = parseInt(prompt('ingrese la tercera nota de esteban de 1 a 10'));
    const nota4 = parseInt(prompt('ingrese la cuarta nota de esteban de 1 a 10'));
    const nota5 = parseInt(prompt('ingrese la quinta nota de esteban de 1 a 10'));
    
    const promedio = (nota1 + nota2 + nota3 + nota4+ nota5)/5;
        alert ("el promedio de esteban es: "+ promedio);
    
        if(promedio>10){
        alert('el promedio no puede ser mayor a 10 ingrese las notas nuevamente')
        }else if (promedio>5.9) {
            alert('esteban aprobo la materia');
        }else{
            alert('esteban reprobo la materia');
        }
}

   {
    const nota1 = parseInt(prompt('ingrese la primera nota de tomas de 1 a 10'));
     const nota2 = parseInt(prompt('ingrese la segunda nota de tomas de 1 a 10'));
     const nota3 = parseInt(prompt('ingrese la tercera nota de tomas de 1 a 10'));
     const nota4 = parseInt(prompt('ingrese la cuarta nota de tomas de 1 a 10'));
     const nota5 = parseInt(prompt('ingrese la quinta nota de tomas de 1 a 10'));
     
     const promedio = (nota1 + nota2 + nota3 + nota4+ nota5)/5;
         alert ("el promedio de tomas es: "+ promedio);
     
         if(promedio>10){
         alert('el promedio no puede ser mayor a 10 ingrese las notas nuevamente')
         }else if (promedio>5.9) {
             alert('tomas aprobo la materia');
         }else{
             alert('tomas reprobo la materia');
         }
     }