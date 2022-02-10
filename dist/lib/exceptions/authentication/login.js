import { LogLevel } from '@srclaunch/types';
import { ExceptionCode } from '../../../types/index.js';
import { AuthenticationException } from './index.js';
export class AuthenticationLoginException extends AuthenticationException {
    code = ExceptionCode.AuthenticationLoginException;
    description = 'An exception occurred while logging a user in.';
    friendlyMessage = 'An unknown error occurred.';
    logLevel = LogLevel.Critical;
    remediation = {
        response: {
            code: 500,
        },
        retry: true,
    };
}
export class AuthenticationLoginInvalidCredentialsException extends AuthenticationException {
    code = ExceptionCode.AuthenticationLoginInvalidCredentialsException;
    description = 'Incorrect username or password provided.';
    friendlyMessage = 'Incorrect username or password.';
    logLevel = LogLevel.Info;
    remediation = {
        response: {
            code: 401,
        },
        retry: false,
    };
}
export class AuthenticationLoginTooManyFailedAttemptsException extends AuthenticationException {
    code = ExceptionCode.AuthenticationLoginTooManyFailedAttemptsException;
    description = 'This exception is thrown when the user has provided an incorrect username or password too many times.';
    friendlyMessage = "You've provided an incorrect username or password too many times.";
    logLevel = LogLevel.Warning;
    remediation = {
        response: {
            code: 429,
        },
        retry: false,
    };
}
//# sourceMappingURL=login.js.map