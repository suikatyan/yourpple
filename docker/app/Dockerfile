FROM php:8.1.2-fpm-alpine

COPY ./docker/app/php.ini /usr/local/etc/php/php.ini

COPY --from=composer:2.2.7 /usr/bin/composer /usr/bin/composer

RUN apk --no-cache update && \
    apk --no-cache upgrade && \
    apk --no-cache add \
    autoconf \
    gcc \
    g++ \
    make \
    oniguruma-dev \
    libxml2-dev \
    curl-dev \
    git \
    zip \
    unzip \
    vim \
    && docker-php-ext-install\
    pdo \
    bcmath \
    ctype \
    curl \
    dom \
    fileinfo \
    mbstring \
    xml \
    pdo_mysql \
    && pecl install redis \
    && docker-php-ext-enable redis

WORKDIR /work/backend
