all: build

build:
	bin/tinydocs.js components/Root.js content

push:
	git subtree push --prefix dist origin gh-pages

force-push:
	git push origin `git subtree split --prefix dist master`:gh-pages --force

watch: build
	npm run watch
