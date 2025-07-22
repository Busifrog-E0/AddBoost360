/**
 * 
 * @param {string} Header 
 * @param {string} Message 
 * @param {boolean} SubscriptionButton 
 * @param {boolean} CloseButton 
 * @param {boolean} UpdateButton 
 * @returns 
 */



const AlertBoxObject = (Header, Message, SubscriptionButton = false, CloseButton = true, UpdateButton = false) => {
    return {
        Header,
        Message,
        SubscriptionButton,
        UpdateButton,
        CloseButton
    }
}

/**
 * 
 * @param {number} Length 
 * @returns 
 */
const GenerateRandomString = (Length) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < Length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}


/**
 * Converts a plain object into the analytics array format.
 * 
 * @param {Object} obj - Key-value pairs to convert.
 * @returns {Array} - Array of analytics objects in desired format.
 */
const ConvertObjectToAnalyticsFormat = (obj) => {
    return Object.entries(obj).map(([key, value]) => ({
        _id: null,
        Name: key,
        Value: value
    }));
};


export {
    AlertBoxObject,
    GenerateRandomString,
    ConvertObjectToAnalyticsFormat,
}