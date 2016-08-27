/* jslint node: true, esnext: true */
'use strict';

const Interceptor = require('kronos-interceptor').Interceptor;
const parserFactory = require('./tokens2obj');

/**
 * This interceptor cares about the handling of the messages.
 * It will add the hops and copies the messages
 */
class Tokens2ObjectInterceptor extends Interceptor {

	static get name() {
		return 'line-tokens2obj';
	}

	receive(request, oldRequest) {
		if (request.payload) {
			const streamFilter = parserFactory(this.config.config, true);
			const stream = request.payload;
			request.payload = stream.pipe(streamFilter);
		}
		return this.connected.receive(request, oldRequest);
	}
}
exports.Interceptor = Tokens2ObjectInterceptor;
