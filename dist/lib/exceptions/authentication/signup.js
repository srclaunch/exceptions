import { LogLevel } from '@srclaunch/types';
import { ExceptionCode } from '../../../types/index.js';
import { AuthenticationException } from './index.js';
export class AuthenticationSignupException extends AuthenticationException {
    code = ExceptionCode.AuthenticationSignupException;
    description = 'An exception occurred while signing up a user.';
    friendlyMessage = 'An error occurred while signing up.';
    logLevel = LogLevel.Critical;
    remediation = {
        response: {
            code: 500,
        },
        retry: true,
    };
}
//# sourceMappingURL=signup.js.map