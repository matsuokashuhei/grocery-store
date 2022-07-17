package service

import (
	"context"
	"matsuokashuhei/grocery-store/services/customer-service/ent"
	"matsuokashuhei/grocery-store/services/customer-service/internal/repository"
	grocerystore "matsuokashuhei/grocery-store/services/customer-service/proto"

	"firebase.google.com/go/v4/auth"
)

type customerServiceServer struct {
	grocerystore.UnimplementedCustomerServiceServer
	dbClient   *ent.Client
	authClient *auth.Client
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

func (s *customerServiceServer) Delete(ctx context.Context, req *grocerystore.DeleteRequest) (*grocerystore.DeleteResposne, error) {
	rc := repository.NewCustomerRepository(s.dbClient)
	customer, err := rc.FindByUID(ctx, req.Uid)
	if err != nil {
		return nil, err
	}
	if err := rc.Delete(ctx, customer.ID); err != nil {
		return nil, err
	}
	ru := repository.NewUserRepository(s.authClient)
	if err := ru.Delete(ctx, req.Uid); err != nil {
		if err != nil {
			return nil, err
		}
	}
	return &grocerystore.DeleteResposne{Uid: req.Uid}, nil
}
