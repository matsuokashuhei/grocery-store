package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"net"

	pb "matsuokashuhei/ec/services/user-service/genproto"

	"google.golang.org/grpc"
)

var (
	port = flag.Int("port", 50051, "The server port")
)

func main() {
	flag.Parse()
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", *port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	srv := grpc.NewServer()
	pb.RegisterUserServiceServer(srv, &user{})
	log.Printf("server listening at %v", lis.Addr())
	if err := srv.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}

type user struct {
	pb.UnimplementedUserServiceServer
}

func (u *user) SignUp(ctx context.Context, req *pb.SignUpRequest) (*pb.Empty, error) {
	return &pb.Empty{}, nil
}
