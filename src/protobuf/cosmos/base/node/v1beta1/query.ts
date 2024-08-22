// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               v5.27.3
// source: cosmos/base/node/v1beta1/query.proto

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";

export const protobufPackage = "cosmos.base.node.v1beta1";

/** ConfigRequest defines the request structure for the Config gRPC query. */
export interface ConfigRequest {
}

/** ConfigResponse defines the response structure for the Config gRPC query. */
export interface ConfigResponse {
  minimum_gas_price: string;
  pruning_keep_recent: string;
  pruning_interval: string;
  halt_height: string;
}

/** StateRequest defines the request structure for the status of a node. */
export interface StatusRequest {
}

/** StateResponse defines the response structure for the status of a node. */
export interface StatusResponse {
  /** earliest block height available in the store */
  earliest_store_height: string;
  /** current block height */
  height: string;
  /** block height timestamp */
  timestamp?:
    | Timestamp
    | undefined;
  /** app hash of the current block */
  app_hash: Uint8Array;
  /** validator hash provided by the consensus header */
  validator_hash: Uint8Array;
}

function createBaseConfigRequest(): ConfigRequest {
  return {};
}

export const ConfigRequest = {
  encode(_: ConfigRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ConfigRequest {
    return {};
  },

  toJSON(_: ConfigRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<ConfigRequest>): ConfigRequest {
    return ConfigRequest.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ConfigRequest>): ConfigRequest {
    const message = createBaseConfigRequest();
    return message;
  },
};

function createBaseConfigResponse(): ConfigResponse {
  return { minimum_gas_price: "", pruning_keep_recent: "", pruning_interval: "", halt_height: "0" };
}

export const ConfigResponse = {
  encode(message: ConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minimum_gas_price !== "") {
      writer.uint32(10).string(message.minimum_gas_price);
    }
    if (message.pruning_keep_recent !== "") {
      writer.uint32(18).string(message.pruning_keep_recent);
    }
    if (message.pruning_interval !== "") {
      writer.uint32(26).string(message.pruning_interval);
    }
    if (message.halt_height !== "0") {
      writer.uint32(32).uint64(message.halt_height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.minimum_gas_price = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pruning_keep_recent = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.pruning_interval = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.halt_height = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConfigResponse {
    return {
      minimum_gas_price: isSet(object.minimum_gas_price) ? globalThis.String(object.minimum_gas_price) : "",
      pruning_keep_recent: isSet(object.pruning_keep_recent) ? globalThis.String(object.pruning_keep_recent) : "",
      pruning_interval: isSet(object.pruning_interval) ? globalThis.String(object.pruning_interval) : "",
      halt_height: isSet(object.halt_height) ? globalThis.String(object.halt_height) : "0",
    };
  },

  toJSON(message: ConfigResponse): unknown {
    const obj: any = {};
    if (message.minimum_gas_price !== "") {
      obj.minimum_gas_price = message.minimum_gas_price;
    }
    if (message.pruning_keep_recent !== "") {
      obj.pruning_keep_recent = message.pruning_keep_recent;
    }
    if (message.pruning_interval !== "") {
      obj.pruning_interval = message.pruning_interval;
    }
    if (message.halt_height !== "0") {
      obj.halt_height = message.halt_height;
    }
    return obj;
  },

  create(base?: DeepPartial<ConfigResponse>): ConfigResponse {
    return ConfigResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConfigResponse>): ConfigResponse {
    const message = createBaseConfigResponse();
    message.minimum_gas_price = object.minimum_gas_price ?? "";
    message.pruning_keep_recent = object.pruning_keep_recent ?? "";
    message.pruning_interval = object.pruning_interval ?? "";
    message.halt_height = object.halt_height ?? "0";
    return message;
  },
};

function createBaseStatusRequest(): StatusRequest {
  return {};
}

export const StatusRequest = {
  encode(_: StatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatusRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): StatusRequest {
    return {};
  },

  toJSON(_: StatusRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<StatusRequest>): StatusRequest {
    return StatusRequest.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<StatusRequest>): StatusRequest {
    const message = createBaseStatusRequest();
    return message;
  },
};

function createBaseStatusResponse(): StatusResponse {
  return {
    earliest_store_height: "0",
    height: "0",
    timestamp: undefined,
    app_hash: new Uint8Array(0),
    validator_hash: new Uint8Array(0),
  };
}

export const StatusResponse = {
  encode(message: StatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.earliest_store_height !== "0") {
      writer.uint32(8).uint64(message.earliest_store_height);
    }
    if (message.height !== "0") {
      writer.uint32(16).uint64(message.height);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(26).fork()).ldelim();
    }
    if (message.app_hash.length !== 0) {
      writer.uint32(34).bytes(message.app_hash);
    }
    if (message.validator_hash.length !== 0) {
      writer.uint32(42).bytes(message.validator_hash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatusResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.earliest_store_height = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.height = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.timestamp = Timestamp.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.app_hash = reader.bytes();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.validator_hash = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StatusResponse {
    return {
      earliest_store_height: isSet(object.earliest_store_height)
        ? globalThis.String(object.earliest_store_height)
        : "0",
      height: isSet(object.height) ? globalThis.String(object.height) : "0",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      app_hash: isSet(object.app_hash) ? bytesFromBase64(object.app_hash) : new Uint8Array(0),
      validator_hash: isSet(object.validator_hash) ? bytesFromBase64(object.validator_hash) : new Uint8Array(0),
    };
  },

  toJSON(message: StatusResponse): unknown {
    const obj: any = {};
    if (message.earliest_store_height !== "0") {
      obj.earliest_store_height = message.earliest_store_height;
    }
    if (message.height !== "0") {
      obj.height = message.height;
    }
    if (message.timestamp !== undefined) {
      obj.timestamp = fromTimestamp(message.timestamp).toISOString();
    }
    if (message.app_hash.length !== 0) {
      obj.app_hash = base64FromBytes(message.app_hash);
    }
    if (message.validator_hash.length !== 0) {
      obj.validator_hash = base64FromBytes(message.validator_hash);
    }
    return obj;
  },

  create(base?: DeepPartial<StatusResponse>): StatusResponse {
    return StatusResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StatusResponse>): StatusResponse {
    const message = createBaseStatusResponse();
    message.earliest_store_height = object.earliest_store_height ?? "0";
    message.height = object.height ?? "0";
    message.timestamp = (object.timestamp !== undefined && object.timestamp !== null)
      ? Timestamp.fromPartial(object.timestamp)
      : undefined;
    message.app_hash = object.app_hash ?? new Uint8Array(0);
    message.validator_hash = object.validator_hash ?? new Uint8Array(0);
    return message;
  },
};

/** Service defines the gRPC querier service for node related queries. */
export interface Service {
  /** Config queries for the operator configuration. */
  Config(request: ConfigRequest): Promise<ConfigResponse>;
  /** Status queries for the node status. */
  Status(request: StatusRequest): Promise<StatusResponse>;
}

export const ServiceServiceName = "cosmos.base.node.v1beta1.Service";
export class ServiceClientImpl implements Service {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ServiceServiceName;
    this.rpc = rpc;
    this.Config = this.Config.bind(this);
    this.Status = this.Status.bind(this);
  }
  Config(request: ConfigRequest): Promise<ConfigResponse> {
    const data = ConfigRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Config", data);
    return promise.then((data) => ConfigResponse.decode(_m0.Reader.create(data)));
  }

  Status(request: StatusRequest): Promise<StatusResponse> {
    const data = StatusRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Status", data);
    return promise.then((data) => StatusResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000).toString();
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (globalThis.Number(t.seconds) || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Timestamp {
  if (o instanceof globalThis.Date) {
    return toTimestamp(o);
  } else if (typeof o === "string") {
    return toTimestamp(new globalThis.Date(o));
  } else {
    return Timestamp.fromJSON(o);
  }
}

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
