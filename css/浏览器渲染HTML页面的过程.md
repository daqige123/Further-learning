### 输入URL 后，会发生什么

1. 将网址通过DNS解析后得到服务器的IP.

2. 浏览器向服务器发起HTTP请求
3. 经过tcp三次握手确认连接以后，服务器将请求的资源发送给浏览器。
4. 浏览器对收到的资源解析。

#### 浏览器渲染html页面的过程

大致分为五步： 创建DOM树---创建样式表---创建render树---布局Layout--Painting.

1. 首先html解析器解析html元素， 构建DOM树。

2. css解析器解析css文件和元素上的内联样式，构建出样式表规则。

3. 将样式表和DOM树关联起来，生成render树。每个DOM节点都有**attach方法，接受样式信息**，返回一个render对象(又名renderer)。这些render对象最终会被构建成一颗Render树。

4. 布局：浏览器会根据render树确丁每一个节点的精确坐标。

5. 根据renders树，将页面一个像素一个像素的绘制出来，这个过程就叫paint。

   

   



