/* @flow */
'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as lightSwitchActions from '../actions/lightSwitchActions';
import { connect } from 'react-redux';
import LightSwitch from '../components/lightSwitch'

class LightSwitchApp extends Component {
  render() {
    return (
      <LightSwitch actions={this.props.actions} status={this.props.status} />
    );
  }
}

export default connect(state => ({
    status: state.switches.status
  }),
  (dispatch) => ({
    actions: bindActionCreators(lightSwitchActions, dispatch)
  })
)(LightSwitchApp);
