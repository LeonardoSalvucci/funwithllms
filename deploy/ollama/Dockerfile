FROM ollama/ollama

COPY ./deploy/ollama/pull-and-start.sh /tmp/run-ollama.sh
RUN chmod +x /tmp/run-ollama.sh
WORKDIR /tmp
ENTRYPOINT ["/tmp/run-ollama.sh"]