// const Hapi = require('@hapi/hapi');

// const init = async () => {
//     const server = Hapi.server({
//         port : 5000,
//         host : 'localhost'
//     });
//     // routing
//     server.route({
//         method : 'GET',
//         path : '/',
//         handler : (request, h) => {
//             return 'Hello World';
//         }
//     });
//     // running server (Syncronus style code)
//     await server.start();
//     // server running info
//     console.log(`server berjalan pada ${server.info.uri}`);
// }

// //calling init to run server
// init();















// // multiple routing using array

// const Hapi = require('@hapi/hapi');

// const init = async () => {
//     const server = Hapi.server({
//         port : 5000,
//         host : 'localhost'
//     });
//     // routing
//     server.route([
//         {
//             method : 'GET',
//             path : '/',
//             handler : (request, h) => {
//                 return 'Homepage';
//             }
//         },
//         {
//             method : 'GET',
//             path : '/about',
//             handler : (request, h) => {
//                 return 'About page';
//             }
//         }
//     ]);
//     // running server (Syncronus style code)
//     await server.start();
//     // server running info
//     console.log(`server berjalan pada ${server.info.uri}`);
// }

// //calling init to run server
// init();




















// best practice routes with other files for route setting 


const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port : 5000,
        host : 'localhost'
    });
    server.route(routes);
    await server.start();
    console.log(`Server running at ${server.info.uri} . . .`);
}

init();