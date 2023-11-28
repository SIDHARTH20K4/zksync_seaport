import type {
    BaseContract,
    BigNumber,
    BigNumberish,
    BytesLike,
    CallOverrides,
    ContractTransaction,
    Overrides,
    PayableOverrides,
    PopulatedTransaction,
    Contract,
    utils,
} from "ethers";

import type {
    TypedEventFilter,
    TypedEvent,
    TypedListener,
    OnEvent,
} from "./common";

import type {
    FunctionFragment,
    Result,
    EventFragment,
} from "@ethersproject/abi";

import { Provider, Signer} from "zksync-web3";
import type { Listener} from "@ethersproject/providers";

export type SpentItemStruct = {
    itemType: BigNumberish;
    token: string;
    identifier: BigNumberish;
    amount: BigNumberish;
};
  
export type SpentItemStructOutput = [number, string, BigNumber, BigNumber] & {
    itemType: number;
    token: string;
    identifier: BigNumber;
    amount: BigNumber;
};
  
export type ReceivedItemStruct = {
    itemType: BigNumberish;
    token: string;
    identifier: BigNumberish;
    amount: BigNumberish;
    recipient: string;
};
  
export type ReceivedItemStructOutput = [
    number,
    string,
    BigNumber,
    BigNumber,
    string
  ] & {
    itemType: number;
    token: string;
    identifier: BigNumber;
    amount: BigNumber;
    recipient: string;
};
  
export type OfferItemStruct = {
    itemType: BigNumberish;
    token: string;
    identifierOrCriteria: BigNumberish;
    startAmount: BigNumberish;
    endAmount: BigNumberish;
};
  
export type OfferItemStructOutput = [
    number,
    string,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    itemType: number;
    token: string;
    identifierOrCriteria: BigNumber;
    startAmount: BigNumber;
    endAmount: BigNumber;
};
  
export type ConsiderationItemStruct = {
    itemType: BigNumberish;
    token: string;
    identifierOrCriteria: BigNumberish;
    startAmount: BigNumberish;
    endAmount: BigNumberish;
    recipient: string;
};
  
export type ConsiderationItemStructOutput = [
    number,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string
  ] & {
    itemType: number;
    token: string;
    identifierOrCriteria: BigNumber;
    startAmount: BigNumber;
    endAmount: BigNumber;
    recipient: string;
};
  
export type OrderParametersStruct = {
    offerer: string;
    zone: string;
    offer: OfferItemStruct[];
    consideration: ConsiderationItemStruct[];
    orderType: BigNumberish;
    startTime: BigNumberish;
    endTime: BigNumberish;
    zoneHash: BytesLike;
    salt: BigNumberish;
    conduitKey: BytesLike;
    totalOriginalConsiderationItems: BigNumberish;
};
  
export type OrderParametersStructOutput = [
    string,
    string,
    OfferItemStructOutput[],
    ConsiderationItemStructOutput[],
    number,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    string,
    BigNumber
  ] & {
    offerer: string;
    zone: string;
    offer: OfferItemStructOutput[];
    consideration: ConsiderationItemStructOutput[];
    orderType: number;
    startTime: BigNumber;
    endTime: BigNumber;
    zoneHash: string;
    salt: BigNumber;
    conduitKey: string;
    totalOriginalConsiderationItems: BigNumber;
};
  
export type OrderComponentsStruct = {
    offerer: string;
    zone: string;
    offer: OfferItemStruct[];
    consideration: ConsiderationItemStruct[];
    orderType: BigNumberish;
    startTime: BigNumberish;
    endTime: BigNumberish;
    zoneHash: BytesLike;
    salt: BigNumberish;
    conduitKey: BytesLike;
    counter: BigNumberish;
};
  
export type OrderComponentsStructOutput = [
    string,
    string,
    OfferItemStructOutput[],
    ConsiderationItemStructOutput[],
    number,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    string,
    BigNumber
  ] & {
    offerer: string;
    zone: string;
    offer: OfferItemStructOutput[];
    consideration: ConsiderationItemStructOutput[];
    orderType: number;
    startTime: BigNumber;
    endTime: BigNumber;
    zoneHash: string;
    salt: BigNumber;
    conduitKey: string;
    counter: BigNumber;
};
  
