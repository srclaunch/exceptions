import { ProcessException, ProcessSigIntException, ProcessSigTermException } from './exceptions/environments/server/process.js';
export declare class ExceptionsClient {
    browser?: boolean;
    process?: boolean;
    constructor({ browser, process, processExceptionsHandler, processInteruptHandler, processTerminationHandler, }: {
        browser?: boolean;
        process?: boolean;
        processExceptionsHandler?: (exception: ProcessException) => void;
        processInteruptHandler?: (exception: ProcessSigIntException) => void;
        processTerminationHandler?: (exception: ProcessSigTermException) => void;
    });
}
//# sourceMappingURL=client.d.ts.map