package repositories

import (
	"context"

	"firebase.google.com/go/v4/auth"
)

type AuthRepository struct {
	client *auth.Client
}

func (r *AuthRepository) Create(ctx context.Context, email string, password string) (*auth.UserRecord, error) {
	params := (&auth.UserToCreate{}).Email(email).Password(password).EmailVerified(false)
	return r.client.CreateUser(ctx, params)
}

func NewAuthRepository(client *auth.Client) *AuthRepository {
	return &AuthRepository{client: client}
}
