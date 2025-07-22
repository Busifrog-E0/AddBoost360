// import { Socket, Server } from "socket.io";
// import { decodeSocketIdToken } from "./socket-middleware.js";

// const ConnectSocket = (expressServer) => {


//     const io = new Server(expressServer, {
//     });
//     io.use(decodeSocketIdToken);


//     io.on('connection', socket => {
//         //@ts-ignore
//         socket.join(socket.user.UserId);

//         socket.on('Message', async data => {
//         })

//         socket.on('JoinRoom', async ({ ConversationId }) => {
//         });

//         socket.on('LeaveRoom', ({ ConversationId }) => {
//             socket.leave(ConversationId);
//         });

//         // When user disconnects - to all others 
//         socket.on('disconnect', () => {
//             //@ts-ignore
//             socket.leave(socket.user.UserId);
//         })

//     })


// }


// export {
//     ConnectSocket
// }