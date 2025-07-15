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

You can add your keys in the settings menu. In the Secure Store tab.

![Secure Store](/img/page-images/secure-store.png)

### Key storage and security

- Keys are encrypted the moment you submit them.
- You decide where they live:

  - **Browser‑only** – stored locally in encrypted form.
  - **Server‑side sync (default)** – encrypted copy on our servers plus local copy, so you don’t have to re‑enter keys on each device.

- Once submited, we **never** decrypt or display your keys in the browser. If you mistype a key, delete it and enter the correct one.

### Platform fee when you BYOK

- Standard fee: **5 %** of the vendor’s usage cost. This covers storage, request logging, and compute overhead on our side.
- Exception for very expensive models: we cap the fee so it never exceeds a sensible credit maximum.

  - Example: Veo3 would cost 22 credits under the 5 % rule; we cap it at **1 credit**.

- We review real‑world usage continuously and adjust caps to keep pricing fair and sustainable.

That’s it—no hidden charges, no marketing spin. Use your own keys, pay the vendor’s rate plus a small, transparent fee for the infrastructure you consume.
