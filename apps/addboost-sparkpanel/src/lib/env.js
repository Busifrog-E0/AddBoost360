// config.js

const ENVIRONMENTS = {
    DEVELOPMENT: "development",
    PRODUCTION: "production",
};

const CURRENT_ENV = ENVIRONMENTS.DEVELOPMENT;

const CONFIG = {
    [ENVIRONMENTS.DEVELOPMENT]: {
        USE_API: "https://addboost360debug.epoqzero.com/",
        USE_PREMAIN_API: "https://addboost360debug.epoqzero.com/",
        CLIENT_URL: "https://add-boost-360-test.web.app",
    },
    [ENVIRONMENTS.PRODUCTION]: {
        USE_API: "https://api.addboost360.com/",
        USE_PREMAIN_API: "https://api.addboost360.com/",
        CLIENT_URL: "https://www.addboost360.com",
    },
};

const { USE_API, USE_PREMAIN_API, CLIENT_URL } = CONFIG[CURRENT_ENV];

export {
    ENVIRONMENTS,
    CURRENT_ENV,
    USE_API,
    USE_PREMAIN_API,
    CLIENT_URL,
};
