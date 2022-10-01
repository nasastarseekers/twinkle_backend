FROM ubuntu:jammy

RUN apt-get update && apt-get install -y \
  python3 python3-pip \
  && rm -rf /var/lib/apt/lists/*

RUN useradd -ms /bin/bash web
USER web
WORKDIR /home/web

RUN mkdir /home/web/twinkle_backend

ADD twinkle_backend/ /home/web/twinkle_backend/

RUN python3 -m pip install -r twinkle_backend/requirements.txt

EXPOSE  40667
CMD [ "python3", "/home/web/twinkle_backend/service.py" ]
