'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEnableHardwareAcceleration = getEnableHardwareAcceleration;
exports.setEnableHardwareAcceleration = setEnableHardwareAcceleration;

var _electron = require('electron');

var _appSettings = require('./appSettings');

const settings = _appSettings();

function getEnableHardwareAcceleration() {
  // TODO: This should probably a constant
  return settings.get('enableHardwareAcceleration', true);
}

function setEnableHardwareAcceleration(enableHardwareAcceleration) {
  settings.set('enableHardwareAcceleration', enableHardwareAcceleration);
  settings.save();

  _electron.app.relaunch();
  _electron.app.exit(0);
}