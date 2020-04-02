include .env 

.PHONY: up

up:	
	docker-compose up -d 

.PHONY: down 

down: 
	docker-compose down 

.PHONY: log 

logs: 
	docker-compose logs -f
