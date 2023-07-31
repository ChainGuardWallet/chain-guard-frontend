"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.userOpsWithoutAgg = exports.createAccount = exports.getAccountInitCode = exports.calcGasUsage = exports.callDataCost = exports.createAddress = exports.createAccountOwner = exports.getTokenBalance = exports.getBalance = exports.toNumber = exports.toStr = exports.ETH_2000 = exports.ETH_1000 = exports.ETH_5 = exports.ETH_2 = exports.ETH_1 = exports.HashZero = exports.AddressZero = exports.sepoliaProvider = exports.goerliProvider = void 0;
var ethers_1 = require("ethers");
var typechain_1 = require("./typechain");
var ethers_2 = require("ethers");
var utils_1 = require("ethers/lib/utils");
var chai_1 = require("chai");
var UserOp_1 = require("./UserOp");
exports.goerliProvider = new ethers_1.ethers.providers.JsonRpcProvider("https://ethereum-goerli.publicnode.com");
exports.sepoliaProvider = new ethers_1.ethers.providers.JsonRpcProvider("https://ethereum-sepolia.blockpi.network/v1/rpc/public");
exports.AddressZero = ethers_1.ethers.constants.AddressZero;
exports.HashZero = ethers_1.ethers.constants.HashZero;
exports.ETH_1 = ethers_1.ethers.utils.parseEther("1");
exports.ETH_2 = ethers_1.ethers.utils.parseEther("2");
exports.ETH_5 = ethers_1.ethers.utils.parseEther("5");
exports.ETH_1000 = ethers_1.ethers.utils.parseEther("1000");
exports.ETH_2000 = ethers_1.ethers.utils.parseEther("2000");
var toStr = function (x) { return (x != null ? x.toString() : "null"); };
exports.toStr = toStr;
function toNumber(x) {
    try {
        return parseFloat(x.toString());
    }
    catch (e) {
        console.log("=== failed to parseFloat:", x, e.message);
        return NaN;
    }
}
exports.toNumber = toNumber;
function getBalance(address, provider) {
    if (provider === void 0) { provider = exports.goerliProvider; }
    return __awaiter(this, void 0, void 0, function () {
        var balance;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, provider.getBalance(address)];
                case 1:
                    balance = _a.sent();
                    return [2 /*return*/, parseInt(balance.toString())];
            }
        });
    });
}
exports.getBalance = getBalance;
function getTokenBalance(token, address) {
    return __awaiter(this, void 0, void 0, function () {
        var balance;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, token.balanceOf(address)];
                case 1:
                    balance = _a.sent();
                    return [2 /*return*/, parseInt(balance.toString())];
            }
        });
    });
}
exports.getTokenBalance = getTokenBalance;
var counter = 0;
function createAccountOwner(provider) {
    if (provider === void 0) { provider = exports.goerliProvider; }
    var privateKey = (0, utils_1.keccak256)(Buffer.from((0, utils_1.arrayify)(ethers_2.BigNumber.from(++counter))));
    return new ethers_1.ethers.Wallet(privateKey, provider);
}
exports.createAccountOwner = createAccountOwner;
function createAddress() {
    return createAccountOwner().address;
}
exports.createAddress = createAddress;
function callDataCost(data) {
    return ethers_1.ethers.utils
        .arrayify(data)
        .map(function (x) { return (x === 0 ? 4 : 16); })
        .reduce(function (sum, x) { return x + sum; });
}
exports.callDataCost = callDataCost;
function calcGasUsage(rcpt, entryPoint, provider, beneficiaryAddress) {
    if (provider === void 0) { provider = exports.goerliProvider; }
    return __awaiter(this, void 0, void 0, function () {
        var actualGas, logs, _a, actualGasCost, actualGasUsed, tx, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    actualGas = rcpt.gasUsed;
                    return [4 /*yield*/, entryPoint.queryFilter(entryPoint.filters.UserOperationEvent(), rcpt.blockHash)];
                case 1:
                    logs = _c.sent();
                    _a = logs[0].args, actualGasCost = _a.actualGasCost, actualGasUsed = _a.actualGasUsed;
                    console.log("\t== actual gasUsed (from tx receipt)=", actualGas.toString());
                    console.log("\t== calculated gasUsed (paid to beneficiary)=", actualGasUsed);
                    return [4 /*yield*/, provider.getTransaction(rcpt.transactionHash)];
                case 2:
                    tx = _c.sent();
                    console.log("\t== gasDiff", actualGas.toNumber() - actualGasUsed.toNumber() - callDataCost(tx.data));
                    if (!(beneficiaryAddress != null)) return [3 /*break*/, 4];
                    _b = chai_1.expect;
                    return [4 /*yield*/, getBalance(beneficiaryAddress)];
                case 3:
                    _b.apply(void 0, [_c.sent()]).to.eq(actualGasCost.toNumber());
                    _c.label = 4;
                case 4: return [2 /*return*/, { actualGasCost: actualGasCost }];
            }
        });
    });
}
exports.calcGasUsage = calcGasUsage;
function getAccountInitCode(owner, factory, salt) {
    if (factory === void 0) { factory = UserOp_1.factory; }
    if (salt === void 0) { salt = 0; }
    return (0, utils_1.hexConcat)([
        factory.address,
        factory.interface.encodeFunctionData("createAccount", [owner, salt]),
    ]);
}
exports.getAccountInitCode = getAccountInitCode;
function createAccount(ethersSigner, accountOwner, entryPoint, _factory) {
    return __awaiter(this, void 0, void 0, function () {
        var accountFactory, _a, implementation, accountAddress, proxy;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(_factory !== null && _factory !== void 0)) return [3 /*break*/, 1];
                    _a = _factory;
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, new typechain_1.AccountFactory__factory(ethersSigner).deploy(entryPoint)];
                case 2:
                    _a = (_b.sent());
                    _b.label = 3;
                case 3:
                    accountFactory = _a;
                    return [4 /*yield*/, accountFactory.accountImplementation()];
                case 4:
                    implementation = _b.sent();
                    return [4 /*yield*/, accountFactory.createAccount(accountOwner, 0)];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, accountFactory.getAddress(accountOwner, 0)];
                case 6:
                    accountAddress = _b.sent();
                    proxy = typechain_1.Account__factory.connect(accountAddress, ethersSigner);
                    return [2 /*return*/, {
                            implementation: implementation,
                            accountFactory: accountFactory,
                            proxy: proxy
                        }];
            }
        });
    });
}
exports.createAccount = createAccount;
function userOpsWithoutAgg(userOps) {
    return [
        {
            userOps: userOps,
            aggregator: exports.AddressZero,
            signature: "0x"
        },
    ];
}
exports.userOpsWithoutAgg = userOpsWithoutAgg;
