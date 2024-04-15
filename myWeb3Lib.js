const { Web3 } = require('web3');

// 连接到 BSC 的官方节点
const web3 = new Web3('https://bsc-dataseed.binance.org/'); // BSC 的官方节点地址

// 获取 BSC 节点信息
async function getNodeInfo() {
    try {
        const nodeInfo = await web3.eth.getNodeInfo();
        console.log('BSC Node Info:', nodeInfo);
    } catch (error) {
        console.error('Error fetching BSC node info:', error);
    }
}

// 获取最新的 BSC 区块号
async function getLatestBlockNumber() {
    try {
        const blockNumber = await web3.eth.getBlockNumber();
        console.log('Latest BSC Block Number:', blockNumber);
    } catch (error) {
        console.error('Error fetching latest BSC block number:', error);
    }
}

// 获取指定地址的 BSC 余额
async function getBalance(address) {
    try {
        const balance = await web3.eth.getBalance(address);
        console.log(`Balance of ${address} on BSC:`, web3.utils.fromWei(balance, 'ether'), 'BNB');
    } catch (error) {
        console.error('Error fetching BSC balance:', error);
    }
}

module.exports = {
    getNodeInfo,
    getLatestBlockNumber,
    getBalance
};

