.PHONY: all server build lint test test.only clean
NPM_BIN=$(shell npm bin)

all: build server

server: node_modules/
	$(NPM_BIN)/http-server

build: node_modules/
	$(NPM_BIN)/webpack --env.dev

lint:
	$(NPM_BIN)/eslint test/ src/

test: node_modules/ lint
	$(NPM_BIN)/mocha --opts ./mocha.opts test/

test.only:
	$(NPM_BIN)/mocha --opts ./mocha.opts test/

clean:
	-npm cache clean
	-rm -r ./node_modules
	-rm ./public/bundle.js

node_modules/: package.json
	npm install
	touch node_modules
