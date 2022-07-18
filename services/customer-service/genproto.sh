#!/bin/sh -eu
protodir=/grocery-store/pb
outdir=./proto
protoc --go_out=$outdir --go_opt=paths=source_relative \
       --go-grpc_out=$outdir --go-grpc_opt=paths=source_relative \
       -I $protodir $protodir/grocery.proto
