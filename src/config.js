export default {
    fileSystem: {
        path: './DB'
    },
    mongodb: {
        cnxStr: 'mongodb+srv://LucasTissera:LucasTissera@cluster0.arswfmd.mongodb.net/?retryWrites=true&w=majority',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
        }
    },
    firebase: {
        "type": "service_account",
        "project_id": "eccomerce-backend",
        "private_key_id": "e8b228759043ae547be33fb6b68530320933e36b",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCqDeAiY8mIsnlh\nn1izWjT5HtMxgNx8o9zuS4MqiBxuk7vmF1k1kAH7SwRk1xb1nLvANgwNpKcqcpm5\nvWspZzJz8Fk65TTBkrX0zcpcezGuu0Bpi1h5qJ9BNBE4/zdCQQjtHAlYZTSoON4w\nidjBKW8AQa9wvCbFDek60vJhP/IzOlqvyZsES8Ut4V5Pmyq28YSz51MyZlI1EeHW\nlyDGrafJtPHyj/bjm5qMlZM2RIwIMZ2hxK/Y3P9kb9p7z+ecCH3bRFvxOPl/Od56\npRnmgVQu/WIb+Olm3mWupkwatUYJq04wCSoTZfmKU83ws4x10fliDeU2ifEfJVXj\nskbRLoR1AgMBAAECggEAId2kisS7oHUGlknxFLq8vPYGEiA7CLlraKtyIji8DMtw\nCpkQw4l704szg0+Qe3Zsr5Ez4k2tmtb6xVIzMqoiEpPFeWSnFnu8r9WB3NwN32Hc\nKIi/JG9P0+DmIyc0XoXsHKhONiPlkjDNEvaIy6MQP4lVQoq939Vu4q+a5IIjHk9H\n8GekjV6E52ahtzFmkaXTUQtxARhUAWwTk98RLKOzA6XO1VV9RmVQT/r2wpJSAo+K\nmratwBrWJbFkZ7V8t03rkhJZYKcNqIt/yXSVkggZrvsgVEL/1a/O5hsRESmxpDXn\n79flVCEzwApKy3oYEvLbyLz0w2qnF6A2kRlMmJ/UAQKBgQDfJKvJzCcQC5SHcER1\nHmBZVoTpJNeE3LSzwtIW5O035jxumu6/cPZTvLSoa6CrGGpsHvEQ3LZUktSiTtfc\n8wGwkSdBK2kGO1WQxUeWNwKyiAQ+Gdio3FYDBqjkIGFSwR05IYtamxehmg9xdIjV\nYpG3EisHYCF/8eSSTgWZIljOdQKBgQDDGAazyZCNl67cbUIFR4MEpeoHV30RjM/T\nzVIssZcsuy0Q29/4rG2xzc3HRNFkiwvZ4LdY5/7OMXFID77Jv/QQB0JGdtXgqKij\npBPZ6zpCskPgQvwrTf/RKCH76BxTv/pDgkecpePHnAqFYtExbiV7BBc1RanlVrtc\nfnaY35QeAQKBgHnYgl2ctq/SQvZ53Ue+oInn7oeIcI7CHYITHbkWpFnjxJf4zemH\ne1paLqPQsVj76hDEDIpSmtUvoCBIwSKLJx8NA8xYMe8PMzfsIZzqyPRHxVlLr7z1\nI5pfZpW7AKm5fYWWxYtiKNM7VrdzFMzAGCVJLGnImkJNCazCIdhuouOJAoGBAL22\n9X2LuwgVwrMThCoCGoRAm028ZCDW35rFhO11XN7gvbgxOKFne9x1l2/5me290S50\neZb5My1row9CUHN8OGgFxwsisGUhXayT98HoHuWQ2LSSLwoldWj9L975HeLLQyC2\n5dCM+O247fo719XLmKMBnVfugIJGTzhougd7E1wBAoGBALP0BmqW7HvlaIliXPyr\nn3LEju5BD4UGh4qmOHD681JzzeG8VeN1SzgH6qYsaTSB0bNnAv4uo2L98WGFk6fL\nyBvPT271B8bOA/zwHwlSXia9xv9TBJH7oaLyvLh+4YlrEoaQ/5aQdoPWjDSdKslx\nhVXyoS++QZEskYiIlxMZ05mf\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-rtq3b@eccomerce-backend.iam.gserviceaccount.com",
        "client_id": "102615209886251285840",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-rtq3b%40eccomerce-backend.iam.gserviceaccount.com"
      }
      


    // sqlite3: {
    //     client: 'sqlite3',
    //     connection: {
    //         filename: `./DB/ecommerce.sqlite`
    //     },
    //     useNullAsDefault: true
    // },
    // mariaDb: {
    //     client: 'mysql',
    //     connection: {
    //         host: 'localhost',
    //         user: 'coderhouse',
    //         password: 'coderhouse',
    //         database: 'coderhouse'
    //     }
    // }
}