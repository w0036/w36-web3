const myWeb3Lib = require('./myWeb3Lib');

// 测试获取节点信息
myWeb3Lib.getNodeInfo();

// 测试获取最新的区块号
myWeb3Lib.getLatestBlockNumber();

// 测试获取指定地址的余额
const address = '0x1234567890123456789012345678901234567890'; // 使用您自己的地址
myWeb3Lib.getBalance(address);

