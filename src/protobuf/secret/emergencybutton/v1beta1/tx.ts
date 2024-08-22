// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               v5.27.3
// source: secret/emergencybutton/v1beta1/tx.proto

/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "secret.emergencybutton.v1beta1";

/**
 * MsgToggleIbcSwitch represents a message to toggle the emergencybutton status
 * by the defined pauser.
 */
export interface MsgToggleIbcSwitch {
  sender: string;
}

/** MsgToggleIbcSwitchResponse defines the response type for the toggle. */
export interface MsgToggleIbcSwitchResponse {
}

function createBaseMsgToggleIbcSwitch(): MsgToggleIbcSwitch {
  return { sender: "" };
}

export const MsgToggleIbcSwitch = {
  encode(message: MsgToggleIbcSwitch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgToggleIbcSwitch {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleIbcSwitch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgToggleIbcSwitch {
    return { sender: isSet(object.sender) ? globalThis.String(object.sender) : "" };
  },

  toJSON(message: MsgToggleIbcSwitch): unknown {
    const obj: any = {};
    if (message.sender !== "") {
      obj.sender = message.sender;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgToggleIbcSwitch>): MsgToggleIbcSwitch {
    return MsgToggleIbcSwitch.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgToggleIbcSwitch>): MsgToggleIbcSwitch {
    const message = createBaseMsgToggleIbcSwitch();
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseMsgToggleIbcSwitchResponse(): MsgToggleIbcSwitchResponse {
  return {};
}

export const MsgToggleIbcSwitchResponse = {
  encode(_: MsgToggleIbcSwitchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgToggleIbcSwitchResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleIbcSwitchResponse();
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

  fromJSON(_: any): MsgToggleIbcSwitchResponse {
    return {};
  },

  toJSON(_: MsgToggleIbcSwitchResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgToggleIbcSwitchResponse>): MsgToggleIbcSwitchResponse {
    return MsgToggleIbcSwitchResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgToggleIbcSwitchResponse>): MsgToggleIbcSwitchResponse {
    const message = createBaseMsgToggleIbcSwitchResponse();
    return message;
  },
};

/** Msg defines the bank Msg service. */
export interface Msg {
  /**
   * ToggleIbcSwitch defines a method for toggling the status of the
   * emergencybutton.
   */
  ToggleIbcSwitch(request: MsgToggleIbcSwitch): Promise<MsgToggleIbcSwitchResponse>;
}

export const MsgServiceName = "secret.emergencybutton.v1beta1.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.ToggleIbcSwitch = this.ToggleIbcSwitch.bind(this);
  }
  ToggleIbcSwitch(request: MsgToggleIbcSwitch): Promise<MsgToggleIbcSwitchResponse> {
    const data = MsgToggleIbcSwitch.encode(request).finish();
    const promise = this.rpc.request(this.service, "ToggleIbcSwitch", data);
    return promise.then((data) => MsgToggleIbcSwitchResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
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
