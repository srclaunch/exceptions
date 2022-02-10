import { LogLevel } from '@srclaunch/types';
import { Exception } from '../exception.js';
import { ExceptionCode } from '../../types/index.js';
export class Warning extends Exception {
    code = ExceptionCode.Warning;
    description = 'A warning exception has been thrown.';
    friendlyMessage = 'An unknown warning has occurred.';
    remediation = {
        response: {
            code: 500,
        },
        retry: {
            limit: 3,
        },
    };
}
export class UnmanagedException extends Exception {
    code = ExceptionCode.UnmanagedException;
    description = 'An "Error" object that isn\'t managed by AppLab';
    friendlyMessage = 'An unknown error has occurred.';
    remediation = {
        response: {
            code: 500,
        },
        retry: {
            limit: 3,
        },
    };
}
export class CaughtException extends Exception {
    code = ExceptionCode.CaughtException;
    description = 'An exception was caught within a try block.';
    logLevel = LogLevel.Exception;
    remediation = {
        response: {
            code: 500,
        },
        retry: {
            limit: 3,
        },
    };
}
export class UncaughtException extends Exception {
    code = ExceptionCode.UncaughtException;
    description = 'An uncaught exception bubbled up and was caught automatically.';
    logLevel = LogLevel.Exception;
    remediation = {
        response: {
            code: 500,
        },
        retry: {
            limit: 3,
        },
    };
}
export class UnhandledPromiseRejectionException extends Exception {
    code = ExceptionCode.UnhandledPromiseRejectionException;
    description = 'An unhandled promise rejection was caught automatically.';
    logLevel = LogLevel.Exception;
    remediation = {
        response: {
            code: 500,
        },
        retry: {
            limit: 3,
        },
    };
}
//# sourceMappingURL=index.js.map