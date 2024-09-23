// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               v5.28.1
// source: secret/emergencybutton/v1beta1/params.proto

/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "secret.emergencybutton.v1beta1";

/** Params defines the parameters for the ibc-rate-limit module. */
export interface Params {
  switch_status: string;
  pauser_address: string;
}

function createBaseParams(): Params {
  return { switch_status: "", pauser_address: "" };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.switch_status !== "") {
      writer.uint32(10).string(message.switch_status);
    }
    if (message.pauser_address !== "") {
      writer.uint32(18).string(message.pauser_address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.switch_status = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pauser_address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      switch_status: isSet(object.switch_status) ? globalThis.String(object.switch_status) : "",
      pauser_address: isSet(object.pauser_address) ? globalThis.String(object.pauser_address) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.switch_status !== "") {
      obj.switch_status = message.switch_status;
    }
    if (message.pauser_address !== "") {
      obj.pauser_address = message.pauser_address;
    }
    return obj;
  },

  create(base?: DeepPartial<Params>): Params {
    return Params.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.switch_status = object.switch_status ?? "";
    message.pauser_address = object.pauser_address ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
