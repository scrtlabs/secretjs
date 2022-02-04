import { Coin } from "..";
import { CommunityPoolSpendProposal as CommunityPoolSpendProposalContent } from "../protobuf_stuff/cosmos/distribution/v1beta1/distribution";
import {
  ProposalStatus,
  TextProposal as TextProposalContent,
} from "../protobuf_stuff/cosmos/gov/v1beta1/gov";
import {
  MsgDeposit as MsgDepositProto,
  MsgSubmitProposal as MsgSubmitProposalProto,
  MsgVote as MsgVoteProto,
  MsgVoteWeighted as MsgVoteWeightedProto,
  protobufPackage,
} from "../protobuf_stuff/cosmos/gov/v1beta1/tx";
import {
  ParamChange,
  ParameterChangeProposal as ParameterChangeProposalContent,
} from "../protobuf_stuff/cosmos/params/v1beta1/params";
import {
  CancelSoftwareUpgradeProposal as CancelSoftwareUpgradeProposalContent,
  SoftwareUpgradeProposal as SoftwareUpgradeProposalContent,
} from "../protobuf_stuff/cosmos/upgrade/v1beta1/upgrade";
import { Any } from "../protobuf_stuff/google/protobuf/any";
import {
  ClientUpdateProposal as ClientUpdateProposalContent,
  UpgradeProposal as UpgradeProposalContent,
} from "../protobuf_stuff/ibc/core/client/v1/client";
import { AminoMsg, Msg, ProtoMsg } from "./types";

export type ProposalContent =
  | TextProposalContent
  | CommunityPoolSpendProposalContent
  | ParameterChangeProposalContent
  | ClientUpdateProposalContent
  | UpgradeProposalContent
  | SoftwareUpgradeProposalContent
  | CancelSoftwareUpgradeProposalContent;

export {
  TextProposalContent,
  CommunityPoolSpendProposalContent,
  ParameterChangeProposalContent,
  ClientUpdateProposalContent,
  UpgradeProposalContent,
  SoftwareUpgradeProposalContent,
  CancelSoftwareUpgradeProposalContent,
  ProposalStatus,
  ParamChange,
};

export enum ProposalType {
  /** @see {@link TextProposalContent} for input type */
  TextProposal = "TextProposal",

  /** @see {@link CommunityPoolSpendProposalContent} for input type */
  CommunityPoolSpendProposal = "CommunityPoolSpendProposal",

  /**
   * @see {@link ParameterChangeProposalContent} for input type
   * @see {@link https://docs.scrt.network/guides/governance} for possible subspaces, keys and values.
   */
  ParameterChangeProposal = "ParameterChangeProposal",

  /**
   * @see {@link ClientUpdateProposalContent} for input type
   * Not supported with Amino signer.
   */
  ClientUpdateProposal = "ClientUpdateProposal",

  /**
   * @see {@link UpgradeProposalContent} for input type
   * Not supported with Amino signer.
   */
  UpgradeProposal = "UpgradeProposal",

  /** @see {@link SoftwareUpgradeProposalContent} for input type */
  SoftwareUpgradeProposal = "SoftwareUpgradeProposal",

  /** @see {@link CancelSoftwareUpgradeProposalContent} for input type */
  CancelSoftwareUpgradeProposal = "CancelSoftwareUpgradeProposal",
}

const proposalTypeToAminoType: Map<ProposalType, string> = new Map([
  [ProposalType.TextProposal, "cosmos-sdk/TextProposal"],
  [
    ProposalType.CommunityPoolSpendProposal,
    "cosmos-sdk/CommunityPoolSpendProposal",
  ],
  [ProposalType.ParameterChangeProposal, "cosmos-sdk/ParameterChangeProposal"],
  [ProposalType.SoftwareUpgradeProposal, "cosmos-sdk/SoftwareUpgradeProposal"],
  [
    ProposalType.CancelSoftwareUpgradeProposal,
    "cosmos-sdk/CancelSoftwareUpgradeProposal",
  ],
]);

export interface MsgSubmitProposalParams {
  type: ProposalType;
  content: ProposalContent;
  initialDeposit: Coin[];
  proposer: string;
}

export class MsgSubmitProposal implements Msg {
  public type: ProposalType;
  public content: ProposalContent;
  public initialDeposit: Coin[];
  public proposer: string;

