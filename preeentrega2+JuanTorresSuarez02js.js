const alumnos = [  {    nombre: "Alejandro",    notas: []
  },
  {
    nombre: "Esteban",
    notas: []
  },
  {
    nombre: "Tomas",
    notas: []
  }
];

for(let i=0; i<alumnos.length; i++){
    let promedio = 0;
    
    alert("Ingrese las 5 notas de " + alumnos[i].nombre);

    for(let j=1; j<=5; j++){
        const nota = parseInt(prompt(`Ingrese la nota ${j} de 1 a 10:`));
        if(nota<1 || nota>10){
            alert("La nota ingresada no es válida, ingrese de nuevo.");
            j--;
        }else{
            alumnos[i].notas.push(nota);
        }
    }

    promedio = alumnos[i].notas.reduce((a, b) => a + b) / alumnos[i].notas.length;

    alert(`El promedio de ${alumnos[i].nombre} es: ${promedio}`);

    if(promedio > 10){
        alert('El promedio no puede ser mayor a 10. Ingrese las notas nuevamente.');
        i--;
    }else if(promedio > 5.9){
        alert(`${alumnos[i].nombre} aprobó la materia.`);
    }else{
        alert(`${alumnos[i].nombre} reprobó la materia.`);
    }

    console.log(`Las notas de ${alumnos[i].nombre} son: ${alumnos[i].notas}`);
    const notasAprobadas = alumnos[i].notas.filter(nota => nota > 7);
    console.log(`Las notas aprobadas de ${alumnos[i].nombre} son: ${notasAprobadas}`);
}
