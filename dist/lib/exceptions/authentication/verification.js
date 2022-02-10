import { LogLevel } from '@srclaunch/types';
import { ExceptionCode } from '../../../types/index.js';
import { RetryStrategy } from '../../../types/remediation.js';
import { AuthenticationException } from './index.js';
export class AuthenticationCodeDeliveryFailureException extends AuthenticationException {
    code = ExceptionCode.AuthenticationCodeDeliveryFailureException;
    description = 'This exception is thrown when a verification code fails to deliver successfully.';
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
export class AuthenticationCodeMismatchException extends AuthenticationException {
    code = ExceptionCode.AuthenticationCodeMismatchException;
    description = 'The verification code provided is incorrect';
    logLevel = LogLevel.Warning;
    remediation = {
        response: {
            code: 400,
        },
        retry: false,
    };
}
export class AuthenticationExpiredCodeException extends AuthenticationException {
    code = ExceptionCode.AuthenticationExpiredCodeException;
    description = 'The verification code provided has expired';
    logLevel = LogLevel.Warning;
    remediation = {
        response: {
            code: 403,
        },
        retry: false,
    };
}
export class AuthenticationUserNotConfirmedException extends AuthenticationException {
    code = ExceptionCode.AuthenticationUserNotConfirmedException;
    description = 'This exception is thrown when a user who is not confirmed attempts to login.';
    friendlyMessage = "You haven't verified your email address or telephone number yet";
    logLevel = LogLevel.Warning;
    remediation = {
        response: {
            code: 403,
        },
        retry: false,
    };
}
//# sourceMappingURL=verification.js.map