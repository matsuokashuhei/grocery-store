package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"net"

	pb "matsuokashuhei/grocery-store/services/customer-service/genproto"
	"matsuokashuhei/grocery-store/services/customer-service/pkg/repositories"

	firebase "firebase.google.com/go/v4"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
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
	// opts := []grpc.ServerOption{
	// 	grpc.UnaryInterceptor(ensureValidToken),
	// }
	// srv := grpc.NewServer(opts...)
	srv := grpc.NewServer()
	pb.RegisterCustomerServiceServer(srv, &Customer{})
	log.Printf("server listening at %v", lis.Addr())
	if err := srv.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}

// func initializeAppDefault() *firebase.App {
// 	// [START initialize_app_default_golang]
// 	app, err := firebase.NewApp(context.Background(), nil)
// 	if err != nil {
// 		log.Fatalf("error initializing app: %v\n", err)
// 	}
// 	// [END initialize_app_default_golang]

// 	return app
// }

type Customer struct {
	pb.UnimplementedCustomerServiceServer
}

func (u *Customer) SignUp(ctx context.Context, req *pb.SignUpRequest) (*pb.SignUpResposne, error) {
	app, err := firebase.NewApp(ctx, nil)
	if err != nil {
		return nil, err
	}
	client, err := app.Auth(ctx)
	if err != nil {
		return nil, err
	}
	r := repositories.NewUserRepository(client)
	user, err := r.Create(ctx, req.Email, req.Password)
	if err != nil {
		return nil, err
	}
	return &pb.SignUpResposne{Uid: user.UID}, nil
}

// func valid(authorization []string) bool {
// 	return true
// }

// func ensureValidToken(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (interface{}, error) {
// 	md, ok := metadata.FromIncomingContext(ctx)
// 	if !ok {
// 		return nil, errMissingMetadata
// 	}
// 	if !valid(md["authorization"]) {
// 		return nil, errInvalidToken
// 	}
// 	return handler(ctx, req)
// }
