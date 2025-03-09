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

#### **Backend Config**

To configure the backend:

1. Run the following command:

    ```sh
    cd backend
    ```

2. Go to the file `entrypoint.sh`.
3. Change the End of file sequence from `CRLF` to `LF`.

#### **Frontend Config**

To configure the frontend, run the following commands:

```sh
cd frontend
npm install
npm run build
```

Run the following command to build and start the project using Docker:

```sh
docker-compose up --build
```

### Optional

To create a super user:

```bash
docker-compose run backend ./manage.py createsuperuser 
```

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

## **Addresses**  

| Service   | Running with Docker              | Running without Docker              |  
|-----------|---------------------------------|--------------------------------------|  
| Backend   | `http://localhost:80/api` or `http://localhost:80/admin` | `http://localhost:8000/api` or `http://localhost:8000/admin` |  
| Frontend  | `http://localhost:5173/`        | `http://localhost:80/`              |  

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
- Verify that `DB_HOST` or `DB_DOCKER_HOST` is correctly set in the `.env` files for both backend and frontend.

---

## **License**

This project is licensed under the MIT License.

---

## Useful Links

### Django and DRF

- [Django Official Documentation](https://docs.djangoproject.com/en/4.0/)
- Generate a new secret key: [Stackoverflow Link](https://stackoverflow.com/questions/41298963/is-there-a-function-for-generating-settings-secret-key-in-django)
- Modify the Django Admin:
  - Small modifications (add searching, columns, ...): [Link](https://realpython.com/customize-django-admin-python/)
  - Modify Templates and css: [Link from Medium](https://medium.com/@brianmayrose/django-step-9-180d04a4152c)
- [Django Rest Framework Official Documentation](https://www.django-rest-framework.org/)
- More about Nested Serializers: [Stackoverflow Link](https://stackoverflow.com/questions/51182823/django-rest-framework-nested-serializers)
- More about GenericViews: [Testdriver.io Link](https://testdriven.io/blog/drf-views-part-2/)
- [Django Pillow](https://pillow.readthedocs.io/en/stable/)
- [Django-Cors-Headers](https://pypi.org/project/django-cors-headers/)
- [Django-Environ](https://pypi.org/project/django-environ-2/)
- [Psycopg2-binary](https://pypi.org/project/psycopg2-binary/)
- [Gunicorn](https://pypi.org/project/gunicorn/)

### Docker

- [Docker Oficial Documentation](https://docs.docker.com/)
- Dockerizing Django, PostgreSQL, guinicorn, and Nginx:
  - Github repo of sunilale0: [Link](https://github.com/sunilale0/django-postgresql-gunicorn-nginx-dockerized/blob/master/README.md#nginx)
  - My repo to Dockerize Django + MySQL + Nginx + React js: [Ceci-Aguilera/django-react-nginx-mysql-docker](https://github.com/Ceci-Aguilera/django-react-nginx-mysql-docker)
  - Michael Herman article on testdriven.io: [Link](https://testdriven.io/blog/dockerizing-django-with-postgres-gunicorn-and-nginx/)

### PostgreSQL and other Databases

- Install/Setup Database in Linux: [Digital Ocean Link for Django Deployment on VPS](https://www.digitalocean.com/community/tutorials/how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-16-04)
- Install/Setup in Windows: [guru99.com Link](https://www.guru99.com/download-install-postgresql.html)
- Install/Setup in MAC OS: [postgresqltutorial.com Link](https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql-macos/)
- [Django with MySQL](https://dev.to/sm0ke/how-to-use-mysql-with-django-for-beginners-2ni0)

### React

- [React Official Documentation](https://reactjs.org/)
- [Create React App Official Documentation](https://create-react-app.dev/)
- [Bootstrap Official Documentation](https://getbootstrap.com/)
- [React-Bootstrap Documentation](https://react-bootstrap.github.io/)
- [Axios Documentation](https://axios-http.com/docs/intro)

### Miscellaneous

- Create Virual Environment with Virtualenv and Virtualenvwrapper: [Link](https://docs.python-guide.org/dev/virtualenvs/)
- [Configure CORS](https://www.stackhawk.com/blog/django-cors-guide/)
- [Setup Django with Cloudinary](https://cloudinary.com/documentation/django_integration)
