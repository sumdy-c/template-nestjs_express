up:
	docker compose up -d

down:
	docker compose down

repair:
	docker compose down && docker compose build && docker compose up -d

restart: 
	docker compose restart

log:
	docker compose logs