
const mongoose = require('mongoose');
const {Teacher, Subject, Student, Mark} = require('./esquemas');


const insertDocuments = async () => {

  // Creo e inserto un profesor
  const teacher = new Teacher({
    firstName: 'Carlos',
    lastName: 'González',
    groups: ["1ºA", "2ºB"]
  });
  await teacher.save();

  // Creo e inserto una asignatura
  const subject = new Subject({
    title: 'Matemáticas',
    teachers: [{ teacher }]
  });
  await subject.save();

  // Creo e inserto una nota
  const mark = new Mark({
    date: new Date(),
    mark: 9.5,
    subjects: { subject } 
  });
  await mark.save();

  // Creo e inserto un estudiante
  const student = new Student({
    firstName: 'Laura',
    lastName: 'Jiménez',
    marks: [{ mark }]
  });
  await student.save();
  
};

insertDocuments().then(() => {
  console.log('Documentos insertados correctamente.');
}).catch(error => {
  console.error('Error al insertar documentos:', error);
});



// COMENTAR LA CREACION DE LOS DOCUMENTOS PARA PROBAR LAS FUNCIONES, YA QUE YA ESTÁN CREADOS


const mostrarNotaAlumno = async () => {
  try {
    const student = await Student.findOne({ firstName: 'Laura', lastName: 'Jiménez' }).populate('marks.subjects.subject');
    if (!student) {
      console.log('Estudiante no encontrado.');
      return;
    }

    const nota = student.marks[0].mark;
    console.log(`Nota de ${student.firstName} ${student.lastName}: ${nota.mark}`);
  } catch (error) {
    console.error('Error al obtener la nota:', error);
  }
};
mostrarNotaAlumno();



// // Función para mostrar la asignatura de un estudiante   --> FALLA, REVISAR
const mostrarAsignaturaEstudiante = async () => {
  try {
    const student = await Student.findOne({ firstName: 'Laura', lastName: 'Jiménez' }).populate('marks.subjects.subject');
    if (!student) {
      console.log('Estudiante no encontrado.');
      return;
    }

    if (student.marks.length > 0) {
      const asignatura = student.marks[0].subjects.subject.title;
      console.log(`Asignatura de ${student.firstName} ${student.lastName}: ${asignatura}`);
    } else {
      console.log('El estudiante no tiene asignaturas.');
    }
  } catch (error) {
    console.error('Error al obtener la asignatura:', error);
  }
};
mostrarAsignaturaEstudiante();



// Función para mostrar todos los profesores de un alumno   ---> LO MUESTRA VACIO
const mostrarProfesoresEstudiante = async () => {
  try {
    const student = await Student.findOne({ firstName: 'Laura', lastName: 'Jiménez' }).populate('marks.subjects.subject.teachers.teacher');
    if (!student) {
      console.log('Estudiante no encontrado.');
      return;
    }

    console.log(`Profesores de ${student.firstName} ${student.lastName}:`);
    student.marks.forEach(mark => {
      if (mark.subjects && mark.subjects.subject && mark.subjects.subject.teachers) {
        mark.subjects.subject.teachers.forEach(teacher => {
          console.log(`- ${teacher.teacher.firstName} ${teacher.teacher.lastName}`);
        });
      }
    });
  } catch (error) {
    console.error('Error al obtener los profesores:', error);
  }
};
mostrarProfesoresEstudiante();



