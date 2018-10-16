const TestHex= artifacts.require("TestHex");
//const Owned = artifacts.require("Owned");

module.exports = (deployer,accounts) =>{
    deployer.deploy(TestHex);
    //deployer.deploy(Owned);

};