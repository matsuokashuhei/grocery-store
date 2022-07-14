package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"net"
	"os"

	"matsuokashuhei/grocery-store/services/customer-service/ent"
	pb "matsuokashuhei/grocery-store/services/customer-service/genproto"
	"matsuokashuhei/grocery-store/services/customer-service/internal/service"

	firebase "firebase.google.com/go/v4"
	"firebase.google.com/go/v4/auth"
	"github.com/go-sql-driver/mysql"
	"google.golang.org/grpc"
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

	dbClient := buildDBClient()
	defer dbClient.Close()

	authClient := buildAuthClient()

	svc := service.NewCustomerServiceServer(dbClient, authClient)
	srv := grpc.NewServer()
	pb.RegisterCustomerServiceServer(srv, svc)
	log.Printf("server listening at %v", lis.Addr())
	if err := srv.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}

func buildDBClient() *ent.Client {
	config := mysql.Config{
		User:   os.Getenv("MYSQL_USER"),
		Passwd: os.Getenv("MYSQL_PASSWORD"),
		Net:    "tcp",
		Addr:   net.JoinHostPort(os.Getenv("MYSQL_HOST"), os.Getenv("MYSQL_PORT")),
		DBName: os.Getenv("MYSQL_DATABASE"),
		// AllowNativePasswords: false,
		ParseTime: true,
	}
	log.Printf("dsn: %s", config.FormatDSN())
	client, err := ent.Open("mysql", config.FormatDSN())
	if err != nil {
		log.Fatalf("failed connecting to DB: %v", err)
	}
	return client
}

func buildAuthClient() *auth.Client {
	ctx := context.Background()
	app, err := firebase.NewApp(ctx, nil)
	if err != nil {
		log.Fatalf("failed to create an app: %v", err)
	}
	client, err := app.Auth(ctx)
	if err != nil {
		log.Fatalf("failed to get auth.Client: %v", err)
	}
	return client
}
