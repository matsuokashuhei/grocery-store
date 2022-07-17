// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var grocery_pb = require('./grocery_pb.js');

function serialize_grocerystore_DeleteRequest(arg) {
  if (!(arg instanceof grocery_pb.DeleteRequest)) {
    throw new Error('Expected argument of type grocerystore.DeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grocerystore_DeleteRequest(buffer_arg) {
  return grocery_pb.DeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grocerystore_DeleteResposne(arg) {
  if (!(arg instanceof grocery_pb.DeleteResposne)) {
    throw new Error('Expected argument of type grocerystore.DeleteResposne');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grocerystore_DeleteResposne(buffer_arg) {
  return grocery_pb.DeleteResposne.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grocerystore_SignUpRequest(arg) {
  if (!(arg instanceof grocery_pb.SignUpRequest)) {
    throw new Error('Expected argument of type grocerystore.SignUpRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grocerystore_SignUpRequest(buffer_arg) {
  return grocery_pb.SignUpRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grocerystore_SignUpResposne(arg) {
  if (!(arg instanceof grocery_pb.SignUpResposne)) {
    throw new Error('Expected argument of type grocerystore.SignUpResposne');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grocerystore_SignUpResposne(buffer_arg) {
  return grocery_pb.SignUpResposne.deserializeBinary(new Uint8Array(buffer_arg));
}


var CustomerServiceService = exports.CustomerServiceService = {
  signUp: {
    path: '/grocerystore.CustomerService/SignUp',
    requestStream: false,
    responseStream: false,
    requestType: grocery_pb.SignUpRequest,
    responseType: grocery_pb.SignUpResposne,
    requestSerialize: serialize_grocerystore_SignUpRequest,
    requestDeserialize: deserialize_grocerystore_SignUpRequest,
    responseSerialize: serialize_grocerystore_SignUpResposne,
    responseDeserialize: deserialize_grocerystore_SignUpResposne,
  },
  delete: {
    path: '/grocerystore.CustomerService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: grocery_pb.DeleteRequest,
    responseType: grocery_pb.DeleteResposne,
    requestSerialize: serialize_grocerystore_DeleteRequest,
    requestDeserialize: deserialize_grocerystore_DeleteRequest,
    responseSerialize: serialize_grocerystore_DeleteResposne,
    responseDeserialize: deserialize_grocerystore_DeleteResposne,
  },
};

exports.CustomerServiceClient = grpc.makeGenericClientConstructor(CustomerServiceService);
