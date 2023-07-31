"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
exports.__esModule = true;
exports.UUPSUpgradeable__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address"
            },
            {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address"
            },
        ],
        name: "AdminChanged",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "beacon",
                type: "address"
            },
        ],
        name: "BeaconUpgraded",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address"
            },
        ],
        name: "Upgraded",
        type: "event"
    },
    {
        inputs: [],
        name: "proxiableUUID",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newImplementation",
                type: "address"
            },
        ],
        name: "upgradeTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newImplementation",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes"
            },
        ],
        name: "upgradeToAndCall",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
];
var UUPSUpgradeable__factory = /** @class */ (function () {
    function UUPSUpgradeable__factory() {
    }
    UUPSUpgradeable__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    UUPSUpgradeable__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    UUPSUpgradeable__factory.abi = _abi;
    return UUPSUpgradeable__factory;
}());
exports.UUPSUpgradeable__factory = UUPSUpgradeable__factory;
