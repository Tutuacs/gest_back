FROM oven/bun

WORKDIR /app

COPY . /app

RUN bun install

RUN bun generate

ENV NODE_ENV production
CMD ["bun", "src/index.ts"]

EXPOSE 3000