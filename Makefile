.PHONY: all server build clean
NPM_BIN=$(shell npm bin)

all: build server

server: node_modules/
	$(NPM_BIN)/webpack-dev-server --open

build: node_modules/
	$(NPM_BIN)/webpack --env.dev

clean:
	-rm -rf ./node_modules
	-rm ./public/bundle.js

node_modules/: package.json
	npm install
	touch node_modules
