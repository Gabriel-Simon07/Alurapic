import { ErrorHandler } from '@angular/core';

export class GlobalErrorHandler implements ErrorHandler {

  handleError(error: any): void {
    console.log("Passou no handler de error");
    throw error;
  }

}
