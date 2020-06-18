#!/bin/sh

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

echo "--> checking out the landscape"
ls -al

echo "--> lint docker files using hadolint"

hadolint ./.github/actions/dockerfile-linting/Dockerfile # || true
hadolint ./.github/actions/generate-svg/Dockerfile
hadolint ./.github/actions/js-linting/Dockerfile
hadolint ./.github/actions/json-linting/Dockerfile
hadolint ./.github/actions/react-linting/Dockerfile
hadolint ./.github/actions/shell-check/Dockerfile
hadolint ./.github/actions/uml-validation/Dockerfile
hadolint ./.github/actions/yaml-linting/Dockerfile