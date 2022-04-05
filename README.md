# BlockComet Frontend

# BlockComet Developer's Guide

## Setup Instructions

### Prerequisites
Instructions for Mac, Windows, Linux
- [Docker](https://docs.docker.com/get-docker/)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### Installation and Usage (Local Development)
1\. Clone this [repository](https://github.com/dcsil/blockcomet-dev)

```
git clone https://github.com/dcsil/blockcomet-dev
```


2\. Run bin/bootstrap (Ensure you are in the root folder)             

This should install the languages and frontend dependencies 
```
./bin/bootstrap
```

3\. Go to app/client and run the start_app script 

https://localhost:3001 should have the web app
```
./app/client/start_app
```

#### (Optional) Running tests
For all tests (From root folder):
``` 
./bin/test
```

1. webapp tests (Ensure inside client folder):
```
yarn test
```

### Backend
The repository for our backend is https://github.com/dcsil/blockcomet-dev
Please clone that and follow setup instructions to run server. 

## Resources
[BlockComet - Google Drive](https://drive.google.com/drive/folders/1Y2Rrer1_6Pn5j8HI7jxWZaM5FnN1wZ13)
