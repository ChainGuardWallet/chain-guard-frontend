"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.fillAndSign = exports.fillUserOp = exports.getDeployedAddress = exports.fillUserOpDefault = exports.signUserOp = exports.DefaultsForUserOp = exports.getUserOpHash = exports.packUserOp1 = exports.decodeRevertReason = exports.rethrow = exports.packUserOp = exports.ep = exports.factory = void 0;
var utils_1 = require("ethers/lib/utils");
var ethers_1 = require("ethers");
var utils_2 = require("./utils");
var ethereumjs_util_1 = require("ethereumjs-util");
var typechain_1 = require("./typechain");
exports.factory = typechain_1.AccountFactory__factory.connect("0xD31F762336Ad8FAF05158BCE038BF57276018B29", utils_2.goerliProvider);
exports.ep = typechain_1.EntryPoint__factory.connect("0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789", utils_2.goerliProvider);
function packUserOp(op, forSignature) {
    if (forSignature === void 0) { forSignature = true; }
    if (forSignature) {
        return utils_1.defaultAbiCoder.encode([
            "address",
            "uint256",
            "bytes32",
            "bytes32",
            "uint256",
            "uint256",
            "uint256",
            "uint256",
            "uint256",
            "bytes32",
        ], [
            op.sender,
            op.nonce,
            (0, utils_1.keccak256)(op.initCode),
            (0, utils_1.keccak256)(op.callData),
            op.callGasLimit,
            op.verificationGasLimit,
            op.preVerificationGas,
            op.maxFeePerGas,
            op.maxPriorityFeePerGas,
            (0, utils_1.keccak256)(op.paymasterAndData),
        ]);
    }
    else {
        // for the purpose of calculating gas cost encode also signature (and no keccak of bytes)
        return utils_1.defaultAbiCoder.encode([
            "address",
            "uint256",
            "bytes",
            "bytes",
            "uint256",
            "uint256",
            "uint256",
            "uint256",
            "uint256",
            "bytes",
            "bytes",
        ], [
            op.sender,
            op.nonce,
            op.initCode,
            op.callData,
            op.callGasLimit,
            op.verificationGasLimit,
            op.preVerificationGas,
            op.maxFeePerGas,
            op.maxPriorityFeePerGas,
            op.paymasterAndData,
            op.signature,
        ]);
    }
}
exports.packUserOp = packUserOp;
function rethrow() {
    var callerStack = new Error()
        .stack.replace(/Error.*\n.*at.*\n/, "")
        .replace(/.*at.* \(internal[\s\S]*/, "");
    if (arguments[0] != null) {
        throw new Error("must use .catch(rethrow()), and NOT .catch(rethrow)");
    }
    return function (e) {
        var _a;
        var solstack = e.stack.match(/((?:.* at .*\.sol.*\n)+)/);
        var stack = (solstack != null ? solstack[1] : "") + callerStack;
        var found = /error=.*?"data":"(.*?)"/.exec(e.message);
        var message;
        if (found != null) {
            var data = found[1];
            message =
                (_a = decodeRevertReason(data)) !== null && _a !== void 0 ? _a : e.message + " - " + data.slice(0, 100);
        }
        else {
            message = e.message;
        }
        var err = new Error(message);
        err.stack = "Error: " + message + "\n" + stack;
        throw err;
    };
}
exports.rethrow = rethrow;
function decodeRevertReason(data, nullIfNoMatch) {
    var _a;
    if (nullIfNoMatch === void 0) { nullIfNoMatch = true; }
    var methodSig = data.slice(0, 10);
    var dataParams = "0x" + data.slice(10);
    if (methodSig === "0x08c379a0") {
        var err = ethers_1.ethers.utils.defaultAbiCoder.decode(["string"], dataParams)[0];
        return "Error(".concat(err, ")");
    }
    else if (methodSig === "0x00fa072b") {
        var _b = ethers_1.ethers.utils.defaultAbiCoder.decode(["uint256", "address", "string"], dataParams), opindex = _b[0], paymaster = _b[1], msg = _b[2];
        return "FailedOp(".concat(opindex, ", ").concat(paymaster !== utils_2.AddressZero ? paymaster : "none", ", ").concat(msg, ")");
    }
    else if (methodSig === "0x4e487b71") {
        var code = ethers_1.ethers.utils.defaultAbiCoder.decode(["uint256"], dataParams)[0];
        return "Panic(".concat((_a = panicCodes[code]) !== null && _a !== void 0 ? _a : code, " + ')");
    }
    if (!nullIfNoMatch) {
        return data;
    }
    return null;
}
exports.decodeRevertReason = decodeRevertReason;
var panicCodes = {
    0x01: "assert(false)",
    0x11: "arithmetic overflow/underflow",
    0x12: "divide by zero",
    0x21: "invalid enum value",
    0x22: "storage byte array that is incorrectly encoded",
    0x31: ".pop() on an empty array.",
    0x32: "array sout-of-bounds or negative index",
    0x41: "memory overflow",
    0x51: "zero-initialized variable of internal function type"
};
function packUserOp1(op) {
    return utils_1.defaultAbiCoder.encode([
        "address",
        "uint256",
        "bytes32",
        "bytes32",
        "uint256",
        "uint",
        "uint",
        "uint256",
        "uint256",
        "bytes32",
    ], [
        op.sender,
        op.nonce,
        (0, utils_1.keccak256)(op.initCode),
        (0, utils_1.keccak256)(op.callData),
        op.callGasLimit,
        op.verificationGasLimit,
        op.preVerificationGas,
        op.maxFeePerGas,
        op.maxPriorityFeePerGas,
        (0, utils_1.keccak256)(op.paymasterAndData),
    ]);
}
exports.packUserOp1 = packUserOp1;
function getUserOpHash(op, entryPoint, chainId) {
    var userOpHash = (0, utils_1.keccak256)(packUserOp(op, true));
    var enc = utils_1.defaultAbiCoder.encode(["bytes32", "address", "uint256"], [userOpHash, entryPoint, chainId]);
    return (0, utils_1.keccak256)(enc);
}
exports.getUserOpHash = getUserOpHash;
exports.DefaultsForUserOp = {
    sender: utils_2.AddressZero,
    nonce: 0,
    initCode: "0x",
    callData: "0x",
    callGasLimit: 0,
    verificationGasLimit: 100000,
    preVerificationGas: 21000,
    maxFeePerGas: 0,
    maxPriorityFeePerGas: 1e9,
    paymasterAndData: "0x",
    signature: "0x"
};
function signUserOp(op, signer, entryPoint, chainId) {
    var message = getUserOpHash(op, entryPoint, chainId);
    var msg = Buffer.concat([
        Buffer.from("\x19Ethereum Signed Message:\n32", "ascii"),
        Buffer.from((0, utils_1.arrayify)(message)),
    ]);
    var sig = (0, ethereumjs_util_1.ecsign)((0, ethereumjs_util_1.keccak256)(msg), Buffer.from((0, utils_1.arrayify)(signer.privateKey)));
    var signedMessage = (0, ethereumjs_util_1.toRpcSig)(sig.v, sig.r, sig.s);
    return __assign(__assign({}, op), { signature: signedMessage });
}
exports.signUserOp = signUserOp;
function fillUserOpDefault(op, defaults) {
    if (defaults === void 0) { defaults = exports.DefaultsForUserOp; }
    var partial = __assign({}, op);
    for (var key in partial) {
        if (partial[key] == null) {
            delete partial[key];
        }
    }
    var filled = __assign(__assign({}, defaults), partial);
    return filled;
}
exports.fillUserOpDefault = fillUserOpDefault;
function getDeployedAddress(owner, salt, accountFactory) {
    if (accountFactory === void 0) { accountFactory = exports.factory; }
    return __awaiter(this, void 0, void 0, function () {
        var encodedFunctionCall, encoder, initcodeHash, _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return __generator(this, function (_k) {
            switch (_k.label) {
                case 0:
                    encodedFunctionCall = typechain_1.Account__factory.createInterface().encodeFunctionData("initialize", [
                        owner,
                    ]);
                    encoder = new ethers_1.ethers.utils.AbiCoder();
                    _b = (_a = ethers_1.ethers.utils).keccak256;
                    _d = (_c = ethers_1.ethers.utils).solidityPack;
                    _e = [["bytes", "bytes"]];
                    _f = [typechain_1.ERC1967Proxy__factory.bytecode];
                    _h = (_g = encoder).encode;
                    _j = [["address", "bytes"]];
                    return [4 /*yield*/, accountFactory.accountImplementation()];
                case 1:
                    initcodeHash = _b.apply(_a, [_d.apply(_c, _e.concat([_f.concat([
                                _h.apply(_g, _j.concat([[_k.sent(), encodedFunctionCall]]))
                            ])]))]);
                    return [2 /*return*/, ethers_1.ethers.utils.getCreate2Address(accountFactory.address, salt, initcodeHash)];
            }
        });
    });
}
exports.getDeployedAddress = getDeployedAddress;
function fillUserOp(op, entryPoint, accountFactory) {
    var _a;
    if (entryPoint === void 0) { entryPoint = exports.ep; }
    if (accountFactory === void 0) { accountFactory = exports.factory; }
    return __awaiter(this, void 0, void 0, function () {
        var op1, provider, initAddr, initCallData, salt, ctr, _b, _c, initEstimate, c, _d, gasEstimated, block, op2;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    op1 = __assign({}, op);
                    provider = entryPoint === null || entryPoint === void 0 ? void 0 : entryPoint.provider;
                    if (!(op.initCode != null)) return [3 /*break*/, 6];
                    initAddr = (0, utils_1.hexDataSlice)(op1.initCode, 0, 20);
                    initCallData = (0, utils_1.hexDataSlice)(op1.initCode, 20);
                    if (op1.nonce == null)
                        op1.nonce = 0;
                    if (!(op1.sender == null)) return [3 /*break*/, 4];
                    if (!(initAddr.toLowerCase() === accountFactory.address.toLowerCase())) return [3 /*break*/, 2];
                    salt = (0, utils_1.hexDataSlice)(initCallData, 0, 32);
                    ctr = (0, utils_1.hexDataSlice)(initCallData, 32);
                    _b = op1;
                    return [4 /*yield*/, getDeployedAddress(ctr, salt, accountFactory)];
                case 1:
                    _b.sender = _e.sent();
                    return [3 /*break*/, 4];
                case 2:
                    if (provider == null)
                        throw new Error("no EntryPoint/Provider");
                    _c = op1;
                    return [4 /*yield*/, entryPoint.callStatic
                            .getSenderAddress(op1.initCode)["catch"](function (e) { return e.errorArgs.sender; })];
                case 3:
                    _c.sender = _e.sent();
                    _e.label = 4;
                case 4:
                    if (!(op1.verificationGasLimit == null)) return [3 /*break*/, 6];
                    if (provider == null)
                        throw new Error("no EntryPoint/Provider");
                    return [4 /*yield*/, provider.estimateGas({
                            from: entryPoint === null || entryPoint === void 0 ? void 0 : entryPoint.address,
                            to: initAddr,
                            data: initCallData,
                            gasLimit: 10e6
                        })];
                case 5:
                    initEstimate = _e.sent();
                    op1.verificationGasLimit = ethers_1.BigNumber.from(exports.DefaultsForUserOp.verificationGasLimit).add(initEstimate);
                    _e.label = 6;
                case 6:
                    if (!(op1.nonce == null)) return [3 /*break*/, 8];
                    if (provider == null)
                        throw new Error("must have entryPoint to autofill nonce");
                    c = new ethers_1.Contract(op.sender, ["function nonce() view returns(uint256)"], provider);
                    _d = op1;
                    return [4 /*yield*/, c.nonce()["catch"](rethrow())];
                case 7:
                    _d.nonce = _e.sent();
                    _e.label = 8;
                case 8:
                    if (!(op1.callGasLimit == null && op.callData != null)) return [3 /*break*/, 10];
                    if (provider == null)
                        throw new Error("must have EntryPoint for callGasLimit estimate");
                    return [4 /*yield*/, provider.estimateGas({
                            from: entryPoint === null || entryPoint === void 0 ? void 0 : entryPoint.address,
                            to: op1.sender,
                            data: op1.callData
                        })];
                case 9:
                    gasEstimated = _e.sent();
                    op1.callGasLimit = gasEstimated;
                    _e.label = 10;
                case 10:
                    if (!(op1.maxFeePerGas == null)) return [3 /*break*/, 12];
                    if (provider == null)
                        throw new Error("must have EntryPoint to autofill maxFeePerGas");
                    return [4 /*yield*/, provider.getBlock("latest")];
                case 11:
                    block = _e.sent();
                    op1.maxFeePerGas = block.baseFeePerGas.add((_a = op1.maxPriorityFeePerGas) !== null && _a !== void 0 ? _a : exports.DefaultsForUserOp.maxPriorityFeePerGas);
                    _e.label = 12;
                case 12:
                    if (op1.maxPriorityFeePerGas == null) {
                        op1.maxPriorityFeePerGas = exports.DefaultsForUserOp.maxPriorityFeePerGas;
                    }
                    op2 = fillUserOpDefault(op1);
                    if (op2.preVerificationGas.toString() === "0") {
                        op2.preVerificationGas = (0, utils_2.callDataCost)(packUserOp(op2, false));
                    }
                    return [2 /*return*/, op2];
            }
        });
    });
}
exports.fillUserOp = fillUserOp;
function fillAndSign(op, signer, entryPoint, accountFactory) {
    if (entryPoint === void 0) { entryPoint = exports.ep; }
    if (accountFactory === void 0) { accountFactory = exports.factory; }
    return __awaiter(this, void 0, void 0, function () {
        var provider, op2, chainId, message, _a;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    provider = entryPoint === null || entryPoint === void 0 ? void 0 : entryPoint.provider;
                    return [4 /*yield*/, fillUserOp(op, entryPoint, accountFactory)];
                case 1:
                    op2 = _c.sent();
                    return [4 /*yield*/, provider.getNetwork().then(function (net) { return net.chainId; })];
                case 2:
                    chainId = _c.sent();
                    console.log(chainId);
                    message = (0, utils_1.arrayify)(getUserOpHash(op2, entryPoint.address, chainId));
                    _a = [__assign({}, op2)];
                    _b = {};
                    return [4 /*yield*/, signer.signMessage(message)];
                case 3: return [2 /*return*/, __assign.apply(void 0, _a.concat([(_b.signature = _c.sent(), _b)]))];
            }
        });
    });
}
exports.fillAndSign = fillAndSign;
