# **Django + React Boilerplate**

A full-stack boilerplate integrating **Django**, **React**, **PostgreSQL**, **Docker**, and **Nginx**, designed for scalable web applications.

---

## **Features**
- 🐍 **Django Backend** – RESTful API using Django REST Framework
- ⚛️ **React Frontend** – Built with React + TypeScript and TailwindCSS
- 🐘 **PostgreSQL Database** – Robust database support
- 🐳 **Dockerized** – Supports containerized development & deployment
- 🌍 **Nginx Proxy** – Handles reverse proxying for better performance
- 🔐 **CORS & CSRF Protection** – Secure API communication

---

## **Project Structure**
```
.readme_assets/          # Documentation assets
.venv/                   # Virtual environment (ignored in Git)
.vscode/                 # VSCode settings
django_backend/          # Backend (Django REST API)
    ├── api/             # Django app
    ├── django_backend/  # Django project settings
    ├── static/          # Static files
    ├── templates/       # HTML templates
    ├── manage.py        # Django CLI
    ├── Dockerfile       # Backend Docker config
nginx/                   # Nginx reverse proxy
react_frontend/          # Frontend (React + TypeScript)
    ├── src/             # Source code
    ├── public/          # Public assets
    ├── Dockerfile       # Frontend Docker config
    ├── vite.config.ts   # Vite configuration
docker-compose.yml       # Docker Compose config
.env                     # Environment variables (ignored in Git)
.gitignore               # Files to ignore in Git
LICENSE                  # Project license
Readme.md                # Documentation
```

---

## **Setup Instructions**

### **1. Clone the Repository**
```sh
git clone https://github.com/MalikHeron/django-react-boilerplate.git
cd django-react-boilerplate
```

---

### **2. Set Up Environment Variables**
Create a `.env` file in the root directory and add:
```
COMPOSE_PROJECT_NAME=your_name_react_django_nginx_postgresql

ENV_API_SERVER=http://127.0.0.1

POSTGRES_USER=docker
POSTGRES_PASSWORD=SuperDockerPassword5432!!!
POSTGRES_DB=docker

# If you already have the port 3306 in use, you can change it (for example if you have MySQL)
HOST_MACHINE_MYSQL_PORT=5432
```
For backend, add a `.env` file in `django_backend/`:
```
SECRET_KEY='secret'

DB_NAME='django_db'
DB_USER='django_user'
DB_PASSWORD='SuperDjangoPassword5432!!!'
DB_HOST='localhost'
DB_PORT=5432

DB_DOCKER_NAME='docker'
DB_DOCKER_USER='docker'
DB_DOCKER_PASSWORD='SuperDockerPassword5432!!!'
DB_DOCKER_HOST='database'
DB_DOCKER_PORT=5432
```
For frontend, add a `.env` file in `react_frontend/`:
```
VITE_API_URL_DEV=http://127.0.0.1:8000/api
VITE_API_URL_PROD=
```

---

### **3. Start the Project Using Docker**
```sh
docker-compose up --build
```
- **Backend** → `http://127.0.0.1:8000/`
- **Frontend** → `http://localhost:5173/`
- **Nginx Proxy** → `http://localhost/`

---

### **4. Manual Setup (Without Docker)**

#### **Backend Setup**
```sh
cd django_backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

#### **Frontend Setup**
```sh
cd react_frontend
npm install
npm run dev
```

---

## **API Endpoints**
| Method | Endpoint              | Description                 |
|--------|-----------------------|-----------------------------|
| GET    | `/api/features/`      | List available features    |

---

## **Troubleshooting**
### **CORS Issues**
- Ensure `CORS_ALLOWED_ORIGINS` in `settings/base.py` includes `"http://localhost:5173"`

### **Database Connection Issues**
- Ensure PostgreSQL is running and `DATABASE_URL` is correctly set in `.env`

---

## **License**
This project is licensed under the MIT License.

---

Now you're all set! 🚀