import BigNumber from "bignumber.js";
import { AminoMsg, Msg, ProtoMsg, MsgParams } from "./types";
import { VoteOption } from "../protobuf/cosmos/gov/v1/gov";
import {
  MsgSubmitProposal as MsgSubmitProposalParams,
  MsgVote as MsgVoteParams,
  MsgVoteWeighted as MsgVoteWeightedProto,
  MsgExecLegacyContent as MsgExecLegacyContentParams,
  MsgCancelProposal as MsgCancelProposalParams,
  MsgDeposit as MsgDepositParams,
} from "../protobuf/cosmos/gov/v1/tx";

export {
  MsgSubmitProposal as MsgSubmitProposalParams,
  MsgVote as MsgVoteParams,
  MsgExecLegacyContent as MsgExecLegacyContentParams,
  MsgCancelProposal as MsgCancelProposalParams,
  MsgDeposit as MsgDepositParams,
} from "../protobuf/cosmos/gov/v1/tx";

export { VoteOption, ProposalStatus } from "../protobuf/cosmos/gov/v1/gov";

/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export class MsgSubmitProposal implements Msg {
  constructor(public params: MsgSubmitProposalParams) {}

  async toProto(): Promise<ProtoMsg> {
    return {
      type_url: `/cosmos.gov.v1.MsgSubmitProposal`,
      value: this.params,
      encode: () => MsgSubmitProposalParams.encode(this.params).finish(),
    };
  }

  async toAmino(): Promise<AminoMsg> {
    throw new Error("Not implemented. Please use WalletProto");
  }
}

export class MsgVote implements Msg {
  constructor(public params: MsgVoteParams) {}

  async toProto(): Promise<ProtoMsg> {
    return {
      type_url: `/cosmos.gov.v1.MsgVote`,
      value: this.params,
      encode: () => MsgVoteParams.encode(this.params).finish(),
    };
  }

  async toAmino(): Promise<AminoMsg> {
    return {
      type: "cosmos-sdk/MsgVote",
      value: this.params,
    };
  }
}

/** WeightedVoteOption defines a unit of vote for vote split. */
export interface WeightedVoteOption {
  /** option is a {@link VoteOption}. */
  option: VoteOption;
  /** weight is a number between 0 and 1 with precision of 18 decimals. */
  weight: number;
}

export interface MsgVoteWeightedParams extends MsgParams {
  voter: string;
  proposal_id: string;
  options: WeightedVoteOption[];
  metadata: string;
}

/** MsgVoteWeighted defines a message to cast a vote, with an option to split the vote. */
export class MsgVoteWeighted implements Msg {
  constructor(public params: MsgVoteWeightedParams) {}

  async toProto(): Promise<ProtoMsg> {
    const msgContent = {
      voter: this.params.voter,
      proposal_id: this.params.proposal_id,
      options: this.params.options.map((o) => ({
        option: o.option,
        weight: new BigNumber(o.weight).toFixed(18),
      })),
      metadata: this.params.metadata,
    };

    return {
      type_url: `/cosmos.gov.v1.MsgVoteWeighted`,
      value: msgContent,
      encode: () => MsgVoteWeightedProto.encode(msgContent).finish(),
    };
  }

  async toAmino(): Promise<AminoMsg> {
    const msgContent = {
      voter: this.params.voter,
      proposal_id: this.params.proposal_id,
      options: this.params.options.map((o) => ({
        option: o.option,
        weight: new BigNumber(o.weight).toFixed(18).replace(/0\.0*/, ""),
      })),
    };

    return {
      type: "cosmos-sdk/MsgVoteWeighted",
      value: msgContent,
    };
  }
}

/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
export class MsgDeposit implements Msg {
  constructor(public params: MsgDepositParams) {}

  async toProto(): Promise<ProtoMsg> {
    return {
      type_url: `/cosmos.gov.v1.MsgDeposit`,
      value: this.params,
      encode: () => MsgDepositParams.encode(this.params).finish(),
    };
  }

  async toAmino(): Promise<AminoMsg> {
    return {
      type: "cosmos-sdk/MsgDeposit",
      value: this.params,
    };
  }
}

/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
export class MsgCancelProposal implements Msg {
  constructor(public params: MsgCancelProposalParams) {}

  async toProto(): Promise<ProtoMsg> {
    return {
      type_url: `/cosmos.gov.v1.MsgCancelProposal`,
      value: this.params,
      encode: () => MsgCancelProposalParams.encode(this.params).finish(),
    };
  }

  async toAmino(): Promise<AminoMsg> {
    return {
      type: "cosmos-sdk/MsgCancelProposal",
      value: this.params,
    };
  }
}

/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
export class MsgExecLegacyContent implements Msg {
  constructor(public params: MsgExecLegacyContentParams) {}

  async toProto(): Promise<ProtoMsg> {
    return {
      type_url: `/cosmos.gov.v1.MsgExecLegacyContent`,
      value: this.params,
      encode: () => MsgExecLegacyContentParams.encode(this.params).finish(),
    };
  }

  async toAmino(): Promise<AminoMsg> {
    return {
      type: "cosmos-sdk/MsgExecLegacyContent",
      value: this.params,
    };
  }
}
