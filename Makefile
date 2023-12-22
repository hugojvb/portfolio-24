run:
	hugo server
.PHONY: run

css:
	npx tailwindcss -i ./styles/input.css -o ./static/styles.css --watch
.PHONY: css
