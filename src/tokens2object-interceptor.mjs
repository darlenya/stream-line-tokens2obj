import { Interceptor } from "kronos-interceptor";
import { Tokens2ObjectFactory } from "./tokens2obj.mjs";

/**
 * This interceptor cares about the handling of the messages.
 * It will add the hops and copies the messages
 */
export default class Tokens2ObjectInterceptor extends Interceptor {
  static get name() {
    return "line-tokens2obj";
  }

  receive(request, oldRequest) {
    if (request.payload) {
      const streamFilter = Tokens2ObjectFactory(this.config.config, true);
      const stream = request.payload;
      request.payload = stream.pipe(streamFilter);
    }
    return this.connected.receive(request, oldRequest);
  }
}
