---
sidebar_position: 4
---

# Bring Your Own Keys

AI‑Flow Cloud works out of the box, but you can plug in your own API keys whenever you want tighter cost control or vendor‑side billing. Every model node accepts its native key.

| Node family                                                 | Required key              |
| ----------------------------------------------------------- | ------------------------- |
| GPT, GPT Vision, GPT Image, OpenAI o‑series, Text‑to‑Speech | **OpenAI API key**        |
| Replicate and sub‑nodes (FLUX, Veo3, …)                     | **Replicate API key**     |
| Stability AI and sub‑nodes                                  | **Stability AI API key**  |
| DeepSeek                                                    | **DeepSeek API key**      |
| Gemini                                                      | **Google Gemini API key** |
| Claude                                                      | **Anthropic API key**     |
| Grok Video, Grok Image                                      | **XAI API key**           |

Add or manage keys in **Settings → Secure Store**.

![Secure Store](/img/page-images/secure-store.png)

### Key storage and security

- **Encrypted end‑to‑end.** Your key is encrypted the moment it reaches our servers and is never written to disk in plaintext.
- **You choose where it lives.**
  - **Local‑only** Keeps an encrypted copy in your browser only.
  - **Sync (default)** Also stores an encrypted copy on our servers so you don’t have to re‑enter it on every device.
- **Delete any time.** One click wipes all copies.
