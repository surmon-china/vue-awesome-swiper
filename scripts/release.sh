#!/bin/sh

set -e

PKG_VERSION=$(jq -r '.version' package.json)

standard-version -a --release-as "$PKG_VERSION"
git push --follow-tags

# git fetch origin v"$PKG_VERSION" || {
  # yarn global add standard-version
  # standard-version -a --release-as "$PKG_VERSION"
  # git push --follow-tags origin "$GH_BRANCH"
# }
