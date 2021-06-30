FROM denoland/deno:1.11.3

EXPOSE 3000

WORKDIR /usr/app

USER deno

COPY . .

CMD [ "run", "--allow-net", "--allow-env", "--allow-read", "--unstable", "server.tsx" ]


# deno run --unstable --allow-net --allow-env --allow-read server.tsx -c tsconfig.json
