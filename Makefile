run:
	hugo server --noHTTPCache
.PHONY: run

css:
	npx tailwindcss -i ./styles/input.css -o ./static/styles.css --watch -c ./tailwind.config.js -m --content './layouts/**/*.html' -p
.PHONY: css
