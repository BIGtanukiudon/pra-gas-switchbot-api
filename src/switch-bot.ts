import { SWITCH_BOT_CS, SWITCH_BOT_TOKEN } from './const';

type SwitchBotApiData = {
  command: string;
  parameter: string;
  commandType: string;
};

export const getDevices = () => {
  const token = SWITCH_BOT_TOKEN;
  const secret = SWITCH_BOT_CS;

  const t = Date.now();
  const nonce = 'requestID';
  const data = token + t + nonce;

  const sign = Utilities.base64Encode(
    Utilities.computeHmacSha256Signature(data, secret),
  ).toUpperCase();

  const url = `https://api.switch-bot.com/v1.1/devices`;

  const options = {
    headers: {
      Authorization: token,
      sign: sign,
      nonce: nonce,
      t: t.toString(),
      'Content-Type': 'application/json',
    },
  };

  var response = UrlFetchApp.fetch(url, {
    method: 'get',
    ...options,
  });
  var content = response.getContentText();

  Logger.log(content);
};
