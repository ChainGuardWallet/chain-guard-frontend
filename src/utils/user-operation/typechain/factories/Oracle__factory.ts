/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Oracle, OracleInterface } from "../Oracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "_priceFeed",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getEthPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161021638038061021683398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b60805161018c61008a6000396000604f015261018c6000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806367c9b01714610030575b600080fd5b61003861004a565b60405190815260200160405180910390f35b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa1580156100b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100dc9190610106565b509195945050505050565b805169ffffffffffffffffffff8116811461010157600080fd5b919050565b600080600080600060a0868803121561011e57600080fd5b610127866100e7565b945060208601519350604086015192506060860151915061014a608087016100e7565b9050929550929590935056fea2646970667358221220c2fcb8c3d762c88fca74be04f76027e91175bed063469c8c145e981cb1f8aafd64736f6c634300080c0033";

export class Oracle__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _priceFeed: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Oracle> {
    return super.deploy(_priceFeed, overrides || {}) as Promise<Oracle>;
  }
  getDeployTransaction(
    _priceFeed: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_priceFeed, overrides || {});
  }
  attach(address: string): Oracle {
    return super.attach(address) as Oracle;
  }
  connect(signer: Signer): Oracle__factory {
    return super.connect(signer) as Oracle__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OracleInterface {
    return new utils.Interface(_abi) as OracleInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Oracle {
    return new Contract(address, _abi, signerOrProvider) as Oracle;
  }
}
