SRC := content
DST := dist

SOURCES := $(shell find $(SRC) -type f)
OUTPUT := $(subst :,@,$(subst $(SRC),$(DST),${SOURCES:.md=.html}))

all: build

build: $(OUTPUT)

dist/%.md~: ;

dist/%.html: content/%.md
	@$(shell mkdir -p $(dir $@))
	./bin/tinydocs.js components/Root.js content $<

build-all:
	bin/tinydocs.js components/Root.js content

push:
	git subtree push --prefix dist origin gh-pages

force-push:
	git push origin `git subtree split --prefix dist master`:gh-pages --force

watch: build-all
	npm run watch
