/* jslint node: true, esnext: true */
'use strict';

import Tokens2ObjectInterceptor from './Tokens2ObjectInterceptor';
import {
  Tokens2ObjectFactory
}
from './tokens2obj';

function registerWithManager(manager) {
  return manager.registerInterceptor(Tokens2ObjectInterceptor);
}

export {
  Tokens2ObjectFactory,
  Tokens2ObjectInterceptor,
  registerWithManager
};
