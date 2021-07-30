import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'everyone',
            description: 'Tags all users in group chat',
            aliases: ['all', 'tagall'],
            category: 'general',
            usage: `${client.config.prefix}everyone`,
            adminOnly: true
        })
    }

    run = async (M: ISimplifiedMessage,{taggedMessage}: IParsedArgs): Promise<void> => {
        var message = taggedMessage.trim()
        return void (await M.reply(
            // `${M.groupMetadata?.subject || 'EVERYONE'}\n*[TAGS HIDDEN]*`,
            `${message} || 'null'}\n\n*[TAGGED MESSAGE]*`,
            undefined,
            undefined,
            M.groupMetadata?.participants.map((user) => user.jid)
        ))
    }
}
