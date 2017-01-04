all: build

build:
	bin/tinydocs.js components/Root.js content

push:
	git subtree push --prefix dist origin gh-pages
