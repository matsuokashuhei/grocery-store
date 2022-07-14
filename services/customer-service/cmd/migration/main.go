package main

import (
	"context"
	"flag"
	"log"
	"matsuokashuhei/grocery-store/services/customer-service/ent"
	"matsuokashuhei/grocery-store/services/customer-service/ent/migrate"
	"net"
	"os"

	"github.com/go-sql-driver/mysql"
)

var (
	// print = flag.Int("port", 50051, "the port to serve on")
	printing = flag.Bool("print", false, "printing schema changes")
	creating = flag.Bool("create", false, "creating schema changes")
)

func main() {
	flag.Parse()

	config := mysql.Config{
		User:                 os.Getenv("MYSQL_USER"),
		Passwd:               os.Getenv("MYSQL_PASSWORD"),
		Net:                  "tcp",
		Addr:                 net.JoinHostPort(os.Getenv("MYSQL_HOST"), os.Getenv("MYSQL_PORT")),
		DBName:               os.Getenv("MYSQL_DATABASE"),
		AllowNativePasswords: true,
		ParseTime:            true,
	}
	client, err := ent.Open("mysql", config.FormatDSN())
	if err != nil {
		log.Fatalf("failed connecting to DB: %v", err)
	}
	defer client.Close()
	ctx := context.Background()

	if *printing {
		err = client.Schema.WriteTo(ctx, os.Stdout, migrate.WithDropIndex(true), migrate.WithDropColumn(true))
		if err != nil {
			log.Fatalf("failed printing schema changes: %v", err)
		}
	}
	if *creating {
		err = client.Schema.Create(ctx, migrate.WithDropIndex(true), migrate.WithDropColumn(true))
		if err != nil {
			log.Fatalf("failed creating schema resources: %v", err)
		}
	}
}
