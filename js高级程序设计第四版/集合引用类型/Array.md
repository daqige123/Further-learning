### 数组

#### 数组的api

##### 1. 数组有两个静态方法，from()将类数组结构转换为数组实例, of()将一组参数转换为数组实例。

##### 2. 检索数组内容: keys(), values(),  entries() 返回索引/值 对的迭代器。

##### 3. 复制和填充

```js

        let zeros = [0, 0, 0, 0, 0];
        zeros.fill(7, 1, 3); // 用7填充索引1,2；
        zeros.copyWithin(4, 0, 3) // 将0-3的元素复制插入到索引4开始的位置。
```

##### 4. valueof() 返回数组的本身   toString()返回数组中的每个值的等效(对数组中的每个值都会掉用toString方法)字符串拼接而成的由逗号分隔的字符串。

```js
所以 toString可以用来数组扁平化。
```

##### 5. 栈和队列。push(), pop()类似栈方法; push(), shift()队首元素。unshift()在数组开头添加任意多的元素。

##### 6. 排序 reverse(), sort(), sort会将数组的每一项转化为string来进行排序，即使数组里面是数字。

```js
1. sort 可以接受一个返回数值的比较函数。返回正数代表需要换位子，返回负数代表不需要换位置。
function compare(value1, value2) {
    return value1- value2;  // value1 - 
}
```



##### 7. 数组的操作方法：这类方法（1，3） 一般都是左闭右开。

```js
1. concat() arr1.concat(arr2, arr3);
2. slice(a, b) // 创建一个新数组，原来数组中的某些值。左闭右开
   arr1.slice(a) 返回 索引a 和 a后面的所有元素。(1,3) 返回索引 1， 2。
3. splice(a,b,c) a是要删除元素的位置， b是删除的个数，c以及后面要是还有参数的话， 都是要添加的元素。 
```

##### 8. 数组的搜索和迭代 indexOf(), lastIndexOf(), includes()

```js
indexOf() // 从前往后查询，返回第一个匹配的indx, 如果查找不到，则返回-1。 
lastIndexOf() // 从后向前查找。
includes() // 返回的是true或者false.
```

##### 9. 迭代方法

```js
every((item, index) => item > 5) // 必须每一项都大于5，才返回true 
some((item, index) => item > 5)    // 有一项大于5就返回 true 
filter((item, index) => item > 5)    // 返回一个新数组，里面全是大于5的项 
map((item, index) => item ) //
foreach()
```

##### 10. 归并

```js
reduce()
let sum  = arr.reduce((pre, cur, index) => pre + cur)
reduceRight() // 反向迭代。
```





