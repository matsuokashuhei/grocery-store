package repository

import (
	"context"

	"firebase.google.com/go/v4/auth"
)

type UserRepository struct {
	client *auth.Client
}

func (r *UserRepository) Find(ctx context.Context, uid string) (*auth.UserRecord, error) {
	return r.client.GetUser(ctx, uid)
}

func (r *UserRepository) Create(ctx context.Context, name string, email string, password string) (*auth.UserRecord, error) {
	user := &auth.UserToCreate{}
	user.DisplayName(name).Email(email).Password(password).EmailVerified(true)
	return r.client.CreateUser(ctx, user)
}

func (r *UserRepository) Delete(ctx context.Context, uid string) error {
	return r.client.DeleteUser(ctx, uid)
}

func NewUserRepository(client *auth.Client) *UserRepository {
	return &UserRepository{client: client}
}
