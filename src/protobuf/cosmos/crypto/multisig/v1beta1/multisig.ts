// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               v5.27.3
// source: cosmos/crypto/multisig/v1beta1/multisig.proto

/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "cosmos.crypto.multisig.v1beta1";

/**
 * MultiSignature wraps the signatures from a multisig.LegacyAminoPubKey.
 * See cosmos.tx.v1betata1.ModeInfo.Multi for how to specify which signers
 * signed and with which modes.
 */
export interface MultiSignature {
  signatures: Uint8Array[];
}

/**
 * CompactBitArray is an implementation of a space efficient bit array.
 * This is used to ensure that the encoded data takes up a minimal amount of
 * space after proto encoding.
 * This is not thread safe, and is not intended for concurrent usage.
 */
export interface CompactBitArray {
  extra_bits_stored: number;
  elems: Uint8Array;
}

function createBaseMultiSignature(): MultiSignature {
  return { signatures: [] };
}

export const MultiSignature = {
  encode(message: MultiSignature, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.signatures) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MultiSignature {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultiSignature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.signatures.push(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MultiSignature {
    return {
      signatures: globalThis.Array.isArray(object?.signatures)
        ? object.signatures.map((e: any) => bytesFromBase64(e))
        : [],
    };
  },

  toJSON(message: MultiSignature): unknown {
    const obj: any = {};
    if (message.signatures?.length) {
      obj.signatures = message.signatures.map((e) => base64FromBytes(e));
    }
    return obj;
  },

  create(base?: DeepPartial<MultiSignature>): MultiSignature {
    return MultiSignature.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MultiSignature>): MultiSignature {
    const message = createBaseMultiSignature();
    message.signatures = object.signatures?.map((e) => e) || [];
    return message;
  },
};

function createBaseCompactBitArray(): CompactBitArray {
  return { extra_bits_stored: 0, elems: new Uint8Array(0) };
}

export const CompactBitArray = {
  encode(message: CompactBitArray, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.extra_bits_stored !== 0) {
      writer.uint32(8).uint32(message.extra_bits_stored);
    }
    if (message.elems.length !== 0) {
      writer.uint32(18).bytes(message.elems);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CompactBitArray {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompactBitArray();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.extra_bits_stored = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.elems = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CompactBitArray {
    return {
      extra_bits_stored: isSet(object.extra_bits_stored) ? globalThis.Number(object.extra_bits_stored) : 0,
      elems: isSet(object.elems) ? bytesFromBase64(object.elems) : new Uint8Array(0),
    };
  },

  toJSON(message: CompactBitArray): unknown {
    const obj: any = {};
    if (message.extra_bits_stored !== 0) {
      obj.extra_bits_stored = Math.round(message.extra_bits_stored);
    }
    if (message.elems.length !== 0) {
      obj.elems = base64FromBytes(message.elems);
    }
    return obj;
  },

  create(base?: DeepPartial<CompactBitArray>): CompactBitArray {
    return CompactBitArray.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CompactBitArray>): CompactBitArray {
    const message = createBaseCompactBitArray();
    message.extra_bits_stored = object.extra_bits_stored ?? 0;
    message.elems = object.elems ?? new Uint8Array(0);
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
