// package: grocerystore
// file: grocery.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class SignUpRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): SignUpRequest;
    getEmail(): string;
    setEmail(value: string): SignUpRequest;
    getPassword(): string;
    setPassword(value: string): SignUpRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignUpRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SignUpRequest): SignUpRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignUpRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignUpRequest;
    static deserializeBinaryFromReader(message: SignUpRequest, reader: jspb.BinaryReader): SignUpRequest;
}

export namespace SignUpRequest {
    export type AsObject = {
        name: string,
        email: string,
        password: string,
    }
}

export class SignUpResposne extends jspb.Message { 
    getUid(): string;
    setUid(value: string): SignUpResposne;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignUpResposne.AsObject;
    static toObject(includeInstance: boolean, msg: SignUpResposne): SignUpResposne.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignUpResposne, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignUpResposne;
    static deserializeBinaryFromReader(message: SignUpResposne, reader: jspb.BinaryReader): SignUpResposne;
}

export namespace SignUpResposne {
    export type AsObject = {
        uid: string,
    }
}

export class DeleteRequest extends jspb.Message { 
    getUid(): string;
    setUid(value: string): DeleteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteRequest): DeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteRequest;
    static deserializeBinaryFromReader(message: DeleteRequest, reader: jspb.BinaryReader): DeleteRequest;
}

export namespace DeleteRequest {
    export type AsObject = {
        uid: string,
    }
}

export class DeleteResposne extends jspb.Message { 
    getUid(): string;
    setUid(value: string): DeleteResposne;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteResposne.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteResposne): DeleteResposne.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteResposne, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteResposne;
    static deserializeBinaryFromReader(message: DeleteResposne, reader: jspb.BinaryReader): DeleteResposne;
}

export namespace DeleteResposne {
    export type AsObject = {
        uid: string,
    }
}
