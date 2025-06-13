# 🧪 Cypress - InfoMedica

Este repositorio contiene pruebas automatizadas E2E con **Cypress** para la aplicación SanTres+7, un sistema de gestión de medicamentos. Las pruebas están diseñadas para verificar el contenido de las páginas así como su navegación por las mismas.

---

## 📁 Estructura del Proyecto

```
cypress-info-medica/
├── cypress/
│   ├── e2e/
│   │   ├── home.cy.js
│   │   └── adminMeds.cy.js
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js
└── README.md
```

- `home.cy.js`: Pruebas relacionadas con la página principal.
- `productos.cy.js`: Pruebas de la página de productos.
- `laboratorio.cy.js`: Pruebas de la página de laboratorio.
- `adminMeds.cy.js`: Pruebas del panel de administración de medicamentos.
- `commands.js`: Comandos personalizados para reutilizar acciones comunes.

---

## 🚀 Instalación y ejecución

### Requisitos

- Node.js (v18+ recomendado)
- npm o yarn

### 1. Clona el repositorio

```bash
git clone https://github.com/krojasdev11/cypress-info-medica.git
cd cypress-info-medica
```

### 2. Instala dependencias

```bash
npm install
# o
yarn install
```

### 3. Ejecuta Cypress en modo interactivo

```bash
npx cypress open
```

### 4. O ejecuta las pruebas en modo headless

```bash
npx cypress run
```

---

## ✅ Qué se prueba

- Accesibilidad y navegación de la UI
- Crear, buscar, editar y eliminar medicamentos
- Validaciones del formulario
- Comprobación del manejo de errores
- Interacción con la API (mocking opcional)

---

## 🛠️ Tecnologías utilizadas

- [Cypress](https://www.cypress.io/) - Framework de testing E2E
- [Mocha](https://mochajs.org/) + [Chai](https://www.chaijs.com/) - Asserts y estructura de pruebas
- HTML + JavaScript (front de InfoMedica)

---

## 📌 Notas

- Asegúrate de que el backend de InfoMedica esté corriendo localmente o en producción antes de ejecutar las pruebas.
- Si el proyecto se ejecuta desde `file://`, Cypress puede requerir configuraciones adicionales para el acceso a recursos.

---

## 📄 Licencia

MIT © [Kevin Rojas](https://github.com/krojasdev11)
