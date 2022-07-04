#!/bin/sh -eu
protodir=/ec/pb
protoc --go_out=./genproto --go_opt=paths=source_relative \
       --go-grpc_out=./genproto --go-grpc_opt=paths=source_relative \
       -I $protodir $protodir/ec.proto
