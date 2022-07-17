// package: grocerystore
// file: grocery.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as grocery_pb from "./grocery_pb";

interface ICustomerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    signUp: ICustomerServiceService_ISignUp;
    delete: ICustomerServiceService_IDelete;
}

interface ICustomerServiceService_ISignUp extends grpc.MethodDefinition<grocery_pb.SignUpRequest, grocery_pb.SignUpResposne> {
    path: "/grocerystore.CustomerService/SignUp";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<grocery_pb.SignUpRequest>;
    requestDeserialize: grpc.deserialize<grocery_pb.SignUpRequest>;
    responseSerialize: grpc.serialize<grocery_pb.SignUpResposne>;
    responseDeserialize: grpc.deserialize<grocery_pb.SignUpResposne>;
}
interface ICustomerServiceService_IDelete extends grpc.MethodDefinition<grocery_pb.DeleteRequest, grocery_pb.DeleteResposne> {
    path: "/grocerystore.CustomerService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<grocery_pb.DeleteRequest>;
    requestDeserialize: grpc.deserialize<grocery_pb.DeleteRequest>;
    responseSerialize: grpc.serialize<grocery_pb.DeleteResposne>;
    responseDeserialize: grpc.deserialize<grocery_pb.DeleteResposne>;
}

export const CustomerServiceService: ICustomerServiceService;

export interface ICustomerServiceServer {
    signUp: grpc.handleUnaryCall<grocery_pb.SignUpRequest, grocery_pb.SignUpResposne>;
    delete: grpc.handleUnaryCall<grocery_pb.DeleteRequest, grocery_pb.DeleteResposne>;
}

export interface ICustomerServiceClient {
    signUp(request: grocery_pb.SignUpRequest, callback: (error: grpc.ServiceError | null, response: grocery_pb.SignUpResposne) => void): grpc.ClientUnaryCall;
    signUp(request: grocery_pb.SignUpRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grocery_pb.SignUpResposne) => void): grpc.ClientUnaryCall;
    signUp(request: grocery_pb.SignUpRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grocery_pb.SignUpResposne) => void): grpc.ClientUnaryCall;
    delete(request: grocery_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: grocery_pb.DeleteResposne) => void): grpc.ClientUnaryCall;
    delete(request: grocery_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grocery_pb.DeleteResposne) => void): grpc.ClientUnaryCall;
    delete(request: grocery_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grocery_pb.DeleteResposne) => void): grpc.ClientUnaryCall;
}

export class CustomerServiceClient extends grpc.Client implements ICustomerServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public signUp(request: grocery_pb.SignUpRequest, callback: (error: grpc.ServiceError | null, response: grocery_pb.SignUpResposne) => void): grpc.ClientUnaryCall;
    public signUp(request: grocery_pb.SignUpRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grocery_pb.SignUpResposne) => void): grpc.ClientUnaryCall;
    public signUp(request: grocery_pb.SignUpRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grocery_pb.SignUpResposne) => void): grpc.ClientUnaryCall;
    public delete(request: grocery_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: grocery_pb.DeleteResposne) => void): grpc.ClientUnaryCall;
    public delete(request: grocery_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grocery_pb.DeleteResposne) => void): grpc.ClientUnaryCall;
    public delete(request: grocery_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grocery_pb.DeleteResposne) => void): grpc.ClientUnaryCall;
}
