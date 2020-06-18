FROM koalaman/shellcheck-alpine:v0.7.1

LABEL "name"="Shell script synax checking"
LABEL "maintainer"="Tom Halpin"
LABEL "version"="0.0.1"

LABEL "com.github.actions.name"="Shell script syntax checking"
LABEL "com.github.actions.description"="Shell script syntax checking"
LABEL "com.github.actions.icon"="package"
LABEL "com.github.actions.color"="green"

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["sh", "/entrypoint.sh"]
