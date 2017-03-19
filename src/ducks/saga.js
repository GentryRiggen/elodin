export const EXECUTE_SAGA = '@@root/EXECUTE_SAGA';

const executeSaga = (saga, ...parameters) => {
  return {
    type: EXECUTE_SAGA,
    saga,
    parameters,
  }
};

export {
  executeSaga,
};
