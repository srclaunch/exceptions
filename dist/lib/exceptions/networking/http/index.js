import { LogLevel } from '@srclaunch/types';
import { ExceptionCode } from '../../../../types/index.js';
import { RetryStrategy } from '../../../../types/remediation.js';
import { NetworkException } from '../index.js';
export class HttpException extends NetworkException {
    code = ExceptionCode.HttpException;
    description = 'A generic or unknown exception occurred related to an HTTP request.';
    logLevel = LogLevel.Exception;
    remediation = {
        response: {
            code: 500,
        },
        retry: {
            limit: 3,
            strategy: RetryStrategy.CircuitBreaker,
        },
    };
}
export class HttpRequestException extends HttpException {
    code = ExceptionCode.HttpRequestException;
    description = 'Base class for generic or unknown exceptions ' +
        'occuring during an HTTP request.';
    logLevel = LogLevel.Exception;
    remediation = {
        response: {
            code: 500,
        },
        retry: {
            limit: 3,
            strategy: RetryStrategy.CircuitBreaker,
        },
    };
}
export class HttpRequestResourceNotFoundException extends HttpRequestException {
    code = ExceptionCode.HttpRequestResourceNotFoundException;
    description = 'The requested HTTP resource could not be found.';
    logLevel = LogLevel.Exception;
    remediation = {
        response: {
            code: 404,
        },
        retry: {
            limit: 3,
            strategy: RetryStrategy.CircuitBreaker,
        },
    };
}
/**
 * @class Class used when a request's body is missing an object property.
 */
export class MissingRequestBodyPropertyException extends HttpRequestException {
    code = ExceptionCode.MissingRequestBodyPropertyException;
    description = 'HTTP request body is missing a required property.';
    logLevel = LogLevel.Exception;
    remediation = {
        response: {
            code: 400,
        },
        retry: false,
    };
}
export class MissingRequestUrlParameterException extends HttpRequestException {
    code = ExceptionCode.MissingRequestUrlParameterException;
    description = 'HTTP request URL is missing a required parameter.';
    logLevel = LogLevel.Exception;
    remediation = {
        response: {
            code: 400,
        },
        retry: false,
    };
}
export class MissingCookieException extends HttpRequestException {
    code = ExceptionCode.MissingCookieException;
    description = 'A required cookie is missing.';
    logLevel = LogLevel.Exception;
    remediation = {
        response: {
            code: 500,
        },
        retry: false,
    };
}
export class HttpResponseException extends HttpException {
    code = ExceptionCode.HttpRequestException;
    description = 'Generic or unknown exceptions related to HTTP responses.';
    logLevel = LogLevel.Exception;
    remediation = {
        response: {
            code: 500,
        },
        retry: false,
    };
}
//# sourceMappingURL=index.js.map