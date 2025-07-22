import jwt from "jsonwebtoken";
import ENV from "../../Env.js";

/**
 * 
 * @param {string} Message 
 * @param {number} StatusCode 
 * @returns 
 */
const SocketError = (Message, StatusCode) => {
    const err = new Error(Message);
    // @ts-ignore
    err.data = { Message, StatusCode };
    return err;
}


/**
 * 
 * @param {object} socket 
 * @param {Function} next 
 * @returns 
 */
const decodeSocketIdToken = (socket, next) => {
    const authHeader = socket.handshake.auth.token || "";
    const token = authHeader.split(" ")[1];
    if (!token) {
        return next(SocketError('Authentication token is missing', 403));
    }
    try {
        const user = jwt.verify(token, ENV.TOKEN_KEY);
        // @ts-ignore
        socket.user = user;
        // @ts-ignore
    } catch (error) {
        return next(SocketError('Invalid Token', 401));
    }
    return next();
}

export {
    decodeSocketIdToken,
    SocketError
}