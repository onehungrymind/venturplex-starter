# Welcome To The VenturPlex Starter 👋

This repository is meant for VenturPlex projects as a starting point when creating applications. Anyone within the VenturPlex organization is welcome to use this for faster initial development and/or prototyping. You may start with updating this README and editing the appropriate portions.

![image|app-image](https://picsum.photos/seed/picsum/800/500)

## Prerequisites

Before you begin you need to make sure you have everything needed to get the project up and running.

- Make sure you are on the latest  [node](https://nodejs.org/en/)
- We are using  [yarn](https://yarnpkg.com/lang/en/)  as the package manager for the frontend application.
- Depending on your role on this project, reach out for specific permissions.
- It will be best if you are on a MacOS machine, otherwise, there may be extra configurations needed on your end.

## Getting Started

Once all prerequisites are complete, run  `make init`  to download other necessary tools for development on MacOS.

We may be using [Terraform](https://www.terraform.io/) for our infratstructure tooling with AWS.
If the AWS CLI has never been installed on your machine before, make sure to  [configure](https://docs.aws.amazon.com/eks/latest/userguide/getting-started-eksctl.html#configure-awscli)  it.

## Local Development

For local development, run the following make commands:

```sh
# Run this first and only once to install client dependencies.
- make install

# Starting the client application
- make start-client # This will start the client application

# Starting the server
- make start-server # starts up hasura and automatically applies migrations
# Opening the Hasura Console (optional)
- cd server
- hasura console
# This step is only required if you need access to the database. You can also find the GQL playground here, which may be helpful during development.

# Run this to start clean versions of the applications
- make start-clean
```

> Note: Check back frequently in case anything has changed.

The frontend is available on  [http://localhost:4200](http://localhost:4200/)
The backend is available on  [http://localhost:9695](http://localhost:9695/)

## Author

👤  **VenturPlex**
