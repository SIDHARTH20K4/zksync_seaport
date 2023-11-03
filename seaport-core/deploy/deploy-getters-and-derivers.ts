import { deployContract } from "./utils";

// An example of a basic deploy script
// It will deploy a Greeter contract to selected network
// as well as verify it on Block Explorer if possible for the network
export default async function () {
  const contractArtifactName = "GettersAndDerivers";
  const constructorArguments = ["0xf2E854A9ffA62D95eE2fdB103dF89df69FD598b0"];
  await deployContract(contractArtifactName, constructorArguments);
}
 