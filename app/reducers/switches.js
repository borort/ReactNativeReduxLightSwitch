import * as types from '../constants/lightSwitchActionTypes';

const initialState = {
  status: 'OFF'
}

export default function (state = initialState, actions) {
  switch (actions.type) {
    case types.SWITCH_ON:
      return {
        ...state,
        status: 'ON'
      };
    case types.SWITCH_OFF:
      return {
        ...state,
        status: 'OFF'
      }
    default:
      return state;
  }
}
