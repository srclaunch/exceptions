import { Exception } from './exception.js';
import { UnmanagedException } from './exceptions/index.js';
export class ExceptionRemediator {
    exception = undefined;
    handleException(err, { res }) {
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
    getExceptionResponse() {
        if (this.exception) {
            const { code, description, friendlyMessage, remediation } = this.exception;
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
//# sourceMappingURL=remediation.js.map