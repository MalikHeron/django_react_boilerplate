# Stage 1: Build Stage
FROM node:14.19-alpine3.15 as BUILDER

WORKDIR /usr/src/app

# Set timezone
RUN apk update && apk add tzdata
ENV TZ America/New_York
ENV PATH /usr/app/node_modules/.bin:$PATH
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Install vim for any possible debugging need
RUN apk update && apk add vim

# Copy the package.json and package-lock.json files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --silent
RUN npm install react-scripts -g --silent

# Copy the rest of the application files
COPY . .

# Set API server environment variable
ARG API_SERVER
ENV REACT_APP_API_SERVER=${API_SERVER}

# Run the build command and ensure it completes before continuing
RUN npm run build

# Stage 2: Production Stage
FROM node:14.19-alpine3.15

WORKDIR /usr/src/app

# Install the `serve` package to serve the production build
RUN npm install -g serve

# Copy the build files from the BUILDER stage
COPY --from=BUILDER /usr/src/app/build ./build

# Expose port 3000 for the app to be served
EXPOSE 3000

# Command to serve the app
CMD ["serve", "-s", "build", "-l", "3000"]
