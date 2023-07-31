"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.DepositPaymaster__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "contract IEntryPoint",
                name: "_entryPoint",
                type: "address"
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
            },
        ],
        name: "OwnershipTransferred",
        type: "event"
    },
    {
        inputs: [],
        name: "COST_OF_POST",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "token",
                type: "address"
            },
            {
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
        ],
        name: "addDepositFor",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint32",
                name: "unstakeDelaySec",
                type: "uint32"
            },
        ],
        name: "addStake",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "token",
                type: "address"
            },
            {
                internalType: "contract IOracle",
                name: "tokenPriceOracle",
                type: "address"
            },
        ],
        name: "addToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "",
                type: "address"
            },
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        name: "balances",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "deposit",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "token",
                type: "address"
            },
            {
                internalType: "address",
                name: "account",
                type: "address"
            },
        ],
        name: "depositInfo",
        outputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_unlockBlock",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "entryPoint",
        outputs: [
            {
                internalType: "contract IEntryPoint",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getDeposit",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "lockTokenDeposit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "",
                type: "address"
            },
        ],
        name: "oracles",
        outputs: [
            {
                internalType: "contract IOracle",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "enum IPaymaster.PostOpMode",
                name: "mode",
                type: "uint8"
            },
            {
                internalType: "bytes",
                name: "context",
                type: "bytes"
            },
            {
                internalType: "uint256",
                name: "actualGasCost",
                type: "uint256"
            },
        ],
        name: "postOp",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address"
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        name: "unlockBlock",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "unlockStake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "unlockTokenDeposit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "initCode",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes"
                    },
                    {
                        internalType: "uint256",
                        name: "callGasLimit",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "verificationGasLimit",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "preVerificationGas",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "maxFeePerGas",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "maxPriorityFeePerGas",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterAndData",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    },
                ],
                internalType: "struct UserOperation",
                name: "userOp",
                type: "tuple"
            },
            {
                internalType: "bytes32",
                name: "userOpHash",
                type: "bytes32"
            },
            {
                internalType: "uint256",
                name: "maxCost",
                type: "uint256"
            },
        ],
        name: "validatePaymasterUserOp",
        outputs: [
            {
                internalType: "bytes",
                name: "context",
                type: "bytes"
            },
            {
                internalType: "uint256",
                name: "validationData",
                type: "uint256"
            },
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address payable",
                name: "withdrawAddress",
                type: "address"
            },
        ],
        name: "withdrawStake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address payable",
                name: "withdrawAddress",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
        ],
        name: "withdrawTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "token",
                type: "address"
            },
            {
                internalType: "address",
                name: "target",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
        ],
        name: "withdrawTokensTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
];
var _bytecode = "0x60a06040523480156200001157600080fd5b5060405162001b2538038062001b258339810160408190526200003491620000bb565b8062000040336200006b565b6001600160a01b031660805262000064336000908152600360205260409020439055565b50620000ed565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600060208284031215620000ce57600080fd5b81516001600160a01b0381168114620000e657600080fd5b9392505050565b6080516119eb6200013a6000396000818161037f015281816104f7015281816105a7015281816107b601528181610863015281816108f301528181610a840152610cf701526119eb6000f3fe6080604052600436106101755760003560e01c8063addd5099116100cb578063c399ec881161007f578063d0e30db011610059578063d0e30db014610465578063f2fde38b1461046d578063f465c77e1461048d57600080fd5b8063c399ec881461040e578063cc9c837c14610423578063cd8f80c21461044357600080fd5b8063bb9fe6bf116100b0578063bb9fe6bf146103a1578063c23a5cea146103b6578063c23f001f146103d657600080fd5b8063addd509914610337578063b0d691fe1461036d57600080fd5b80635476bd721161012d5780638da5cb5b116101075780638da5cb5b146102c15780639ed0fb68146102f3578063a9a234091461031757600080fd5b80635476bd7214610276578063715018a614610296578063796d4371146102ab57600080fd5b8063382edd9e1161015e578063382edd9e146101af578063493b0170146101cf5780634a6f84cf1461023b57600080fd5b80630396cb601461017a578063205c28781461018f575b600080fd5b61018d610188366004611556565b6104bb565b005b34801561019b57600080fd5b5061018d6101aa366004611591565b610560565b3480156101bb57600080fd5b5061018d6101ca3660046115bd565b6105eb565b3480156101db57600080fd5b506102216101ea3660046115fe565b6001600160a01b03918216600090815260026020908152604080832093909416825291825282812054600390925291909120549091565b604080519283526020830191909152015b60405180910390f35b34801561024757600080fd5b50610268610256366004611637565b60036020526000908152604090205481565b604051908152602001610232565b34801561028257600080fd5b5061018d6102913660046115fe565b6106d3565b3480156102a257600080fd5b5061018d61077e565b3480156102b757600080fd5b506102686188b881565b3480156102cd57600080fd5b506000546001600160a01b03165b6040516001600160a01b039091168152602001610232565b3480156102ff57600080fd5b5061018d336000908152600360205260409020439055565b34801561032357600080fd5b5061018d610332366004611654565b610792565b34801561034357600080fd5b506102db610352366004611637565b6001602052600090815260409020546001600160a01b031681565b34801561037957600080fd5b506102db7f000000000000000000000000000000000000000000000000000000000000000081565b3480156103ad57600080fd5b5061018d6107ac565b3480156103c257600080fd5b5061018d6103d1366004611637565b610823565b3480156103e257600080fd5b506102686103f13660046115fe565b600260209081526000928352604080842090915290825290205481565b34801561041a57600080fd5b506102686108c2565b34801561042f57600080fd5b5061018d61043e3660046115bd565b61096b565b34801561044f57600080fd5b5061018d33600090815260036020526040812055565b61018d610a56565b34801561047957600080fd5b5061018d610488366004611637565b610ad1565b34801561049957600080fd5b506104ad6104a83660046116e3565b610b61565b60405161023292919061178f565b6104c3610b84565b6040517f0396cb6000000000000000000000000000000000000000000000000000000000815263ffffffff821660048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690630396cb609034906024016000604051808303818588803b15801561054457600080fd5b505af1158015610558573d6000803e3d6000fd5b505050505050565b610568610b84565b6040517f205c28780000000000000000000000000000000000000000000000000000000081526001600160a01b038381166004830152602482018390527f0000000000000000000000000000000000000000000000000000000000000000169063205c287890604401600060405180830381600087803b15801561054457600080fd5b6106006001600160a01b038416333084610bde565b6001600160a01b038381166000908152600160205260409020541661066c5760405162461bcd60e51b815260206004820152601160248201527f756e737570706f7274656420746f6b656e00000000000000000000000000000060448201526064015b60405180910390fd5b6001600160a01b038084166000908152600260209081526040808320938616835292905290812080548392906106a39084906117c7565b9091555050336001600160a01b03831614156106ce576106ce33600090815260036020526040812055565b505050565b6106db610b84565b6001600160a01b0382811660009081526001602052604090205416156107435760405162461bcd60e51b815260206004820152601160248201527f546f6b656e20616c7265616479207365740000000000000000000000000000006044820152606401610663565b6001600160a01b039182166000908152600160205260409020805473ffffffffffffffffffffffffffffffffffffffff191691909216179055565b610786610b84565b6107906000610c8f565b565b61079a610cec565b6107a684848484610d64565b50505050565b6107b4610b84565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663bb9fe6bf6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561080f57600080fd5b505af11580156107a6573d6000803e3d6000fd5b61082b610b84565b6040517fc23a5cea0000000000000000000000000000000000000000000000000000000081526001600160a01b0382811660048301527f0000000000000000000000000000000000000000000000000000000000000000169063c23a5cea90602401600060405180830381600087803b1580156108a757600080fd5b505af11580156108bb573d6000803e3d6000fd5b5050505050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610942573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061096691906117df565b905090565b336000908152600360205260409020541580159061099757503360009081526003602052604090205443115b610a095760405162461bcd60e51b815260206004820152602960248201527f4465706f7369745061796d61737465723a206d75737420756e6c6f636b546f6b60448201527f656e4465706f73697400000000000000000000000000000000000000000000006064820152608401610663565b6001600160a01b038316600090815260026020908152604080832033845290915281208054839290610a3c9084906117f8565b909155506106ce90506001600160a01b0384168383610e8e565b6040517fb760faf90000000000000000000000000000000000000000000000000000000081523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063b760faf99034906024016000604051808303818588803b1580156108a757600080fd5b610ad9610b84565b6001600160a01b038116610b555760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610663565b610b5e81610c8f565b50565b60606000610b6d610cec565b610b78858585610ed7565b91509150935093915050565b6000546001600160a01b031633146107905760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610663565b6040516001600160a01b03808516602483015283166044820152606481018290526107a69085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611191565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146107905760405162461bcd60e51b815260206004820152601560248201527f53656e646572206e6f7420456e747279506f696e7400000000000000000000006044820152606401610663565b600080808080610d768789018961180f565b9450945094509450945060008183856188b8610d929190611860565b610d9c908a6117c7565b610da69190611860565b610db0919061187f565b905060028a6002811115610dc657610dc66118a1565b14610de557610de06001600160a01b038616873084610bde565b610e22565b6001600160a01b038086166000908152600260209081526040808320938a1683529290529081208054839290610e1c9084906117f8565b90915550505b6001600160a01b03851660009081526002602052604081208291610e4e6000546001600160a01b031690565b6001600160a01b03166001600160a01b031681526020019081526020016000206000828254610e7d91906117c7565b909155505050505050505050505050565b6040516001600160a01b0383166024820152604481018290526106ce9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401610c2b565b606060006188b88560a0013511610f565760405162461bcd60e51b815260206004820152602860248201527f4465706f7369745061796d61737465723a2067617320746f6f206c6f7720666f60448201527f7220706f73744f700000000000000000000000000000000000000000000000006064820152608401610663565b366000610f676101208801886118b7565b909250905060288114610fe25760405162461bcd60e51b815260206004820152603560248201527f4465706f7369745061796d61737465723a207061796d6173746572416e64446160448201527f7461206d757374207370656369667920746f6b656e00000000000000000000006064820152608401610663565b6000610ff18260148186611905565b610ffa9161192f565b60601c90508735600061100d8389611276565b9050600061101a8b61137a565b6001600160a01b038416600090815260036020526040902054909150156110a85760405162461bcd60e51b8152602060048201526024808201527f4465706f7369745061796d61737465723a206465706f736974206e6f74206c6f60448201527f636b6564000000000000000000000000000000000000000000000000000000006064820152608401610663565b6001600160a01b038085166000908152600260209081526040808320938716835292905220548211156111435760405162461bcd60e51b815260206004820152602160248201527f4465706f7369745061796d61737465723a206465706f73697420746f6f206c6f60448201527f77000000000000000000000000000000000000000000000000000000000000006064820152608401610663565b604080516001600160a01b03948516602082015294909316848401526060840152608083015260a0808301979097528051808303909701875260c09091019052509295600095509350505050565b60006111e6826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166113a29092919063ffffffff16565b8051909150156106ce57808060200190518101906112049190611964565b6106ce5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610663565b6001600160a01b03808316600090815260016020526040812054909116806113065760405162461bcd60e51b815260206004820152602360248201527f4465706f7369745061796d61737465723a20756e737570706f7274656420746f60448201527f6b656e00000000000000000000000000000000000000000000000000000000006064820152608401610663565b806001600160a01b03166367c9b0176040518163ffffffff1660e01b8152600401602060405180830381865afa158015611344573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061136891906117df565b6113729084611860565b949350505050565b600060e082013561010083013580821415611396575092915050565b611372824883016113b1565b606061137284846000856113c9565b60008183106113c057816113c2565b825b9392505050565b6060824710156114415760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610663565b600080866001600160a01b0316858760405161145d9190611986565b60006040518083038185875af1925050503d806000811461149a576040519150601f19603f3d011682016040523d82523d6000602084013e61149f565b606091505b50915091506114b0878383876114bb565b979650505050505050565b60608315611527578251611520576001600160a01b0385163b6115205760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610663565b5081611372565b611372838381511561153c5781518083602001fd5b8060405162461bcd60e51b815260040161066391906119a2565b60006020828403121561156857600080fd5b813563ffffffff811681146113c257600080fd5b6001600160a01b0381168114610b5e57600080fd5b600080604083850312156115a457600080fd5b82356115af8161157c565b946020939093013593505050565b6000806000606084860312156115d257600080fd5b83356115dd8161157c565b925060208401356115ed8161157c565b929592945050506040919091013590565b6000806040838503121561161157600080fd5b823561161c8161157c565b9150602083013561162c8161157c565b809150509250929050565b60006020828403121561164957600080fd5b81356113c28161157c565b6000806000806060858703121561166a57600080fd5b84356003811061167957600080fd5b9350602085013567ffffffffffffffff8082111561169657600080fd5b818701915087601f8301126116aa57600080fd5b8135818111156116b957600080fd5b8860208285010111156116cb57600080fd5b95986020929092019750949560400135945092505050565b6000806000606084860312156116f857600080fd5b833567ffffffffffffffff81111561170f57600080fd5b8401610160818703121561172257600080fd5b95602085013595506040909401359392505050565b60005b8381101561175257818101518382015260200161173a565b838111156107a65750506000910152565b6000815180845261177b816020860160208601611737565b601f01601f19169290920160200192915050565b6040815260006117a26040830185611763565b90508260208301529392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156117da576117da6117b1565b500190565b6000602082840312156117f157600080fd5b5051919050565b60008282101561180a5761180a6117b1565b500390565b600080600080600060a0868803121561182757600080fd5b85356118328161157c565b945060208601356118428161157c565b94979496505050506040830135926060810135926080909101359150565b600081600019048311821515161561187a5761187a6117b1565b500290565b60008261189c57634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052602160045260246000fd5b6000808335601e198436030181126118ce57600080fd5b83018035915067ffffffffffffffff8211156118e957600080fd5b6020019150368190038213156118fe57600080fd5b9250929050565b6000808585111561191557600080fd5b8386111561192257600080fd5b5050820193919092039150565b6bffffffffffffffffffffffff19813581811691601485101561195c5780818660140360031b1b83161692505b505092915050565b60006020828403121561197657600080fd5b815180151581146113c257600080fd5b60008251611998818460208701611737565b9190910192915050565b6020815260006113c2602083018461176356fea2646970667358221220b9529e63361016267e4a43668714de682c890418c144805cda8a411f9731721c64736f6c634300080c0033";
var DepositPaymaster__factory = /** @class */ (function (_super) {
    __extends(DepositPaymaster__factory, _super);
    function DepositPaymaster__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (args.length === 1) {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        else {
            _this = _super.apply(this, args) || this;
        }
        return _this;
    }
    DepositPaymaster__factory.prototype.deploy = function (_entryPoint, overrides) {
        return _super.prototype.deploy.call(this, _entryPoint, overrides || {});
    };
    DepositPaymaster__factory.prototype.getDeployTransaction = function (_entryPoint, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _entryPoint, overrides || {});
    };
    DepositPaymaster__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    DepositPaymaster__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    DepositPaymaster__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    DepositPaymaster__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    DepositPaymaster__factory.bytecode = _bytecode;
    DepositPaymaster__factory.abi = _abi;
    return DepositPaymaster__factory;
}(ethers_1.ContractFactory));
exports.DepositPaymaster__factory = DepositPaymaster__factory;
