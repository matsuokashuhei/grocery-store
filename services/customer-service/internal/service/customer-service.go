package service

import (
	"context"
	grocery_store "matsuokashuhei/grocery-store/services/customer-service/genproto"
	"matsuokashuhei/grocery-store/services/customer-service/internal/repository"

	"firebase.google.com/go/v4/auth"
)

type customerServiceServer struct {
	grocery_store.UnimplementedCustomerServiceServer
	client *auth.Client
}

func NewCustomerServiceServer(client *auth.Client) grocery_store.CustomerServiceServer {
	return &customerServiceServer{client: client}
}

func (s *customerServiceServer) SignUp(ctx context.Context, req *grocery_store.SignUpRequest) (*grocery_store.SignUpResposne, error) {
	r := repository.NewUserRepository(s.client)
	user, err := r.Create(ctx, req.Email, req.Password)
	if err != nil {
		return nil, err
	}
	return &grocery_store.SignUpResposne{Uid: user.UID}, nil
}
