import { LogLevel } from '@srclaunch/types';
import { Exception } from '../../exception.js';
import { ExceptionCode } from '../../../types/index.js';
/*************************/
/* Validation exceptions */
/*************************/
export class ValidationException extends Exception {
    code = ExceptionCode.ValidationException;
    description = 'Generic or otherwise unknown input validation exception.';
    logLevel = LogLevel.Exception;
    remediation = {
        response: {
            code: 400,
        },
        retry: false,
    };
}
export class InvalidTypeException extends Exception {
    code = ExceptionCode.InvalidTypeException;
    description = 'Instance type is invalid.';
    logLevel = LogLevel.Exception;
    remediation = {
        response: {
            code: 400,
        },
        retry: false,
    };
}
export class MissingArgumentException extends Exception {
    code = ExceptionCode.MissingArgumentException;
    description = 'A required argument is missing.';
    logLevel = LogLevel.Exception;
    remediation = {
        response: {
            code: 400,
        },
        retry: false,
    };
}
export class MissingPropertyException extends Exception {
    code = ExceptionCode.MissingPropertyException;
    description = 'A required property is missing.';
    logLevel = LogLevel.Exception;
    remediation = {
        response: {
            code: 400,
        },
        retry: false,
    };
}
export class InvalidArgumentException extends Exception {
    code = ExceptionCode.InvalidArgumentException;
    description = 'An argument is invalid.';
    logLevel = LogLevel.Exception;
    remediation = {
        response: {
            code: 400,
        },
        retry: false,
    };
}
export class InvalidPropertyException extends Exception {
    code = ExceptionCode.InvalidPropertyException;
    description = 'An object property is invalid.';
    logLevel = LogLevel.Exception;
    remediation = {
        response: {
            code: 400,
        },
        retry: false,
    };
}
//# sourceMappingURL=index.js.map