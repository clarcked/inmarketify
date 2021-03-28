FROM php:7.4-apache

RUN apt-get update
RUN apt-get upgrade -y  
RUN apt -y install curl apt-utils
RUN apt-get -qq -y install libcurl3-dev libmcrypt-dev libicu-dev libpcre3-dev libpq-dev zlib1g-dev libzip-dev sendmail libsodium-dev vim git zip unzip wget libsqlite3-dev libsqlite3-0 libbz2-dev
RUN docker-php-ext-install fileinfo tokenizer gettext iconv fileinfo ctype sockets intl pdo pdo_mysql pdo_pgsql mysqli bz2 opcache pdo_sqlite
#####>
COPY ./www ./
#####>
RUN sed -i '/#!\/bin\/sh/aservice sendmail restart' /usr/local/bin/docker-php-entrypoint
RUN sed -i '/#!\/bin\/sh/aecho "$(hostname -i)\t$(hostname) $(hostname).localhost" >> /etc/hosts' /usr/local/bin/docker-php-entrypoint
####>

COPY ./config/cert /etc/apache2/cert
COPY ./config/apache2/sites-available/000-default.conf /etc/apache2/sites-available/000-default.conf
# COPY ./config/apache2/mods-enabled/proxy.conf /etc/apache2/mods-enabled/proxy.conf
COPY ./config/php/php.ini /usr/local/etc/php/php.ini
RUN a2enmod ssl rewrite proxy proxy_http proxy_wstunnel proxy_balancer lbmethod_byrequests
RUN /etc/init.d/apache2 restart
EXPOSE 80 443 
