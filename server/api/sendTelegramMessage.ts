const config = useRuntimeConfig()

type Data = {
  email: string
  name: string
}

async function sendTelegramMessage(text: string) {
  // Telegram bot details
  const botToken = config.telegram.botToken
  const chatId = config.telegram.chatId

  // Telegram API URL
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`

  const data = {
    chat_id: chatId,
    text
  }

  try {
    // Send POST request to Telegram API
    const response = await $fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    // Return the API response
    return {
      status: 200,
      message: 'Message sent successfully!',
      response
    }
  } catch (error) {
    // Handle errors
    return {
      status: 500,
      message: 'Failed to send message to Telegram',
      error
    }
  }
}

export default defineEventHandler(async (event) => {
  if (event.method !== 'POST') {
    return {
      status: 405,
      message: 'Only POST requests are allowed'
    }
  }

  const { email, name }: Data = await readBody(event)

  if (!email || !name) {
    return {
      status: 400,
      message: 'Invalid request body'
    }
  }

  return sendTelegramMessage(
    `New newsletter subscriber:\n\nEmail: ${email}\nName: ${name}`
  )
})
