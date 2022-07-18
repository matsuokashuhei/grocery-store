// package: grocerystore
// file: grocery.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Customer extends jspb.Message { 
    getUid(): string;
    setUid(value: string): Customer;
    getName(): string;
    setName(value: string): Customer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Customer.AsObject;
    static toObject(includeInstance: boolean, msg: Customer): Customer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Customer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Customer;
    static deserializeBinaryFromReader(message: Customer, reader: jspb.BinaryReader): Customer;
}

export namespace Customer {
    export type AsObject = {
        uid: string,
        name: string,
    }
}

export class GetCustomerRequest extends jspb.Message { 
    getUid(): string;
    setUid(value: string): GetCustomerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCustomerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetCustomerRequest): GetCustomerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCustomerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCustomerRequest;
    static deserializeBinaryFromReader(message: GetCustomerRequest, reader: jspb.BinaryReader): GetCustomerRequest;
}

export namespace GetCustomerRequest {
    export type AsObject = {
        uid: string,
    }
}

export class CreateCustomerRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateCustomerRequest;
    getEmail(): string;
    setEmail(value: string): CreateCustomerRequest;
    getPassword(): string;
    setPassword(value: string): CreateCustomerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateCustomerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateCustomerRequest): CreateCustomerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateCustomerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateCustomerRequest;
    static deserializeBinaryFromReader(message: CreateCustomerRequest, reader: jspb.BinaryReader): CreateCustomerRequest;
}

export namespace CreateCustomerRequest {
    export type AsObject = {
        name: string,
        email: string,
        password: string,
    }
}

export class DeleteCustomerRequest extends jspb.Message { 
    getUid(): string;
    setUid(value: string): DeleteCustomerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteCustomerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteCustomerRequest): DeleteCustomerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteCustomerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteCustomerRequest;
    static deserializeBinaryFromReader(message: DeleteCustomerRequest, reader: jspb.BinaryReader): DeleteCustomerRequest;
}

export namespace DeleteCustomerRequest {
    export type AsObject = {
        uid: string,
    }
}
