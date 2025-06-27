export const APPLY_NUMBER = 'APPLY_NUMBER';
export const CHANGE_OPERATION = 'CHANGE_OPERATION';
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY';
export const APPLY_EQUALS = 'APPLY_EQUALS';
export const ADD_MEMORY = 'ADD_MEMORY';
export const CLEAR_MEMORY = 'CLEAR_MEMORY';
export const RECALL_MEMORY = 'RECALL_MEMORY';

export const applyNumber = (number) => ({
  type: APPLY_NUMBER,
  payload: Number(number),
});

export const changeOperation = (operation) => ({
  type: CHANGE_OPERATION,
  payload: operation,
});

export const clearDisplay = () => ({
  type: CLEAR_DISPLAY,
});

export const applyEquals = () => ({
  type: APPLY_EQUALS,
});

export const addMemory = () => ({
  type: ADD_MEMORY,
});

export const clearMemory = () => ({
  type: CLEAR_MEMORY,
});

export const recallMemory = () => ({
  type: RECALL_MEMORY,
});
