"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
exports.__esModule = true;
exports.StakeManager__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "totalDeposit",
                type: "uint256"
            },
        ],
        name: "Deposited",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "totalStaked",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "unstakeRelaySec",
                type: "uint256"
            },
        ],
        name: "StakeLocked",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "withdrawTime",
                type: "uint256"
            },
        ],
        name: "StakeUnlocked",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: false,
                internalType: "address",
                name: "withdrawnAddress",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
        ],
        name: "StakeWithdrawn",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: false,
                internalType: "address",
                name: "withdrawnAddress",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
        ],
        name: "Withdrawn",
        type: "event"
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
                internalType: "address",
                name: "account",
                type: "address"
            },
        ],
        name: "balanceOf",
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
                internalType: "address",
                name: "account",
                type: "address"
            },
        ],
        name: "depositTo",
        outputs: [],
        stateMutability: "payable",
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
        name: "deposits",
        outputs: [
            {
                internalType: "uint112",
                name: "deposit",
                type: "uint112"
            },
            {
                internalType: "bool",
                name: "staked",
                type: "bool"
            },
            {
                internalType: "uint112",
                name: "stake",
                type: "uint112"
            },
            {
                internalType: "uint32",
                name: "unstakeDelaySec",
                type: "uint32"
            },
            {
                internalType: "uint48",
                name: "withdrawTime",
                type: "uint48"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            },
        ],
        name: "getDepositInfo",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint112",
                        name: "deposit",
                        type: "uint112"
                    },
                    {
                        internalType: "bool",
                        name: "staked",
                        type: "bool"
                    },
                    {
                        internalType: "uint112",
                        name: "stake",
                        type: "uint112"
                    },
                    {
                        internalType: "uint32",
                        name: "unstakeDelaySec",
                        type: "uint32"
                    },
                    {
                        internalType: "uint48",
                        name: "withdrawTime",
                        type: "uint48"
                    },
                ],
                internalType: "struct IStakeManager.DepositInfo",
                name: "info",
                type: "tuple"
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
                name: "withdrawAmount",
                type: "uint256"
            },
        ],
        name: "withdrawTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        stateMutability: "payable",
        type: "receive"
    },
];
var StakeManager__factory = /** @class */ (function () {
    function StakeManager__factory() {
    }
    StakeManager__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    StakeManager__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    StakeManager__factory.abi = _abi;
    return StakeManager__factory;
}());
exports.StakeManager__factory = StakeManager__factory;
