FROM hadolint/hadolint:v1.18.0-alpine

LABEL "name"="Dockerfile Linting using hadolint"
LABEL "maintainer"="Tom Halpin"
LABEL "version"="0.0.1"

LABEL "com.github.actions.name"="Dockerfile Linting"
LABEL "com.github.actions.description"="Dockerfile Linting using hadolint"
LABEL "com.github.actions.icon"="package"
LABEL "com.github.actions.color"="green"

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["sh", "/entrypoint.sh"]