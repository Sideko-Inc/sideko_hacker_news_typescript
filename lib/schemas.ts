// Generated by Sideko (sideko.dev)
import { AxiosResponseHeaders, RawAxiosResponseHeaders } from "axios";

export class BinaryResponse {
  content: ArrayBuffer;
  headers: AxiosResponseHeaders | RawAxiosResponseHeaders;

  constructor(content: ArrayBuffer, headers: AxiosResponseHeaders | RawAxiosResponseHeaders) {
    this.content = content;
    this.headers = headers;
}
}

export type UploadFile = {
  fileContent: Buffer;
  filename: string;
  contentType: string;
};

export type Item = {
  "by": string
  "dead"?: boolean
  "deleted"?: boolean
  "descendants"?: number
  "id": number
  "kids"?: number[]
  "parent"?: number
  "parts"?: number[]
  "poll"?: number
  "score"?: number
  "text"?: string
  "time": number
  "title"?: string
  "type": string
  "url"?: string
}

export type GetUpdatesJsonResponse = {
  "items"?: number[]
  "profiles"?: string[]
}

export type User = {
  "about"?: string
  "created"?: number
  "id"?: string
  "karma"?: number
  "submitted"?: any
}
