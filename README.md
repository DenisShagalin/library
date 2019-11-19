* For developers
After pool master you need follow uppdateMigration.bats. 
Then, on the server and on the client, run the command npm i. 

Server:
1) create db 'akvp'

2) edit the file config.json.sample (remove .sample)
    setup config/config.jsom with your data for DB

3) run: 
    npm i -g sequelize sequelize-cli mysql2 mysql sequelize-auto

4) open installDB.bat and setup 'sequelize-auto' with your data for DB, 
    then run installDB.bat
    
5) run: 
    npm start
	
Client:
1) edit the file config.json.sample (remove .sample) from the file name.

2) npm install jest -g 

3) "npm test -- --coverage"  <-- this command will be run test coverage.

