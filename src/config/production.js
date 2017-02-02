
export const ENV = {
    //default setting
    DEFAULT_AWS_CONFIG: {
        apiVersions: {
            s3: 'latest'
        },
        region: 'ap-southeast-2'
    },

    //cognito
    COGNITO_REGION: 'COGNITO_REGION',
    COGNITO_USER_POOL_ID: '',
    COGNITO_APP_CLIENT_ID: '',
    COGNITO_IDENTITY_POOL_ID: '',

    COGNITO_USER_POOL_MANDATORY_ATTR: [
        'email',
        'family_name',
        'given_name',
        'password',
    ],

    COGNITO_USER_POOL_STANDARD_ATTR: [
        'address',
        'birthdate',
        'email',
        'family_name',
        'gender',
        'given_name',
        'locale',
        'middle_name',
        'name',
        'nickname',
        'phone_number',
        'picture',
        'preferred_username',
        'profile',
        'timezone',
        'website'
    ],

    COGNITO_USER_POOL_CUSTOM_ATTR: [
        'permissions',
        'roles'
    ],

    S3: {
        agent: {
            region: 'region',
            bucket: 'bucket',
            acl: 'public-read'
        },
        clienttmp: {
            region: 'region',
            bucket: 'bucket',
            acl: 'public-read'
        }
    },

    URI: {
        client: 'clientURI'
    },

    REDUX_LOGGER_CONFIG: {
        level: 'log',
        duration: true,
        timestamp: true,
        logger: console,
        logErrors: true,
        collapsed: true,
        diff: true
    }
}