export type AdvancedOrderStruct = {
    parameters: OrderParametersStruct;
    numerator: BigNumberish;
    denominator: BigNumberish;
    signature: BytesLike;
    extraData: BytesLike;
};
  
export type AdvancedOrderStructOutput = [
    OrderParametersStructOutput,
    BigNumber,
    BigNumber,
    string,
    string
  ] & {
    parameters: OrderParametersStructOutput;
    numerator: BigNumber;
    denominator: BigNumber;
    signature: string;
    extraData: string;
};
  
export type CriteriaResolverStruct = {
    orderIndex: BigNumberish;
    side: BigNumberish;
    index: BigNumberish;
    identifier: BigNumberish;
    criteriaProof: BytesLike[];
};
  
export type CriteriaResolverStructOutput = [
    BigNumber,
    number,
    BigNumber,
    BigNumber,
    string[]
  ] & {
    orderIndex: BigNumber;
    side: number;
    index: BigNumber;
    identifier: BigNumber;
    criteriaProof: string[];
};
  
export type FulfillmentComponentStruct = {
    orderIndex: BigNumberish;
    itemIndex: BigNumberish;
};
  
export type FulfillmentComponentStructOutput = [BigNumber, BigNumber] & {
    orderIndex: BigNumber;
    itemIndex: BigNumber;
};
  
export type ExecutionStruct = {
    item: ReceivedItemStruct;
    offerer: string;
    conduitKey: BytesLike;
};
  
export type ExecutionStructOutput = [
    ReceivedItemStructOutput,
    string,
    string
  ] & { item: ReceivedItemStructOutput; offerer: string; conduitKey: string };
  
export type OrderStruct = {
    parameters: OrderParametersStruct;
    signature: BytesLike;
};
  
export type OrderStructOutput = [OrderParametersStructOutput, string] & {
    parameters: OrderParametersStructOutput;
    signature: string;
};
  
export type AdditionalRecipientStruct = {
    amount: BigNumberish;
    recipient: string;
};
  
export type AdditionalRecipientStructOutput = [BigNumber, string] & {
    amount: BigNumber;
    recipient: string;
};
  
export type BasicOrderParametersStruct = {
    considerationToken: string;
    considerationIdentifier: BigNumberish;
    considerationAmount: BigNumberish;
    offerer: string;
    zone: string;
    offerToken: string;
    offerIdentifier: BigNumberish;
    offerAmount: BigNumberish;
    basicOrderType: BigNumberish;
    startTime: BigNumberish;
    endTime: BigNumberish;
    zoneHash: BytesLike;
    salt: BigNumberish;
    offererConduitKey: BytesLike;
    fulfillerConduitKey: BytesLike;
    totalOriginalAdditionalRecipients: BigNumberish;
    additionalRecipients: AdditionalRecipientStruct[];
    signature: BytesLike;
};
  
export type BasicOrderParametersStructOutput = [
    string,
    BigNumber,
    BigNumber,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    number,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    string,
    string,
    BigNumber,
    AdditionalRecipientStructOutput[],
    string
  ] & {
    considerationToken: string;
    considerationIdentifier: BigNumber;
    considerationAmount: BigNumber;
    offerer: string;
    zone: string;
    offerToken: string;
    offerIdentifier: BigNumber;
    offerAmount: BigNumber;
    basicOrderType: number;
    startTime: BigNumber;
    endTime: BigNumber;
    zoneHash: string;
    salt: BigNumber;
    offererConduitKey: string;
    fulfillerConduitKey: string;
    totalOriginalAdditionalRecipients: BigNumber;
    additionalRecipients: AdditionalRecipientStructOutput[];
    signature: string;
};
  
export type FulfillmentStruct = {
    offerComponents: FulfillmentComponentStruct[];
    considerationComponents: FulfillmentComponentStruct[];
};
  
export type FulfillmentStructOutput = [
    FulfillmentComponentStructOutput[],
    FulfillmentComponentStructOutput[]
  ] & {
    offerComponents: FulfillmentComponentStructOutput[];
    considerationComponents: FulfillmentComponentStructOutput[];
};
  
