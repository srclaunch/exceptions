import {
  Environment,
  ModelField,
  FormValidationProblem,
  HttpRequest,
  ISO8601String,
  LogLevel,
  Model,
  ModelValidationProblem,
  Task,
} from '@srclaunch/types';
import { ExceptionConstructorArgs, ExceptionObject } from '../types/exception';
import { ExceptionRemediation } from '../types/remediation';
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
  cause?: Exception | Error;
  code: ExceptionCode = ExceptionCode.Exception;
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
  friendlyMessage?: string = 'An unknown error has occurred. :(';
  id?: string;
  logLevel?: LogLevel = LogLevel.Exception;
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

  public constructor(message: string, details?: ExceptionConstructorArgs) {
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
      const {
        cause,
        context,
        data,
        model,
        form,
        origin,
        pii,
        request,
        response,
        tags,
        task,
        user,
      } = details;

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

  toJSON(): ExceptionObject {
    return serializeError(this) as ExceptionObject;
  }
}
