FROM node:16

ENV workdir=/grocery-store/services/api-gateway
WORKDIR $workdir
COPY services/api-gateway/package.json services/api-gateway/package-lock.json $workdir
# RUN npm install -g eslint \
#  && npm install
RUN npm install
