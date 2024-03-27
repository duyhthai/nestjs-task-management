heroku addons:create heroku-postgresql:essential-0 -a task-management-dt

heroku git:remote -a task-management-dt

heroku config:set NPM_CONFIG_PRODUCTION=false
heroku config:set NODE_ENV=production
heroku config:set STAGE=prod

heroku config:set DB_HOST=cbbirn8v9855bl.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com
heroku config:set DB_PORT=5432
heroku config:set DB_USERNAME=ucn6hbek2oq6e
heroku config:set DB_PASSWORD=
heroku config:set DB_DATABASE=dficot185jutaf
heroku config:set JWT_SECRET=

git push -f heroku HEAD:master

heroku logs --tail