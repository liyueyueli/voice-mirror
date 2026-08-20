# VoiceMirror

VoiceMirror is a voice-first language practice journal that helps learners turn everyday thoughts into more natural speech. Record or upload a short voice memo, receive a transcript, review clearer phrasing, and listen back to a polished version for speaking practice.

## Why I built it

Language learners often know what they want to say but struggle to make it sound natural in real conversation. VoiceMirror is an early-stage side project exploring a simple daily loop: speak freely, notice useful improvements, and practice the refined version aloud.

## Features

- Record a voice memo directly in the browser
- Upload an existing audio recording
- Practice Spanish, French, English, or Mandarin
- Transcribe audio with ElevenLabs Scribe
- Review a cleaned-up, more natural version of the message
- See focused phrase improvements and a short coaching note
- Listen to the improved version with browser speech synthesis
- Try the experience immediately with built-in sample mode

## Tech stack

- Next.js and React
- TypeScript
- ElevenLabs Speech to Text API using `scribe_v2`
- Browser MediaRecorder and SpeechSynthesis APIs
- OpenAI Sites deployment

## Run locally

### Prerequisites

- Node.js 22 or newer
- An ElevenLabs API key with Speech to Text access

### Setup

```bash
git clone https://github.com/liyueyueli/voice-mirror.git
cd voice-mirror
npm install
```

Create a `.env.local` file:

```bash
ELEVENLABS_API_KEY=your_api_key_here
```

Then start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## API-key safety

The ElevenLabs key is read only by the server-side API route. Do not commit `.env.local` or place the key in browser code. This repository contains no API credentials.

## Live demo

[Open VoiceMirror](https://voicemirror-lydia.lydiaydiayudiayuediayue.chatgpt.site)

The hosted demo currently supports sample mode. Live transcription requires an `ELEVENLABS_API_KEY` runtime secret with Speech to Text permission.

## Current MVP limitations

- Language feedback is intentionally lightweight and rule based
- Browser speech quality varies by device and installed voices
- Recordings and transcripts are not saved between sessions
- The hosted deployment still needs its ElevenLabs runtime secret

## Next steps

- Add richer, context-aware language coaching
- Let learners save phrases and track recurring patterns
- Add playback controls and sentence-level pronunciation practice
- Support a private learning history and progress view
