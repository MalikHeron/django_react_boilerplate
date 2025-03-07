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

```plaintext
backend/                 # Backend (Django REST API)
    ├── .venv/           # Virtual environment (ignored in Git)
    ├── api/             # Django app
    ├── django_backend/  # Django project settings
    ├── static/          # Static files
    ├── templates/       # HTML templates
    ├── manage.py        # Django CLI
    ├── Dockerfile       # Backend Docker config
frontend/                # Frontend (React + TypeScript)
    ├── src/             # Source code
    ├── public/          # Public assets
    ├── Dockerfile       # Frontend Docker config
    ├── vite.config.ts   # Vite configuration
nginx/                   # Nginx reverse proxy
docker-compose.yml       # Docker Compose config
.env                     # Environment variables (ignored in Git)
.gitignore               # Files to ignore in Git
LICENSE                  # Project license
README.md                # Documentation
```

---

## **Setup Instructions**

### **1. Clone the Repository**

First, clone the repository to your local machine:

```sh
git clone https://github.com/MalikHeron/django-react-boilerplate.git
cd django-react-boilerplate
```

---

### **2. Set Up Environment Variables**

#### **Backend Environment Variables**

Create a `.env` file in the root directory and add the following:

```dotenv
COMPOSE_PROJECT_NAME=your_name_react_django_nginx_postgresql

ENV_API_SERVER=http://127.0.0.1

POSTGRES_USER=docker
POSTGRES_PASSWORD=SuperDockerPassword5432!!!
POSTGRES_DB=docker

# If you already have port 3306 in use, you can change it (e.g., for MySQL)
HOST_MACHINE_MYSQL_PORT=5432
```

Additionally, create a `.env` file in the `backend/django_backend/settings` directory:

```dotenv
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

#### **Frontend Environment Variables**

Create a `.env` file in the `frontend/` directory:

```dotenv
VITE_API_URL_DEV=http://127.0.0.1:8000/api
VITE_API_URL_DOCKER=http://localhost:80/api
VITE_API_URL_PROD=
```

---

### **3. Start the Project Using Docker**

---

#### **Backend Setup**

To set up the backend:

1. Run the following command:

```sh
cd backend
```

2. Go to the file `entrypoint.sh`.
3. Change the End of file sequence from `CRLF` to `LF`.

---

#### **Frontend Setup**

To set up the frontend, run the following commands:

```sh
cd frontend
npm install
npm run build
```

---

Run the following command to build and start the project using Docker:

```sh
docker-compose up --build
```

- **Backend** → `http://localhost:80/api` or `http://localhost:80/admin`
- **Frontend** → `http://localhost:80/`
- **Nginx Proxy** → `http://localhost:80/`

---

### **4. Manual Setup (Without Docker)**

#### **Change the Default `settings.py` File**

To change the default `settings.py` file from Docker to development, follow these steps:

1. Go to the file `django_backend/django_backend/settings/__init__.py`.
2. Modify the following line of code:

```python
from .docker import *
```

to

```python
from .dev import *
```

This change will make sure that the development settings (`dev.py`) are used instead of the Docker-specific settings (`docker.py`).

#### **Backend Setup**

Next, set up the backend manually:

```sh
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

#### **Frontend Setup**

To set up the frontend, run the following commands:

```sh
cd frontend
npm install
npm run dev
```

---

## **API Endpoints**

| Method | Endpoint              | Description                    |
|--------|-----------------------|--------------------------------|
| GET    | `/api/features/`      | List available features       |

---

## **Troubleshooting**

### **CORS Issues**

If you're facing CORS issues, ensure that `CORS_ALLOWED_ORIGINS` in `settings/base.py` includes `"http://localhost:5173"` for the React development server.

### **Database Connection Issues**

If you're encountering database connection issues:

- Make sure PostgreSQL is running.
- Verify that `DATABASE_URL` is correctly set in the `.env` files for both backend and frontend.

---

## **License**

This project is licensed under the MIT License.

---

Now you're all set! 🚀
