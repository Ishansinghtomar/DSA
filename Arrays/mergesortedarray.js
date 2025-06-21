let aar1 = [1, 2, 3, 0, 0, 0];
let arr2 = [2, 5, 6]
var merge = function (nums1, m, nums2, n) {
  let p1 = 0;
  let p2 = 0;
  let n1 = nums1.slice(0, m);
  for (let i = 0; i < m + n; i++) {
    if (p2>=n ||(m > p1 && n1[p1] < nums2[p2])) {
      nums1[i] = n1[p1];
      p1++;
    }
    else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
  return nums1;
};

console.log(merge(aar1, 3, arr2, 3))