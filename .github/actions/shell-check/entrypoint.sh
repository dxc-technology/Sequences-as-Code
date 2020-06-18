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

echo "--> check shell script files using shellcheck"

shellcheck --shell=bash  ./.github/actions/dockerfile-linting/entrypoint.sh
shellcheck --shell=bash  ./.github/actions/js-linting/entrypoint.sh
shellcheck --shell=bash  ./.github/actions/json-linting/entrypoint.sh
shellcheck --shell=bash  ./.github/actions/react-linting/entrypoint.sh
shellcheck --shell=bash  ./.github/actions/shell-check/entrypoint.sh
shellcheck --shell=bash  ./.github/actions/uml-validation/entrypoint.sh
shellcheck --shell=bash  ./.github/actions/yaml-linting/entrypoint.sh

shellcheck --shell=bash  ./generatesvg.sh