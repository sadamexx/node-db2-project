const server = require('./server');

const PORT = process.env.PORT || 3333;

server.listen(PORT, () => {
    console.log(`Creating magic on port ${PORT}`);
});