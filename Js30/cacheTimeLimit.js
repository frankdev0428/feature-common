class TimeLimitedCache {
    constructor() {
      this.cache = new Map();
    }
  
    set(key, value, duration) {
      const currentTime = Date.now();
      const expirationTime = currentTime + duration;
  
      if (this.cache.has(key)) {
        this.cache.get(key).expirationTime = expirationTime;
        this.cache.get(key).value = value;
        return true;
      }
  
      this.cache.set(key, { value, expirationTime });
      return false;
    }
  
    get(key) {
      const currentTime = Date.now();
      if (this.cache.has(key)) {
        const entry = this.cache.get(key);
        if (currentTime <= entry.expirationTime) {
          return entry.value;
        } else {
          this.cache.delete(key);
        }
      }
      return -1;
    }
  
    count() {
      const currentTime = Date.now();
      let activeKeys = 0;
  
      this.cache.forEach((entry) => {
        if (currentTime <= entry.expirationTime) {
          activeKeys++;
        } else {
          this.cache.delete(entry.key);
        }
      });
  
      return activeKeys;
    }
  }
  
  // Example usage:
  const cache = new TimeLimitedCache();
  console.log(cache.set(1, 42, 100)); // Output: false
  console.log(cache.get(1)); // Output: 42
  console.log(cache.count()); // Output: 1
  console.log(cache.get(1)); // Output: -1
  