import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'timetable',
            description: 'Displays time table of S3 CS',
            aliases: ['tt', 'subjects'],
            category: 'general',
            usage: `${client.config.prefix}timetable`,
            adminOnly: false
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {

        var message = ""
        var day = M.args[1]

        // for(var i = 1; i < M.args.length; i++) {
        //     day = day + M.args[i];
        // }
        
        
        if(day == "monday" || day == "Monday") {
            message = "*9:15 - 10:10 : \n Design Engineering \n\n *10:15 - 11:10 : \n LSD \n\n *11:20 - 12:15 : \n DCS \n\n *1:00 - 3:50 : \n DS/OOPS LAB \n"
        } 
        else if (day == "tuesday" || day == "Tuesday") {
            message = "*9:15 - 10:10 : \n LSD  \n\n *10:15 - 11:10 : \n OOPS  \n\n *11:20 - 12:15 : \n DS \n\n *1:00 - 1:55 : \n SE \n\n *2:00 - 2:55 : \n DCS \n\n *3:00 - 3:50"
        }
        else if (day == "wednesday" || day == "Wednesday") {
            message = "*9:15 - 10:10 : \n DS \n\n *10:15 - 11:10 : \n OOPS \n\n *11:20 - 12:15 : \n DCS \n\n *1:00 - 3:50 : \n DS/OOPS LAB \n\n"
        }
        else if (day == "thursday" || day == "Thursday") {
            message = "*9:15 - 10:10 : \n DS \n\n *10:15 - 11:10 : \n LSD \n\n *11:20 - 12:15 : \n DS \n\n *1:00 - 1:55 : \n OOPS \n\n *2:00 - 2:55 : \n Minor \n\n *3:00 - 3:50:  \n Minor"
        }
        else if (day == "friday" || day == "Friday") {
            message = "*9:15 - 10:10 : \n DCS \n\n *10:15 - 11:10 : \n OOPS \n\n *11:20 - 12:15 : \n DE \n\n *2:00 - 2:55 : \n LSD \n\n *3:00 - 3:50 : \n SE \n\n"
        }
        else if (day == "sunday" || day == "Sunday") {
            message = "Go get some sleep"
        }
        else if (day == "saturday" || day == "Saturday") {
            message = "Go watch Movies"
        }
        else {
            message = "Go get some help and never come back!!!";
        }

        return void (await M.reply(
            message,
            undefined,
            undefined,
            [M.sender.jid],
        ))
    }
}
