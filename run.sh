docker build ./ -t donor-store 

cd donor-store-gui

docker build ./ -t donor-store-gui 

cd ..

docker-compose up