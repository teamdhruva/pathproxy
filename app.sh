#!/bin/bash

if [ "$1" == "build" ]; then
    podman build -t pathproxy .
elif [ "$1" == "install"]; then
    podman run --name pathproxy --pod pathproxy-pod --replace -d localhost/pathproxy:latest
elif [ "$1" == "stop" ]; then
    podman stop pathproxy
elif [ "$1" == "start" ]; then
    podman start pathproxy
else
    echo "Usage: $0 {build|install|stop|start}"
    exit 1
fi
