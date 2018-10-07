import { me as device } from 'device';

console.log('type:             ' + device.type);
console.log('model name:       ' + device.modelName);
console.log('model ID:         ' + device.modelId);
console.log('firmware version: ' + device.firmwareVersion);
console.log('last synced:      ' + device.lastSyncTime);
