Route Endpoints

Register User: (POST) http://localhost:5000/auth/reg 
Login User: (POST) http://localhost:5000/auth/login
Create Pensioner in System: (POST) http://localhost:5001/pensioner/create
View all Pensioners in System: (GET) http://localhost:5001/allpensioners
View Pensioner Specified by Aadhaar: (GET) http://localhost:5001/pensioner/(aadhaar no)
Delete Pensioner from System: (DEL) http://localhost:5001/delete/(aadhaar no)
Update Pensioner Info: (PUT) http://localhost:5001/update/(aadhaar no)
Process Pension: (POST) http://localhost:5001/pension/create/45217824

Run mongo with the mongo and mongod commands. Run rabbitmq with docker using the command docker run -p 5672:5672 rabbitmq
Boot up each of the three nodeJS microservices (auth, pensioner details & process pensioner) using the nodemon command. Run
the angular application using  ng serve. Click Log In on the navbar. Select Register new user on this page to register a new user.
Once the user is registered they can log in with their new credentials.Once logged in, admin privaleges are given and the user
will be able to access the Add Pensioner, Pensioner List and Process Pensioner pages via the navbar. The pensioner list page
allows for the user to see all the pesnioners currently in the system. There is a dropdown menu containing the aadhaar of each 
of the pensioners, allowing the user to view the records of each pensioner. There is also a delete button at the end of each
which allows for the removal of the pensioner from the system. The user can also navigate to the add pensioner page which provides
a pensioner form, which a user can fill out to add a pensioner to the system. The process pensioner page allows the user to
get a quote on their selected pensioner. 