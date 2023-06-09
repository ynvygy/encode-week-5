/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface TokenizedBallotInterface extends utils.Interface {
  functions: {
    "listProposal()": FunctionFragment;
    "proposals(uint256)": FunctionFragment;
    "targetBlockNumber()": FunctionFragment;
    "tokenContract()": FunctionFragment;
    "vote(uint256,uint256)": FunctionFragment;
    "votingPower(address)": FunctionFragment;
    "votingPowerSpent(address)": FunctionFragment;
    "winnerName()": FunctionFragment;
    "winningProposal()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "listProposal"
      | "proposals"
      | "targetBlockNumber"
      | "tokenContract"
      | "vote"
      | "votingPower"
      | "votingPowerSpent"
      | "winnerName"
      | "winningProposal"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "listProposal",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposals",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "targetBlockNumber",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "vote",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "votingPower",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "votingPowerSpent",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "winnerName",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "winningProposal",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "listProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "targetBlockNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "votingPower",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "votingPowerSpent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "winnerName", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "winningProposal",
    data: BytesLike
  ): Result;

  events: {};
}

export interface TokenizedBallot extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TokenizedBallotInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    listProposal(overrides?: CallOverrides): Promise<[string[]]>;

    proposals(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { name: string; voteCount: BigNumber }>;

    targetBlockNumber(overrides?: CallOverrides): Promise<[BigNumber]>;

    tokenContract(overrides?: CallOverrides): Promise<[string]>;

    vote(
      proposal: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    votingPower(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    votingPowerSpent(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    winnerName(
      overrides?: CallOverrides
    ): Promise<[string] & { winnerName_: string }>;

    winningProposal(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { winningProposal_: BigNumber }>;
  };

  listProposal(overrides?: CallOverrides): Promise<string[]>;

  proposals(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber] & { name: string; voteCount: BigNumber }>;

  targetBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

  tokenContract(overrides?: CallOverrides): Promise<string>;

  vote(
    proposal: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  votingPower(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  votingPowerSpent(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  winnerName(overrides?: CallOverrides): Promise<string>;

  winningProposal(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    listProposal(overrides?: CallOverrides): Promise<string[]>;

    proposals(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { name: string; voteCount: BigNumber }>;

    targetBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

    tokenContract(overrides?: CallOverrides): Promise<string>;

    vote(
      proposal: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    votingPower(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    votingPowerSpent(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    winnerName(overrides?: CallOverrides): Promise<string>;

    winningProposal(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    listProposal(overrides?: CallOverrides): Promise<BigNumber>;

    proposals(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    targetBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

    tokenContract(overrides?: CallOverrides): Promise<BigNumber>;

    vote(
      proposal: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    votingPower(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    votingPowerSpent(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    winnerName(overrides?: CallOverrides): Promise<BigNumber>;

    winningProposal(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    listProposal(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposals(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    targetBlockNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vote(
      proposal: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    votingPower(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    votingPowerSpent(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    winnerName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    winningProposal(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
