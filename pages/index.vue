<template>
  <div class="flex w-full items-center justofy-center flex-col gap-10 max-w-3xl mx-auto">
    <div class="flex flex-col items-center gap-4">
      <div class="text-5xl text-gray-400">How Funny Can an LLM Be?</div>
      <div class="text-gray-500"><span class="text-2xl">😉</span> with hosted llama3.2</div>
    </div>
    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
          </svg>
        </div>
        <div class="ml-3">
          <p class="text-sm text-yellow-700">
            <strong>Disclaimer:</strong>
This page was created as a playful proof of concept to bring together multiple ideas in one place. It's a minimal and intentionally simple full-stack LLM implementation — not meant to be production-ready or technically challenging, but rather to demonstrate how various concepts can be connected with ease.
          </p>
        </div>
      </div>
    </div>

    <div class="flex w-2/3 gap-4 mt-10">
      <input v-model="animal" type="text" class="border flex-1 border-white pl-2 active:border-none" placeholder="Enter an animal or anything else" >
      <button class="bg-gray-400 py-3 px-4 cursor-pointer" @click="callLLM">Give me a joke</button>
    </div>
    <hr>
    <div v-if="loading">Loading...</div>
    <div class="w-2/3 mx-auto text-xl"> {{ data }}</div>
    <hr>
  </div>
</template>
<script setup lang="ts">
import JSConfetti from 'js-confetti'


const data = ref('')
const animal = ref('')
const loading = ref(false)
const callLLM = async () => {
  loading.value = true
  data.value = ''
  const call = await $fetch('/api/llm', {
    method: 'POST',
    body: {
      animal: animal.value
    },
    responseType: 'stream'
  })
  const reader = call.pipeThrough(new TextDecoderStream()).getReader()

  while (true) {
    const { done, value } = await reader.read()
    if (done) {
      const confetti = new JSConfetti()
      confetti.addConfetti({
        emojis: ['🐶', '🐱', '🐰', '🐸', '🦊'],
        confettiNumber: 100,

      })
      break
    }
    loading.value = false
    data.value += value
  }
  
}
</script>