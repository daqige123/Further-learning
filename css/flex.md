#### 基础小知识

**权重记忆口诀**：*从0开始，一个行内样式+1000，一个id选择器+100，一个属性选择器、class或者伪类+10，一个元素选择器，或者伪元素+1，通配符+0。*

### flex

flex布局最重要的3大概念：

1. 轴向   flex-direction: 设置主轴的方向。 flex-warp： nowarp; 就是子元素是否换行。

2. 对齐 

   justify-content: 在主轴上的对齐（排列）方式

    flex-start, flex-end从头（尾）开始排列； center居中； space-around平分剩余空间；space-between先贴两边，再平分剩余空间

   align-contents:

3. 弹性

   

   #### 1、任何一个容器都可以指定为flex布局
  #### 2、当我们为父盒子设定为flex布局后，子元素的float、 clear和vertical-align属性都将失效。



###  一、常见父项属性： 6项属性

 1. flex-direction: row;  设置主轴的方向 （x轴， 默认向右）

 2. justify-content: 设置主轴上的子元素的排列方式
       flex-start, flex-end 从尾部开始排列； center水平居中； space-around平分剩余空间；space-between 先贴两边，在平分剩余空间。

 3. flex-warp: 设置是否多行·。 默认不换行 nowrap。

 4. align-items: 设置侧轴上的子元素排列方式(单行) 

        flex-start, flex-end 从尾部开始排列； center居中； 如果子盒子不设置高度，还可以设置 stretch拉伸.   

       **![image-20210618152559179](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210618152559179.png)**         

 5. align-content: 设置侧轴上的子元素的排列方式（多行元素相对于容器的对齐） （y轴，默认是向下）
       flex-start, flex-end 从尾部开始排列； center水平居中； space-around平分剩余空间；space-between 先贴两边，在平分剩余空间 。 space-evenly间距相等。![image-20210618152719277](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210618152719277.png)

 6. flex-flow: 复合属性，相当于同时设置了flex-direction  flex-wrap

### 二、常见的子属性：

1. order 定义项目的排列顺序，数值越小排，排在越前面

2. flex-grow  扩展，就是定义每个元素侵占剩余的空间的比例。

     默认为0，也就是如果有空余空间的话按1:1:1比例放大。

3. flex-shrink  按比例缩小，就是说当空间不足时，就按照比例来缩小。

   如果一个项目的flex-shirnk 属性为0，其他项目为1，那么空间不足时，为0的不缩小。

4. flex-basis 设置子元素的初始宽度。可以是像素和百分比。
5. flex: 0， 1， auto        复合属性flex-grow,  flex-shrink, flex-basis.
6. align-self

