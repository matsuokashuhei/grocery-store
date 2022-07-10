FROM golang:1.18 as builder

RUN apt-get update && apt install -y protobuf-compiler

ENV GO111MODULE on

WORKDIR /grocery-store/services/consumer-service

RUN go install github.com/cweill/gotests/gotests@latest \
 && go install github.com/fatih/gomodifytags@latest \
 && go install github.com/josharian/impl@latest \
 && go install github.com/haya14busa/goplay/cmd/goplay@latest \
 && go install honnef.co/go/tools/cmd/staticcheck@latest \
 && go install golang.org/x/tools/gopls@latest \
 && go install github.com/ramya-rao-a/go-outline@latest \
 && go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.28 \
 && go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2
