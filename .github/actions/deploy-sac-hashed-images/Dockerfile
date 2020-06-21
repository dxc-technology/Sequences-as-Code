FROM node:alpine3.12

LABEL "name"="Deploy SaC Hashed Images"
LABEL "maintainer"="Tom Halpin"
LABEL "version"="0.0.1"

LABEL "com.github.actions.name"="Deploy SaC Hashed Images"
LABEL "com.github.actions.description"="Deploy SaC Hashed Images to allow sequence to sequence linking."
LABEL "com.github.actions.icon"="package"
LABEL "com.github.actions.color"="green"

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["sh", "/entrypoint.sh"]