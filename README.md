# ParkControl — Sistema de Gestión de Parqueadero

Proyecto académico desarrollado con HTML, CSS y JavaScript.

## Funcionalidades
- Registrar carros y motocicletas.
- Validar placas repetidas y capacidad máxima de 20 espacios.
- Buscar vehículos por placa.
- Registrar salida y calcular el cobro por horas iniciadas.
- Guardar los registros en `localStorage` del navegador.

## Tarifas de ejemplo
- Carro: $3.000 COP por hora.
- Motocicleta: $1.500 COP por hora.
- Mínimo una hora; cada hora iniciada se cobra completa.

## Cómo ejecutar
Abre `index.html` en un navegador moderno. No necesita dependencias ni servidor.

## Archivos
- `index.html`: estructura.
- `styles.css`: diseño adaptable.
- `script.js`: lógica y validaciones.

## Subir a GitHub
1. Crea un repositorio llamado `sistema-parqueadero` en https://github.com/.
2. Abre la terminal dentro de esta carpeta y ejecuta:

```bash
git init
git add .
git commit -m "Primer proyecto de parqueadero"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/sistema-parqueadero.git
git push -u origin main
```

Reemplaza `TU-USUARIO` por tu usuario de GitHub.

**Nota:** es una demostración académica. Los datos quedan guardados únicamente en el navegador local; no utiliza base de datos compartida ni procesa pagos reales.
