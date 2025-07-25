// import { Socket, Server } from "socket.io";

// /**
//  * 
//  * @param {Socket} Socket 
//  * @param {object} data 
//  */
// const SendMessage = async (Socket, data) => {
    
// }


// const JoinRoom = async (Socket, data) => {
//     let transactionFinish = false;
//     const Session = dataHandling.dbClient.startSession();
//     try {

//     }
//     catch {
        
//     }
//     finally {
        
//     }
// }

// const ConnectSocket = (expressServer) => {


//     const io = new Server(expressServer, {
//     });
//     io.use(decodeSocketIdToken);


//     io.on('connection', socket => {
//         //@ts-ignore
//         socket.join(socket.user.UserId);

//         socket.on('Message', async data => {

//             // @ts-ignore
//             data.SenderId = socket.user.UserId;
//             const MessageData = await CreateMessages(data);

//             if (MessageData.Success === true) {
//                 io.to(data.ConversationId).emit('Message', MessageData.Data);


//                 MessageData.ParticipantIds.map(id => {
//                     // @ts-ignore
//                     if (id !== socket.user.UserId) {
//                         io.to(id).emit('ConversationList', true)
//                     };
//                 })
//             }
//         })

//         socket.on('JoinRoom', async ({ ConversationId }) => {
//             const ConversationData = await ReadOneFromConversations(ConversationId);
//             // @ts-ignore
//             if (CheckUserInConversation(ConversationData, socket.user.UserId)) {
//                 // leave existing rooms?
//                 socket.join(ConversationId);

//             }

//         });

//         socket.on('LeaveRoom', ({ ConversationId }) => {
//             socket.leave(ConversationId);
//         });

//         // When user disconnects - to all others 
//         socket.on('disconnect', () => {
//             // @ts-ignore
//             UpdateUsers({ Online: false, LastActive: moment().valueOf() }, socket.user.UserId);
//             //@ts-ignore
//             socket.leave(socket.user.UserId);
//         })

//     })


// }


