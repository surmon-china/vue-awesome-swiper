#!/bin/sh

set -e

# TODO: 
PKG_VERSION=$(jq -r '.version' package.json)

git fetch origin v"$PKG_VERSION" || {
  yarn global add standard-version
  standard-version -a --release-as "$PKG_VERSION"
  git push --follow-tags origin "$GH_BRANCH"
  npm publish
}
