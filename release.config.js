module.exports = {
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    ["@semantic-release/npm", {
      "tarballDir": "release"
    }],
    ["@semantic-release/github", {
      "assets": "release/*.tgz"
    }],
    ["@semantic-release/git", {
      'assets': ['CHANGELOG.md', 'package.json', 'package-lock.json'],
      'message': 'chore(release): ${nextRelease.version}\n\n${nextRelease.notes}'
    }]
  ],
  "preset": "angular"
}
