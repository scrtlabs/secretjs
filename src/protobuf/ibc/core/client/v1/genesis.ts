// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               v5.27.3
// source: ibc/core/client/v1/genesis.proto

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { ClientConsensusStates, IdentifiedClientState, Params } from "./client";

export const protobufPackage = "ibc.core.client.v1";

/** GenesisState defines the ibc client submodule's genesis state. */
export interface GenesisState {
  /** client states with their corresponding identifiers */
  clients: IdentifiedClientState[];
  /** consensus states from each client */
  clients_consensus: ClientConsensusStates[];
  /** metadata from each client */
  clients_metadata: IdentifiedGenesisMetadata[];
  params?:
    | Params
    | undefined;
  /**
   * Deprecated: create_localhost has been deprecated.
   * The localhost client is automatically created at genesis.
   *
   * @deprecated
   */
  create_localhost: boolean;
  /** the sequence for the next generated client identifier */
  next_client_sequence: string;
}

/**
 * GenesisMetadata defines the genesis type for metadata that clients may return
 * with ExportMetadata
 */
export interface GenesisMetadata {
  /** store key of metadata without clientID-prefix */
  key: Uint8Array;
  /** metadata value */
  value: Uint8Array;
}

/**
 * IdentifiedGenesisMetadata has the client metadata with the corresponding
 * client id.
 */
export interface IdentifiedGenesisMetadata {
  client_id: string;
  client_metadata: GenesisMetadata[];
}

function createBaseGenesisState(): GenesisState {
  return {
    clients: [],
    clients_consensus: [],
    clients_metadata: [],
    params: undefined,
    create_localhost: false,
    next_client_sequence: "0",
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.clients) {
      IdentifiedClientState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.clients_consensus) {
      ClientConsensusStates.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.clients_metadata) {
      IdentifiedGenesisMetadata.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    if (message.create_localhost !== false) {
      writer.uint32(40).bool(message.create_localhost);
    }
    if (message.next_client_sequence !== "0") {
      writer.uint32(48).uint64(message.next_client_sequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clients.push(IdentifiedClientState.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.clients_consensus.push(ClientConsensusStates.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.clients_metadata.push(IdentifiedGenesisMetadata.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.create_localhost = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.next_client_sequence = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      clients: globalThis.Array.isArray(object?.clients)
        ? object.clients.map((e: any) => IdentifiedClientState.fromJSON(e))
        : [],
      clients_consensus: globalThis.Array.isArray(object?.clients_consensus)
        ? object.clients_consensus.map((e: any) => ClientConsensusStates.fromJSON(e))
        : [],
      clients_metadata: globalThis.Array.isArray(object?.clients_metadata)
        ? object.clients_metadata.map((e: any) => IdentifiedGenesisMetadata.fromJSON(e))
        : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      create_localhost: isSet(object.create_localhost) ? globalThis.Boolean(object.create_localhost) : false,
      next_client_sequence: isSet(object.next_client_sequence) ? globalThis.String(object.next_client_sequence) : "0",
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.clients?.length) {
      obj.clients = message.clients.map((e) => IdentifiedClientState.toJSON(e));
    }
    if (message.clients_consensus?.length) {
      obj.clients_consensus = message.clients_consensus.map((e) => ClientConsensusStates.toJSON(e));
    }
    if (message.clients_metadata?.length) {
      obj.clients_metadata = message.clients_metadata.map((e) => IdentifiedGenesisMetadata.toJSON(e));
    }
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    if (message.create_localhost !== false) {
      obj.create_localhost = message.create_localhost;
    }
    if (message.next_client_sequence !== "0") {
      obj.next_client_sequence = message.next_client_sequence;
    }
    return obj;
  },

  create(base?: DeepPartial<GenesisState>): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.clients = object.clients?.map((e) => IdentifiedClientState.fromPartial(e)) || [];
    message.clients_consensus = object.clients_consensus?.map((e) => ClientConsensusStates.fromPartial(e)) || [];
    message.clients_metadata = object.clients_metadata?.map((e) => IdentifiedGenesisMetadata.fromPartial(e)) || [];
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.create_localhost = object.create_localhost ?? false;
    message.next_client_sequence = object.next_client_sequence ?? "0";
    return message;
  },
};

function createBaseGenesisMetadata(): GenesisMetadata {
  return { key: new Uint8Array(0), value: new Uint8Array(0) };
}

export const GenesisMetadata = {
  encode(message: GenesisMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisMetadata {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0),
    };
  },

  toJSON(message: GenesisMetadata): unknown {
    const obj: any = {};
    if (message.key.length !== 0) {
      obj.key = base64FromBytes(message.key);
    }
    if (message.value.length !== 0) {
      obj.value = base64FromBytes(message.value);
    }
    return obj;
  },

  create(base?: DeepPartial<GenesisMetadata>): GenesisMetadata {
    return GenesisMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GenesisMetadata>): GenesisMetadata {
    const message = createBaseGenesisMetadata();
    message.key = object.key ?? new Uint8Array(0);
    message.value = object.value ?? new Uint8Array(0);
    return message;
  },
};

function createBaseIdentifiedGenesisMetadata(): IdentifiedGenesisMetadata {
  return { client_id: "", client_metadata: [] };
}

export const IdentifiedGenesisMetadata = {
  encode(message: IdentifiedGenesisMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    for (const v of message.client_metadata) {
      GenesisMetadata.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IdentifiedGenesisMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedGenesisMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.client_id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.client_metadata.push(GenesisMetadata.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IdentifiedGenesisMetadata {
    return {
      client_id: isSet(object.client_id) ? globalThis.String(object.client_id) : "",
      client_metadata: globalThis.Array.isArray(object?.client_metadata)
        ? object.client_metadata.map((e: any) => GenesisMetadata.fromJSON(e))
        : [],
    };
  },

  toJSON(message: IdentifiedGenesisMetadata): unknown {
    const obj: any = {};
    if (message.client_id !== "") {
      obj.client_id = message.client_id;
    }
    if (message.client_metadata?.length) {
      obj.client_metadata = message.client_metadata.map((e) => GenesisMetadata.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<IdentifiedGenesisMetadata>): IdentifiedGenesisMetadata {
    return IdentifiedGenesisMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<IdentifiedGenesisMetadata>): IdentifiedGenesisMetadata {
    const message = createBaseIdentifiedGenesisMetadata();
    message.client_id = object.client_id ?? "";
    message.client_metadata = object.client_metadata?.map((e) => GenesisMetadata.fromPartial(e)) || [];
    return message;
  },
};

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
