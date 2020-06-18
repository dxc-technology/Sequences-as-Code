FROM python:3-alpine3.11

LABEL "name"="YAML Linting"
LABEL "maintainer"="Tom Halpin"
LABEL "version"="0.0.1"

LABEL "com.github.actions.name"="YAML Linting"
LABEL "com.github.actions.description"="YAML Linting"
LABEL "com.github.actions.icon"="package"
LABEL "com.github.actions.color"="green"

RUN pip install yamllint==1.23.0 && \
    rm -rf ~/.cache/pip

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["sh", "/entrypoint.sh"]