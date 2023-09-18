// Create a hash map (frequencyMap) to store the frequency of each element in the nums array.

// Iterate through the nums array and populate the frequencyMap. For each element, increment its frequency count in the map.

// Create an empty priority queue (min-heap) called minHeap.

// Iterate through the unique elements in the nums array (you can use a Set to get unique elements). For each unique element num, do the following:

// Check if the size of the minHeap is less than k. If it is, add num to the minHeap along with its frequency from the frequencyMap.
// If the size of the minHeap exceeds k, check if the frequency of num is greater than the frequency of the smallest element in the minHeap. If it is, remove the smallest element from the minHeap and add num with its frequency.
// Repeat this process for all unique elements.
// After processing all unique elements, the minHeap will contain the k most frequent elements. Extract these elements and return them in an array.

function kMostFrequent(nums, k) {
    const frequencyMap = new Map();
  
    // Populate the frequency map
    for (const num of nums) {
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
  
    // Create a min-heap (priority queue)
    const minHeap = new MinHeap();
  
    // Iterate through unique elements
    const uniqueNums = [...new Set(nums)];
    for (const num of uniqueNums) {
      if (minHeap.size() < k) {
        // If heap size is less than k, add the element
        minHeap.insert({ num, frequency: frequencyMap.get(num) });
      } else if (frequencyMap.get(num) > minHeap.peek().frequency) {
        // If frequency is higher than the smallest element, replace it
        minHeap.extractMin();
        minHeap.insert({ num, frequency: frequencyMap.get(num) });
      }
    }
  
    // Extract k most frequent elements from the min-heap
    const result = [];
    while (!minHeap.isEmpty()) {
      result.unshift(minHeap.extractMin().num);
    }
  
    return result;
  }
  
  // Define a MinHeap data structure
  class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    size() {
      return this.heap.length;
    }
  
    insert(item) {
      this.heap.push(item);
      this.bubbleUp(this.heap.length - 1);
    }
  
    bubbleUp(index) {
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (this.heap[parentIndex].frequency <= this.heap[index].frequency) break;
        this.swap(parentIndex, index);
        index = parentIndex;
      }
    }
  
    extractMin() {
      const min = this.heap[0];
      const last = this.heap.pop();
      if (this.heap.length > 0) {
        this.heap[0] = last;
        this.sinkDown(0);
      }
      return min;
    }
  
    sinkDown(index) {
      while (true) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let smallestChildIndex = index;
  
        if (
          leftChildIndex < this.heap.length &&
          this.heap[leftChildIndex].frequency < this.heap[smallestChildIndex].frequency
        ) {
          smallestChildIndex = leftChildIndex;
        }
  
        if (
          rightChildIndex < this.heap.length &&
          this.heap[rightChildIndex].frequency < this.heap[smallestChildIndex].frequency
        ) {
          smallestChildIndex = rightChildIndex;
        }
  
        if (smallestChildIndex === index) break;
  
        this.swap(index, smallestChildIndex);
        index = smallestChildIndex;
      }
    }
  
    peek() {
      return this.heap[0];
    }
  
    isEmpty() {
      return this.heap.length === 0;
    }
  
    swap(i, j) {
      const temp = this.heap[i];
      this.heap[i] = this.heap[j];
      this.heap[j] = temp;
    }
  }
  
  // Example usage
  const nums1 = [1, 1, 1, 2, 2, 3];
  const k1 = 2;
  console.log(kMostFrequent(nums1, k1)); // Output: [1, 2]