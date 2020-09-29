const Block = require("./block")

describe('Block', () => {
    const timestamp = 'a-data'
    const lastHash = 'foo-hash'
    const hash = 'bar-hash'
    const data = ['blockchain', 'data']
    const block = new Block({
        timestamp,
        lastHash,
        hash,
        data
    })

    it('hash a timestamp, lastHash, hash, and data property', ()=>{
        expect(block.timestamp).toEqual(timestamp)
        expect(block.lastHash).toEqual(lastHash)
        expect(block.hash).toEqual(hash)
        expect(block.data).toEqual(data)
    })
})