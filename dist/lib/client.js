import { handleProcessExceptions, handleProcessInterupt, handleProcessTermination, } from './process.js';
export class ExceptionsClient {
    // environment: Environment;
    browser = false;
    process = false;
    constructor({ browser, process, processExceptionsHandler, processInteruptHandler, processTerminationHandler, }) {
        // this.environment = getEnvironment();
        this.browser = browser;
        this.process = process;
        if (process) {
            handleProcessExceptions(processExceptionsHandler);
            handleProcessInterupt(processInteruptHandler);
            handleProcessTermination(processTerminationHandler);
        }
    }
}
//# sourceMappingURL=client.js.map