import { Response } from 'express';
import { Exception } from './exception.js';
import { UnmanagedException } from './exceptions/index.js';

export type ExceptionResponse = {
  code: number;
  description?: string;
  friendlyMessage?: string;
};

export class ExceptionRemediator {
  public exception?: Exception = undefined;

  handleException(
    err: Exception | Error,
    { res }: { res: Response },
  ): Response<ExceptionResponse> {
    this.exception =
      err instanceof Exception
        ? err
        : new UnmanagedException(err.name, {
            cause: err,
          });

    const response = this.getExceptionResponse();

    if (response) {
      return res.status(response.code).json(response.body);
    }

    return res.status(500).json({
      code: 99999,
      description: 'An unknown error occurred.',
      friendlyMessage: 'An unknown error occurred.',
    });
  }

  getExceptionResponse(): { body: ExceptionResponse; code: number } | null {
    if (this.exception) {
      const { code, description, friendlyMessage, remediation } =
        this.exception;

      const responseCode = remediation?.response?.code ?? 500;

      return {
        body: {
          code,
          description,
          friendlyMessage,
        },
        code: responseCode,
      };
    }

    return null;
  }
}
