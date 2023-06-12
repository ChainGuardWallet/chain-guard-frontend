/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AggregatorV3Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AggregatorV3Interface__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "IERC1822Proxiable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1822Proxiable__factory>;
    getContractFactory(
      name: "IBeacon",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBeacon__factory>;
    getContractFactory(
      name: "ERC1967Proxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967Proxy__factory>;
    getContractFactory(
      name: "ERC1967Upgrade",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967Upgrade__factory>;
    getContractFactory(
      name: "Proxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Proxy__factory>;
    getContractFactory(
      name: "Initializable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Initializable__factory>;
    getContractFactory(
      name: "UUPSUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UUPSUpgradeable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "Account",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Account__factory>;
    getContractFactory(
      name: "AccountFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccountFactory__factory>;
    getContractFactory(
      name: "BaseAccount",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseAccount__factory>;
    getContractFactory(
      name: "BasePaymaster",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BasePaymaster__factory>;
    getContractFactory(
      name: "DepositPaymaster",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DepositPaymaster__factory>;
    getContractFactory(
      name: "EntryPoint",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EntryPoint__factory>;
    getContractFactory(
      name: "GuardianExecutor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GuardianExecutor__factory>;
    getContractFactory(
      name: "GuardianManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GuardianManager__factory>;
    getContractFactory(
      name: "Oracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Oracle__factory>;
    getContractFactory(
      name: "SenderCreator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SenderCreator__factory>;
    getContractFactory(
      name: "StakeManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StakeManager__factory>;
    getContractFactory(
      name: "EdDSA",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EdDSA__factory>;
    getContractFactory(
      name: "JubJub",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.JubJub__factory>;
    getContractFactory(
      name: "IAccount",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccount__factory>;
    getContractFactory(
      name: "IAggregator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAggregator__factory>;
    getContractFactory(
      name: "IEntryPoint",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IEntryPoint__factory>;
    getContractFactory(
      name: "IOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOracle__factory>;
    getContractFactory(
      name: "IPaymaster",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPaymaster__factory>;
    getContractFactory(
      name: "ISignatureValidator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISignatureValidator__factory>;
    getContractFactory(
      name: "IStakeManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStakeManager__factory>;
    getContractFactory(
      name: "MockOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockOracle__factory>;
    getContractFactory(
      name: "TestToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestToken__factory>;

    getContractAt(
      name: "AggregatorV3Interface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AggregatorV3Interface>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "IERC1822Proxiable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1822Proxiable>;
    getContractAt(
      name: "IBeacon",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBeacon>;
    getContractAt(
      name: "ERC1967Proxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1967Proxy>;
    getContractAt(
      name: "ERC1967Upgrade",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1967Upgrade>;
    getContractAt(
      name: "Proxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Proxy>;
    getContractAt(
      name: "Initializable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Initializable>;
    getContractAt(
      name: "UUPSUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UUPSUpgradeable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "Account",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Account>;
    getContractAt(
      name: "AccountFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccountFactory>;
    getContractAt(
      name: "BaseAccount",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseAccount>;
    getContractAt(
      name: "BasePaymaster",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BasePaymaster>;
    getContractAt(
      name: "DepositPaymaster",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DepositPaymaster>;
    getContractAt(
      name: "EntryPoint",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EntryPoint>;
    getContractAt(
      name: "GuardianExecutor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GuardianExecutor>;
    getContractAt(
      name: "GuardianManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GuardianManager>;
    getContractAt(
      name: "Oracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Oracle>;
    getContractAt(
      name: "SenderCreator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SenderCreator>;
    getContractAt(
      name: "StakeManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.StakeManager>;
    getContractAt(
      name: "EdDSA",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EdDSA>;
    getContractAt(
      name: "JubJub",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.JubJub>;
    getContractAt(
      name: "IAccount",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccount>;
    getContractAt(
      name: "IAggregator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAggregator>;
    getContractAt(
      name: "IEntryPoint",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IEntryPoint>;
    getContractAt(
      name: "IOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOracle>;
    getContractAt(
      name: "IPaymaster",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPaymaster>;
    getContractAt(
      name: "ISignatureValidator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISignatureValidator>;
    getContractAt(
      name: "IStakeManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStakeManager>;
    getContractAt(
      name: "MockOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockOracle>;
    getContractAt(
      name: "TestToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestToken>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
