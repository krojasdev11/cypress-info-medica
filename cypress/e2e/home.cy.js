//Test de la Estructura general de la página
describe('Página principal de InfoMedica', () => {
  beforeEach(() => {
    cy.visit('https://api-medicamentos.librahost.com.ar');
  });

  it('Debe mostrar el título principal', () => {
    cy.contains('Bienvenido a InfoMedica').should('be.visible');
  });

  it('Debe mostrar la sección de productos', () => {
    cy.contains('Nuestros Productos').should('be.visible');
    cy.get('.card-title').should('have.length', 3);
  });

  it('Debe mostrar la sección de laboratorios', () => {
    cy.contains('Laboratorios Asociados').should('be.visible');
    cy.get('.col-md-3 img').should('have.length', 4);
  });
});

//Navegación y NavBar para saber si son visibles
it('Tiene enlaces en la navbar', () => {
  cy.get('nav').should('exist');
  cy.contains('Inicio').should('be.visible');
  cy.contains('Productos').should('be.visible');
  cy.contains('Laboratorios').should('be.visible');
});

//Simulación de click en los botones
it('Botón "Ingresar" debe existir y ser clickeable', () => {
  cy.get('button.btn-primary').contains('Ingresar').click();
});

//Imagenes del Home cargadas 
it('Debe mostrar imágenes de productos y laboratorios', () => {
  cy.get('img[alt="Producto 1"]').should('be.visible');
  cy.get('img[alt="Lab 1"]').should('be.visible');
});
