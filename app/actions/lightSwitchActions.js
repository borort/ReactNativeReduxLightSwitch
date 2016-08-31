import * as types from '../constants/lightSwitchActionTypes';

export function switchOn() {
  return {
    type: types.SWITCH_ON
  }
}

export function switchOff() {
  return {
    type: types.SWITCH_OFF
  }
}
