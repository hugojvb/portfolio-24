run:
	hugo server --noHTTPCache --ignoreCache
.PHONY: run

css:
	npx tailwindcss -i ./styles/input.css -o ./static/css/styles.css --watch -c ./tailwind.config.js -m --content './layouts/**/*.html'
.PHONY: css

js:
	npx esbuild ./scripts/input.js --outfile=./static/js/index.js --minify
.PHONY: js
