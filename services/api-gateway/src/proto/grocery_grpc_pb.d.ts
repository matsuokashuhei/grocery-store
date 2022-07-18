// package: grocerystore
// file: grocery.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as grocery_pb from "./grocery_pb";

interface ICustomerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getCustomer: ICustomerServiceService_IGetCustomer;
    createCustomer: ICustomerServiceService_ICreateCustomer;
    deleteCustomer: ICustomerServiceService_IDeleteCustomer;
}

interface ICustomerServiceService_IGetCustomer extends grpc.MethodDefinition<grocery_pb.GetCustomerRequest, grocery_pb.Customer> {
    path: "/grocerystore.CustomerService/GetCustomer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<grocery_pb.GetCustomerRequest>;
    requestDeserialize: grpc.deserialize<grocery_pb.GetCustomerRequest>;
    responseSerialize: grpc.serialize<grocery_pb.Customer>;
    responseDeserialize: grpc.deserialize<grocery_pb.Customer>;
}
interface ICustomerServiceService_ICreateCustomer extends grpc.MethodDefinition<grocery_pb.CreateCustomerRequest, grocery_pb.Customer> {
    path: "/grocerystore.CustomerService/CreateCustomer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<grocery_pb.CreateCustomerRequest>;
    requestDeserialize: grpc.deserialize<grocery_pb.CreateCustomerRequest>;
    responseSerialize: grpc.serialize<grocery_pb.Customer>;
    responseDeserialize: grpc.deserialize<grocery_pb.Customer>;
}
interface ICustomerServiceService_IDeleteCustomer extends grpc.MethodDefinition<grocery_pb.DeleteCustomerRequest, grocery_pb.Customer> {
    path: "/grocerystore.CustomerService/DeleteCustomer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<grocery_pb.DeleteCustomerRequest>;
    requestDeserialize: grpc.deserialize<grocery_pb.DeleteCustomerRequest>;
    responseSerialize: grpc.serialize<grocery_pb.Customer>;
    responseDeserialize: grpc.deserialize<grocery_pb.Customer>;
}

export const CustomerServiceService: ICustomerServiceService;

export interface ICustomerServiceServer {
    getCustomer: grpc.handleUnaryCall<grocery_pb.GetCustomerRequest, grocery_pb.Customer>;
    createCustomer: grpc.handleUnaryCall<grocery_pb.CreateCustomerRequest, grocery_pb.Customer>;
    deleteCustomer: grpc.handleUnaryCall<grocery_pb.DeleteCustomerRequest, grocery_pb.Customer>;
}

export interface ICustomerServiceClient {
    getCustomer(request: grocery_pb.GetCustomerRequest, callback: (error: grpc.ServiceError | null, response: grocery_pb.Customer) => void): grpc.ClientUnaryCall;
    getCustomer(request: grocery_pb.GetCustomerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grocery_pb.Customer) => void): grpc.ClientUnaryCall;
    getCustomer(request: grocery_pb.GetCustomerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grocery_pb.Customer) => void): grpc.ClientUnaryCall;
    createCustomer(request: grocery_pb.CreateCustomerRequest, callback: (error: grpc.ServiceError | null, response: grocery_pb.Customer) => void): grpc.ClientUnaryCall;
    createCustomer(request: grocery_pb.CreateCustomerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grocery_pb.Customer) => void): grpc.ClientUnaryCall;
    createCustomer(request: grocery_pb.CreateCustomerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grocery_pb.Customer) => void): grpc.ClientUnaryCall;
    deleteCustomer(request: grocery_pb.DeleteCustomerRequest, callback: (error: grpc.ServiceError | null, response: grocery_pb.Customer) => void): grpc.ClientUnaryCall;
    deleteCustomer(request: grocery_pb.DeleteCustomerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grocery_pb.Customer) => void): grpc.ClientUnaryCall;
    deleteCustomer(request: grocery_pb.DeleteCustomerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grocery_pb.Customer) => void): grpc.ClientUnaryCall;
}

export class CustomerServiceClient extends grpc.Client implements ICustomerServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getCustomer(request: grocery_pb.GetCustomerRequest, callback: (error: grpc.ServiceError | null, response: grocery_pb.Customer) => void): grpc.ClientUnaryCall;
    public getCustomer(request: grocery_pb.GetCustomerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grocery_pb.Customer) => void): grpc.ClientUnaryCall;
    public getCustomer(request: grocery_pb.GetCustomerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grocery_pb.Customer) => void): grpc.ClientUnaryCall;
    public createCustomer(request: grocery_pb.CreateCustomerRequest, callback: (error: grpc.ServiceError | null, response: grocery_pb.Customer) => void): grpc.ClientUnaryCall;
    public createCustomer(request: grocery_pb.CreateCustomerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grocery_pb.Customer) => void): grpc.ClientUnaryCall;
    public createCustomer(request: grocery_pb.CreateCustomerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grocery_pb.Customer) => void): grpc.ClientUnaryCall;
    public deleteCustomer(request: grocery_pb.DeleteCustomerRequest, callback: (error: grpc.ServiceError | null, response: grocery_pb.Customer) => void): grpc.ClientUnaryCall;
    public deleteCustomer(request: grocery_pb.DeleteCustomerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grocery_pb.Customer) => void): grpc.ClientUnaryCall;
    public deleteCustomer(request: grocery_pb.DeleteCustomerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grocery_pb.Customer) => void): grpc.ClientUnaryCall;
}
