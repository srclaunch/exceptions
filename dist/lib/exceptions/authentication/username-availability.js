import { LogLevel } from '@srclaunch/types';
import { ExceptionCode } from '../../../types/index.js';
import { AuthenticationException } from './index.js';
export class AuthenticationUsernameAvailabilityCheckException extends AuthenticationException {
    code = ExceptionCode.AuthenticationUsernameAvailabilityCheckException;
    description = 'An exception occurred while checking if a username is available.';
    friendlyMessage = 'An error occurred while checking if a username is available.';
    logLevel = LogLevel.Critical;
    remediation = {
        response: {
            code: 500,
        },
        retry: true,
    };
}
export class AuthenticationUsernameExistsException extends AuthenticationUsernameAvailabilityCheckException {
    code = ExceptionCode.AuthenticationUsernameExistsException;
    description = 'User with email or phone number already exists.';
    friendlyMessage = 'A user with that email already exists.';
    logLevel = LogLevel.Warning;
    remediation = {
        response: {
            code: 400,
        },
        retry: false,
    };
}
export class AuthenticationAliasExistException extends AuthenticationUsernameAvailabilityCheckException {
    code = ExceptionCode.AuthenticationAliasExistException;
    description = 'This exception is thrown when a user tries to confirm ' +
        'the account with an email or phone number that has already ' +
        'been supplied as an alias from a different account. This exception ' +
        'tells user that an account with this email or phone already exists';
    logLevel = LogLevel.Exception;
    remediation = {
        response: {
            code: 400,
        },
        retry: false,
    };
}
//# sourceMappingURL=username-availability.js.map