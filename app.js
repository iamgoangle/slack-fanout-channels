const { createServer } = require('http')
const express = require('express')
const bodyParser = require('body-parser')

const dotenv = require('dotenv')
dotenv.config()

// const slackSigningSecret = process.env.SLACK_SIGNING_SECRET
const port = process.env.PORT || 3000

const { WebClient } = require('@slack/web-api')
const token = process.env.SLACK_BOT_TOKEN
const webClient = new WebClient(token)

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

/**
 * @method POST
 * @description receive an events from Sentry webhook and fanout to Slack channels
 *
 */
app.post('/sentry-hooks', async (req, res) => {
    const channelIds = process.env.SLACK_CHANNELS_ID
    if (channelIds.split(',').length == 0) {
        res.status(400).send('Missing channel ids')
    }

    // const mentionChannels = 'C01022XFA4F' // ["C01022XFA4F", "CV2NKURDZ"]
    const mentionChannels = process.env.SLACK_CHANNELS_ID.split(',')
    const { project_name, message, id, url, level, project, event } = req.body

    // console.log(project_name)
    // console.log(project)
    // console.log(message)
    // console.log(id)
    // console.log(url)
    // console.log(level)
    // console.log(req.body)
    console.log(JSON.stringify(event.stacktrace))

    mentionChannels.forEach(async channelId => {
        try {
            const res = await webClient.chat.postMessage({
                text: url,
                mrkdwn: true,
                channel: channelId,
                blocks: [
                    {
                        type: 'section',
                        text: {
                            type: 'mrkdwn',
                            text: `:boom: :fire: You have a new error [sentry id = ${id}]:\n*Title:* <${url}|${message}>`,
                        },
                    },
                    {
                        type: 'section',
                        fields: [
                            {
                                type: 'mrkdwn',
                                text: `*Project:*\n${project_name}`,
                            },
                            {
                                type: 'mrkdwn',
                                text: `*Service:*\n${project}`,
                            },
                            {
                                type: 'mrkdwn',
                                text: `*Stack Trace:*\n${event.stacktrace}`,
                            },
                            {
                                type: 'mrkdwn',
                                text: `*Level:*\n${level}`,
                            },
                        ],
                    },
                ],
            })
            console.log('Message sent: ', res.ts)
        } catch (e) {
            console.log(JSON.stringify(e))
            res.status(500).send(e)
        }
    })

    res.status(200).send('OK')
})

const server = createServer(app)
server.listen(port, () => {
    console.log(`Listening for events on ${server.address().port}`)
})