export interface SeaportInterface extends utils.Interface {
    functions: {
      "cancel((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256)[])": FunctionFragment;
      "fulfillAdvancedOrder(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),uint120,uint120,bytes,bytes),(uint256,uint8,uint256,uint256,bytes32[])[],bytes32,address)": FunctionFragment;
      "fulfillAvailableAdvancedOrders(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),uint120,uint120,bytes,bytes)[],(uint256,uint8,uint256,uint256,bytes32[])[],(uint256,uint256)[][],(uint256,uint256)[][],bytes32,address,uint256)": FunctionFragment;
      "fulfillAvailableOrders(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),bytes)[],(uint256,uint256)[][],(uint256,uint256)[][],bytes32,uint256)": FunctionFragment;
      "fulfillBasicOrder((address,uint256,uint256,address,address,address,uint256,uint256,uint8,uint256,uint256,bytes32,uint256,bytes32,bytes32,uint256,(uint256,address)[],bytes))": FunctionFragment;
      "fulfillBasicOrder_efficient_6GL6yc((address,uint256,uint256,address,address,address,uint256,uint256,uint8,uint256,uint256,bytes32,uint256,bytes32,bytes32,uint256,(uint256,address)[],bytes))": FunctionFragment;
      "fulfillOrder(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),bytes),bytes32)": FunctionFragment;
      "getContractOffererNonce(address)": FunctionFragment;
      "getCounter(address)": FunctionFragment;
      "getOrderHash((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256))": FunctionFragment;
      "getOrderStatus(bytes32)": FunctionFragment;
      "incrementCounter()": FunctionFragment;
      "information()": FunctionFragment;
      "matchAdvancedOrders(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),uint120,uint120,bytes,bytes)[],(uint256,uint8,uint256,uint256,bytes32[])[],((uint256,uint256)[],(uint256,uint256)[])[],address)": FunctionFragment;
      "matchOrders(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),bytes)[],((uint256,uint256)[],(uint256,uint256)[])[])": FunctionFragment;
      "name()": FunctionFragment;
      "validate(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),bytes)[])": FunctionFragment;
};
  
    getFunction(
      nameOrSignatureOrTopic:
        | "cancel"
        | "fulfillAdvancedOrder"
        | "fulfillAvailableAdvancedOrders"
        | "fulfillAvailableOrders"
        | "fulfillBasicOrder"
        | "fulfillBasicOrder_efficient_6GL6yc"
        | "fulfillOrder"
        | "getContractOffererNonce"
        | "getCounter"
        | "getOrderHash"
        | "getOrderStatus"
        | "incrementCounter"
        | "information"
        | "matchAdvancedOrders"
        | "matchOrders"
        | "name"
        | "validate"
    ): FunctionFragment;
  
    encodeFunctionData(
      functionFragment: "cancel",
      values: [OrderComponentsStruct[]]
    ): string;
    encodeFunctionData(
      functionFragment: "fulfillAdvancedOrder",
      values: [AdvancedOrderStruct, CriteriaResolverStruct[], BytesLike, string]
    ): string;
    encodeFunctionData(
      functionFragment: "fulfillAvailableAdvancedOrders",
      values: [
        AdvancedOrderStruct[],
        CriteriaResolverStruct[],
        FulfillmentComponentStruct[][],
        FulfillmentComponentStruct[][],
        BytesLike,
        string,
        BigNumberish
      ]
    ): string;
    encodeFunctionData(
      functionFragment: "fulfillAvailableOrders",
      values: [
        OrderStruct[],
        FulfillmentComponentStruct[][],
        FulfillmentComponentStruct[][],
        BytesLike,
        BigNumberish
      ]
    ): string;
    encodeFunctionData(
      functionFragment: "fulfillBasicOrder",
      values: [BasicOrderParametersStruct]
    ): string;
    encodeFunctionData(
      functionFragment: "fulfillBasicOrder_efficient_6GL6yc",
      values: [BasicOrderParametersStruct]
    ): string;
    encodeFunctionData(
      functionFragment: "fulfillOrder",
      values: [OrderStruct, BytesLike]
    ): string;
    encodeFunctionData(
      functionFragment: "getContractOffererNonce",
      values: [string]
    ): string;
    encodeFunctionData(functionFragment: "getCounter", values: [string]): string;
    encodeFunctionData(
      functionFragment: "getOrderHash",
      values: [OrderComponentsStruct]
    ): string;
    encodeFunctionData(
      functionFragment: "getOrderStatus",
      values: [BytesLike]
    ): string;
    encodeFunctionData(
      functionFragment: "incrementCounter",
      values?: undefined
    ): string;
    encodeFunctionData(
      functionFragment: "information",
      values?: undefined
    ): string;
    encodeFunctionData(
      functionFragment: "matchAdvancedOrders",
      values: [
        AdvancedOrderStruct[],
        CriteriaResolverStruct[],
        FulfillmentStruct[],
        string
      ]
    ): string;
    encodeFunctionData(
      functionFragment: "matchOrders",
      values: [OrderStruct[], FulfillmentStruct[]]
    ): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(
      functionFragment: "validate",
      values: [OrderStruct[]]
    ): string;
  
    decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
    decodeFunctionResult(
      functionFragment: "fulfillAdvancedOrder",
      data: BytesLike
    ): Result;
    decodeFunctionResult(
      functionFragment: "fulfillAvailableAdvancedOrders",
      data: BytesLike
    ): Result;
    decodeFunctionResult(
      functionFragment: "fulfillAvailableOrders",
      data: BytesLike
    ): Result;
    decodeFunctionResult(
      functionFragment: "fulfillBasicOrder",
      data: BytesLike
    ): Result;
    decodeFunctionResult(
      functionFragment: "fulfillBasicOrder_efficient_6GL6yc",
      data: BytesLike
    ): Result;
    decodeFunctionResult(
      functionFragment: "fulfillOrder",
      data: BytesLike
    ): Result;
    decodeFunctionResult(
      functionFragment: "getContractOffererNonce",
      data: BytesLike
    ): Result;
    decodeFunctionResult(functionFragment: "getCounter", data: BytesLike): Result;
    decodeFunctionResult(
      functionFragment: "getOrderHash",
      data: BytesLike
    ): Result;
    decodeFunctionResult(
      functionFragment: "getOrderStatus",
      data: BytesLike
    ): Result;
    decodeFunctionResult(
      functionFragment: "incrementCounter",
      data: BytesLike
    ): Result;
    decodeFunctionResult(
      functionFragment: "information",
      data: BytesLike
    ): Result;
    decodeFunctionResult(
      functionFragment: "matchAdvancedOrders",
      data: BytesLike
    ): Result;
    decodeFunctionResult(
      functionFragment: "matchOrders",
      data: BytesLike
    ): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validate", data: BytesLike): Result;
  
    events: {
      "CounterIncremented(uint256,address)": EventFragment;
      "OrderCancelled(bytes32,address,address)": EventFragment;
      "OrderFulfilled(bytes32,address,address,address,(uint8,address,uint256,uint256)[],(uint8,address,uint256,uint256,address)[])": EventFragment;
      "OrderValidated(bytes32,(address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256))": EventFragment;
      "OrdersMatched(bytes32[])": EventFragment;
};
  
    getEvent(nameOrSignatureOrTopic: "CounterIncremented"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OrderCancelled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OrderFulfilled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OrderValidated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OrdersMatched"): EventFragment;
  }
  
export interface CounterIncrementedEventObject {
    newCounter: BigNumber;
    offerer: string;
  }
export type CounterIncrementedEvent = TypedEvent<
    [BigNumber, string],
    CounterIncrementedEventObject
  >;
  
export type CounterIncrementedEventFilter =
    TypedEventFilter<CounterIncrementedEvent>;
  
export interface OrderCancelledEventObject {
    orderHash: string;
    offerer: string;
    zone: string;
  }
export type OrderCancelledEvent = TypedEvent<
    [string, string, string],
    OrderCancelledEventObject
  >;
  
export type OrderCancelledEventFilter = TypedEventFilter<OrderCancelledEvent>;
  
export interface OrderFulfilledEventObject {
    orderHash: string;
    offerer: string;
    zone: string;
    recipient: string;
    offer: SpentItemStructOutput[];
    consideration: ReceivedItemStructOutput[];
  }
export type OrderFulfilledEvent = TypedEvent<
    [
      string,
      string,
      string,
      string,
      SpentItemStructOutput[],
      ReceivedItemStructOutput[]
    ],
    OrderFulfilledEventObject
  >;
  
export type OrderFulfilledEventFilter = TypedEventFilter<OrderFulfilledEvent>;
  
export interface OrderValidatedEventObject {
    orderHash: string;
    orderParameters: OrderParametersStructOutput;
  }
export type OrderValidatedEvent = TypedEvent<
    [string, OrderParametersStructOutput],
    OrderValidatedEventObject
  >;
  
export type OrderValidatedEventFilter = TypedEventFilter<OrderValidatedEvent>;
  
export interface OrdersMatchedEventObject {
    orderHashes: string[];
  }
export type OrdersMatchedEvent = TypedEvent<
    [string[]],
    OrdersMatchedEventObject
  >;
  
export type OrdersMatchedEventFilter = TypedEventFilter<OrdersMatchedEvent>;
  

export interface SeaportBaseContract extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
  
