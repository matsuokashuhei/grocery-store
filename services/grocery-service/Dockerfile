FROM rust:1.62.1-buster

RUN apt-get update && apt install -y protobuf-compiler \
 && rustup component add rustfmt \
 && cargo install cargo-watch cargo-edit

WORKDIR /grocery-store/services/grocery-service
