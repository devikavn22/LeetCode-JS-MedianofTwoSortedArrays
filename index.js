var nums1 = [1, 3];
var nums2 = [2];

var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    // To Ensure nums1 is the shorter array to simplify the binary search
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length;
  const n = nums2.length;
  const halfLen = Math.floor((m + n + 1) / 2);

  let left = 0;
  let right = m;

  while (left <= right) {
    const partitionX = Math.floor((left + right) / 2);
    const partitionY = halfLen - partitionX;

    const maxX =
      partitionX === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
    const maxY =
      partitionY === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];

    const minX =
      partitionX === m ? Number.POSITIVE_INFINITY : nums1[partitionX];
    const minY =
      partitionY === n ? Number.POSITIVE_INFINITY : nums2[partitionY];

    if (maxX <= minY && maxY <= minX) {
      if ((m + n) % 2 === 0) {
        return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
      } else {
        return Math.max(maxX, maxY);
      }
    } else if (maxX > minY) {
      right = partitionX - 1;
    } else {
      left = partitionX + 1;
    }
  }
};

var result = findMedianSortedArrays(nums1, nums2);
console.log("Median:", result); //2

// Time Complexity : O(log(min(m, n))) -- logarithmic time complexity
