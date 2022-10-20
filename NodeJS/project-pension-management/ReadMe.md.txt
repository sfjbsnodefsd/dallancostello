Route Endpoints

Register User: (POST) http://localhost:5000/auth/reg 
Login User: (POST) http://localhost:5000/auth/login
Create Pensioner in System: (POST) http://localhost:5001/pensioner/create
View all Pensioners in System: (GET) http://localhost:5001/allpensioners
View Pensioner Specified by Aadhaar: (GET) http://localhost:5001/pensioner/(aadhaar no)
Delete Pensioner from System: (DEL) http://localhost:5001/delete/(aadhaar no)
Update Pensioner Info: (PUT) http://localhost:5001/update/(aadhaar no)
Process Pension: (POST) http://localhost:5001/pension/create/45217824