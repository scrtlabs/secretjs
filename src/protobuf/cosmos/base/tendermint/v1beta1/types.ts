// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               v5.27.2
// source: cosmos/base/tendermint/v1beta1/types.proto

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { EvidenceList } from "../../../../tendermint/types/evidence";
import { BlockID, Commit, Data } from "../../../../tendermint/types/types";
import { Consensus } from "../../../../tendermint/version/types";

export const protobufPackage = "cosmos.base.tendermint.v1beta1";

/**
 * Block is tendermint type Block, with the Header proposer address
 * field converted to bech32 string.
 */
export interface Block {
  header?: Header | undefined;
  data?: Data | undefined;
  evidence?: EvidenceList | undefined;
  last_commit?: Commit | undefined;
}

/** Header defines the structure of a Tendermint block header. */
export interface Header {
  /** basic block info */
  version?: Consensus | undefined;
  chain_id: string;
  height: string;
  time?:
    | Timestamp
    | undefined;
  /** prev block info */
  last_block_id?:
    | BlockID
    | undefined;
  /** hashes of block data */
  last_commit_hash: Uint8Array;
  /** transactions */
  data_hash: Uint8Array;
  /** hashes from the app output from the prev block */
  validators_hash: Uint8Array;
  /** validators for the next block */
  next_validators_hash: Uint8Array;
  /** consensus params for current block */
  consensus_hash: Uint8Array;
  /** state after txs from the previous block */
  app_hash: Uint8Array;
  /** root hash of all results from the txs from the previous block */
  last_results_hash: Uint8Array;
  /** consensus info */
  evidence_hash: Uint8Array;
  /**
   * proposer_address is the original block proposer address, formatted as a Bech32 string.
   * In Tendermint, this type is `bytes`, but in the SDK, we convert it to a Bech32 string
   * for better UX.
   */
  proposer_address: string;
}

function createBaseBlock(): Block {
  return { header: undefined, data: undefined, evidence: undefined, last_commit: undefined };
}

