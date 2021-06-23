#### 定位元素

1. document.getElementById('id值' ) // 如果有多个相同id的话，只返回第一个，没有的话 null

2. document.getElementByClassName('类名')  返回的是一个nodeList，ie老版本不支持。
3. document.getElementByTagName("标签名") 返回NodeList.
4. document.getElementByname("name属性的值") 返回所有这个name属性的元素，nodelist。

5. 新增：document.querySelector('css选择器') 只返回第一个，找不到null.
6. document.querySelectorAll("css选择器")， 返回一个nodelist, 0个也是空的nodelist.

注意：2,3,4的document可以换成其他元素，代表在那个元素的后代中查找。 id不行。



#### 创建元素

##### 第一种方法： document.createElement("标签名")；

```js
let div = document.createElement("div");  
document.body.appendChild(div);
```

##### innerHTML

```js
p1.innerHTML = "<p>hello world!</p>"
```



##### document.write()

```js
document.write("<p>hello world! write<p>")
```



#### DocumentFragment  文档片段

这个就是为了避免我们每添加一个元素，dom树改变，浏览器就重新渲染一次。文当片段就像一个临时仓库一样，我们可以先把很多节点添加到文档片段上，再将文档片段添加到dom上。

```js
<ul id="myul"> </ul>
let fragment = document.createDocumentFragment();
let ul = document.getElementById("myul");
for(let i =0 ; i< 10; i++) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(`Item $(i+1)`));
    fragment.appendchild(li)
}
ul.appendChild(fragment);
```









