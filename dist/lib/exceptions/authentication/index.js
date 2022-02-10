import { LogLevel } from '@srclaunch/types';
import { Exception } from '../../exception.js';
import { ExceptionCode } from '../../../types/index.js';
import { RetryStrategy } from '../../../types/remediation.js';
export class AuthenticationException extends Exception {
    code = ExceptionCode.AuthenticationException;
    description = 'Generic or unknown exceptions associated with user authentication.';
    friendlyMessage = 'An unknown error occurred.';
    logLevel = LogLevel.Warning;
    remediation = {
        response: {
            code: 401,
        },
        retry: {
            limit: 3,
            strategy: RetryStrategy.CircuitBreaker,
        },
    };
}
export class AuthenticationUnauthorizedAccessException extends AuthenticationException {
    code = ExceptionCode.AuthenticationUnauthorizedAccessException;
    description = 'User lacks permissions to access the requested resource.';
    logLevel = LogLevel.Warning;
    remediation = {
        response: {
            code: 403,
        },
        retry: false,
    };
}
export class AuthenticationLimitExceededException extends AuthenticationException {
    code = ExceptionCode.AuthenticationLimitExceededException;
    description = 'This exception is thrown when a user exceeds the limit for a requested AWS resource';
    friendlyMessage = 'You are trying to access this resource too often.';
    logLevel = LogLevel.Warning;
    remediation = {
        response: {
            code: 429,
        },
        retry: false,
    };
}
export class AuthenticationNotAuthorizedException extends AuthenticationException {
    code = ExceptionCode.AuthenticationNotAuthorizedException;
    description = 'The Auth user does not have permission to perform this action.';
    friendlyMessage = 'You need to be logged in or have proper permissions to access this resource.';
    logLevel = LogLevel.Warning;
    remediation = {
        response: {
            code: 403,
        },
        retry: false,
    };
}
export class AuthenticationTooManyRequestsException extends AuthenticationException {
    code = ExceptionCode.AuthenticationTooManyRequestsException;
    description = 'This exception is thrown when the user has made too many requests for a given operation.';
    friendlyMessage = 'You are trying to access this resource too often.';
    logLevel = LogLevel.Warning;
    remediation = {
        response: {
            code: 429,
        },
        retry: false,
    };
}
export class AuthenticationUserNotFoundException extends AuthenticationException {
    code = ExceptionCode.AuthenticationUserNotFoundException;
    description = 'This exception is thrown when the Auth service cannot ' +
        'find a user with the provided username.';
    logLevel = LogLevel.Exception;
    remediation = {
        response: {
            code: 500,
        },
        retry: false,
    };
}
//# sourceMappingURL=index.js.map