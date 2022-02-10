import { LogLevel } from '@srclaunch/types';
import { ExceptionCode } from '../../../../types/index.js';
import { RetryStrategy } from '../../../../types/remediation.js';
import { ServiceProviderException } from '../index.js';
/*********************/
/* Stripe exceptions */
/*********************/
export class StripeException extends ServiceProviderException {
    code = ExceptionCode.StripeException;
    description = 'An exception occurred relating to Stripe.';
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
export class StripeMissingSecretKeyException extends StripeException {
    code = ExceptionCode.StripeMissingSecretKeyException;
    description = 'The Stripe secret key token is missing.';
    logLevel = LogLevel.Critical;
    remediation = {
        response: {
            code: 500,
        },
        retry: false,
    };
}
export class StripeSubscriptionCreationFailedException extends StripeException {
    code = ExceptionCode.StripeSubscriptionCreationFailedException;
    description = 'Stripe subscription creation failed.';
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
export class StripePaymentMethodRequiredException extends StripeException {
    code = ExceptionCode.StripePaymentMethodRequiredException;
    description = 'An updated payment method is required.';
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