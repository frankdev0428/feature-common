class EventEmitter {
    constructor() {
        this.events = {};
    }

    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        const subscription = { eventName, callback };
        this.events[eventName].push(subscription);

        return {
            unsubscribe: () => {
                const index = this.events[eventName].indexOf(subscription);
                if (index !== -1) {
                    this.events[eventName].splice(index, 1);
                }
            },
        };
    }

    emit(eventName, args = []) {
        const eventCallbacks = this.events[eventName] || [];
        const results = eventCallbacks.map(({ callback }) => callback(...args));
        return ["emitted", results];
    }
}

// Example usage:
const emitter = new EventEmitter();

// Subscribe callbacks to "firstEvent"
const subscription1 = emitter.subscribe("firstEvent", () => 5);
const subscription2 = emitter.subscribe("firstEvent", () => 6);

// Emit "firstEvent" and get results
const result1 = emitter.emit("firstEvent");
console.log(result1); // Output: ["emitted", [5, 6]]

// Unsubscribe subscription1
subscription1.unsubscribe();

// Emit "firstEvent" again after unsubscribing and get results
const result2 = emitter.emit("firstEvent");
console.log(result2); // Output: ["emitted", [6]]
