import { GoogleSpreadsheet } from 'google-spreadsheet';

// Config variables
// const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
// const SHEET_ID = process.env.REACT_APP_SHEET_ID;
// const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
// const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY;

const SPREADSHEET_ID = '1X1H9BsOlNw1ZDECIMhTwgGZLP70s1XcHX8h7y80RYzc';
const SHEET_ID = '0';
const CLIENT_EMAIL = 'ammc-sheets@ammc-297118.iam.gserviceaccount.com';
const PRIVATE_KEY =
  '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCkg3gY+g3NEeir\nbMlmIXWV4TdfXchPjVfmsP9Wpw842+bK/gtXPxRNmRaEonmJ5RSdApwqEfuzlDyH\nopTmegHqm2NiK7r7j7m4x9bQ37ibqbwKiR+49WPVs9V71dzDU6wwXsqEVY318LEI\n09E3GWJD9rr2G1DthNhoBcg7GgE1lyBTcaYizpQ/RjHTcO3VXYxiYstNeaTHyLU0\nu2OQpR3WKnG6atxsMnh2enUUlXY0dLqOTuvKMQu+95h/hVx8Tj8keciIMynlReLt\nrC5V9jAgxyhhKGSnm4TDJtTtRim0riurKFb+Scws/XHE0JT/7M50fQ8XOwx+Koil\nMvDZl83HAgMBAAECggEARLbK+3e6Ovzvd2adaoSwNfWXaMRlreCmJeupAxsNLx0e\ndYwN1Ze51b2LG8Q3SqL97KTR8HqJbNUOQULluaydT04vASqt03QRST5jGeRQGeiX\n67ihoOISHIkcMri9mHJC+gMlyIdpn5+0ejDq8n4uPp/4MGJxd3vk3fIIU7NFbQmy\nG4A4bHRAPf6nlyp9LN1E1LLBYdyA5ZjhsOuoJDI8lmTJKnz5SgmnD9bUt2Cu9AW7\nfQwP7TUBdaOrtc40j7TD9JHCJpLIJEiqYGVCoWU9H7f647v3pFgm21+7tjJwYYXS\nQaDFxJRZ3tUbZ7/7vq/zym8WE5mayQrpBeD+CzBK0QKBgQDdp/OJdap5toT+YMmK\nUTTk4sdplWK1BycpYxlhV6MG+upwKjZiQgmBL9oX1HBT6DTGK2NLuuGryBg2mlUm\nmcGZzem6yTc/HTGCtOqvKvFsZwMYmMyA/Je6IYNzt5q8cyNhxCYzd22lBMdkTvJQ\nUr+qWfhp7UxMtLwywMNLy6PMlwKBgQC+APHIyBZmphMT8Tl+Wn7kmJq2WGLGakot\nEd+5AaKtKF0xiEqzLM/YE8tFbvejNcjJBwRJeIRrISD+WNGQToHRu/E4Vk1E5KlU\ngfLoi9GghSBk3u59T5mQToU94ysoPODTUzndQtdJIHyL68aoroHVfaWhRYY587vC\n0rC6D/S+UQKBgQCc6xWiLsbtO6WTYHnNjgfgMhvyR2uFtPaoehuxqhUkD+aAWaH+\nlbmc13+Sdza+cBlMYdL9/eNddV6O6Vt25EsG05uwPFr8N3KhkerC76fSkmrCswm0\nFx5jCu7AsS6+UtStletlbBsXQ/bUsH8jFjHSK7eNZg0qEJlbZNPdiOEBKQKBgFeP\no909qGUhv8T+89nw5m1+jj3eOZbqwMhIZmuh/1ABPAFpp9MuoZIYfSLAYssKLD/I\nRgd9zLh6CfRtBhaUt2rqS94El5NaNVbGlCTq2m45K5aQziNdnY1NQkYk/GyMsadx\nwUbgWMpQeFUbEPAHi7nRL5VErvjiA/NimSMF22ohAoGBAKuVsYVwNU3lK7+pe97x\nZt4+S+gncc9uNKk4oQ6OJ9OdM9ry09wUHmud9sbXMQJFpr4NU8KfcthQFsVDidV9\nQ0qehMz6IapZ5s4bdOh2M925SZt+Z3Sd/2nDNJ++0wvbqx8k7HFB6h1fOFDd/XKN\nWCLNKSWTuwZWaDKBxkrwdkEs\n-----END PRIVATE KEY-----\n';

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

export const appendSpreadsheet = async row => {
  try {
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY,
    });
    // loads document properties and worksheets
    await doc.loadInfo();

    const sheet = doc.sheetsById[SHEET_ID];
    const result = await sheet.addRow(row);
  } catch (e) {
    console.error('Error: ', e);
  }
};
