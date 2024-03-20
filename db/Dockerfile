FROM mysql:latest

COPY my.cnf /etc/mysql/my.cnf
RUN mkdir -p /docker-entrypoint-initdb.d
COPY init.sql /docker-entrypoint-initdb.d/init.sql

ENV MYSQL_ROOT_PASSWORD=password
ENV MYSQL_DATABASE=app

EXPOSE 3306
