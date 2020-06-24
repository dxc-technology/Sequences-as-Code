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

echo "--> Deploy SaC hashed images to allow sequence to sequence linking."

ls -l ./images/*.svg

git remote -v
git branch -a
git status

# by default only get the active branch so need to get all branches and thus
# supplement the default checkout scm step in the triggered job's Jenkinsfile
echo "changing the remote fetch config and fetching gh-pages branches by fetching remotes/origin/*"

git config remote.origin.fetch '+refs/heads/*:refs/remotes/origin/*'
git fetch --all

git remote -v
git branch -a

# deploying the images folder created in the commit stage from master branch to the gh-pages branch
# to enable sequences link to sequences
git checkout sac01
git pull

echo "fetching the sac hashed images from the images folder of the master branch into the sac01 branch"

git checkout remotes/origin/master -- images
git commit -m "added sac hashed images"
git push

ls -l ./images/*.svg
