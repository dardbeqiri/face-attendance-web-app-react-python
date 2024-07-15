# face-attendance-web-app-react-python

<p align="center">
<a href="https://www.youtube.com/watch?v=yWmW5uEtNws">
    <img width="600" src="https://utils-computervisiondeveloper.s3.amazonaws.com/thumbnails/with_play_button/face_attendance_web_app_react_python.jpg" alt="Watch the video">
    </br>Watch on YouTube: Face attendance + face recognition web app with React and Python !
</a>
</p>

## deployment
### Run it on a docker container: 



### backend

#### setup server

SSH into the instance and run these commands to update the software repository and install the dependencies.

#### Launch API endpoints (BACKEND)
 
 Clone repository.
    
    sudo apt update
    
    sudo apt-get install git -y 
    
    git clone git@github.com:dardbeqiri/face-attendance-web-app-react-python.git
   
    cd face-attendance-web-app-react-python
    
Install Python 3.8, create a virtual environment and install requirements.

    sudo apt install software-properties-common

    sudo add-apt-repository ppa:deadsnakes/ppa

    sudo apt install python3.8 python3.8-dev python3.8-distutils python3-virtualenv -y
    
    cd backend

    virtualenv venv --python=python3.8

    source venv/bin/activate

    pip install -r requirements.txt
    
Launch app (BACKEND.

    python3 -m uvicorn main:app

    you can send that process to background by running  

    python3 -m uvicorn main:app &
    
### frontend

You can host the frontend locally (localhost) or on a server.

#### setup server

The process is similar as in the previous case.

The app will be launched in the port 3000.
   
    cd face-attendance-web-app-react-python
    
    cd frontend/face-attendance-web-app-front/
    
    sudo apt-get install npm
    
    npm install

#### Launch App 

    npm start

    you can send that process to background by running 

    npm start &

Edit the value of __API_BASE_URL__ in src/API.js with the ip of the backend server if you decide to have the backend on another server, keep in mind to always keep the http:/ or https:// in the beginning of the address.

You may need to adjust your browser to allow access to your webcam through an unsecure conection from the EC2 ip address. In chrome this setting is adjusted here __chrome://flags/#unsafely-treat-insecure-origin-as-secure__.
