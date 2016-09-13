#!/bin/sh
echo "Exporting..."
gulp export
cd export
http-server