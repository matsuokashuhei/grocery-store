// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var grocery_pb = require('./grocery_pb.js');

function serialize_grocerystore_CreateCustomerRequest(arg) {
  if (!(arg instanceof grocery_pb.CreateCustomerRequest)) {
    throw new Error('Expected argument of type grocerystore.CreateCustomerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grocerystore_CreateCustomerRequest(buffer_arg) {
  return grocery_pb.CreateCustomerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grocerystore_Customer(arg) {
  if (!(arg instanceof grocery_pb.Customer)) {
    throw new Error('Expected argument of type grocerystore.Customer');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grocerystore_Customer(buffer_arg) {
  return grocery_pb.Customer.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grocerystore_DeleteCustomerRequest(arg) {
  if (!(arg instanceof grocery_pb.DeleteCustomerRequest)) {
    throw new Error('Expected argument of type grocerystore.DeleteCustomerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grocerystore_DeleteCustomerRequest(buffer_arg) {
  return grocery_pb.DeleteCustomerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grocerystore_GetCustomerRequest(arg) {
  if (!(arg instanceof grocery_pb.GetCustomerRequest)) {
    throw new Error('Expected argument of type grocerystore.GetCustomerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grocerystore_GetCustomerRequest(buffer_arg) {
  return grocery_pb.GetCustomerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var CustomerServiceService = exports.CustomerServiceService = {
  getCustomer: {
    path: '/grocerystore.CustomerService/GetCustomer',
    requestStream: false,
    responseStream: false,
    requestType: grocery_pb.GetCustomerRequest,
    responseType: grocery_pb.Customer,
    requestSerialize: serialize_grocerystore_GetCustomerRequest,
    requestDeserialize: deserialize_grocerystore_GetCustomerRequest,
    responseSerialize: serialize_grocerystore_Customer,
    responseDeserialize: deserialize_grocerystore_Customer,
  },
  createCustomer: {
    path: '/grocerystore.CustomerService/CreateCustomer',
    requestStream: false,
    responseStream: false,
    requestType: grocery_pb.CreateCustomerRequest,
    responseType: grocery_pb.Customer,
    requestSerialize: serialize_grocerystore_CreateCustomerRequest,
    requestDeserialize: deserialize_grocerystore_CreateCustomerRequest,
    responseSerialize: serialize_grocerystore_Customer,
    responseDeserialize: deserialize_grocerystore_Customer,
  },
  deleteCustomer: {
    path: '/grocerystore.CustomerService/DeleteCustomer',
    requestStream: false,
    responseStream: false,
    requestType: grocery_pb.DeleteCustomerRequest,
    responseType: grocery_pb.Customer,
    requestSerialize: serialize_grocerystore_DeleteCustomerRequest,
    requestDeserialize: deserialize_grocerystore_DeleteCustomerRequest,
    responseSerialize: serialize_grocerystore_Customer,
    responseDeserialize: deserialize_grocerystore_Customer,
  },
};

exports.CustomerServiceClient = grpc.makeGenericClientConstructor(CustomerServiceService);
