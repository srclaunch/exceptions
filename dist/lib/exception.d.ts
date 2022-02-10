import { ModelField, FormValidationProblem, HttpRequest, ISO8601String, LogLevel, Model, ModelValidationProblem, Task } from '@srclaunch/types';
import { ExceptionConstructorArgs, ExceptionObject } from '../types/exception';
import { ExceptionRemediation } from '../types/remediation';
import { ExceptionCode } from '../types/exception.js';
/**
 * @class
 * This is the base class used for all exceptions caught and thrown in .
 *
 * @constructor
 * @param {string} message - Generally the entity ID associated with the failure
 * @param {Error} cause - The original thrown error, of which the stack trace will be used instead of `this`.
 * @param {ExceptionBaseConstructorArgs} ...rest
 *
 * @property {Date} created - Date and time the exception was thrown.
 * @property {string} block - asdf
 *
 */
export declare class Exception extends Error {
    cause?: Exception | Error;
    code: ExceptionCode;
    context?: Record<string, unknown>;
    created: ISO8601String;
    data?: unknown;
    description?: string;
    model?: {
        name: Model['name'];
        field?: ModelField['name'];
        problem?: ModelValidationProblem;
    };
    form?: {
        field?: ModelField['name'] | string;
        problem?: FormValidationProblem;
    };
    friendlyMessage?: string;
    id?: string;
    logLevel?: LogLevel;
    origin?: {
        block?: string;
        file?: string;
        function?: string;
    };
    pii?: boolean;
    request?: HttpRequest;
    response?: {
        status?: {
            code: number;
        };
    };
    scope?: string;
    remediation?: ExceptionRemediation;
    tags?: Record<string, unknown>;
    task?: {
        id: Task['id'];
    };
    user?: {
        id?: string;
        email?: string;
        phone?: string;
    };
    __proto__: Error;
    constructor(message: string, details?: ExceptionConstructorArgs);
    toJSON(): ExceptionObject;
}
//# sourceMappingURL=exception.d.ts.map