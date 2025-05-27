FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
COPY pnpm-lock.yaml ./

RUN npm i -g pnpm@10

RUN pnpm config --location=project set dedupe-peer-dependents=false
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build
RUN pnpm prune --prod

EXPOSE 3000
ENTRYPOINT ["pnpm", "run", "start"]