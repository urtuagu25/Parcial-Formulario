# Validador de Formulario de Contacto - TypeScript

[cite_start]Este proyecto contiene el desarrollo del **Primer Examen Parcial** para la carrera de **Programación Dispositivos Móviles (2° Año)** en el **ISFT N°220 - AMET**[cite: 1, 2, 3].

[cite_start]El objetivo principal es implementar un sistema optimizado en TypeScript que valide de forma secuencial y estricta los campos individuales de un formulario de contacto e-commerce, generando un reporte final consolidado por consola[cite: 8, 9, 11].

## 🚀 Características del Proyecto

* [cite_start]**Tipado Estricto:** Implementación basada puramente en interfaces de TypeScript, omitiendo por completo el uso de tipos genéricos permisivos (`any`)[cite: 33, 34, 75].
* [cite_start]**Sanitización de Datos:** Limpieza dinámica de cadenas de texto (uso de expresiones regulares para procesar formatos telefónicos ignorando guiones y espacios en el conteo)[cite: 21, 75].
* [cite_start]**Manejo de Acumuladores:** Estrategia basada en arreglos nativos para capturar, agrupar y listar de forma ordenada la totalidad de los errores encontrados por formulario[cite: 75].
* [cite_start]**Fidelidad de Interfaz de Consola:** Salida formateada con indicadores dinámicos (`✓` y `X`) de acuerdo con las especificaciones del enunciado[cite: 14, 15, 75].

## 📋 Reglas de Validación Aplicadas

1. [cite_start]**Nombre:** Obligatorio, extensión permitida entre 2 y 50 caracteres[cite: 19].
2. [cite_start]**Email:** Obligatorio, validación estricta de la existencia de exactamente un carácter `@`[cite: 20].
3. [cite_start]**Teléfono:** Solo caracteres numéricos con una longitud neta de entre 8 y 15 dígitos (reemplazo automático de máscaras visuales)[cite: 21].
4. [cite_start]**Edad:** Valor numérico entero comprendido entre los 16 y 99 años inclusive[cite: 22].
5. [cite_start]**Mensaje:** Obligatorio, con una extensión mínima de 10 caracteres[cite: 23].

## 🛠️ Tecnologías y Configuración

* **Lenguaje:** TypeScript
* **Entorno de ejecución:** Node.js / `ts-node`

### Instalación y Ejecución

1. Clonar el repositorio.
2. Instalar las dependencias de desarrollo necesarias:
   ```bash
   npm install
