docker-up: 
	@echo "Building and running containers in detached mode..."
	docker compose up -d --build

docker-down:
	@echo "Shutting down containers..."
	docker compose down