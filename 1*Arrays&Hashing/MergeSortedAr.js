// Initialize three pointers: i for the last element of nums1, j for the last element of nums2, and k for the last position of the merged array.

// Start iterating from the end of both arrays (i and j) and compare elements.

// If the element at nums1[i] is greater than or equal to the element at nums2[j], put nums1[i] in the merged array at position k, decrement both i and k.

// If the element at nums2[j] is greater, put nums2[j] in the merged array at position k, decrement both j and k.

// Continue this process until either i or j becomes less than 0, indicating that one of the arrays has been fully merged.

// If there are remaining elements in nums2, copy them to the beginning of nums1.

// The result will be a merged array nums1 containing elements from both nums1 and nums2, sorted in non-decreasing order, with the extra space in nums1 used for merging in-place.

var merge = function(nums1, m, nums2, n) {
    let i = m - 1; // Index for nums1
    let j = n - 1; // Index for nums2
    let k = m + n - 1; // Index for the merged array

    // While there are elements in both arrays
    while (i >= 0 && j >= 0) {
        if (nums1[i] >= nums2[j]) {
            // If nums1 element is greater or equal, put it in the merged array
            nums1[k] = nums1[i];
            i--;
        } else {
            // If nums2 element is greater, put it in the merged array
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // If there are remaining elements in nums2, copy them to nums1
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
};