export const Block = {
  encode(message: Block, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.data !== undefined) {
      Data.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    if (message.evidence !== undefined) {
      EvidenceList.encode(message.evidence, writer.uint32(26).fork()).ldelim();
    }
    if (message.last_commit !== undefined) {
      Commit.encode(message.last_commit, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Block {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.header = Header.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.data = Data.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.evidence = EvidenceList.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.last_commit = Commit.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Block {
    return {
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      data: isSet(object.data) ? Data.fromJSON(object.data) : undefined,
      evidence: isSet(object.evidence) ? EvidenceList.fromJSON(object.evidence) : undefined,
      last_commit: isSet(object.last_commit) ? Commit.fromJSON(object.last_commit) : undefined,
    };
  },

  toJSON(message: Block): unknown {
    const obj: any = {};
    if (message.header !== undefined) {
      obj.header = Header.toJSON(message.header);
    }
    if (message.data !== undefined) {
      obj.data = Data.toJSON(message.data);
    }
    if (message.evidence !== undefined) {
      obj.evidence = EvidenceList.toJSON(message.evidence);
    }
    if (message.last_commit !== undefined) {
      obj.last_commit = Commit.toJSON(message.last_commit);
    }
    return obj;
  },

  create(base?: DeepPartial<Block>): Block {
    return Block.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Block>): Block {
    const message = createBaseBlock();
    message.header = (object.header !== undefined && object.header !== null)
      ? Header.fromPartial(object.header)
      : undefined;
    message.data = (object.data !== undefined && object.data !== null) ? Data.fromPartial(object.data) : undefined;
    message.evidence = (object.evidence !== undefined && object.evidence !== null)
      ? EvidenceList.fromPartial(object.evidence)
      : undefined;
    message.last_commit = (object.last_commit !== undefined && object.last_commit !== null)
      ? Commit.fromPartial(object.last_commit)
      : undefined;
    return message;
  },
};

function createBaseHeader(): Header {
  return {
    version: undefined,
    chain_id: "",
    height: "0",
    time: undefined,
    last_block_id: undefined,
    last_commit_hash: new Uint8Array(0),
    data_hash: new Uint8Array(0),
    validators_hash: new Uint8Array(0),
    next_validators_hash: new Uint8Array(0),
    consensus_hash: new Uint8Array(0),
    app_hash: new Uint8Array(0),
    last_results_hash: new Uint8Array(0),
    evidence_hash: new Uint8Array(0),
    proposer_address: "",
  };
}

export const Header = {
  encode(message: Header, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== undefined) {
      Consensus.encode(message.version, writer.uint32(10).fork()).ldelim();
    }
    if (message.chain_id !== "") {
      writer.uint32(18).string(message.chain_id);
    }
    if (message.height !== "0") {
      writer.uint32(24).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(34).fork()).ldelim();
    }
    if (message.last_block_id !== undefined) {
      BlockID.encode(message.last_block_id, writer.uint32(42).fork()).ldelim();
    }
    if (message.last_commit_hash.length !== 0) {
      writer.uint32(50).bytes(message.last_commit_hash);
    }
    if (message.data_hash.length !== 0) {
      writer.uint32(58).bytes(message.data_hash);
    }
    if (message.validators_hash.length !== 0) {
      writer.uint32(66).bytes(message.validators_hash);
    }
    if (message.next_validators_hash.length !== 0) {
      writer.uint32(74).bytes(message.next_validators_hash);
    }
    if (message.consensus_hash.length !== 0) {
      writer.uint32(82).bytes(message.consensus_hash);
    }
    if (message.app_hash.length !== 0) {
      writer.uint32(90).bytes(message.app_hash);
    }
    if (message.last_results_hash.length !== 0) {
      writer.uint32(98).bytes(message.last_results_hash);
    }
    if (message.evidence_hash.length !== 0) {
      writer.uint32(106).bytes(message.evidence_hash);
    }
    if (message.proposer_address !== "") {
      writer.uint32(114).string(message.proposer_address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Header {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.version = Consensus.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.chain_id = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.height = longToString(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.time = Timestamp.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.last_block_id = BlockID.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.last_commit_hash = reader.bytes();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.data_hash = reader.bytes();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.validators_hash = reader.bytes();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.next_validators_hash = reader.bytes();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.consensus_hash = reader.bytes();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.app_hash = reader.bytes();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.last_results_hash = reader.bytes();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.evidence_hash = reader.bytes();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.proposer_address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Header {
    return {
      version: isSet(object.version) ? Consensus.fromJSON(object.version) : undefined,
      chain_id: isSet(object.chain_id) ? globalThis.String(object.chain_id) : "",
      height: isSet(object.height) ? globalThis.String(object.height) : "0",
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      last_block_id: isSet(object.last_block_id) ? BlockID.fromJSON(object.last_block_id) : undefined,
      last_commit_hash: isSet(object.last_commit_hash) ? bytesFromBase64(object.last_commit_hash) : new Uint8Array(0),
      data_hash: isSet(object.data_hash) ? bytesFromBase64(object.data_hash) : new Uint8Array(0),
      validators_hash: isSet(object.validators_hash) ? bytesFromBase64(object.validators_hash) : new Uint8Array(0),
      next_validators_hash: isSet(object.next_validators_hash)
        ? bytesFromBase64(object.next_validators_hash)
        : new Uint8Array(0),
      consensus_hash: isSet(object.consensus_hash) ? bytesFromBase64(object.consensus_hash) : new Uint8Array(0),
      app_hash: isSet(object.app_hash) ? bytesFromBase64(object.app_hash) : new Uint8Array(0),
      last_results_hash: isSet(object.last_results_hash)
        ? bytesFromBase64(object.last_results_hash)
        : new Uint8Array(0),
      evidence_hash: isSet(object.evidence_hash) ? bytesFromBase64(object.evidence_hash) : new Uint8Array(0),
      proposer_address: isSet(object.proposer_address) ? globalThis.String(object.proposer_address) : "",
    };
  },

  toJSON(message: Header): unknown {
    const obj: any = {};
    if (message.version !== undefined) {
      obj.version = Consensus.toJSON(message.version);
    }
    if (message.chain_id !== "") {
      obj.chain_id = message.chain_id;
    }
    if (message.height !== "0") {
      obj.height = message.height;
    }
    if (message.time !== undefined) {
      obj.time = fromTimestamp(message.time).toISOString();
    }
    if (message.last_block_id !== undefined) {
      obj.last_block_id = BlockID.toJSON(message.last_block_id);
    }
    if (message.last_commit_hash.length !== 0) {
      obj.last_commit_hash = base64FromBytes(message.last_commit_hash);
    }
    if (message.data_hash.length !== 0) {
      obj.data_hash = base64FromBytes(message.data_hash);
    }
    if (message.validators_hash.length !== 0) {
      obj.validators_hash = base64FromBytes(message.validators_hash);
    }
    if (message.next_validators_hash.length !== 0) {
      obj.next_validators_hash = base64FromBytes(message.next_validators_hash);
    }
    if (message.consensus_hash.length !== 0) {
      obj.consensus_hash = base64FromBytes(message.consensus_hash);
    }
    if (message.app_hash.length !== 0) {
      obj.app_hash = base64FromBytes(message.app_hash);
    }
    if (message.last_results_hash.length !== 0) {
      obj.last_results_hash = base64FromBytes(message.last_results_hash);
    }
    if (message.evidence_hash.length !== 0) {
      obj.evidence_hash = base64FromBytes(message.evidence_hash);
    }
    if (message.proposer_address !== "") {
      obj.proposer_address = message.proposer_address;
    }
    return obj;
  },

  create(base?: DeepPartial<Header>): Header {
    return Header.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Header>): Header {
    const message = createBaseHeader();
    message.version = (object.version !== undefined && object.version !== null)
      ? Consensus.fromPartial(object.version)
      : undefined;
    message.chain_id = object.chain_id ?? "";
    message.height = object.height ?? "0";
    message.time = (object.time !== undefined && object.time !== null) ? Timestamp.fromPartial(object.time) : undefined;
    message.last_block_id = (object.last_block_id !== undefined && object.last_block_id !== null)
      ? BlockID.fromPartial(object.last_block_id)
      : undefined;
    message.last_commit_hash = object.last_commit_hash ?? new Uint8Array(0);
    message.data_hash = object.data_hash ?? new Uint8Array(0);
    message.validators_hash = object.validators_hash ?? new Uint8Array(0);
    message.next_validators_hash = object.next_validators_hash ?? new Uint8Array(0);
    message.consensus_hash = object.consensus_hash ?? new Uint8Array(0);
    message.app_hash = object.app_hash ?? new Uint8Array(0);
    message.last_results_hash = object.last_results_hash ?? new Uint8Array(0);
    message.evidence_hash = object.evidence_hash ?? new Uint8Array(0);
    message.proposer_address = object.proposer_address ?? "";
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
