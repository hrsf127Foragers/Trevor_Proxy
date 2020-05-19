#!/bin/bash

docker build -t proxy-image .

docker run -dp 8000:8000 --name proxy-container --rm proxy-image

docker commit proxy-container proxy-image

docker tag proxy-image tjpuccini/collections:proxy

docker push tjpuccini/collections:proxy