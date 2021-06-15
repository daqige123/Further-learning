

#### 分组交换

我们将数据分组交换就是为了，将数据变小，减少交换的时候对公共链路的占用时间，提高网络资源的利用率。

![image-20210425214738542](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210425214738542.png)

分组交换的缺点：1. 分组在各节点存储转发（路由器）时需要排队，这会造成一定的时延。

2. 分组里面必须携带首部，造成了一定的开销。

![image-20210425215142791](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210425215142791.png)

#### 网络分层

OSI是七层，

TCP/IP是四层：应用层、运输层、网际层、网络接口层。

中和的五层协议：

![image-20210425220206165](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210425220206165.png)

![image-20210425221349659](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210425221349659.png)

![image-20210425233936819](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210425233936819.png)

集线器就只是广播。

#### 适配器的作用 

我们在网络上广播的时候，虽然会发给所有人，但是只有我想发的那个人会接受，其他人就不用了接受了。我们通过mac地址来确定我们想要发的目标的身份。

适配器从网络上每收到一个MAC幁就首先用硬件检查MAC幁中的MAc地址。如果是发往本站的幁就收下，然后再进行其他处理。否则就将此幁丢弃。

一般发送数据幁的类型有：单播（希望一个站收到），广播（所有人），多播（多个站）。？？？？

#### MAc地址，又称网卡

48位2进制，![image-20210425235116765](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210425235116765.png)

#### 数据幁的结构



![image-20210426000213328](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426000213328.png)



#### 物理层上的以太网的扩展

使用集线器扩展以太网。

![image-20210426000831751](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426000831751.png)

相当于12台电脑在竞争这一个主通道，然后冲突就会更频繁， 主干集线器同时只能由一个人发数据。用户越多，冲突域越大，发送消息就可能等待更久。

本质是因为只是增大了碰撞域，并没有提高吞吐率。

如果在广播的时候，我给你发消息，这条信道被占用了，那别人就不能用了。 

#### 在数据链路层扩展以太网

早期使用网桥，现在使用交换机。

网桥会根据MAC幁的目的地址对收到的幁进行转发和过滤。意思就是说，集线器收到数据幁后直接全发（广播），而网桥就通过幁的目的地址选择发给谁。

![image-20210426004123639](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426004123639.png)

##### 交换机

交换机就是一个多接口的网桥。一般都有十几个或者更多。网桥只是连接两个网络。

![image-20210426004542230](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426004542230.png)

![image-20210426005001514](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426005001514.png)

交换机会维护一个交换表，记录每个用户连接的接口。考虑到有可能交换机的接口会更换主机，或者主要要更换其网络适配器，这就需要更改交换表，所以设置了一个有效时间，过期的信息就直接被自动删除。

#### 网络层

在下面两层是通过幁的mac地址能够实现主机之间的通信。数据链路层是同一个网络间的通信，但是不同网络之间的通信，还有可靠传输的问题。

![image-20210426010954351](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426010954351.png)

这幅图的意思就是我们要是在网络层来实现可靠的连接，那么网络中的每两个相邻节点之间都得来一次TCP3次握手。。。太资源了。

![image-20210426011416912](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426011416912.png)

![image-20210426011715790](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426011715790.png)

网络层传输的是IP数据报。

![image-20210426012137337](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426012137337.png)

如果我们在同一个交换机下面，就是同一个网络中，那么直接广播就可以了，就用不着ip协议了。。。

#### 如何将异构网络连接起来

物理层的中继系统： 转发器。

数据链路层的中级系统: 网桥，交换机。

网络层：路由器。

路由器的主要作用就是将很多的异构网络给统一，连接起来。

![image-20210426013235536](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426013235536.png)

只看网络层的话，可以想象成IP数据报在网络层中传送。

![image-20210426013730600](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426013730600.png)

这张图意味着，我们在IP数据报的时候就传给了其他的网络，到了目的网络了，再往下封装成幁。

#### ip 地址

![](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426092830495.png)

网络号是用来标识网络的，主机号是用来标识主机的。理论上，A类网络可以有2~8次方个网络，2的24次方个主机。b类可以有2的16次方个网络，每个网络可以有2的16次方个主机。

![image-20210426093208221](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426093208221.png)

#### IP分两个等级的好处

![image-20210426093920126](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426093920126.png)

![image-20210426094652054](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426094652054.png)

不同网络的网络号是不同的。

![image-20210426095204211](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426095204211.png)

#### 实际上的网络层IP数据报的传输过程

![image-20210426095501224](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426095501224.png)

从HA1到HA3，是怎样确定的呢？

#### ARP地址解析协议

ARP的作用： 从网络层使用的IP地址，解析出在数据链路层使用的硬件地址（MAc地址）。

每一个主机里面都设有一个ARP高速缓存，里面有所在的局域网上的各主机和路由器的IP地址到硬件地址的映射表。

![image-20210426100500747](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426100500747.png)

注意：ARP只是解决同一个局域网上的主机的IP地址和硬件地址的映射。

![image-20210426104450150](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426104450150.png)

#### 路由表

路游表主要是记录（目的网络地址，和下一跳地址），而且只关心目的网络的网络号，即哪一个网络。

![image-20210426105847520](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426105847520.png)

![image-20210426110210046](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426110210046.png)

上图说明我们经常自己特点一个主机路由，也就是强制规定，优先走R2，不走R3。

还有默认路由，就是如图：

![image-20210426110746154](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426110746154.png)

#### 运输层

上面的应用层会创建进程，进程会创建端口，端口再传数据到传输层。端口只具有本地意义。

