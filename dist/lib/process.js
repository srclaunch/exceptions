import { UnhandledPromiseRejectionException, } from './exceptions/index.js';
import { KillProcessException, ProcessSigIntException, ProcessSigTermException, } from './exceptions/environments/server/process.js';
export function handleProcessInterupt(cb) {
    process.on('SIGINT', () => {
        const exception = new ProcessSigIntException('SIGINT signal received.', {});
        if (cb)
            cb(exception);
    });
}
export function handleProcessTermination(cb) {
    process.on('SIGTERM', () => {
        const exception = new ProcessSigTermException('SIGTERM signal received', {});
        if (cb)
            cb(exception);
    });
}
export function handleProcessExceptions(cb) {
    process.on('uncaughtException', async (err) => {
        if (err.name !== KillProcessException.name) {
            if (cb)
                cb(err);
        }
    });
    process.on('unhandledRejection', async (err) => {
        if (err.name !== KillProcessException.name) {
            const exception = new UnhandledPromiseRejectionException(`Unhandled Rejection: ${err.name}`, {
                cause: err,
            });
            if (cb)
                cb(exception);
        }
    });
    process.on('warning', (err) => {
        if (cb)
            cb(err);
    });
}
//# sourceMappingURL=process.js.map