export const badRequest = (message: string) => {
    return {
      status: 400,
      message,
    };
  };
  
  export const unauthorizedError = (message: string) => {
    return {
      status: 401,
      message,
    };
  };
  
  export const notFoundError = (message: string) => {
    return {
      status: 404,
      message,
    };
  };
  
  export const conflictError = (message: string) => {
    return {
      status: 409,
      message,
    };
  };
  
  export const unprocessableEntity = (message: string) => {
    return {
      status: 422,
      message,
    };
  };