#### UDP的主要特点

1. udp是无连接的，发送数据前不需要建立连接。

2. 不需要维护复杂的连接状态表。
3. UDP是面向报文的，UDP对应用层交下来的报文，既不合并，也不拆分，一次交付一个完整的报文。应用程序会选择合适大小的报文。
4. UDP没有拥塞控制。
5. UDP支持一对一，一对多，多对多传输。

![image-20210426162334978](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426162334978.png)

![image-20210426163040440](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426163040440.png)

#### 可靠传输 TCP

##### TCP特点

1. TCP是面向连接的

2. 每一条TCP的连接只能有两个端点。
3. TCP提供可靠交付的服务。（不重复、不丢失、不乱序）
4. TCP提供全双工通信。
5. 面向字节流。按字节去排序从端口传来的数据。就是说接收方应用程序收到的字节必须和发送方应用程序发出的字节流完全一样。

![image-20210426165241489](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426165241489.png)

![image-20210426165506125](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426165506125.png)

1. TCP将端口发来的连续的字节流进行分段，形成TCP报文段。（UDP不会）

2. TCP根据对方给出的窗口值和当前网络拥塞的程度来决定一个报文段应该包含多少个字节。（UDP发送的报文长度是由应用程序给出的）。
3. TCP连接的端点叫做套接字（socket）。因为一台主机的端口只有本地意义（每个主机都可以设置相同的端口），所以我们要加上ip地址，来让他成为唯一，也就是套接字。

##### 套接字

端口号+ IP地址就构成了套接字

##### 可靠传输的工作原理

理想的传输条件的两个特点：

1. 传输信道不产生差错。
2. 不管发送方以多快的速度发送数据，接受方总是来得及处理收到的数据

在理想条件下，不需要采取任何措施就能够实现可靠传输。然而实际中不可能满足这两个条件。

###### 停止等待协议

1. 就是每发送完一个分组就停止发送，等待对方的确认。在收到确认后再发送下一个分组。

2. 全双工通信的双方即是发送方也是接收方。

##### 出现差错

![image-20210426175049455](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426175049455.png)

![image-20210426175027990](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426175027990.png)

1. 只要是B没有发回ACK确认收到（M1丢失、或者M1错误）就超时重发。

2. B发回ACK确认，但是半路上丢失了，A没有收到B的确认回复，就超时重发。

3.  传输的路途中绕圈，超时了。

#### 总结：停止等待协议的优点是简单（），缺点是信道利用率太低。

![image-20210426180448118](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426180448118.png)

![image-20210426180623347](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426180623347.png)

这样保证了一下可以发送窗口大小的分组数据，收到一个确认，窗口就往前移动一步。这就是连续ARQ协议。

![image-20210426180930832](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426180930832.png)



##### TCP可靠通信的具体实现

![image-20210426181034253](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426181034253.png)

#### 这张图的重点就是TCP连接的两端都设置了两个窗口，发送窗口和接收窗口。TCP所有的确认都是基于序号而不是基于报文段。就是窗口为5的话，一下给你发五个分组报文，然后你确认这五个报文的序号你收到了，然后就再给你发10个序号，你在确认收到这10个序号。如果超过时间没有收到确认，就重新发。

![image-20210426202849854](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426202849854.png)

就是TCP给传送的数据流中的每一个字节流都编上一个序号。然后序号就是发送的第一个字节流的序号。然后确认号就是，你期望收到的下一个报文段的序号。

![image-20210426210020830](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426210020830.png)

#### 流量控制

利用了滑动窗口机制可以很方便地在TCP连接上实现流量控制。就是B确认的时候，告诉A,B的接受窗口大小,然后A的发送窗口跟着调整。

![image-20210426211445553](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426211445553.png)

#### TCP的拥塞控制

就是在某段时间内，对网络中的某资源的需求超过了该资源时所能提供的可用部分。

拥塞控制就是防止过多的数据注入到网络中去。

我们一般通过分组的丢失来判断网络发生拥塞，但其原因还是注入数据过多，超过了提供的资源。

##### TCP拥塞控制方法

维持一个拥塞窗口。![image-20210426212937355](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426212937355.png)

#### 三次握手

![image-20210426214031979](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426214031979.png)

#### 四次挥手

![image-20210426220810679](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426220810679.png)

### TCP可靠传输 总结

![image-20210426221132426](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426221132426.png)

### 应用层

#### DNS

![image-20210426222040645](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426222040645.png)

![image-20210426223132666](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426223132666.png)



### 万维网

URL![image-20210426225635382](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426225635382.png)

#### http

![image-20210426235357789](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210426235357789.png)

#### http1.0

http1.0协议是无状态的，不能持续连接，就是发送一个请求，收到一个页面后就断开连接。想要看下一个页面，再发送请求重新建立连接。一般用于早期的静态页面。

页面是静态的意思是数据写死了的，数据不能变化，不能刷新数据。

##### http1.1

![image-20210427000215116](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210427000215116.png)

http1.1就减少了tcp的连接，一次tcp连接，客服端就可以多次请求，返回多个页面，极大减少了做tcp连接的消耗，提高了效率。

http2.0  http1.1一次请求只能取一个资源，一个页面就会取很多次。http2.0就支持多路复用，可以同时取多个资源，比如同时取声音，文本，图片。。。

HTTPs  (http + SSL + TLS 443端口)

![image-20210427001451484](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210427001451484.png)

![image-20210427001651429](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210427001651429.png)

#### 缓存

![image-20210427001257749](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210427001257749.png)

#### cookie

![image-20210427001841454](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210427001841454.png)