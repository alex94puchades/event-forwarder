import {EventEmitter} from 'events';

export class EventForwarder implements EventEmitter {
	constructor(private _eventSink: EventEmitter) {
	}

	addListener(event: string | symbol, listener: (...args: any[]) => void): this {
		this._eventSink.addListener(event, listener);
		return this;
	}

	on(event: string | symbol, listener: (...args: any[]) => void): this {
		this._eventSink.on(event, listener);
		return this;
	}

	once(event: string | symbol, listener: (...args: any[]) => void): this {
		this._eventSink.once(event, listener);
		return this;
	}

	removeListener(event: string | symbol, listener: (...args: any[]) => void): this {
		this._eventSink.removeListener(event, listener);
		return this;
	}

	removeAllListeners(event?: string | symbol): this {
		this._eventSink.removeAllListeners(event);
		return this;
	}

	setMaxListeners(n: number): this {
		this._eventSink.setMaxListeners(n);
		return this;
	}

	getMaxListeners(): number {
		return this._eventSink.getMaxListeners();
	}

	listeners(event: string | symbol): Function[] {
		return this._eventSink.listeners(event);
	}

	emit(event: string | symbol, ...args: any[]): boolean {
		return this._eventSink.emit(event, ...args);
	}

	listenerCount(type: string | symbol): number {
		return this._eventSink.listenerCount(type);
	}

	prependListener(event: string | symbol, listener: (...args: any[]) => void): this {
		this._eventSink.prependListener(event, listener);
		return this;
	}

	prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this {
		this._eventSink.prependOnceListener(event, listener);
		return this;
	}

	eventNames(): Array<string | symbol> {
		return this._eventSink.eventNames();
	}
}

export default EventForwarder;
