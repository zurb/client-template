#!/bin/bash

# Get the folder and remote names
echo "What's the name of the GitHub repo?"
read repo_name

# Remove the existing Git history
rm -rf ./.git

# Set up a new Git history
git init
git add .
git commit -m "Initial commit"

# Add remote and push to GitHub
git remote add origin https://github.com/zurb/$repo_name.git
git push -u origin master

# Install dependencies
echo "About to run npm install. Do you need sudo?"
select need_sudo in Yes No
do
  if [ $need_sudo = 'Yes' ]
  then
    sudo npm install
    break
  else
    npm install
    break
  fi
done
bower install

# Done!
echo ""
echo "*******************************"
echo "*                             *"
echo "*  All done! Happy coding :)  *"
echo "*                             *"
echo "*******************************"
echo ""
