import {
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  APPLY_EQUALS,
  ADD_MEMORY,
  CLEAR_MEMORY,
  RECALL_MEMORY,
} from './actions.jsx';

export const initialState = {
  total: 0,
  operation: '+',
  memory: 0,
  buffer: '', // Rakamları biriktirmek için kullanılır
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    case '/':
      return num2 !== 0 ? num1 / num2 : 0;
    default:
      return num1;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case APPLY_NUMBER:
      const newBuffer = state.buffer + action.payload;
      return {
        ...state,
        buffer: newBuffer,
        total: Number(newBuffer),
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
        memory: Number(state.buffer || state.total),
        buffer: '',
        // total'ı sıfırlamıyoruz ki ekranda sayı kalmaya devam etsin
      };

    case CLEAR_DISPLAY:
      return {
        ...state,
        total: 0,
        buffer: '',
      };

    case APPLY_EQUALS:
      const secondOperand = Number(state.buffer || state.total);
      const result = calculateResult(
        state.memory,
        secondOperand,
        state.operation
      );
      return {
        ...state,
        total: result,
        memory: 0,
        buffer: '',
      };

    case ADD_MEMORY:
      return {
        ...state,
        memory: state.memory + Number(state.total),
      };

    case CLEAR_MEMORY:
      return {
        ...state,
        memory: 0,
      };

    case RECALL_MEMORY:
      return {
        ...state,
        total: state.memory,
        buffer: state.memory.toString(),
      };

    default:
      return state;
  }
};

export default reducer;
