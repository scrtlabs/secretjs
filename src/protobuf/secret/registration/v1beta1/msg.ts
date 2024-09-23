// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               v5.28.1
// source: secret/registration/v1beta1/msg.proto

/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "secret.registration.v1beta1";

export interface RaAuthenticate {
  /**
   * bytes sender = 1 [ (gogoproto.casttype) =
   *                        "github.com/cosmos/cosmos-sdk/types.AccAddress" ];
   */
  sender: string;
  certificate: Uint8Array;
  /**
   * string sender_address = 3 [ (cosmos_proto.scalar) = "cosmos.AddressString"
   * ];
   */
  sender_addr: Uint8Array;
}

export interface RaAuthenticateResponse {
  data: string;
  events: string;
}

export interface MasterKey {
  bytes: Uint8Array;
}

export interface Key {
  key: Uint8Array;
}

function createBaseRaAuthenticate(): RaAuthenticate {
  return { sender: "", certificate: new Uint8Array(0), sender_addr: new Uint8Array(0) };
}

export const RaAuthenticate = {
  encode(message: RaAuthenticate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.certificate.length !== 0) {
      writer.uint32(18).bytes(message.certificate);
    }
    if (message.sender_addr.length !== 0) {
      writer.uint32(26).bytes(message.sender_addr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RaAuthenticate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRaAuthenticate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.certificate = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sender_addr = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RaAuthenticate {
    return {
      sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
      certificate: isSet(object.certificate) ? bytesFromBase64(object.certificate) : new Uint8Array(0),
      sender_addr: isSet(object.sender_addr) ? bytesFromBase64(object.sender_addr) : new Uint8Array(0),
    };
  },

  toJSON(message: RaAuthenticate): unknown {
    const obj: any = {};
    if (message.sender !== "") {
      obj.sender = message.sender;
    }
    if (message.certificate.length !== 0) {
      obj.certificate = base64FromBytes(message.certificate);
    }
    if (message.sender_addr.length !== 0) {
      obj.sender_addr = base64FromBytes(message.sender_addr);
    }
    return obj;
  },

  create(base?: DeepPartial<RaAuthenticate>): RaAuthenticate {
    return RaAuthenticate.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RaAuthenticate>): RaAuthenticate {
    const message = createBaseRaAuthenticate();
    message.sender = object.sender ?? "";
    message.certificate = object.certificate ?? new Uint8Array(0);
    message.sender_addr = object.sender_addr ?? new Uint8Array(0);
    return message;
  },
};

function createBaseRaAuthenticateResponse(): RaAuthenticateResponse {
  return { data: "", events: "" };
}

export const RaAuthenticateResponse = {
  encode(message: RaAuthenticateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    if (message.events !== "") {
      writer.uint32(18).string(message.events);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RaAuthenticateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRaAuthenticateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.events = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RaAuthenticateResponse {
    return {
      data: isSet(object.data) ? globalThis.String(object.data) : "",
      events: isSet(object.events) ? globalThis.String(object.events) : "",
    };
  },

  toJSON(message: RaAuthenticateResponse): unknown {
    const obj: any = {};
    if (message.data !== "") {
      obj.data = message.data;
    }
    if (message.events !== "") {
      obj.events = message.events;
    }
    return obj;
  },

  create(base?: DeepPartial<RaAuthenticateResponse>): RaAuthenticateResponse {
    return RaAuthenticateResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RaAuthenticateResponse>): RaAuthenticateResponse {
    const message = createBaseRaAuthenticateResponse();
    message.data = object.data ?? "";
    message.events = object.events ?? "";
    return message;
  },
};

function createBaseMasterKey(): MasterKey {
  return { bytes: new Uint8Array(0) };
}

export const MasterKey = {
  encode(message: MasterKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bytes.length !== 0) {
      writer.uint32(10).bytes(message.bytes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MasterKey {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMasterKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bytes = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MasterKey {
    return { bytes: isSet(object.bytes) ? bytesFromBase64(object.bytes) : new Uint8Array(0) };
  },

  toJSON(message: MasterKey): unknown {
    const obj: any = {};
    if (message.bytes.length !== 0) {
      obj.bytes = base64FromBytes(message.bytes);
    }
    return obj;
  },

  create(base?: DeepPartial<MasterKey>): MasterKey {
    return MasterKey.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MasterKey>): MasterKey {
    const message = createBaseMasterKey();
    message.bytes = object.bytes ?? new Uint8Array(0);
    return message;
  },
};

function createBaseKey(): Key {
  return { key: new Uint8Array(0) };
}

export const Key = {
  encode(message: Key, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Key {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Key {
    return { key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0) };
  },

  toJSON(message: Key): unknown {
    const obj: any = {};
    if (message.key.length !== 0) {
      obj.key = base64FromBytes(message.key);
    }
    return obj;
  },

  create(base?: DeepPartial<Key>): Key {
    return Key.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Key>): Key {
    const message = createBaseKey();
    message.key = object.key ?? new Uint8Array(0);
    return message;
  },
};

/** Msg defines the wasm Msg service. */
export interface Msg {
  /** Register and authenticate new node */
  RegisterAuth(request: RaAuthenticate): Promise<RaAuthenticateResponse>;
}

export const MsgServiceName = "secret.registration.v1beta1.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.RegisterAuth = this.RegisterAuth.bind(this);
  }
  RegisterAuth(request: RaAuthenticate): Promise<RaAuthenticateResponse> {
    const data = RaAuthenticate.encode(request).finish();
    const promise = this.rpc.request(this.service, "RegisterAuth", data);
    return promise.then((data) => RaAuthenticateResponse.decode(_m0.Reader.create(data)));
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
