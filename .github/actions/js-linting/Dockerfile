FROM alpine:3.12.0

LABEL "name"="JS Linting"
LABEL "maintainer"="Tom Halpin"
LABEL "version"="0.0.1"

LABEL "com.github.actions.name"="JS Linting"
LABEL "com.github.actions.description"="JS Linting"
LABEL "com.github.actions.icon"="package"
LABEL "com.github.actions.color"="green"

RUN apk update

RUN apk add --no-cache nodejs=12.17.0-r0 nodejs-npm=12.17.0-r0 && \
    npm config set unsafe-perm true && \
    npm install -g eslint@7.2.0

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["sh", "/entrypoint.sh"]