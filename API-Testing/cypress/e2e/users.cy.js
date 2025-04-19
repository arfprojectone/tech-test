describe('Endpoint Users', () => {
    it('Success', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users',
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('data')

            const users = response.body.data

            // validation array not empty
            expect(users).to.be.an('array').and.have.length.greaterThan(0)

            // validation users
            users.forEach((user) => {
                expect(user).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar')
                expect(user.id).to.be.a('number')
                expect(user.email).to.be.a('string').and.include('@')
                expect(user.first_name).to.be.a('string')
                expect(user.last_name).to.be.a('string')
                expect(user.avatar).to.be.a('string').and.include('https://')
            });
        });
    });
});