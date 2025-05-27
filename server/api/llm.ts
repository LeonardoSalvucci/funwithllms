import { ChatPromptTemplate } from '@langchain/core/prompts'
import { StringOutputParser } from '@langchain/core/output_parsers'
import { ChatOllama } from '@langchain/ollama'

const { OLLAMA_BASE_URL } = process.env

export default defineEventHandler(async (event) => {
  const { animal } = await readBody(event)
  const model = new ChatOllama({
    model: 'llama3.2',
    temperature: 1,
    baseUrl: OLLAMA_BASE_URL || 'http://ollama:11434',
  })
  const prompt = ChatPromptTemplate.fromTemplate('Tell me a joke about {topic}')
  const parser = new StringOutputParser()
  const chain = prompt.pipe(model).pipe(parser)
  return sendStream(event, await chain.stream({topic: animal || 'cow'})) 
})