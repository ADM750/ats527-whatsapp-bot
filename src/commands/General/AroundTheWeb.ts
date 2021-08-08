import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'



export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'aroundTheWeb',
            description: 'Checks the answer students type',
            aliases: ['atw', 'web'],
            category: 'general',
            usage: `${client.config.prefix}aroundTheWeb`,
            adminOnly: false
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        var message = "\"";
        var isTrue = false;
        for (var i = 1; i < M.args.length; i++) {
            if((M.args[i] === "signed" || M.args[i] === "Signed" || M.args[i] === "sign") && (M.args[i+1] === "APK" || M.args[i+1] === "apk" || M.args[i+1] === "Apk")) {
                isTrue = true;
            }
            message = message + "" + M.args[i];
        }
        if(message === "\"") {
             message = "Your answer is empty!!";
        } else if (isTrue){
            message = message + "\"\n\nThis answer is correct and deserves an appreciation!!\n\nWohoo";
        } else {
            message = "Sorry try again :)";
        }

        return void (await M.reply(
            message,
            undefined,
            undefined,
            [M.sender.jid],
        ))
    }
}
