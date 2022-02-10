import { LogLevel } from '@srclaunch/types';
import { ServiceProviderException } from '../index.js';
import { ExceptionCode } from '../../../../types/index.js';
import { RetryStrategy } from '../../../../types/remediation.js';
export class AWSException extends ServiceProviderException {
    code = ExceptionCode.AWSException;
    description = 'An exception originating from the AWS integration occurred.';
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
export class AWSMissingAccessKeyException extends AWSException {
    code = ExceptionCode.StripeMissingSecretKeyException;
    description = 'Missing AWS access key token.';
    logLevel = LogLevel.Critical;
    remediation = {
        response: {
            code: 500,
        },
        retry: false,
    };
}
export class AWSMissingSecretKeyException extends AWSException {
    code = ExceptionCode.StripeMissingSecretKeyException;
    description = 'Missing AWS secret key token.';
    logLevel = LogLevel.Critical;
    remediation = {
        response: {
            code: 500,
        },
        retry: false,
    };
}
//# sourceMappingURL=index.js.map