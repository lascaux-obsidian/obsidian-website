FROM hayd/alpine-deno:1.3.0

EXPOSE 3000

WORKDIR /usr/app

COPY . .

CMD [ "run", "--unstable", "--allow-net", "--allow-env", "--allow-read", "server.tsx", "-c", "tsconfig.json" ]

<<<<<<< HEAD

=======
>>>>>>> eb656f018f0809539b09a561ebc37c7b4cc1719b
