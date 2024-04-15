# EVM Web3 操作库

这个库目前提供了一个简单的 Node.js 接口，用于与 Binance Smart Chain (BSC) 的官方节点进行交互，执行一些基本的操作，如获取节点信息、获取最新的区块号以及获取指定地址的余额。

作为个人学习web3积累的一个工具库, 目前用bsc做练手

## 安装

首先，确保您已经安装了 Node.js 和 npm。然后，使用以下命令安装此库：

```bash
npm install bsc-web3-lib
```

## 使用

```
const bscWeb3Lib = require('bsc-web3-lib');

// 获取 BSC 节点信息
bscWeb3Lib.getNodeInfo();

// 获取最新的 BSC 区块号
bscWeb3Lib.getLatestBlockNumber();

// 获取指定地址的 BSC 余额
const address = '0x1234567890123456789012345678901234567890'; // 使用您自己的地址
bscWeb3Lib.getBalance(address);

```

## API

### `getNodeInfo()`

获取 BSC 节点的信息。

### `getLatestBlockNumber()`

获取最新的 BSC 区块号。

### `getBalance(address)`

获取指定地址的 BSC 余额。

- `address`: 要查询余额的地址。

## 贡献

如果您有任何建议或改进意见，请随时提出 issue 或提交 pull request。
