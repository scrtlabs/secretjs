import { Permit } from "../../auth";
import { Extension, ViewerInfo } from "../types";

export interface GetNftPrivateMetadataResponse {
  private_metadata: {
    token_uri?: string;
    extension?: Extension;
  };
}

export interface GetPrivateMetadataRequestWithPermit {
  with_permit: {
    permit: Permit;
    query: {
      private_metadata: {
        token_id: string;
      };
    };
    // limit: 10
  };
}

export interface GetPrivateMetadataRequest {
  query: {
    private_metadata: {
      token_id: string;
      viewer: ViewerInfo;
    };
  };
}