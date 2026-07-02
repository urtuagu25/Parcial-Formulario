 // ==========================================
// 1. INTERFAZ DEL FORMULARIO
// ==========================================
interface FormularioContacto {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  edad: number;
  mensaje: string;
}

// ==========================================
// 2. ARRAY DE PRUEBAS OBLIGATORIOS
// ==========================================
const formulariosDePrueba: FormularioContacto[] = [
  {
    id: 1, // Caso 1: Éxito Total
    nombre: "María García",
    email: "maria.garcia@empresa.com",
    telefono: "011-1234-5678",
    edad: 28,
    mensaje: "Me gustaría recibir información sobre sus productos y servicios disponibles."
  },
  {
    id: 2, // Caso 2: Múltiples Errores Simultáneos
    nombre: "A",
    email: "email invalido",
    telefono: "123",
    edad: 10,
    mensaje: "Hola"
  },
  {
    id: 3, // Caso 3: Campos Vacíos / Estructura Nula
    nombre: "",
    email: "",
    telefono: "",
    edad: 0,
    mensaje: ""
  }
];

// ==========================================
// 3. FUNCIÓN DE VALIDACIÓN INDIVIDUAL
// ==========================================
function validarFormulario(form: FormularioContacto): void {
  // Inicializamos el acumulador de errores para este formulario
  const errores: string[] = [];
  
  console.log(`\n--- Evaluando Formulario ID: ${form.id} ---`);

  // [Aquí adentro meteremos los condicionales de cada campo en el próximo paso]


  // --- VALIDACIÓN DE NOMBRE ---
  // .length nos da la cantidad de caracteres del string
  if (form.nombre.length >= 2 && form.nombre.length <= 50) {
    console.log("✓ Campo nombre válido"); // Mensaje de éxito exigido
  } else {
    // Si no cumple, armamos el mensaje de error
    const errorMsg = "X Error en nombre: No debe estar vacío y debe tener entre 2 y 50 caracteres.";
    console.log(errorMsg);
    errores.push(errorMsg); // Lo guardamos en el acumulador para el reporte final
  }



  // --- VALIDACIÓN DE EMAIL ---
  // Contamos cuántas arrobas hay en el string
  const cantidadArrobas = form.email.split('@').length - 1;

  if (form.email.length > 0 && cantidadArrobas === 1) {
    console.log("✓ Campo email válido");
  } else {
    const errorMsg = "X Error en email: No debe estar vacío y debe contener exactamente un carácter '@'.";
    console.log(errorMsg);
    errores.push(errorMsg);
  }

// --- VALIDACIÓN DE TELÉFONO ---
  // Reemplazamos todos los espacios en blanco y guiones por nada ""
  const telefonoLimpio = form.telefono.replace(/[\s-]/g, '');
  
  // Validamos si el texto resultante contiene ÚNICAMENTE números (dígitos)
  const esSoloNumeros = /^\d+$/.test(telefonoLimpio);

  if (form.telefono.length > 0 && esSoloNumeros && telefonoLimpio.length >= 8 && telefonoLimpio.length <= 15) {
    console.log("✓ Campo telefono válido");
  } else {
    const errorMsg = "X Error en telefono: Solo debe contener números (ignorando espacios y guiones) y tener entre 8 y 15 dígitos.";
    console.log(errorMsg);
    errores.push(errorMsg);
  }


// --- VALIDACIÓN DE EDAD ---
  if (Number.isInteger(form.edad) && form.edad >= 16 && form.edad <= 99) {
    console.log("✓ Campo edad válido");
  } else {
    const errorMsg = "X Error en edad: Debe ser un número entero comprendido entre 16 y 99 años inclusive.";
    console.log(errorMsg);
    errores.push(errorMsg);
  }

// --- VALIDACIÓN DE MENSAJE ---
  if (form.mensaje.length >= 10) {
    console.log("✓ Campo mensaje válido");
  } else {
    const errorMsg = "X Error en mensaje: No debe estar vacío y debe tener una extensión mínima de 10 caracteres.";
    console.log(errorMsg);
    errores.push(errorMsg); // Acumulamos el último error posible
  }


  // --- REPORTE DE ESTADO COMPLETO ---
  console.log("\nREPORTE DE ESTADO:");
  if (errores.length === 0) {
    // Si no hubo fallas, mostramos el éxito rotundo
    console.log("¡FORMULARIO VÁLIDO! Todos los campos son correctos.");
  } else {
    // Si se detectó algún error, listamos los fallos detallados
    console.log("FORMULARIO INCOMPLETO. Corrija los siguientes errores:");
    errores.forEach((unError) => {
      console.log(`  ${unError}`);
    });
  }

}

// ==========================================
// 4. ITERACIÓN Y EJECUCIÓN
// ==========================================
function ejecutarValidacionesCompletes(): void {
  console.log("=== INICIANDO EVALUACIÓN DE FORMULARIOS ===");
  
  // Recorremos los escenarios secuencialmente
  formulariosDePrueba.forEach((formulario) => {
    validarFormulario(formulario);
  });
}

// Ponemos en marcha el programa
ejecutarValidacionesCompletes();