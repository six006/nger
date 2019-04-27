export * from './decorators/public_api'
export * from './lifecycle_hooks';
export * from './cli/command'
export * from './cli/option'
export * from './it';
export * from './visitor';
export * from './http/get';
export * from './http/post';
export * from './controller';
export * from './orm/index';
export * from './platform';
export * from './tokens';
export * from './authGuard';
export * from './isDevMode';
export * from './effect';
export * from './compiler';

export class ErrorHandler {
    handleError(error: any): void {
        console.log(`handleError:ERROR`,error.message)
        console.log(`handleError:ERROR`,error.stack)
    }
}