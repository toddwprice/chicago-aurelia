bucket=$"s3://chicago-aurelia-github-search"
if test $# -gt 0
then
  if test $1 = "staging"
  then
    bucket=$"s3://chicago-aurelia-github-search-staging"
  fi
fi

echo "Creating export folder..."
gulp export
echo "Uploading to s3..."
aws s3 sync ./export/ $bucket --exact-timestamps --delete
echo "Done!"
