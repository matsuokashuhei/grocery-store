package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"net"

	pb "matsuokashuhei/ec/services/user-service/genproto"

	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/status"
)

var (
	errMissingMetadata = status.Errorf(codes.InvalidArgument, "missing metadata")
	errInvalidToken    = status.Errorf(codes.Unauthenticated, "invalid token")
)
var (
	port = flag.Int("port", 50051, "the port to serve on")
)

func main() {
	flag.Parse()
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", *port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	opts := []grpc.ServerOption{
		grpc.UnaryInterceptor(ensureValidToken),
	}
	srv := grpc.NewServer(opts...)
	pb.RegisterUserServiceServer(srv, &User{})
	log.Printf("server listening at %v", lis.Addr())
	if err := srv.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}

type User struct {
	pb.UnimplementedUserServiceServer
}

func (u *User) SignUp(ctx context.Context, req *pb.SignUpRequest) (*pb.SignUpResposne, error) {
	return &pb.SignUpResposne{Uuid: "test"}, nil
}

func valid(authorization []string) bool {
	return true
}

func ensureValidToken(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (interface{}, error) {
	md, ok := metadata.FromIncomingContext(ctx)
	if !ok {
		return nil, errMissingMetadata
	}
	if !valid(md["authorization"]) {
		return nil, errInvalidToken
	}
	return handler(ctx, req)
}
