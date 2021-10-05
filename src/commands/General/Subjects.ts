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

        var message = "";
        var sub = M.args[1];
        
        if(sub == "chemistry" || sub == "Chemistry" || sub == "ec" || sub == "EC") {
            message = "Engineering Chemistry \nlink: https://meet.google.com/yob-ztiq-yqe";
        } 
        else if (sub == "pc" || sub == "PC") {
            message = "Professional Communication \n link: http://meet.google.com/byt-pzzr-pyg";
        }
        else if (sub == "cp" || sub == "CP" || sub == "CProgramming") {
            message = "C Programming \n link: https://meet.google.com/yqn-ijpq-qtv";
        }
        else if (sub == "electronics" || sub == "Electronics") {
            message = "Basics of Electronics \n link: https://meet.google.com/fko-pqor-sdy";
        }
        else if (sub == "Maths" || sub == "maths") {
            message = "Maths \nlink: https://meet.google.com/gdz-rkfz-aam";
        }
        else if (sub == "Graphics" || sub == "graphics" || sub == "eg" || sub == "EG") {
            message = "Engineering Graphics \nlink: https://meet.google.com/gfk-pbor-mrq";
        }
        else if (sub == "electrical" || sub == "Electrical") {
            message = "Electrical \nlink: http://meet.google.com/psq-mwwt-hyx";
        }
        else if (sub == "electricalW/S") {
            message = "Electrical Workshop \nlink: http://meet.google.com/imr-pvxw-gee";
        }
        else if (sub == "electronicsW/S") {
            message = "Electronics Workshop \nlink: http://meet.google.com/hjm-wqmc-jdk";
        }

        return void (await M.reply(
            message,
            undefined,
            undefined,
            [M.sender.jid],
        ))
    }
}
