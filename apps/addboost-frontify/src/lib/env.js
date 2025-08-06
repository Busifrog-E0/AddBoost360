// config.js

const ENVIRONMENTS = {
    DEVELOPMENT: "development",
    PRODUCTION: "production",
};

const CURRENT_ENV = ENVIRONMENTS.PRODUCTION;

const CONFIG = {
    [ENVIRONMENTS.DEVELOPMENT]: {
        USE_API: "https://addboost360debug.epoqzero.com/",
        USE_PREMAIN_API: "https://addboost360debug.epoqzero.com/",
    },
    [ENVIRONMENTS.PRODUCTION]: {
        USE_API: "https://api.addboost360.com/",
        USE_PREMAIN_API: "https://api.addboost360.com/",
    },
};

const { USE_API, USE_PREMAIN_API } = CONFIG[CURRENT_ENV];

export {
    ENVIRONMENTS,
    CURRENT_ENV,
    USE_API,
    USE_PREMAIN_API,
};
