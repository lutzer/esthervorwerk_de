#!/bin/bash
# Builds the page with wintersmith

# change directory to scripts directory
# cd "$(dirname "$0")"

#build page
wintersmith build

#copy build dir to webserver
scp -r build/* esther@esthervorwerk.de:/var/www/esthervorwerk.de/

#copy content dir to webserver
scp -r contents/* esther@esthervorwerk.de:/home/esther/page/contents/