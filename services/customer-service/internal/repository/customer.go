package repository

import (
	"context"
	"matsuokashuhei/grocery-store/services/customer-service/ent"
)

type CustomerRepository struct {
	client *ent.Client
}

func (r *CustomerRepository) Find(ctx context.Context, id int) (*ent.Customer, error) {
	return r.client.Customer.Get(ctx, id)
}

func (r *CustomerRepository) Create(ctx context.Context, name string) (*ent.Customer, error) {
	return r.client.Customer.Create().SetName(name).Save(ctx)
}

func (r *CustomerRepository) Update(ctx context.Context, id int, name string) (*ent.Customer, error) {
	return r.client.Customer.UpdateOneID(id).SetName(name).Save(ctx)
}
