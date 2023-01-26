FROM jonasal/nginx-certbot:latest

ENV CERTBOT_EMAIL=rcarroll@rcarroll.dev

COPY conf.d/* /etc/nginx/conf.d/

COPY src/ /etc/nginx/html/