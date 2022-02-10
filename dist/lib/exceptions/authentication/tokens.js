import { LogLevel } from '@srclaunch/types';
import { ExceptionCode } from '../../../types/index.js';
import { AuthenticationException } from './index.js';
export class AuthenticationExpiredAccessTokenException extends AuthenticationException {
    code = ExceptionCode.AuthenticationExpiredAccessTokenException;
    description = 'The access token associated with a session has expired.';
    logLevel = LogLevel.Warning;
    remediation = {
        response: {
            code: 401,
        },
        retry: false,
    };
}
/**
 * This exception is thrown when the authentication server encounters an invalid access token.
 */
export class AuthenticationInvalidAccessTokenException extends AuthenticationException {
    code = ExceptionCode.AuthenticationInvalidAccessTokenException;
    description = 'The access token associated with a session is invalid.';
    logLevel = LogLevel.Warning;
    remediation = {
        response: {
            code: 401,
        },
        retry: false,
    };
}
export class AuthenticationMissingAccessTokenException extends AuthenticationException {
    code = ExceptionCode.AuthenticationMissingAccessTokenException;
    description = 'The access token associated with a session is missing.';
    logLevel = LogLevel.Warning;
    remediation = {
        response: {
            code: 401,
        },
        retry: false,
    };
}
export class AuthenticationExpiredRefreshTokenException extends AuthenticationException {
    code = ExceptionCode.AuthenticationExpiredRefreshTokenException;
    description = 'The refresh token associated with a session has expired.';
    logLevel = LogLevel.Warning;
    remediation = {
        response: {
            code: 401,
        },
        retry: false,
    };
}
/**
 * This exception is thrown when the authentication server encounters an invalid refresh token.
 */
export class AuthenticationInvalidRefreshTokenException extends AuthenticationException {
    code = ExceptionCode.AuthenticationInvalidRefreshTokenException;
    description = 'The refresh token associated with a session is invalid.';
    logLevel = LogLevel.Warning;
    remediation = {
        response: {
            code: 401,
        },
        retry: false,
    };
}
export class AuthenticationMissingRefreshTokenException extends AuthenticationException {
    code = ExceptionCode.AuthenticationMissingRefreshTokenException;
    description = 'The refresh token associated with a session is missing.';
    logLevel = LogLevel.Warning;
    remediation = {
        response: {
            code: 401,
        },
        retry: false,
    };
}
//# sourceMappingURL=tokens.js.map