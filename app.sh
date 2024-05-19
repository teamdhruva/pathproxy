#!/bin/bash

if [ "$1" == "install" ]; then
    podman run --name pathproxy --pod pathproxy-pod --replace -d docker.io/library/nginx
elif [ "$1" == "stop" ]; then
    podman stop pathproxy
elif [ "$1" == "start" ]; then
    podman start pathproxy
else
    echo "Usage: $0 {install|stop|start}"
    exit 1
fi
