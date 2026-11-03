# TaskManager Web

Aplicación web para registrar actividades pendientes: permite **agregar**, **marcar como completadas** y **eliminar** tareas. Proyecto de la Unidad 2 de Desarrollo Web Integral, desarrollado de forma colaborativa con Git y GitHub.

## Objetivo

Aplicar control de versiones, repositorios locales y remotos, ramas, pull requests y resolución de conflictos mediante el desarrollo de una aplicación web funcional.

## Integrantes y responsabilidades

| Integrante | Ramas | Responsabilidades |
|---|---|---|
| NOMBRE INTEGRANTE A | `feature/interfaz`, `feature/estilos` | Estructura HTML (`index.html`), diseño y responsividad (`style.css`) |
| NOMBRE INTEGRANTE B | `feature/tareas` | Lógica en JavaScript (`script.js`): agregar, completar, eliminar, contador y guardado en localStorage. Documentación del README |

Ambos: revisión cruzada de pull requests, conflicto controlado y pruebas.

## Funciones

- Capturar una tarea mediante un formulario.
- Agregar la tarea al listado (no permite tareas vacías).
- Marcar / desmarcar tareas como completadas (se tachan).
- Eliminar tareas.
- Contador de tareas pendientes y mensaje cuando la lista está vacía.
- Las tareas se conservan al recargar la página (localStorage).
- Diseño responsivo para celular y computadora.

## Instrucciones de ejecución

1. Clonar el repositorio:
   ```bash
   git clone URL_DEL_REPOSITORIO
   cd TaskManager-Web
   ```
2. Abrir `index.html` en el navegador (doble clic) o usar la extensión **Live Server** de Visual Studio Code.

No requiere instalación ni dependencias.

## Estructura

```
TaskManager-Web/
├── index.html    # Estructura de la interfaz
├── style.css     # Estilos y diseño responsivo
├── script.js     # Lógica de las tareas
└── README.md     # Documentación
```

## Flujo de trabajo: GitHub Flow

Elegimos **GitHub Flow** porque:

- Es simple: solo hay una rama principal (`main`) siempre funcional y ramas cortas por funcionalidad.
- Se adapta a un equipo pequeño (2 personas) y a un proyecto corto, sin versiones programadas.
- Cada cambio entra a `main` mediante un **pull request** revisado por el compañero.
- **Git Flow** (ramas `develop`, `release`, `hotfix`) es demasiado complejo para este alcance; **GitLab Flow** agrega ramas de entorno que no necesitamos; **One Flow** está pensado para proyectos con versiones de lanzamiento.

Pasos del flujo:
1. Crear una rama desde `main` (`feature/...`).
2. Hacer commits descriptivos en la rama.
3. Subir la rama a GitHub (`git push -u origin feature/...`).
4. Abrir un pull request hacia `main`.
5. El compañero revisa y comenta.
6. Fusionar (merge) cuando la app funciona.
7. Actualizar `main` local con `git pull`.

## Comandos utilizados

| Comando | Para qué se usó |
|---|---|
| `git init` | Inicializar el repositorio local |
| `git config --global user.name / user.email` | Configurar identidad |
| `git status` | Ver el estado de los archivos |
| `git add .` | Preparar cambios para commit |
| `git commit -m "mensaje"` | Guardar cambios en el historial |
| `git log --oneline --graph --all` | Ver el historial |
| `git remote add origin URL` | Vincular con GitHub |
| `git push -u origin main` | Subir la rama principal |
| `git switch -c feature/...` | Crear y cambiar a una rama |
| `git branch -a` | Ver ramas locales y remotas |
| `git pull origin main` | Traer cambios de GitHub |
| `git merge` | Integrar ramas (conflicto controlado) |

## Conflicto controlado

1. Se creó la línea de prueba en `conflicto.txt` en `main`.
2. Integrante A, en la rama `prueba/conflicto-a`, cambió la línea a: `Versión del integrante A`.
3. Integrante B, en la rama `prueba/conflicto-b`, cambió la misma línea a: `Versión del integrante B`.
4. Se fusionó primero `prueba/conflicto-a` en `main` (sin problema).
5. Al fusionar `prueba/conflicto-b`, Git marcó conflicto (`<<<<<<<`, `=======`, `>>>>>>>`).
6. Se resolvió en VS Code conservando ambas líneas, se eliminaron los marcadores y se hizo `git add` + `git commit`.

**Cómo prevenirlo:** acordar qué archivo modifica cada integrante, hacer `git pull` antes de empezar a trabajar y mantener las ramas cortas.

## Pruebas

| # | Prueba | Resultado esperado | Resultado obtenido |
|---|---|---|---|
| 1 | Agregar tarea "Comprar material" | Aparece en la lista | ✅ |
| 2 | Agregar tarea vacía | Muestra aviso y no la agrega | ✅ |
| 3 | Marcar tarea como completada | Se tacha y baja el contador | ✅ |
| 4 | Desmarcar tarea | Se quita el tachado | ✅ |
| 5 | Eliminar tarea | Desaparece de la lista | ✅ |
| 6 | Recargar la página | Las tareas se conservan | ✅ |
| 7 | Vista en celular (ancho < 600 px) | Formulario en columna, sin scroll horizontal | ✅ |

### Errores corregidos

- _(Escribir aquí los errores que encontraron y cómo los corrigieron, por ejemplo: "el contador no se actualizaba al eliminar; se agregó la llamada a render()".)_

## Capturas

_(Agregar aquí las capturas: app funcionando, `git log`, ramas, pull requests y conflicto resuelto.)_
