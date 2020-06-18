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

echo "--> UML Validation"

#find . -name "*.uml" -exec java -jar /plantuml.jar -checkonly -v '{}' \;

# find the mission directories
find src/sequences -maxdepth 1 -type d | while read dname; do
  if [ "$dname" != "src/sequences" ]; then
    echo "Processing mission:" $dname
    # validate each sequence in each mission as valid UML
    java -jar /plantuml.jar --checkonly -v ${dname}/uml/*.uml
  fi
done

# to set error condition in Docker container action
#if <condition> ; then
#  echo "Game over!"
#  exit 1
#fi