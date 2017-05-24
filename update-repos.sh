curl -o src/_data/repos.json -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/user/repos?per_page=100&visibility=public
