describe('API Medicamentos - Pruebas', () => {
  const baseUrl = 'https://api-medicamentos.librahost.com.ar'; 

  it('GET /medicamentos - devuelve una lista', () => {
    cy.request(`${baseUrl}/medicamentos`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
    });
  });

  it('GET /medicamentos?nombre=ibuprofeno - debería filtrar medicamentos por nombre', () => {
    cy.request(`${baseUrl}/medicamentos?nombre=ibuprofeno`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.satisfy((meds) =>
        meds.every((med) =>
          med.nombre.toLowerCase().includes('ibuprofeno')
        )
      );
    });
  });

  it('GET /medicamentos?droga=paracetamol - debería filtrar por droga', () => {
    cy.request(`${baseUrl}/medicamentos?droga=paracetamol`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.satisfy((meds) =>
        meds.every((med) =>
          med.droga.toLowerCase().includes('paracetamol')
        )
      );
    });
  });
});
