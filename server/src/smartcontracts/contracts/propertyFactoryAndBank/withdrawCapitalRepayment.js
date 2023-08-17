const {
  propertyFactoryAndBankContract,
  getSigner,
} = require("./contractConfig");

async function withdrawFromCapitalRepayment(propertyAddress, userAddress) {
  const signer = await getSigner();

  return await propertyFactoryAndBankContract
    .connect(signer)
    .withdrawFromCapitalRepaymentProperty(propertyAddress, userAddress);
}

module.exports = {
  withdrawFromCapitalRepayment,
};
