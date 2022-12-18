# How to configurate project without docker

1. Install node.js
2. Install dependencies for each project `yarn ipkgs:install`
3. Run projects with `yarn start:prod` command
4. Project will be available on:
   | Project | URL |
	 | --- | --- |
	 | Frontend | http://localhost:5173 |
	 | Backend | http://localhost:3000/api |

## How to configurate project with docker

1. Install docker
2. Run command
	```bash
	`docker-compose -f docker-compose.yaml --env-file ./server/.env up --build`

	or

	`docker-compose -f docker-compose.yaml --env-file ./server/.env up -d`
	```
3. Project will be available on:
	 | Project | URL |
	 | --- | --- |
	 | Frontend | http://localhost:5173 |
	 | Backend | http://localhost:3000/api |

4. If you wanna stop the project run ` docker-compose -f docker-compose.yaml --env-file ./server/.env down`;
   