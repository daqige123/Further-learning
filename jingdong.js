/**
* 题目：汇总区间
*
* 给定一个无重复元素且按升序排列的整数数组 nums，请返回「汇总区间」组成的列表，使得这些区间恰好覆盖数组中所有数字，且不包含不在数组中的整数。
*
* 区间 [a,b] 表示从 a 到 b（含）的所有整数。每个区间的表示方式：
* - 若 a === b，输出 "a"；
* - 若 a !== b，输出 "a->b"。
*
* 示例 1：
* 输入：nums = [0,1,2,4,5,7]
* 输出：["0->2","4->5","7"]
* 解释：区间 [0,2] → "0->2"，[4,5] → "4->5"，[7,7] → "7"。
*
* 示例 2：
* 输入：nums = [0,2,3,4,6,8,9]
* 输出：["0","2->4","6","8->9"]
*/
// export function summaryRanges(nums: number[]): string[] {
// // TODO
// return [];
// }

function summryRanges(nums){
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        let tem = [];
        tem.push(nums[i]);
        while (nums[i+1] === nums[i] + 1 && i < nums.length - 1) {
            tem.push(nums[i+1]);
            i++;
        }
        res.push(tem);
    }
    return res;
}
console.log(summryRanges([0,1,2,4,5,7]));
console.log(summryRanges([0,2,3,4,6,8,9]));
console.log(summryRanges([0,1,2,4,5,7,8,9]));