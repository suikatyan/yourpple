FROM nginx:1.21.6-alpine

ENV TZ=Asia/Tokyo

# nginx config file
COPY ./docker/web/*.conf /etc/nginx/conf.d/

WORKDIR /work/backend
