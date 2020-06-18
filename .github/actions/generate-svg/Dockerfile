FROM think/plantuml:1.2020.5

LABEL "name"="Generate SVG"
LABEL "maintainer"="Tom Halpin"
LABEL "version"="0.0.1"

LABEL "com.github.actions.name"="Generate SVG"
LABEL "com.github.actions.description"="Generate SVG"
LABEL "com.github.actions.icon"="package"
LABEL "com.github.actions.color"="green"

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["sh", "/entrypoint.sh"]