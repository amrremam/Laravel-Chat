import './bootstrap';


import Echo from 'laravel-echo'
if (process.client) {
  window.io = require('socket.io-client')
}

mounted() 
{
    let echo = new Echo({
        broadcaster: 'socket.io',
        host: 'http://seekers-backend.com:6001',
        auth: { headers: { Authorization: this.token } }
    })
    echo.private('user.' + this.$auth.user.id)
    .listen('MessageEvent', (e) => {
        // Do stuff
    })
}


window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'socket.io',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    forceTLS: true
});

window.Echo.join(`online`)
    .here((users) => {
        console.log(users)
    })
    .joining((user) => {
        console.log(user.name);
    })
    .leaving((user) => {
        console.log(user.name);
    })
    .error((error) => {
        console.error(error);
    });