#### tabBar 组件构建

tabbar效果图

![image-20210701135533831](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210701135533831.png)

主要构建思路：

1. 我们想要构建一个总的tab-bar组件，里面来装n个tab-bar-item，而每个tab-bar-item可以来装一个不同的img和一个文字。所以可以抽象成tab-bar总组件， 里面装tab-bar-item组件， tab-bar-item里面设置两个插槽，里面用来装不同的图谱和文字。

2. 怎样设置的路由，实现页面的跳转。

   我们在选中某个item时，给他绑定一个事件。

   ```js
   itemClick() {
       this.$router.push(this.path); // repalce
   }
   // this.path怎么获得呢？
   // 给item组件自定义一个属性path，
   props: {   // 
       path:String;
   }
   // 让它在父组件中使用时，直接把值穿过来，
   <tab-bar>
         <tab-bar-item path="/home" activeColor="yellow">
   <tab-bar>
   
   
   ```

   

3. 怎样实现选中切换图片？父组件的路径值怎么来传到子组件中？

   用v-if  和v-else 来切换红色图片和黑色图片，

   由2可知，当选中某个tab-bar-item时, 父组件中的tab-bar-item会通过path属性，传过来这个item的路由，而我们当前展示的路由是this.$route.path 所以可以用计算属性isActive（boolean）来判断是否切换。

   ```js
   isActive() {
         console.log(this.$route.path);
         return this.$route.path.indexOf(this.path) !== -1;
       },
   ```

   ##### 注意：每一个tab-bar-item都有自己的isActive， 所以路由中的PAth是不一定跟具体组件的path相等的。

4. 可以让用户自己设定item里面的style值，所以我们又要借助自定义属性来传值。

   

