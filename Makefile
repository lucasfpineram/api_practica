up:
	docker-compose -f docker-compose-localhost.yaml up -d
build:
	docker-compose -f docker-compose-localhost.yaml up --build
down:
	docker-compose -f docker-compose-localhost.yaml down
c-info:
	composer info
c-info:
	composer update