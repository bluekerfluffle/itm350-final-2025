FROM nginx:latest
MAINTAINER Harsh Manvar & Ajeet Raina
ENV DOCKER_BUILDKIT=0
ENV COMPOSE_DOCKER_CLI_BUILD=0
COPY . /usr/share/nginx/html
