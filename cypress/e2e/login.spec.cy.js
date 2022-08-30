describe('Login Page', () => {
    it('Forgot my password', () => {
        cy.log('Given I\'m on the login page');
        cy.visit('https://account.blip.ai/login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dblip-portal%26redirect_uri%3Dhttps%253A%252F%252Fportal.blip.ai%252Fauthorize%26response_type%3Did_token%2520token%26scope%3Doffline_access%2520openid%2520profile%2520email%2520api-msging-hub.full_access%26state%3Dac7affc61f2f41b583a38097040b3159%26nonce%3Df3982e609ca24569808c458150071868');
        cy.findByText(/To get started, login into your account:/i).should('be.visible')
        
        cy.log('When I click on the forget my password text');
        cy.findByText(/Forgot your password?/i).click();
        cy.findByText('Esqueceu sua senha?').should('be.visible');
        
        cy.log('And I inform my email And I click on the send button');
        cy.findByRole('textbox').type(Cypress.faker.internet.email());
        cy.findByRole('button', { name: /Enviar/i }).click();

        cy.log('Then I should receive a email to reset my password');
        cy.findByText(/Se você não receber a mensagem em cerca de 5 minutos, clique no botão abaixo para reenviá-la:/i).should('be.visible');
    });
    it('signup button', () => {
        cy.log('Given I\'m on the login page');
        cy.visit('https://account.blip.ai/login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dblip-portal%26redirect_uri%3Dhttps%253A%252F%252Fportal.blip.ai%252Fauthorize%26response_type%3Did_token%2520token%26scope%3Doffline_access%2520openid%2520profile%2520email%2520api-msging-hub.full_access%26state%3Dac7affc61f2f41b583a38097040b3159%26nonce%3Df3982e609ca24569808c458150071868');
        cy.findByText(/To get started, login into your account:/i).should('be.visible')
        
        cy.log('When I click on the Register for free text');
        cy.findByText(/Register for free/i).click();
        
        cy.log('Then I should see the signup page');
        cy.findByText(/Complete o seu cadastro/i).should('be.visible');
        cy.findByRole('button', { name: /Cadastre-se grátis/i }).should('exist');
    });
});