FROM node:alpine3.12

LABEL "name"="React Deployment"
LABEL "maintainer"="Tom Halpin"
LABEL "version"="0.0.1"

LABEL "com.github.actions.name"="React Deployment"
LABEL "com.github.actions.description"="React Deployment"
LABEL "com.github.actions.icon"="package"
LABEL "com.github.actions.color"="green"

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["sh", "/entrypoint.sh"]