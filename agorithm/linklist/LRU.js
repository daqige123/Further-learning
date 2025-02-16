// 实现 LRUCache 类：
// LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
// int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
// void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
// 输入
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// 输出
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// 解释
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // 缓存是 {1=1}
// lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
// lRUCache.get(1);    // 返回 1
// lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
// lRUCache.get(2);    // 返回 -1 (未找到)
// lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
// lRUCache.get(1);    // 返回 -1 (未找到)
// lRUCache.get(3);    // 返回 3
// lRUCache.get(4);    // 返回 4
class LRUCache{
    constructor(capacity) {
        this.limit = capacity;
        this.cache = new Map();
    }
    get(key) {
        let tmp;
        if (this.cache.has(key)) {
            tmp = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, tmp); // 重点就是在这儿，js map是有顺序的，先删除在重新set，虽然重新set把顺序排在了最后，但是put的时候先删第一个也是一样的
            return this.cache.get(key);
        }
        return -1;
    }
    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key); // 同理，如果已经有这个key了，需要删除，再重新set来调整顺序。
        }
        this.cache.set(key, value);
        if (this.cache.size > this.limit) {
            this.cache.delete(this.cache.keys().next().value); // 超出限制了，就删除第一个
        }
    }
}
let a = new Map([[1,1], [2,2],[4,3]]);
const keys = a.keys();
console.log('key', keys);
// for (let key of keys) {
//     console.log(key);
// }

console.log(keys.next());
console.log(keys.next());
console.log(keys.next());
console.log(keys.next());