describe('Routes: main', () => {
    const expectGet = {service: 'users-ms'};
    describe('GET /', () => {
        it('should return a service name', async () => {
            const response = await request.get('/api/v1');
            expect(response.body).to.eql(expectGet);
        });
    });
});