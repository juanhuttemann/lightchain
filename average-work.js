const Blockchain = require('./blockchain')

const blockchain = new Blockchain()

blockchain.addBlock({ data: 'initital' })

console.log('first block', blockchain.chain[blockchain.chain.length-1])

let prevTimestamp, nexTimestamp, nexBlock, timeDiff, average

const times = []

for (let i = 0; i < 10000; i++) {
    prevTimestamp = blockchain.chain[blockchain.chain.length - 1].timestamp

    blockchain.addBlock({ data: `block ${i}` })

    nexBlock = blockchain.chain[blockchain.chain.length - 1]

    nexTimestamp = nexBlock.timestamp
    timeDiff = nexTimestamp - prevTimestamp;
    times.push(timeDiff)

    average = times.reduce((total, num) => (total + num))/times.length

    console.log(`Time to mine block: ${timeDiff}ms. Difficulty: ${nexBlock.difficulty}. Average time: ${average}ms`)
}