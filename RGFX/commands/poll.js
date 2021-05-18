module.exports = (client) => {
  const channelIds = ['817366615539712070', '817366593537310750']

  const addReactions = (message) => {
    message.react(`<a:thumbsup:817368572916400139>`)

    setTimeout(() => {
      message.react(`<a:thumbsdown:817368419983949834>`)
    }, 750)
  }

  client.on('message', async (message) => {
    if (channelIds.includes(message.channel.id)) {
      addReactions(message)
    } else if (message.content.toLowerCase() === '!poll') {
      await message.delete()

      const fetched = await message.channel.messages.fetch({ limit: 1 })
      if (fetched && fetched.first()) {
        addReactions(fetched.first())
      }
    }
  })
}
