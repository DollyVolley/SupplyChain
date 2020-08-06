
export function publishMessage (mamState, trytesMessage) {
  console.log("Commiting new State")
  var message = Mam.create(mamState, trytesMessage);
  try {
    Mam.attach(message.payload, message.address, Consts.IOTA_ATTACH_DEPTH, Consts.IOTA_ATTACH_WORK)
  } catch (err) {
    console.log("There was an error attaching the message", err);
  }
  return message.state
}

export async function fetchChannel (root, mode) {
  console.log(`Fetch channel:\nRoot ${root}\nmode ${mode}\n`)
  const result = await Mam.fetch(root, mode)
  console.log(`Success: ${result.messages.length} messages fetched`)
  let messages = []
  for (var i in result.messages) {
    messages.push(Converter.trytesToAscii(result.messages[i]))
  }
  return messages
}
