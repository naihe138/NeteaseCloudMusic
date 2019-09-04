class EventBus {
  constructor () {
    this._events = {}
  }
  on (name, fn) {
    (this._events[name] || (this._events[name] = [])).push(fn)
  }
  emit (name, ...args) {
    if (this._events[name]) {
      this._events[name].forEach(bu => bu(...args))
    }
  }
  off (name) {
    this._events[name] = []
  }
  once (name, fn) {
    const once = () => {
      this.off(name)
      fn(arguments)
    }
    this.on(name, once)
  }
}

export default EventBus