  constructor({
    type,
    content,
    initialDeposit,
    proposer,
  }: MsgSubmitProposalParams) {
    this.proposer = proposer;
    this.initialDeposit = initialDeposit;
    this.content = content;
    this.type = type;
  }

  async toProto(): Promise<ProtoMsg> {
    let content: Any;

    switch (this.type) {
      case ProposalType.TextProposal:
        content = Any.fromPartial({
          typeUrl: "/cosmos.gov.v1beta1.TextProposal",
          value: TextProposalContent.encode(
            TextProposalContent.fromPartial(this.content),
          ).finish(),
        });
        break;

      case ProposalType.CommunityPoolSpendProposal:
        content = Any.fromPartial({
          typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
          value: CommunityPoolSpendProposalContent.encode(
            CommunityPoolSpendProposalContent.fromPartial(this.content),
          ).finish(),
        });
        break;

      case ProposalType.ParameterChangeProposal:
        content = Any.fromPartial({
          typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal",
          value: ParameterChangeProposalContent.encode(
            ParameterChangeProposalContent.fromPartial(this.content),
          ).finish(),
        });
        break;

      case ProposalType.ClientUpdateProposal:
        content = Any.fromPartial({
          typeUrl: "/ibc.core.client.v1.ClientUpdateProposal",
          value: ClientUpdateProposalContent.encode(
            ClientUpdateProposalContent.fromPartial(this.content),
          ).finish(),
        });
        break;

      case ProposalType.UpgradeProposal:
        content = Any.fromPartial({
          typeUrl: "/ibc.core.client.v1.UpgradeProposal",
          value: UpgradeProposalContent.encode(
            UpgradeProposalContent.fromPartial(this.content),
          ).finish(),
        });
        break;

      case ProposalType.SoftwareUpgradeProposal:
        content = Any.fromPartial({
          typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
          value: SoftwareUpgradeProposalContent.encode(
            SoftwareUpgradeProposalContent.fromPartial(this.content),
          ).finish(),
        });
        break;

      case ProposalType.CancelSoftwareUpgradeProposal:
        content = Any.fromPartial({
          typeUrl: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal",
          value: CancelSoftwareUpgradeProposalContent.encode(
            CancelSoftwareUpgradeProposalContent.fromPartial(this.content),
          ).finish(),
        });
        break;

      default:
        throw new Error(
          `Unknown proposal type: "${this.type}" - ${JSON.stringify(
            this.content,
          )}`,
        );
    }

    const msgContent: MsgSubmitProposalProto = {
      content: content,
      initialDeposit: this.initialDeposit,
      proposer: this.proposer,
    };

    return {
      typeUrl: `/${protobufPackage}.MsgSubmitProposal`,
      value: msgContent,
      encode: function (): Uint8Array {
        return MsgSubmitProposalProto.encode(msgContent).finish();
      },
    };
  }

  async toAmino(): Promise<AminoMsg> {
    const contentType = proposalTypeToAminoType.get(this.type);
    if (!contentType) {
      throw new Error(
        `Proposal of type "${String(
          this.type,
        )}" is not supported with an Amino signer.`,
      );
    }

    return {
      type: "cosmos-sdk/MsgSubmitProposal",
      value: {
        content: {
          type: contentType,
          value: this.content,
        },
        initial_deposit: this.initialDeposit,
        proposer: this.proposer,
      },
    };
  }
}

export class MsgVote implements Msg {
  constructor(msg: MsgVoteProto) {}
  async toProto(): Promise<ProtoMsg> {
    throw new Error("Method not implemented.");
  }
  async toAmino(): Promise<AminoMsg> {
    throw new Error("Method not implemented.");
  }
}

export class MsgVoteWeighted implements Msg {
  constructor(msg: MsgVoteWeightedProto) {}
  async toProto(): Promise<ProtoMsg> {
    throw new Error("Method not implemented.");
  }
  async toAmino(): Promise<AminoMsg> {
    throw new Error("Method not implemented.");
  }
}

export class MsgDeposit implements Msg {
  constructor(msg: MsgDepositProto) {}
  async toProto(): Promise<ProtoMsg> {
    throw new Error("Method not implemented.");
  }
  async toAmino(): Promise<AminoMsg> {
    throw new Error("Method not implemented.");
  }
}