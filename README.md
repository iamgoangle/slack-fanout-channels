## Fanout Incoming Webhooks

We are going to create a [webhook](https://api.slack.com/messaging/webhooks) to post message from application to Slack channels.

### Flows

![flow](https://github.com/iamgoangle/slack-fanout-channels/blob/master/assets/flow.png)

### Getting Started

Update `.env` for the configuration below.

```sh
SLACK_BOT_TOKEN=xoxb-
SLACK_SIGNING_SECRET=
SLACK_CHANNELS_ID=
```

Run the web hook server.

```sh
npm run dev
```

### APIs

**chat.postMessage**

<https://api.slack.com/methods/chat.postMessage>

### Builders

-   [Message](https://api.slack.com/docs/messages/builder?msg=%7B%22text%22%3A%22I%20am%20a%20test%20message%22%2C%22attachments%22%3A%5B%7B%22text%22%3A%22And%20here%E2%80%99s%20an%20attachment!%22%7D%5D%7D)
-   [Block](https://api.slack.com/tools/block-kit-builder?mode=message&blocks=%5B%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22Hello%2C%20Assistant%20to%20the%20Regional%20Manager%20Dwight!%20*Michael%20Scott*%20wants%20to%20know%20where%20you%27d%20like%20to%20take%20the%20Paper%20Company%20investors%20to%20dinner%20tonight.%5Cn%5Cn%20*Please%20select%20a%20restaurant%3A*%22%7D%7D%2C%7B%22type%22%3A%22divider%22%7D%2C%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22*Farmhouse%20Thai%20Cuisine*%5Cn%3Astar%3A%3Astar%3A%3Astar%3A%3Astar%3A%201528%20reviews%5Cn%20They%20do%20have%20some%20vegan%20options%2C%20like%20the%20roti%20and%20curry%2C%20plus%20they%20have%20a%20ton%20of%20salad%20stuff%20and%20noodles%20can%20be%20ordered%20without%20meat!!%20They%20have%20something%20for%20everyone%20here%22%7D%2C%22accessory%22%3A%7B%22type%22%3A%22image%22%2C%22image_url%22%3A%22https%3A%2F%2Fs3-media3.fl.yelpcdn.com%2Fbphoto%2Fc7ed05m9lC2EmA3Aruue7A%2Fo.jpg%22%2C%22alt_text%22%3A%22alt%20text%20for%20image%22%7D%7D%2C%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22*Kin%20Khao*%5Cn%3Astar%3A%3Astar%3A%3Astar%3A%3Astar%3A%201638%20reviews%5Cn%20The%20sticky%20rice%20also%20goes%20wonderfully%20with%20the%20caramelized%20pork%20belly%2C%20which%20is%20absolutely%20melt-in-your-mouth%20and%20so%20soft.%22%7D%2C%22accessory%22%3A%7B%22type%22%3A%22image%22%2C%22image_url%22%3A%22https%3A%2F%2Fs3-media2.fl.yelpcdn.com%2Fbphoto%2Fkorel-1YjNtFtJlMTaC26A%2Fo.jpg%22%2C%22alt_text%22%3A%22alt%20text%20for%20image%22%7D%7D%2C%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22*Ler%20Ros*%5Cn%3Astar%3A%3Astar%3A%3Astar%3A%3Astar%3A%202082%20reviews%5Cn%20I%20would%20really%20recommend%20the%20%20Yum%20Koh%20Moo%20Yang%20-%20Spicy%20lime%20dressing%20and%20roasted%20quick%20marinated%20pork%20shoulder%2C%20basil%20leaves%2C%20chili%20%26%20rice%20powder.%22%7D%2C%22accessory%22%3A%7B%22type%22%3A%22image%22%2C%22image_url%22%3A%22https%3A%2F%2Fs3-media2.fl.yelpcdn.com%2Fbphoto%2FDawwNigKJ2ckPeDeDM7jAg%2Fo.jpg%22%2C%22alt_text%22%3A%22alt%20text%20for%20image%22%7D%7D%2C%7B%22type%22%3A%22divider%22%7D%2C%7B%22type%22%3A%22actions%22%2C%22elements%22%3A%5B%7B%22type%22%3A%22button%22%2C%22text%22%3A%7B%22type%22%3A%22plain_text%22%2C%22text%22%3A%22Farmhouse%22%2C%22emoji%22%3Atrue%7D%2C%22value%22%3A%22click_me_123%22%7D%2C%7B%22type%22%3A%22button%22%2C%22text%22%3A%7B%22type%22%3A%22plain_text%22%2C%22text%22%3A%22Kin%20Khao%22%2C%22emoji%22%3Atrue%7D%2C%22value%22%3A%22click_me_123%22%7D%2C%7B%22type%22%3A%22button%22%2C%22text%22%3A%7B%22type%22%3A%22plain_text%22%2C%22text%22%3A%22Ler%20Ros%22%2C%22emoji%22%3Atrue%7D%2C%22value%22%3A%22click_me_123%22%7D%5D%7D%5D)

### Sentry Webhook Integration

![sentry](https://github.com/iamgoangle/slack-fanout-channels/blob/master/assets/sentry_hooks.png)

![sentry](https://github.com/iamgoangle/slack-fanout-channels/blob/master/assets/sentry_hooks.png)

-   <https://docs.sentry.io/workflow/integrations/integration-platform/#internal-integrations>
-   <https://docs.sentry.io/workflow/integrations/integration-platform/webhooks/?platform=go>

### Slack config BOT Webhook

![hook](https://github.com/iamgoangle/slack-fanout-channels/blob/master/assets/auth_channel.png)

### Slack oAuth

<https://api.slack.com/docs/oauth#flow>

### Dev Locally

<https://slack.dev/node-slack-sdk/getting-started
