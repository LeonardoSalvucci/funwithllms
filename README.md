# Fun with LLMs

**_Disclaimer:_** \
This page was created as a playful proof of concept to bring together multiple ideas in one place. It's a minimal and intentionally simple full-stack LLM implementation — not meant to be production-ready or technically challenging, but rather to demonstrate how various concepts can be connected with ease.

## Stack
* NuxtJs
* Ollama (llama3.2 model)
* LangChain
* Docker compose

## Setup

The repo has a docker compose file and you can setup everything on your local with just running
```bash
# with -d if you want to run services in background
docker compose up 
```
The ollama service will pull llama3.2 model so you has to be sure it was completely up to test the app

Navigate to http://localhost:3000 and have fun!

## Development Server

1. Make sure to install dependencies:

```bash
# pnpm
pnpm install
```

2. Download and install [ollama](https://ollama.com/) and pull llama3.2 image
```bash
ollama pull llama3.2
```

3. Copy `.env.example` file and create a new `.env` with its content

4. Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm dev
```