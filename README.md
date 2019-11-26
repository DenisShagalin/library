Server:
1) create db 'library'

2) edit the file config.json.sample (remove .sample) setup config/config.json with your data for DB.

3) run: 
    3.1) npm i
    3.2) npm i -g sequelize sequelize-cli mysql2 mysql sequelize-auto

4) run:
    4.1) migrations.bat
    4.2) set_data.bat
    
5) run: 
    npm start

Client:

1) edit the file config.json.sample (remove .sample) from the file name, setup "host" for your server.

2) run:
    npm i

3) run:
    npm start


default user:
    login: 'admin'
    password: 'admin'
