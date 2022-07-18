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

func (s *customerServiceServer) GetCustomer(ctx context.Context, req *grocerystore.GetCustomerRequest) (*grocerystore.Customer, error) {
	r := repository.NewCustomerRepository(s.dbClient)
	customer, err := r.FindByUID(ctx, req.Uid)
	if err != nil {
		return nil, err
	}
	return &grocerystore.Customer{Uid: customer.UID, Name: customer.Name}, nil
}

func (s *customerServiceServer) CreateCustomer(ctx context.Context, req *grocerystore.CreateCustomerRequest) (*grocerystore.Customer, error) {
	ru := repository.NewUserRepository(s.authClient)
	user, err := ru.Create(ctx, req.Name, req.Email, req.Password)
	if err != nil {
		return nil, err
	}
	rc := repository.NewCustomerRepository(s.dbClient)
	customer, err := rc.Create(ctx, user.UID, user.DisplayName)
	if err != nil {
		return nil, err
	}
	return &grocerystore.Customer{Uid: customer.UID, Name: customer.Name}, nil
}

func (s *customerServiceServer) DeleteCustomer(ctx context.Context, req *grocerystore.DeleteCustomerRequest) (*grocerystore.Customer, error) {
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
	return &grocerystore.Customer{Uid: customer.UID, Name: customer.Name}, nil
}
