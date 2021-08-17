import { MessageType, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import YT from '../../lib/YT'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'motivation',
            description: 'Randomly Posts motivation videos from youtube',
            category: 'media',
            aliases: ['mt'],
            usage: `${client.config.prefix}motivation [URL]`,
            adminOnly: true,
            dm: false,
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {

        var videos = [
            "https://youtu.be/nrBcSzdpLEQ",
            "https://www.youtube.com/watch?v=Bi-7pho5XB8",
            "https://www.youtube.com/watch?v=dI7zTD6QdO8",
            "https://www.youtube.com/watch?v=ZXcTvbLwsRs",
            "https://www.youtube.com/watch?v=oXoDZwabiEI",
        ];
        var min = 0;
        var max = 6;
        var randomNumber =  Math.floor(Math.random() * (max - min) ) + min;


        // if (!M.urls.length) return void M.reply('Please provide the URL of the YT video you want too download')
        const video = new YT(videos[randomNumber], 'video')
        if (!video.validateURL()) return void M.reply(`Please provide a Valid YT URL`)
        const { videoDetails } = await video.getInfo()
        M.reply(
            `*Processing....*`,
            undefined,
            undefined,
            [M.sender.jid],
        )
        // if (Number(videoDetails.lengthSeconds) > 1500)
        //     return void M.reply('Cannot Download videos longer than 25 Minutes')
        M.reply(await video.getBuffer(), MessageType.video).catch(() => M.reply('An error occured...'))
    }
}
