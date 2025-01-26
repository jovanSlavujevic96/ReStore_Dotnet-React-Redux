# chose desired node version
$version = "22.12.0"
# install nvm w/ cmder
choco install cmder
choco install nvm
refreshenv
# install node
nvm install $version
nvm use $version