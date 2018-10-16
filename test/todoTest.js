const TestHex = artifacts.require("../contracts/TestHex.sol")

contract("TestHex", async(accounts) => {

    it("can get correct comment",async() => {

        const instance = await TestHex.deployed()
        const tx1 = await instance.createToDo(0,"0x11")

        const tx2 = await instance.setComment(0,"0x2222")


        const ToDoInstance = await instance.todos(0)
        console.log(ToDoInstance[2])

        const tx3 = await instance.getComment(0)
        //console.log(tx3)
    })
})