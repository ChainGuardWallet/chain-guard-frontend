/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GuardianManager,
  GuardianManagerInterface,
} from "../GuardianManager";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "guardian",
        type: "address",
      },
    ],
    name: "GuardianAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "guardian",
        type: "address",
      },
    ],
    name: "GuardianRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "threshold",
        type: "uint256",
      },
    ],
    name: "ThresholdChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "account",
    outputs: [
      {
        internalType: "contract Account",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_guardian",
        type: "address",
      },
    ],
    name: "addGuardian",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "dataHash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "signatures",
        type: "bytes",
      },
    ],
    name: "changeOwner",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "dataHash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "signatures",
        type: "bytes",
      },
    ],
    name: "checkMultisig",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "dataHash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "signatures",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "requiredSignatures",
        type: "uint256",
      },
    ],
    name: "checkSignatures",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "executor",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "guardianCount",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "guardians",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_executor",
        type: "address",
      },
      {
        internalType: "contract Account",
        name: "_account",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_guardian",
        type: "address",
      },
    ],
    name: "removeGuardian",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_threshold",
        type: "uint256",
      },
    ],
    name: "setThershold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_guardians",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "_threshold",
        type: "uint256",
      },
    ],
    name: "setupGuardians",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "threshold",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523060805234801561001457600080fd5b5060805161275c61004c60003960008181610358015281816103e2015281816106cc01528181610751015261083b015261275c6000f3fe60806040526004361061010e5760003560e01c80636f70a685116100a5578063c34c08e511610074578063d5d9f65811610059578063d5d9f658146102fa578063ec3947801461031a578063fbf97b651461033a57600080fd5b8063c34c08e5146102ba578063c5290876146102da57600080fd5b80636f70a6851461023457806371404156146102545780638da5cb5b14610274578063a526d83b1461029a57600080fd5b80634f1ef286116100e15780634f1ef286146101be57806352d1902d146101d157806354387ad7146101e65780635dab2420146101fc57600080fd5b80630633b14a146101135780633659cfe61461015857806342cde4e81461017a578063485cc9551461019e575b600080fd5b34801561011f57600080fd5b5061014361012e3660046121d7565b60056020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b34801561016457600080fd5b506101786101733660046121d7565b61034d565b005b34801561018657600080fd5b5061019060035481565b60405190815260200161014f565b3480156101aa57600080fd5b506101786101b93660046121f4565b6104ce565b6101786101cc3660046122e4565b6106c1565b3480156101dd57600080fd5b5061019061082e565b3480156101f257600080fd5b5061019060045481565b34801561020857600080fd5b5060025461021c906001600160a01b031681565b6040516001600160a01b03909116815260200161014f565b34801561024057600080fd5b5061014361024f366004612334565b6108f3565b34801561026057600080fd5b5061017861026f3660046121d7565b610983565b34801561028057600080fd5b5060005461021c906201000090046001600160a01b031681565b3480156102a657600080fd5b506101786102b53660046121d7565b610cd0565b3480156102c657600080fd5b5060015461021c906001600160a01b031681565b3480156102e657600080fd5b506101436102f53660046123a1565b610f3b565b34801561030657600080fd5b50610178610315366004612416565b611582565b34801561032657600080fd5b506101786103353660046124ce565b6119ae565b610178610348366004612334565b611bb1565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156103e05760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b60648201526084015b60405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661043b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b0316146104a65760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b60648201526084016103d7565b6104af81611d4b565b604080516000808252602082019092526104cb91839190611dad565b50565b600054610100900460ff16158080156104ee5750600054600160ff909116105b806105085750303b158015610508575060005460ff166001145b61057a5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016103d7565b6000805460ff19166001179055801561059d576000805461ff0019166101001790555b600180546001600160a01b0380861673ffffffffffffffffffffffffffffffffffffffff1992831617909255600280549285169290911682179055604080517f8da5cb5b0000000000000000000000000000000000000000000000000000000081529051638da5cb5b916004808201926020929091908290030181865afa15801561062c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065091906124e7565b600060026101000a8154816001600160a01b0302191690836001600160a01b0316021790555080156106bc576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016141561074f5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b60648201526084016103d7565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166107aa7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b0316146108155760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b60648201526084016103d7565b61081e82611d4b565b61082a82826001611dad565b5050565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146108ce5760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c000000000000000060648201526084016103d7565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b6003546000908061096c5760405162461bcd60e51b815260206004820152603260248201527f477561726469616e4d616e616765723a3a20636865636b4d756c74697369673a60448201527f20696e76616c6964207468726573686f6c64000000000000000000000000000060648201526084016103d7565b61097a858585600354610f3b565b95945050505050565b6001546001600160a01b031633146109dd5760405162461bcd60e51b815260206004820152601c60248201527f6f6e6c79206578656375746f722028616b612074696d656c6f636b290000000060448201526064016103d7565b600060035411610a7b5760405162461bcd60e51b815260206004820152604360248201527f477561726469616e4d616e616765723a3a2072656d6f7665477561726469616e60448201527f3a207468726573686f6c6420686176656e2774206265656e207365747570207960648201527f65742e0000000000000000000000000000000000000000000000000000000000608482015260a4016103d7565b6001600160a01b03811615801590610a9c57506001600160a01b0381163014155b610b0e5760405162461bcd60e51b815260206004820152603b60248201527f477561726469616e4d616e616765723a3a2072656d6f7665477561726469616e60448201527f3a20696e76616c696420677561726469616e20616464726573732e000000000060648201526084016103d7565b6001600160a01b03811660009081526005602052604090205460ff16610b9c5760405162461bcd60e51b815260206004820152603760248201527f477561726469616e4d616e616765723a3a2072656d6f7665477561726469616e60448201527f3a20677561726469616e206e6f7420657869737465642e00000000000000000060648201526084016103d7565b60035460045411610c615760405162461bcd60e51b815260206004820152606660248201527f477561726469616e4d616e616765723a3a2072656d6f7665477561726469616e60448201527f3a206e756d626572206f6620677561726469616e732061667465722072656d6f60648201527f766564206d757374206c6172676572206f7220657175616c20746f207468726560848201527f73686f6c642e000000000000000000000000000000000000000000000000000060a482015260c4016103d7565b6001600160a01b0381166000908152600560205260408120805460ff191690556004805460019290610c9490849061251a565b90915550506040516001600160a01b038216907fb8107d0c6b40be480ce3172ee66ba6d64b71f6b1685a851340036e6e2e3e3c5290600090a250565b6001546001600160a01b03163314610d2a5760405162461bcd60e51b815260206004820152601c60248201527f6f6e6c79206578656375746f722028616b612074696d656c6f636b290000000060448201526064016103d7565b600060035411610da4576040805162461bcd60e51b81526020600482015260248101919091527f477561726469616e4d616e616765723a3a20616464477561726469616e3a207460448201527f68726573686f6c6420686176656e2774206265656e207365747570207965742e60648201526084016103d7565b6001600160a01b03811615801590610dc557506001600160a01b0381163014155b610e375760405162461bcd60e51b815260206004820152603860248201527f477561726469616e4d616e616765723a3a20616464477561726469616e3a206960448201527f6e76616c696420677561726469616e20616464726573732e000000000000000060648201526084016103d7565b6001600160a01b03811660009081526005602052604090205460ff1615610ec65760405162461bcd60e51b815260206004820152603860248201527f477561726469616e4d616e616765723a3a20616464477561726469616e3a206760448201527f7561726469616e20616c726561647920657869737465642e000000000000000060648201526084016103d7565b6001600160a01b0381166000908152600560205260408120805460ff191660019081179091556004805491929091610eff908490612531565b90915550506040516001600160a01b038216907f038596bb31e2e7d3d9f184d4c98b310103f6d7f5830e5eec32bffe6f1728f96990600090a250565b6000610f48826041612549565b83511015610fbe5760405162461bcd60e51b815260206004820152603b60248201527f477561726469616e4d616e616765723a3a20636865636b5369676e617475726560448201527f733a20696e76616c6964207369676e6174757265206c656e677468000000000060648201526084016103d7565b6000808060008060005b8781101561156d5760418181028a0160208101516040820151919092015160ff16955090935091508361140757895160208b01208b146110965760405162461bcd60e51b815260206004820152605860248201527f477561726469616e4d616e616765723a3a20636865636b5369676e617475726560448201527f733a20646174616861736820616e642068617368206f6620746865207072652d60648201527f696d616765206461746120646f206e6f74206d617463682e0000000000000000608482015260a4016103d7565b91935083916110a6886041612549565b8210156111415760405162461bcd60e51b815260206004820152605a60248201527f477561726469616e4d616e616765723a3a20636865636b5369676e617475726560448201527f733a20696e76616c696420636f6e7472616374207369676e6174757265206c6f60648201527f636174696f6e3a20696e73696465207374617469632070617274000000000000608482015260a4016103d7565b885161114e836020612531565b11156111e85760405162461bcd60e51b815260206004820152605a60248201527f477561726469616e4d616e616765723a3a20636865636b5369676e617475726560448201527f733a20696e76616c696420636f6e7472616374207369676e6174757265206c6f60648201527f636174696f6e3a206c656e677468206e6f742070726573656e74000000000000608482015260a4016103d7565b6020828a018101518a5190918290611201908690612531565b61120b9190612531565b11156112a55760405162461bcd60e51b815260206004820152605960248201527f477561726469616e4d616e616765723a3a20636865636b5369676e617475726560448201527f733a20696e76616c696420636f6e7472616374207369676e6174757265206c6f60648201527f636174696f6e3a2064617461206e6f7420636f6d706c65746500000000000000608482015260a4016103d7565b60606020848c010190506320c13b0b60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916876001600160a01b03166320c13b0b8e846040518363ffffffff1660e01b81526004016113049291906125c0565b602060405180830381865afa158015611321573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061134591906125e5565b7fffffffff0000000000000000000000000000000000000000000000000000000016146114005760405162461bcd60e51b815260206004820152604660248201527f477561726469616e4d616e616765723a3a20636865636b5369676e617475726560448201527f733a20696e76616c696420636f6e7472616374207369676e617475726520707260648201527f6f76696465640000000000000000000000000000000000000000000000000000608482015260a4016103d7565b505061152c565b601e8460ff1611156114cc576040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c81018c9052600190605c016040516020818303038152906040528051906020012060048661146c9190612627565b6040805160008152602081018083529390935260ff90911690820152606081018590526080810184905260a0016020604051602081039080840390855afa1580156114bb573d6000803e3d6000fd5b50505060206040510351945061152c565b6040805160008152602081018083528d905260ff861691810191909152606081018490526080810183905260019060a0016020604051602081039080840390855afa15801561151f573d6000803e3d6000fd5b5050506020604051035194505b6001600160a01b03851660009081526005602052604090205460ff161561155b57856115578161264a565b9650505b806115658161264a565b915050610fc8565b8786101596505050505050505b949350505050565b6000546201000090046001600160a01b03163314806115ab57506002546001600160a01b031633145b6115e45760405162461bcd60e51b815260206004820152600a60248201526937b7363c9037bbb732b960b11b60448201526064016103d7565b600354156116805760405162461bcd60e51b815260206004820152604d60248201527f477561726469616e4d616e616765723a3a207365747570477561726469616e7360448201527f3a207468726573686f6c64206d75737420626520657175616c7320302077686560648201527f6e20696e697469616c697a652e00000000000000000000000000000000000000608482015260a4016103d7565b6000811161171c5760405162461bcd60e51b815260206004820152604360248201527f477561726469616e4d616e616765723a3a207365747570477561726469616e7360448201527f3a205f7468726573686f6c64206d75737420626520626967676572207468616e60648201527f20302e0000000000000000000000000000000000000000000000000000000000608482015260a4016103d7565b80825110156117b95760405162461bcd60e51b815260206004820152605b60248201527f477561726469616e4d616e616765723a3a207365747570477561726469616e7360448201527f3a205f677561726469616e732e6c656e677468206d757374206265206269676760648201527f6572206f7220657175616c7320746f205f7468726573686f6c642e0000000000608482015260a4016103d7565b60005b825181101561196c5760008382815181106117d9576117d9612665565b6020026020010151905060006001600160a01b0316816001600160a01b03161415801561180f57506001600160a01b0381163014155b6118815760405162461bcd60e51b815260206004820152603b60248201527f477561726469616e4d616e616765723a3a207365747570477561726469616e7360448201527f3a20696e76616c696420677561726469616e20616464726573732e000000000060648201526084016103d7565b6001600160a01b03811660009081526005602052604090205460ff16156119105760405162461bcd60e51b815260206004820152603b60248201527f477561726469616e4d616e616765723a3a207365747570477561726469616e7360448201527f3a20677561726469616e20616c726561647920657869737465642e000000000060648201526084016103d7565b6001600160a01b038116600081815260056020526040808220805460ff19166001179055517f038596bb31e2e7d3d9f184d4c98b310103f6d7f5830e5eec32bffe6f1728f9699190a250806119648161264a565b9150506117bc565b50815160045560038190556040518181527f6c4ce60fd690e1216286a10b875c5662555f10774484e58142cedd7a90781baa9060200160405180910390a15050565b6001546001600160a01b03163314611a085760405162461bcd60e51b815260206004820152601c60248201527f6f6e6c79206578656375746f722028616b612074696d656c6f636b290000000060448201526064016103d7565b600060035411611aa65760405162461bcd60e51b815260206004820152604160248201527f477561726469616e4d616e616765723a3a207365745468726573686f6c643a2060448201527f7468726573686f6c6420686176656e2774206265656e2073657475702079657460648201527f2e00000000000000000000000000000000000000000000000000000000000000608482015260a4016103d7565b600081118015611ab857506004548111155b611b765760405162461bcd60e51b815260206004820152607660248201527f477561726469616e4d616e616765723a3a207365745468726573686f6c643a2060448201527f5f7468726573686f6c64206d75737420626520626967676572207468616e203060648201527f20616e6420736d616c6c6572206f7220657175616c7320746f2063757272656e60848201527f74206e756d626572206f6620677561726469616e732e0000000000000000000060a482015260c4016103d7565b60038190556040518181527f6c4ce60fd690e1216286a10b875c5662555f10774484e58142cedd7a90781baa9060200160405180910390a150565b3360009081526005602052604090205460ff16611c105760405162461bcd60e51b815260206004820152600d60248201527f6f6e6c7920677561726469616e0000000000000000000000000000000000000060448201526064016103d7565b611c1b8383836108f3565b611c8d5760405162461bcd60e51b815260206004820152603060248201527f477561726469616e4d616e616765723a3a206368616e67654f776e65723a206960448201527f6e76616c6964206d756c7469207369670000000000000000000000000000000060648201526084016103d7565b6002546001600160a01b031663a6f9dae1611ca78461267b565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815260609190911c6004820152602401600060405180830381600087803b158015611cfb57600080fd5b505af1158015611d0f573d6000803e3d6000fd5b5050505081611d1d9061267b565b60601c600060026101000a8154816001600160a01b0302191690836001600160a01b03160217905550505050565b6000546201000090046001600160a01b0316331480611d7457506002546001600160a01b031633145b6104cb5760405162461bcd60e51b815260206004820152600a60248201526937b7363c9037bbb732b960b11b60448201526064016103d7565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615611de0576106bc83611f4d565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611e3a575060408051601f3d908101601f19168201909252611e37918101906126b7565b60015b611eac5760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f74205555505300000000000000000000000000000000000060648201526084016103d7565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8114611f415760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c6555554944000000000000000000000000000000000000000000000060648201526084016103d7565b506106bc838383612018565b6001600160a01b0381163b611fca5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e74726163740000000000000000000000000000000000000060648201526084016103d7565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b61202183612043565b60008251118061202e5750805b156106bc5761203d8383612083565b50505050565b61204c81611f4d565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606120a88383604051806060016040528060278152602001612700602791396120af565b9392505050565b6060600080856001600160a01b0316856040516120cc91906126d0565b600060405180830381855af49150503d8060008114612107576040519150601f19603f3d011682016040523d82523d6000602084013e61210c565b606091505b509150915061211d86838387612127565b9695505050505050565b6060831561219357825161218c576001600160a01b0385163b61218c5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016103d7565b508161157a565b61157a83838151156121a85781518083602001fd5b8060405162461bcd60e51b81526004016103d791906126ec565b6001600160a01b03811681146104cb57600080fd5b6000602082840312156121e957600080fd5b81356120a8816121c2565b6000806040838503121561220757600080fd5b8235612212816121c2565b91506020830135612222816121c2565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561226c5761226c61222d565b604052919050565b600082601f83011261228557600080fd5b813567ffffffffffffffff81111561229f5761229f61222d565b6122b2601f8201601f1916602001612243565b8181528460208386010111156122c757600080fd5b816020850160208301376000918101602001919091529392505050565b600080604083850312156122f757600080fd5b8235612302816121c2565b9150602083013567ffffffffffffffff81111561231e57600080fd5b61232a85828601612274565b9150509250929050565b60008060006060848603121561234957600080fd5b83359250602084013567ffffffffffffffff8082111561236857600080fd5b61237487838801612274565b9350604086013591508082111561238a57600080fd5b5061239786828701612274565b9150509250925092565b600080600080608085870312156123b757600080fd5b84359350602085013567ffffffffffffffff808211156123d657600080fd5b6123e288838901612274565b945060408701359150808211156123f857600080fd5b5061240587828801612274565b949793965093946060013593505050565b6000806040838503121561242957600080fd5b823567ffffffffffffffff8082111561244157600080fd5b818501915085601f83011261245557600080fd5b81356020828211156124695761246961222d565b8160051b925061247a818401612243565b828152928401810192818101908985111561249457600080fd5b948201945b848610156124be57853593506124ae846121c2565b8382529482019490820190612499565b9997909101359750505050505050565b6000602082840312156124e057600080fd5b5035919050565b6000602082840312156124f957600080fd5b81516120a8816121c2565b634e487b7160e01b600052601160045260246000fd5b60008282101561252c5761252c612504565b500390565b6000821982111561254457612544612504565b500190565b600081600019048311821515161561256357612563612504565b500290565b60005b8381101561258357818101518382015260200161256b565b8381111561203d5750506000910152565b600081518084526125ac816020860160208601612568565b601f01601f19169290920160200192915050565b6040815260006125d36040830185612594565b828103602084015261097a8185612594565b6000602082840312156125f757600080fd5b81517fffffffff00000000000000000000000000000000000000000000000000000000811681146120a857600080fd5b600060ff821660ff84168082101561264157612641612504565b90039392505050565b600060001982141561265e5761265e612504565b5060010190565b634e487b7160e01b600052603260045260246000fd5b805160208201516bffffffffffffffffffffffff1980821692919060148310156126af5780818460140360031b1b83161693505b505050919050565b6000602082840312156126c957600080fd5b5051919050565b600082516126e2818460208701612568565b9190910192915050565b6020815260006120a8602083018461259456fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122026c2eca7b2757ad8543c8905a0ca79c052a87a0953e7b32fbecbe76ac17f1c4464736f6c634300080c0033";

export class GuardianManager__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GuardianManager> {
    return super.deploy(overrides || {}) as Promise<GuardianManager>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GuardianManager {
    return super.attach(address) as GuardianManager;
  }
  connect(signer: Signer): GuardianManager__factory {
    return super.connect(signer) as GuardianManager__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GuardianManagerInterface {
    return new utils.Interface(_abi) as GuardianManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GuardianManager {
    return new Contract(address, _abi, signerOrProvider) as GuardianManager;
  }
}