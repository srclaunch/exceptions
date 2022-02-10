import { LogLevel, } from '@srclaunch/types';
import { nanoid } from 'nanoid';
import { serializeError } from 'serialize-error';
import { ExceptionCode } from '../types/exception.js';
//
// function getStack(error: Error): string {
//   let stack: Error['stack'] = error.stack;
//
//   if (stack) {
//     return stack.split('\n').slice(1).join('\n');
//   }
//
//   const { captureStackTrace, prepareStackTrace } = Error;
//
//   stack = captureStackTrace(error, prepareStackTrace);
//   if (stack) {
//     return stack.split('\n').slice(1).join('\n');
//   }
//
//   stack = new Error().stack;
//   if (stack) {
//     return stack.split('\n').slice(1).join('\n');
//   }
//
//   return '';
// }
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
export class Exception extends Error {
    cause;
    code = ExceptionCode.Exception;
    context;
    created;
    data;
    description;
    model;
    form;
    friendlyMessage = 'An unknown error has occurred. :(';
    id;
    logLevel = LogLevel.Exception;
    origin;
    pii;
    request;
    response;
    scope;
    remediation;
    tags;
    task;
    user;
    __proto__;
    constructor(message, details) {
        super(message);
        // const logger = new Logger();
        // Restore prototype chain
        const actualProto = new.target.prototype;
        this.__proto__ = actualProto;
        // Capture stack trace when possible
        if (Error.captureStackTrace) {
            Error.captureStackTrace(details?.cause ?? this, Exception);
        }
        this.id = nanoid();
        this.name = this.constructor.name;
        this.created = new Date().toString();
        this.description = details?.description ?? this.description;
        this.remediation = details?.remediation ?? this.remediation;
        this.scope = details?.scope ?? this.scope;
        if (details) {
            const { cause, context, data, model, form, origin, pii, request, response, tags, task, user, } = details;
            this.cause = cause;
            this.context = context;
            this.data = data;
            this.model = model;
            this.form = form;
            this.origin = origin;
            this.pii = pii;
            this.request = request;
            this.response = response;
            this.task = task;
            this.tags = tags;
            this.user = user;
        }
    }
    toJSON() {
        return serializeError(this);
    }
}
//# sourceMappingURL=exception.js.map