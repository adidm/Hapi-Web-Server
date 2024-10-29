const routes = [
    {
        method : 'GET',
        path : '/',
        handler : (request, h) => {
            return 'Homepage'
        }
    },
    {
        method : '*',
        path : '/',
        handler : (request, h) => {
            return 'Halaman tidak bisa diakses dengan method tersebut'
        }
    },
    {
        method : 'GET',
        path : '/about',
        handler : (request, h) => {
            return 'About page'
        }
    },
    {
        method : '*',
        path : '/about',
        handler : (request, h) => {
            return 'Halaman tidak bisa diakses megunakan method tersebut'
        }
    },
    {
        method : '*',
        path : '/{any*}',
        handler : (request, h) => {
            return 'Halaman tidak ditemukan'
        }
    },
    {
        method : 'GET',
        path : '/hello/{name?}', //path paramaeter
        handler : (request, h) => {
            const {name = 'stranger' } = request.params; // mengambil parameter nilai path yg dikirim
            const { lang } = request.query; //query parameter
            if(lang === 'id'){
                return `Hai, ${name}!`; // jika queri ?lang=id
            }

            return `Hello, ${name}`;
        }
    },
    {
        method : 'POST',
        path : '/login',
        handler : (request, h) => {
            // data JSON yg sudah dikirim sudah di ubah menjadi object dan disimpan
            // ke dalam request.payload oleh hapi. jadi tidak perlu berurusan dengan readable stream
            const { username, password } = request.payload;
            // gunakan (curl -X POST -H "Content-Type: application/json" 
            // -d "{\"username\": \"harrypotter\", \"password\" : \"halloharry\"}" http://localhost:5000/login)
            if(username == 'harrypotter' && password == 'halloharry'){
            return `Halo, ${username}`;
            } else {
                return 'passowrd atau username salah'
            }
        }
    }
];

module.exports = routes;