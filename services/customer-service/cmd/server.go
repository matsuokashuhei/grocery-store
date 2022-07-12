package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"net"

	pb "matsuokashuhei/grocery-store/services/customer-service/genproto"
	"matsuokashuhei/grocery-store/services/customer-service/internal/repository"
	"matsuokashuhei/grocery-store/services/customer-service/internal/service"

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
	// config := mysql.Config{
	// 	User:      os.Getenv("MYSQL_USER"),
	// 	Passwd:    os.Getenv("MYSQL_PASSWORD"),
	// 	Net:       "tcp",
	// 	Addr:      net.JoinHostPort(os.Getenv("MYSQL_HOST"), os.Getenv("MYSQL_PORT")),
	// 	DBName:    os.Getenv("MYSQL_DATABASE"),
	// 	ParseTime: true,
	// }
	// client, err := ent.Open("mysql", config.FormatDSN())
	// if err != nil {
	// 	log.Fatalf("opening ent client: %v", err)
	// }
	// defer client.Close()

	flag.Parse()
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", *port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	ctx := context.Background()
	app, err := firebase.NewApp(ctx, nil)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	client, err := app.Auth(ctx)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	// opts := []grpc.ServerOption{
	// 	grpc.UnaryInterceptor(ensureValidToken),
	// }
	// srv := grpc.NewServer(opts...)

	svc := service.NewCustomerServiceServer(client)
	srv := grpc.NewServer()
	pb.RegisterCustomerServiceServer(srv, svc)
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
	r := repository.NewUserRepository(client)
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
