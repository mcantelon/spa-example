all:
	mkdir -p public/js/build
	browserify index.js -o public/js/build/bundle.js
