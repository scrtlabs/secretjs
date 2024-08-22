// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               v5.27.3
// source: cosmos/store/v1beta1/listening.proto

/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { RequestFinalizeBlock, ResponseCommit, ResponseFinalizeBlock } from "../../../tendermint/abci/types";

export const protobufPackage = "cosmos.store.v1beta1";

/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 *
 * Since: cosmos-sdk 0.43
 */
export interface StoreKVPair {
  /** the store key for the KVStore this pair originates from */
  store_key: string;
  /** true indicates a delete operation, false indicates a set operation */
  delete: boolean;
  key: Uint8Array;
  value: Uint8Array;
}

/**
 * BlockMetadata contains all the abci event data of a block
 * the file streamer dump them into files together with the state changes.
 */
export interface BlockMetadata {
  response_commit?: ResponseCommit | undefined;
  request_finalize_block?:
    | RequestFinalizeBlock
    | undefined;
  /** TODO: should we renumber this? */
  response_finalize_block?: ResponseFinalizeBlock | undefined;
}

function createBaseStoreKVPair(): StoreKVPair {
  return { store_key: "", delete: false, key: new Uint8Array(0), value: new Uint8Array(0) };
}

export const StoreKVPair = {
  encode(message: StoreKVPair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.store_key !== "") {
      writer.uint32(10).string(message.store_key);
    }
    if (message.delete !== false) {
      writer.uint32(16).bool(message.delete);
    }
    if (message.key.length !== 0) {
      writer.uint32(26).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(34).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreKVPair {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreKVPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.store_key = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.delete = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.key = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): StoreKVPair {
    return {
      store_key: isSet(object.store_key) ? globalThis.String(object.store_key) : "",
      delete: isSet(object.delete) ? globalThis.Boolean(object.delete) : false,
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0),
    };
  },

  toJSON(message: StoreKVPair): unknown {
    const obj: any = {};
    if (message.store_key !== "") {
      obj.store_key = message.store_key;
    }
    if (message.delete !== false) {
      obj.delete = message.delete;
    }
    if (message.key.length !== 0) {
      obj.key = base64FromBytes(message.key);
    }
    if (message.value.length !== 0) {
      obj.value = base64FromBytes(message.value);
    }
    return obj;
  },

  create(base?: DeepPartial<StoreKVPair>): StoreKVPair {
    return StoreKVPair.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StoreKVPair>): StoreKVPair {
    const message = createBaseStoreKVPair();
    message.store_key = object.store_key ?? "";
    message.delete = object.delete ?? false;
    message.key = object.key ?? new Uint8Array(0);
    message.value = object.value ?? new Uint8Array(0);
    return message;
  },
};

function createBaseBlockMetadata(): BlockMetadata {
  return { response_commit: undefined, request_finalize_block: undefined, response_finalize_block: undefined };
}

export const BlockMetadata = {
  encode(message: BlockMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response_commit !== undefined) {
      ResponseCommit.encode(message.response_commit, writer.uint32(50).fork()).ldelim();
    }
    if (message.request_finalize_block !== undefined) {
      RequestFinalizeBlock.encode(message.request_finalize_block, writer.uint32(58).fork()).ldelim();
    }
    if (message.response_finalize_block !== undefined) {
      ResponseFinalizeBlock.encode(message.response_finalize_block, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 6:
          if (tag !== 50) {
            break;
          }

          message.response_commit = ResponseCommit.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.request_finalize_block = RequestFinalizeBlock.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.response_finalize_block = ResponseFinalizeBlock.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BlockMetadata {
    return {
      response_commit: isSet(object.response_commit) ? ResponseCommit.fromJSON(object.response_commit) : undefined,
      request_finalize_block: isSet(object.request_finalize_block)
        ? RequestFinalizeBlock.fromJSON(object.request_finalize_block)
        : undefined,
      response_finalize_block: isSet(object.response_finalize_block)
        ? ResponseFinalizeBlock.fromJSON(object.response_finalize_block)
        : undefined,
    };
  },

  toJSON(message: BlockMetadata): unknown {
    const obj: any = {};
    if (message.response_commit !== undefined) {
      obj.response_commit = ResponseCommit.toJSON(message.response_commit);
    }
    if (message.request_finalize_block !== undefined) {
      obj.request_finalize_block = RequestFinalizeBlock.toJSON(message.request_finalize_block);
    }
    if (message.response_finalize_block !== undefined) {
      obj.response_finalize_block = ResponseFinalizeBlock.toJSON(message.response_finalize_block);
    }
    return obj;
  },

  create(base?: DeepPartial<BlockMetadata>): BlockMetadata {
    return BlockMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BlockMetadata>): BlockMetadata {
    const message = createBaseBlockMetadata();
    message.response_commit = (object.response_commit !== undefined && object.response_commit !== null)
      ? ResponseCommit.fromPartial(object.response_commit)
      : undefined;
    message.request_finalize_block =
      (object.request_finalize_block !== undefined && object.request_finalize_block !== null)
        ? RequestFinalizeBlock.fromPartial(object.request_finalize_block)
        : undefined;
    message.response_finalize_block =
      (object.response_finalize_block !== undefined && object.response_finalize_block !== null)
        ? ResponseFinalizeBlock.fromPartial(object.response_finalize_block)
        : undefined;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
