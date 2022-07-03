#!/bin/sh -eu
protodir=/ec/pb
# protoc --go_out=plugins=grpc:genproto -I $protodir $protodir/ec.proto
# protoc --go_out=/ec/services/user-service/genproto --go_opt=paths=source_relative \
#        --go-grpc_out=/ec/services/user-service/genproto --go-grpc_opt=path=source_relative \
#        -I $protodir $protodir/ec.proto
protoc --go_out=/ec/services/user-service/genproto --go_opt=paths=source_relative \
       --go-grpc_out=/ec/services/user-service/genproto --go-grpc_opt=paths=source_relative \
       -I $protodir $protodir/ec.proto

