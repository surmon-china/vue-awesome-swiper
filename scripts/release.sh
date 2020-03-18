#!/bin/sh

set -e

# https://github.com/mikeal/merge-release/blob/v4.0.7/merge-release-run.js
PKG_VERSION=$(jq -r '.version' package.json)

git fetch origin v"$PKG_VERSION" || {
  type standard-version || npm i -g standard-version
  standard-version -a --release-as "$PKG_VERSION"
  # TODO: test
  # git push --follow-tags origin "$GH_BRANCH"
}
