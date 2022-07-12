package repository

import (
	"context"

	"firebase.google.com/go/v4/auth"
)

type UserRepository struct {
	client *auth.Client
}

func (r *UserRepository) Create(ctx context.Context, email string, password string) (*auth.UserRecord, error) {
	user := &auth.UserToCreate{}
	user.Email(email).Password(password).EmailVerified(true)
	return r.client.CreateUser(ctx, user)
}

func NewUserRepository(client *auth.Client) *UserRepository {
	return &UserRepository{client: client}
}