    //interface: SeaportInterface;
  
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
      cancel(
        orders: OrderComponentsStruct[],
        overrides?: Overrides & { from?: string }
      ): Promise<ContractTransaction>;
  
      fulfillAdvancedOrder(
        arg0: AdvancedOrderStruct,
        arg1: CriteriaResolverStruct[],
        fulfillerConduitKey: BytesLike,
        recipient: string,
        overrides?: PayableOverrides & { from?: string }
      ): Promise<ContractTransaction>;
  
      fulfillAvailableAdvancedOrders(
        arg0: AdvancedOrderStruct[],
        arg1: CriteriaResolverStruct[],
        arg2: FulfillmentComponentStruct[][],
        arg3: FulfillmentComponentStruct[][],
        fulfillerConduitKey: BytesLike,
        recipient: string,
        maximumFulfilled: BigNumberish,
        overrides?: PayableOverrides & { from?: string }
      ): Promise<ContractTransaction>;
  
      fulfillAvailableOrders(
        arg0: OrderStruct[],
        arg1: FulfillmentComponentStruct[][],
        arg2: FulfillmentComponentStruct[][],
        fulfillerConduitKey: BytesLike,
        maximumFulfilled: BigNumberish,
        overrides?: PayableOverrides & { from?: string }
      ): Promise<ContractTransaction>;
  
      fulfillBasicOrder(
        parameters: BasicOrderParametersStruct,
        overrides?: PayableOverrides & { from?: string }
      ): Promise<ContractTransaction>;
  
      fulfillBasicOrder_efficient_6GL6yc(
        parameters: BasicOrderParametersStruct,
        overrides?: PayableOverrides & { from?: string }
      ): Promise<ContractTransaction>;
  
      fulfillOrder(
        arg0: OrderStruct,
        fulfillerConduitKey: BytesLike,
        overrides?: PayableOverrides & { from?: string }
      ): Promise<ContractTransaction>;
  
      getContractOffererNonce(
        contractOfferer: string,
        overrides?: CallOverrides
      ): Promise<[BigNumber] & { nonce: BigNumber }>;
  
      getCounter(
        offerer: string,
        overrides?: CallOverrides
      ): Promise<[BigNumber] & { counter: BigNumber }>;
  
      getOrderHash(
        arg0: OrderComponentsStruct,
        overrides?: CallOverrides
      ): Promise<[string] & { orderHash: string }>;
  
      getOrderStatus(
        orderHash: BytesLike,
        overrides?: CallOverrides
      ): Promise<
        [boolean, boolean, BigNumber, BigNumber] & {
          isValidated: boolean;
          isCancelled: boolean;
          totalFilled: BigNumber;
          totalSize: BigNumber;
        }
      >;
  
      incrementCounter(
        overrides?: Overrides & { from?: string }
      ): Promise<ContractTransaction>;
  
      information(
        overrides?: CallOverrides
      ): Promise<
        [string, string, string] & {
          version: string;
          domainSeparator: string;
          conduitController: string;
        }
      >;
  
      matchAdvancedOrders(
        arg0: AdvancedOrderStruct[],
        arg1: CriteriaResolverStruct[],
        arg2: FulfillmentStruct[],
        recipient: string,
        overrides?: PayableOverrides & { from?: string }
      ): Promise<ContractTransaction>;
  
      matchOrders(
        arg0: OrderStruct[],
        arg1: FulfillmentStruct[],
        overrides?: PayableOverrides & { from?: string }
      ): Promise<ContractTransaction>;
  
      name(overrides?: CallOverrides): Promise<[string]>;
  
      validate(
        arg0: OrderStruct[],
        overrides?: Overrides & { from?: string }
      ): Promise<ContractTransaction>;
};
};
