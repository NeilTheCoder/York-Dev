const reqEvent = (event) => require(`../events/${event}`);
module.exports = client => {
  client.on('ready', () => reqEvent('ready')(client));
  client.on('message', reqEvent('message'));
  client.on('messageReactionAdd', reqEvent('messageReactionAdd'));
  // client.on('guildMemberAdd', reqEvent('guildMemberAdd'));
  // client.on('guildMemberRemove', reqEvent('guildMemberRemove'));
  client.on('guildDelete', reqEvent('guildDelete'));
  client.on('guildCreate', reqEvent('guildCreate'));
};
