const TestHex = artifacts.require("../contracts/TestHex.sol")

let instance

contract("TestHex", async(accounts) => {

    beforeEach(async() => {
        instance = await TestHex.deployed()
    })

    it("creataToDo",async() => {
        const tx = await instance.createToDo(0,"0x33")
        assert.isOk(tx)
    })

    it("can get correct comment",async() => {

        const testtemp = await web3.sha3("0x11")

        const tx1 = await instance.createToDo(0,testtemp)

        //TODO: web3.sha3の返り値をbytes32に渡そうとすると
        console.log("sha3:",testtemp)
        //const tx2 = await instance.setComment(0,"0xb14272e44eaabdcc44af5053b2b5d8b96d7567c20021503b4fb0e5517acd10b91b9433cb08e02f24a4d7bfa62a8872bea8926750d272850c221f11a99615657301")
        const tx2 = await instance.setComment(0,testtemp)

        assert.isOk(tx2)

        const ToDoInstance = await instance.todos(0)

        console.log("ToDoInstance:\n",ToDoInstance)

        console.log("ToDoInstance[2]:",ToDoInstance[2])
        
        // const tx3 = await instance.getComment(0)
        // console.log("StructInstance[2]:",tx3)
    })
})