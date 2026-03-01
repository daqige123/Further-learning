const express = require('express');
const app = express();
const PORT = 3000;

// 允许跨域（根据需求调整）
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// SSE 路由
app.get('/sse', (req, res) => {
    // 设置 SSE 必需响应头
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders(); // 立即发送响应头

    console.log('客户端已连接:', req.url);

    // 发送初始消息（可选）
    res.write(`data: 连接成功\n\n`);

    // 定时发送数据（示例：每秒发送当前时间）
    const intervalId = setInterval(() => {
        const message = `当前时间: ${new Date().toISOString()}`;
        res.write(`data: ${message}\n\n`);
    }, 1000);

    // 处理客户端断开连接
    req.on('close', () => {
        console.log('客户端断开连接:', req.url);
        clearInterval(intervalId);
        res.end();
    });

    // 错误处理
    req.on('error', (err) => {
        console.error('连接异常:', err);
        res.end();
    });
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`SSE 服务运行在 http://localhost:${PORT}`);
});