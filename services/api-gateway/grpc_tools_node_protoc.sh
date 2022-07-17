#!/bin/sh

proto_path=../../pb
out=src/proto
rm -fr $out && mkdir -p $out

./node_modules/.bin/grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:$out \
  --grpc_out=$out \
  --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
  --proto_path=$proto_path \
  $proto_path/grocery.proto

./node_modules/.bin/grpc_tools_node_protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  --ts_out=$out \
  --proto_path=$proto_path \
  $proto_path/grocery.proto
