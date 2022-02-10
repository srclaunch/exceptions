import { Environment } from '@srclaunch/types';
// import { getEnvironment } from '@srclaunch/environment';

import {
  ProcessException,
  ProcessSigIntException,
  ProcessSigTermException,
} from './exceptions/environments/server/process.js';
import {
  handleProcessExceptions,
  handleProcessInterupt,
  handleProcessTermination,
} from './process.js';

export class ExceptionsClient {
  // environment: Environment;
  browser?: boolean = false;
  process?: boolean = false;

  constructor({
    browser,
    process,
    processExceptionsHandler,
    processInteruptHandler,
    processTerminationHandler,
  }: {
    browser?: boolean;
    process?: boolean;
    processExceptionsHandler?: (exception: ProcessException) => void;
    processInteruptHandler?: (exception: ProcessSigIntException) => void;
    processTerminationHandler?: (exception: ProcessSigTermException) => void;
  }) {
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
