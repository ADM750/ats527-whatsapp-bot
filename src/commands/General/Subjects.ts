import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'link',
            description: 'Displays Sub link of S2 CS',
            aliases: ['ss', 'sub'],
            category: 'general',
            usage: `${client.config.prefix}sub`,
            adminOnly: true
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {

        var message = ""
        var sub = M.args[1]

        // for(var i = 1; i < M.args.length; i++) {
        //     sub = sub + M.args[i];
        // }
        
        
        if(sub == "chemistry" || sub == "Chemistry") {
            message = "\n Engineering Chemistry \n link: https://meet.google.com/yob-ztiq-yqe \n";
        } 
        else if (sub == "pc" || sub == "PC") {
            message = "\n Professional Communication \n link: http://meet.google.com/byt-pzzr-pyg \n";
        }
        else if (sub == "cp" || sub == "CP") {
            message = "\n C Programming \n link: https://meet.google.com/yqn-ijpq-qtv \n";
        }
        else if (sub == "electronics" || sub == "Electronics") {
            message = "\n Basics of Electronics \n link: https://meet.google.com/fko-pqor-sdy \n";
        }
        else if (sub == "Maths" || sub == "maths") {
            message = "*8:30 - 9:10 : \n Maths \n link: https://meet.google.com/gdz-rkfz-aam \n";
        }

        return void (await M.reply(
            message,
            undefined,
            undefined,
            [M.sender.jid],
        ))
    }
}
