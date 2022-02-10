import { LogLevel } from '@srclaunch/types';
import { ExceptionCode } from '../../../../../types/index.js';
import { RetryStrategy } from '../../../../../types/remediation.js';
import { AWSException } from '../index.js';
export class CognitoException extends AWSException {
    code = ExceptionCode.AWSException;
    description = 'An exception originating from the AWS Cognito integration occurred.';
    logLevel = LogLevel.Exception;
    remediation = {
        response: {
            code: 500,
        },
        retry: {
            limit: 3,
            strategy: RetryStrategy.Simple,
        },
    };
}
export class CognitoInternalErrorException extends CognitoException {
    code = ExceptionCode.CognitoInternalErrorException;
    description = 'An internal error occurred originating from AWS Cognito.';
    logLevel = LogLevel.Exception;
    remediation = {
        response: {
            code: 500,
        },
        retry: {
            limit: 3,
            strategy: RetryStrategy.Simple,
        },
    };
}
export class CognitoInvalidUserPoolConfigurationException extends CognitoException {
    code = ExceptionCode.CognitoInvalidUserPoolConfigurationException;
    description = 'This exception is thrown when the user pool configuration ' +
        'is invalid.';
    logLevel = LogLevel.Critical;
    remediation = {
        response: {
            code: 500,
        },
        retry: false,
    };
}
export class CognitoInvalidEmailRoleAccessPolicyException extends CognitoException {
    code = ExceptionCode.CognitoInvalidEmailRoleAccessPolicyException;
    description = 'There is an access policy exception for the role provided for email configuration.';
    logLevel = LogLevel.Critical;
    remediation = {
        response: {
            code: 500,
        },
        retry: false,
    };
}
export class CognitoInvalidSmsRoleAccessPolicyException extends CognitoException {
    code = ExceptionCode.CognitoInvalidSmsRoleAccessPolicyException;
    description = 'This exception is returned when the role provided for SMS configuration ' +
        'does not have permission to publish using Amazon SNS.';
    logLevel = LogLevel.Critical;
    remediation = {
        response: {
            code: 500,
        },
        retry: false,
    };
}
export class CognitoInvalidSmsRoleTrustRelationshipException extends CognitoException {
    code = ExceptionCode.CognitoInvalidSmsRoleTrustRelationshipException;
    description = 'This exception is thrown when the trust relationship is invalid for the ' +
        'role provided for SMS configuration. This can happen if you do not trust ' +
        '-idp.amazonaws.com or the external ID provided in the role does not match ' +
        'what is provided in the SMS configuration for the user pool.';
    logLevel = LogLevel.Critical;
    remediation = {
        response: {
            code: 500,
        },
        retry: false,
    };
}
export class CognitoMissingUserPoolClientIdException extends CognitoException {
    code = ExceptionCode.CognitoMissingUserPoolClientIdException;
    description = 'Cognito user pool client ID configuration is missing.';
    logLevel = LogLevel.Critical;
}
export class CognitoMissingUserPoolIdException extends CognitoException {
    code = ExceptionCode.CognitoMissingUserPoolIdException;
    description = 'Cognito user pool ID configuration is missing.';
    logLevel = LogLevel.Critical;
}
export class CognitoUnexpectedLambdaException extends CognitoException {
    code = ExceptionCode.CognitoUnexpectedLambdaException;
    description = 'This exception is thrown when the Auth service encounters an ' +
        'unexpected exception with the AWS Lambda service.';
    logLevel = LogLevel.Critical;
    remediation = {
        response: {
            code: 500,
        },
        retry: {
            limit: 3,
            strategy: RetryStrategy.Simple,
        },
    };
}
export class CognitoInvalidParameterException extends CognitoException {
    code = ExceptionCode.CognitoInvalidParameterException;
    description = 'This exception is thrown when the Cognito service encounters an invalid parameter.';
    logLevel = LogLevel.Exception;
    remediation = {
        response: {
            code: 500,
        },
        retry: {
            limit: 3,
            strategy: RetryStrategy.Simple,
        },
    };
}
export class CognitoInvalidLambdaResponseException extends CognitoException {
    code = ExceptionCode.CognitoInvalidLambdaResponseException;
    description = 'This exception is thrown when the Amazon service encounters an invalid AWS Lambda response.';
    logLevel = LogLevel.Exception;
    remediation = {
        response: {
            code: 500,
        },
        retry: {
            limit: 3,
            strategy: RetryStrategy.Simple,
        },
    };
}
export class CognitoResourceNotFoundException extends CognitoException {
    code = ExceptionCode.CognitoResourceNotFoundException;
    description = 'This exception is thrown when the Cognito service cannot find the requested resource.';
    logLevel = LogLevel.Exception;
    remediation = {
        response: {
            code: 500,
        },
        retry: {
            limit: 3,
            strategy: RetryStrategy.Simple,
        },
    };
}
export class CognitoUserLambdaValidationException extends CognitoException {
    code = ExceptionCode.CognitoUserLambdaValidationException;
    description = 'This exception is thrown when the Cognito service ' +
        'encounters a user validation exception with the AWS ' +
        'Lambda service.';
    logLevel = LogLevel.Exception;
    remediation = {
        response: {
            code: 500,
        },
        retry: {
            limit: 3,
            strategy: RetryStrategy.Simple,
        },
    };
}
//# sourceMappingURL=index.js.map