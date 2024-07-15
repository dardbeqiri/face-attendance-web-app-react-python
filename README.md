# face-attendance-web-app-react-python

<p align="center">
<a href="https://www.youtube.com/watch?v=yWmW5uEtNws">
    <img width="600" src="https://utils-computervisiondeveloper.s3.amazonaws.com/thumbnails/with_play_button/face_attendance_web_app_react_python.jpg" alt="Watch the video">
    </br>Watch on YouTube: Face attendance + face recognition web app with React and Python !
</a>
</p>

## deployment
### Run it on a docker container: 
# Run it in a Docker

If you want to run it in  **Docker**(Recomended). 
You will need to installl docker:

    sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

Then create a directory called `data` this is where the face recognition data will be saved and log-in/out data, therefore we need a persistent storage.

To start the docker container, execute: 

    docker run -p 8000:8000 -p 80:3000 -v $(pwd)/data:/face-attendance-web-app-react-python/backend/data dardbeqiri/face-attendance-web-app

This command will download and run the container which is based on ubuntu 22:04 and contains these packages: `software-properties-common,  git, python3.8 python3.8-dev python3.8-distutils python3-virtualenv cmake3.5 npm`

The backend job will be send to background, the Frontend start job "npm start" will stay at foreground to keep the container runing. 

After you execute the docker run command, the app will be availabile on localhost, backend at localhost:8000
The login/logout and picke data will be stored on the `data` directory you created before starting the docker.
 te files and folders

Overthese you can create the same container by yourself using the dockerfile on this repository: https://github.com/dardbeqiri/face-attendance-web-app-dockerfile

***OR Run directly without docker***

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

# Support My Work

Hey there! 👋

I hope you find my projects on GitHub and Docker helpful. Maintaining and developing these projects requires time and effort. If you enjoy using them and would like to support my work, consider making a donation. Your contribution will help me keep the projects alive and continually improve them.

**[Donate via PayPal](https://paypal.me/dardbeqiri)**

Thank you for your support! 🙏

---

**Follow Me:**
- GitHub: [github.com/dardbeqiri](https://github.com/dardbeqiri)
- Docker Hub: [hub.docker.com/u/dardbeqiri](https://hub.docker.com/u/dardbeqiri)

---

Feel free to reach out if you have any questions or suggestions.

Best,
Dard Beqiri
