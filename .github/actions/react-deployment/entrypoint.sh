#!/bin/bash

#set -e
#set -x
set -o pipefail

if [[ -z "$GITHUB_WORKSPACE" ]]; then
  echo "Set the GITHUB_WORKSPACE env variable."
  exit 1
fi

if [[ -z "$GITHUB_REPOSITORY" ]]; then
  echo "Set the GITHUB_REPOSITORY env variable."
  exit 1
fi

cd "$GITHUB_WORKSPACE" || exit

# Create-React-App includes ESLint and it’s own rules. Only need to create the configuration
# via a new script command in package.json to lint react code eslint src/**/*.js --max-warnings 5 */

echo "--> React Deployment"

npm i

npm run deploy
