package service

import (
	"context"
	"matsuokashuhei/grocery-store/services/customer-service/ent"
	grocerystore "matsuokashuhei/grocery-store/services/customer-service/genproto"
	"matsuokashuhei/grocery-store/services/customer-service/internal/repository"

	"firebase.google.com/go/v4/auth"
)

type customerServiceServer struct {
	grocerystore.UnimplementedCustomerServiceServer
	dbClient   *ent.Client
	authClient *auth.Client
	// client     *auth.Client
}

func NewCustomerServiceServer(dbClient *ent.Client, authClient *auth.Client) grocerystore.CustomerServiceServer {
	return &customerServiceServer{dbClient: dbClient, authClient: authClient}
}

func (s *customerServiceServer) SignUp(ctx context.Context, req *grocerystore.SignUpRequest) (*grocerystore.SignUpResposne, error) {
	ru := repository.NewUserRepository(s.authClient)
	user, err := ru.Create(ctx, req.Name, req.Email, req.Password)
	if err != nil {
		return nil, err
	}
	rc := repository.NewCustomerRepository(s.dbClient)
	if _, err := rc.Create(ctx, user.UID, user.DisplayName); err != nil {
		return nil, err
	}
	return &grocerystore.SignUpResposne{Uid: user.UID}, nil
}
