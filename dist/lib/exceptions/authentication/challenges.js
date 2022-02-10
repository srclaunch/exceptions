import { ExceptionCode } from '../../../types/exception.js';
import { LogLevel } from '@srclaunch/types';
import { AuthenticationException } from './index.js';
export class AuthenticationPasswordResetRequiredException extends AuthenticationException {
    code = ExceptionCode.AuthenticationPasswordResetRequiredException;
    description = 'This exception is thrown when a password reset is required.';
    friendlyMessage = 'A password reset is required in order to login.';
    logLevel = LogLevel.Warning;
    remediation = {
        response: {
            code: 403,
        },
        retry: false,
    };
}
//# sourceMappingURL=challenges.js.map