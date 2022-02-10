import { LogLevel } from '@srclaunch/types';
import { ExceptionCode } from '../../../types/index.js';
import { RetryStrategy } from '../../../types/remediation.js';
import { AuthenticationException } from './index.js';
export class AuthenticationMFAMethodNotFoundException extends AuthenticationException {
    code = ExceptionCode.AuthenticationMFAMethodNotFoundException;
    description = 'This exception is thrown when the Auth service cannot ' +
        'find a multi-factor authentication (MFA) method.';
    logLevel = LogLevel.Exception;
    remediation = {
        response: {
            code: 403,
        },
        retry: {
            limit: 3,
            strategy: RetryStrategy.Simple,
        },
    };
}
//# sourceMappingURL=mfa.js.map