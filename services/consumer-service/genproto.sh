#!/bin/sh -eu
protodir=/grocery-store/pb
protoc --go_out=./genproto --go_opt=paths=source_relative \
       --go-grpc_out=./genproto --go-grpc_opt=paths=source_relative \
       -I $protodir $protodir/grocery.proto
