import type { SerializedError } from "@reduxjs/toolkit";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";


export function getErrorMessage(error: FetchBaseQueryError | SerializedError | undefined): string {
  if (!error) return 'Произошла ошибка';
  
  if ('status' in error && 'data' in error) {
 
    if (typeof error.data === 'string') {
      return `Ошибка ${error.status}: ${error.data}`;
    }
    return `Ошибка ${error.status}`;
  }
  
  if ('message' in error) {
  
    return error.message || 'Произошла ошибка';
  }
  
  return 'Произошла неизвестная ошибка';
}