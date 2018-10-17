# Biblioteka Sopot. Drupal 8 & Docker

## installing 

0. Stop all working dockers with `docker stop $(docker ps -a -q)`
1. `docker-compose up -d`
2. `docker-compose exec php composer update`
3. Visit http://localhost:8888/ to continue installation process
4. For database use the following settings 
```
DB_HOST: mariadb
DB_USER: drupal
DB_PASSWORD: drupal
DB_NAME: drupal
DB_DRIVER: mysql
```

### composer 

`docker-compose exec php composer ...`

### drush 

`docker-compose exec php drush ...`

## Developing 

install npm dependencies and run watch script 

1. `npm i`
2. `npm run watch` this lanuches browser sync and watches all the css and js changes 

## Deploying

1. `npm run prod` compress css & js 

Drush export import 