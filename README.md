To start the server:
- nodemon app.js
- node app.js

- Using nodemon will reboot the server when files are saved on vs code. 


To kill the server:
- ctrl + c in terminal

- ctrl + z in terminal will not suspend the server, not terminate it.
Running the app again, will result in a error such as:
Error: listen EADDRINUSE: address already in use :::3003

Because the server is still listening on the same port.
