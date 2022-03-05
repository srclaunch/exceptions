import { Environment } from '@srclaunch/types';

// import { getEnvironment } from '@srclaunch/environment';
import {
  ProcessException,
  ProcessSigIntException,
  ProcessSigTermException,
} from './exceptions/environments/server/process';
import {
  handleProcessExceptions,
  handleProcessInterupt,
  handleProcessTermination,
} from './process';

export class ExceptionsClient {
  // environment: Environment;
  readonly browser?: boolean = false;
  readonly process?: boolean = false;

  constructor({
    browser,
    process,
    processExceptionsHandler,
    processInteruptHandler,
    processTerminationHandler,
  }: {
    readonly browser?: boolean;
    readonly process?: boolean;
    readonly processExceptionsHandler?: (exception: ProcessException) => void;
    readonly processInteruptHandler?: (
      exception: ProcessSigIntException,
    ) => void;
    readonly processTerminationHandler?: (
      exception: ProcessSigTermException,
    ) => void;
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
