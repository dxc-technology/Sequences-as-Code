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

echo "--> Generate SVG from UML"

# find the mission directories
find src/sequences -maxdepth 1 -type d | while read -r dname; do
  if [ "$dname" != "src/sequences" ]; then
    echo "Processing mission:" "$dname"
    # convert each sequence in each mission from UML to SVG
    java -jar /plantuml.jar -v -tsvg -r -o ../images "${dname}"/uml/*.uml
    find "$dname"/images -type f -name '*.svg'|while read -r fname; do
      echo "Generating SVG for sequence:" "$fname"
      # copy each generated SVG file to a SaC hashed file which is outside Reacts control
      # so won't have a React hash applied. This is to allow subsequent sequence to sequence linking.
      cp "$fname" ./images/"$(basename "$dname")"."${fname##*/}"
    done
  fi
done
ls -l ./images