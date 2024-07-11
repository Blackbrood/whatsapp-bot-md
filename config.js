const toBool = (x) => x == 'true'
const { Sequelize } = require('sequelize')
const { existsSync } = require('fs')
const path = require('path')
const configPath = path.join(__dirname, './config.env')
const databasePath = path.join(__dirname, './database.db')
if (existsSync(configPath)) require('dotenv').config({ path: configPath })
const DATABASE_URL =
  process.env.DATABASE_URL === undefined ? databasePath : process.env.DATABASE_URL
module.exports = {
  VERSION: require('./package.json').version,
  SESSION_ID: (process.env.SESSION_ID || '11_7_61fa_7216_b0a0').trim(),
  DATABASE:
    DATABASE_URL === databasePath
      ? new Sequelize({
          dialect: 'sqlite',
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: 'postgres',
          ssl: true,
          protocol: 'postgres',
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
  HANDLERS: (process.env.PREFIX || '^[.,!]').trim(),
  SUDO: process.env.SUDO || '2348078112891,2349060509982',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  BRANCH: 'master',
  STICKER_PACKNAME: process.env.STICKER_PACKNAME || '❤️,Caesar',
  ALWAYS_ONLINE: toBool(process.env.ALWAYS_ONLINE),
  LOG_MSG: toBool(process.env.LOG_MSG) || false,
  RMBG_KEY: process.env.RMBG_KEY || 'null',
  BAILEYS_LOG_LVL: process.env.BAILEYS_LOG_LVL || 'silent',
  LANG: (process.env.LANGUAG || 'en').toLowerCase(),
  WARN_LIMIT: process.env.WARN_LIMIT || 3,
  FORCE_LOGOUT: toBool(process.env.FORCE_LOGOUT),
  BRAINSHOP: process.env.BRAINSHOP || '159501,6pq8dPiYt7PdqHz3',
  DIS_BOT: process.env.DISABLE_BOT || 'null',
  ANTILINK_MSG: process.env.ANTILINK_MSG || '_Antilink Detected &mention kicked_',
  ANTISPAM_MSG: process.env.ANTISPAM_MSG || '_Antispam Detected &mention kicked_',
  ANTIWORDS_MSG: process.env.ANTIWORDS_MSG || '_AntiWord Detected &mention kicked_',
  ANTIWORDS: process.env.ANTIWORDS || 'word',
  MENTION: process.env.MENTION || '',
  MAX_UPLOAD: process.env.MAX_UPLOAD || 230,
  REJECT_CALL: toBool(process.env.REJECT_CALL),
  VPS: toBool(process.env.VPS),
  AUTO_STATUS_VIEW: (process.env.AUTO_STATUS_VIEW || 'false').trim(),
  SEND_READ: toBool(process.env.SEND_READ),
  KOYEB: toBool(process.env.KOYEB),
  KOYEB_NAME: (process.env.KOYEB_NAME || '').trim(),
  KOYEB_API: (process.env.KOYEB_API || '').trim(),
  AJOIN: toBool(process.env.AJOIN),
  GPT: (process.env.GPT || 'free').trim(),
  MODEL: (process.env.MODEL || 'gpt-3.5-turbo').trim(),
  APPROVE: (process.env.APPROVE || '').trim(),
  ANTI_DELETE: (process.env.ANTI_DELETE || 'null').trim(),
  PERSONAL_MESSAGE: process.env.PERSONAL_MESSAGE || 'null',
  DISABLE_START_MESSAGE: process.env.DISABLE_START_MESSAGE
    ? toBool(process.env.DISABLE_START_MESSAGE)
    : false,
  ANTI_BOT: (process.env.ANTI_BOT || 'off').trim(),
  ANTI_BOT_MESSAGE: process.env.ANTI_BOT_MESSAGE || '&mention removed',
  WARN_MESSAGE:
    process.env.WARN_MESSAGE ||
    '⚠️WARNING⚠️\n*User :* &mention\n*Warn :* &warn\n*Remaining :* &remaining',
  WARN_RESET_MESSAGE:
    process.env.WARN_RESET_MESSAGE || `WARN RESET\nUser : &mention\nRemaining : &remaining`,
  WARN_KICK_MESSAGE: process.env.WARN_KICK_MESSAGE || '&mention kicked',
  TRUECALLER: process.env.TRUECALLER,
  DELETE_TYPE: (process.env.DELETE_TYPE || '').trim(),
  LIST_TYPE: (process.env.LIST_TYPE || 'poll').trim(),
  BING_COOKIE: (process.env.BING_COOKIE || 'Imported_MUID=2E6FA74207ED6B5134AEB30906476A4D; MUID=2C5BCDE5EAF46F151478D9AAEB146E2E; _EDGE_V=1; MUIDB=2C5BCDE5EAF46F151478D9AAEB146E2E; MSPTC=EwNrdi--gmUqvho0bd5TdYKEAVGAGLFQZEjB3Qy4Hpw; _HPVN=CS=eyJQbiI6eyJDbiI6MSwiU3QiOjAsIlFzIjowLCJQcm9kIjoiUCJ9LCJTYyI6eyJDbiI6MSwiU3QiOjAsIlFzIjowLCJQcm9kIjoiSCJ9LCJReiI6eyJDbiI6MSwiU3QiOjAsIlFzIjowLCJQcm9kIjoiVCJ9LCJBcCI6dHJ1ZSwiTXV0ZSI6dHJ1ZSwiTGFkIjoiMjAyNC0wNC0wNFQwMDowMDowMFoiLCJJb3RkIjowLCJHd2IiOjAsIlRucyI6MCwiRGZ0IjpudWxsLCJNdnMiOjAsIkZsdCI6MCwiSW1wIjo1LCJUb2JuIjowfQ==; PPLState=1; MMCASM=ID=A5A13BE7A3544E74B55E777B5FCEFFE0; SRCHD=AF=NOFORM; SRCHUID=V=2&GUID=BDAFBB0A35084142AE67C7909E93E848&dmnchg=1; NAP=V=1.9&E=1d95&C=Uezi2YAI64iy4ejj4LCespE4_s_JPAc3wJqJCqDNLgilEiPwyjruZw&W=1; KievRPSSecAuth=FAByBBRaTOJILtFsMkpLVWSG6AN6C/svRwNmAAAEgAAACEzX4rJeVaeHMASfknOUOt1vM9phJuMq8eQCg+hp0IQgF91d+wfnJWeGTDSoZdNcObJ+D7ZWMzRUZu9g72C2+sHMUcaupoN47JhPdo4XKjlu5GgMIdFeHtn+vLgBXaz5iNa1uBG7Z4WgRAG5/0B5ddX7k5KMPsfmG+j94p6EPxfvYdNovXHPyEb8plJ4YeLWH76eYyvmoWOJo2DnpEtu04GgK+ZqZvFDEK/Felv4pVimZjdc7NzQzZoGsTX8AGerX8QMscYqYNqS6BORXi3hFrxIMcW5zf7KTiCqSExWBXdaaJ4RAd/uPue6//XF2FPh+JKNzP2a7Ec0qbf1dk63rdEwyOag2NTtLywq5qvBRrabzesC6Z/nXuslrdB3FJ43URzxcscT9eWuCqgjqhzz9UwK6jlQUkvkBpjpmOVvL8iAVvmC4v8WdT0nSOnnE2b9A2qkMNy4Mocv9YayPWE0M6uDfanEVOXY0Uh/YXmZXPX6Om4JtbvcVBCYMp6lcrAKJLIj4XjdaYyqLPRHh21Di3H6gXTZ17oSmsnp/RZjfOG/qHbw7sogpuFpH5ORVssZmvMVJl0r6jXVIL7G2jC0fN9ho+ORVhVIiScCWUTQuuDqEdvvUk2n5lVdP7c2psyiegXOfOhWsjSyzA0WZnw/42mn+GejDVZjRrdVE2cgKE/FEkjDqUeL7UNkI5J8bbJCBOp27tOM6r9RhsFWtej1f1k/bR4NHczwisT5rMpagOXC0Bopx6c/0C+/JXRHiiSilHu+drR0+cNECVHRpxM/PuMdW+caGZ3ZCMGQ7BFjexwhPiq3NMXZ+VrRKovxot5K81sfg+/k90o0C7GV1B/BUUwutoQlPz12r08A7FCEtG3XUBWrUOR/5AibcM35kCwE+FkP+KcpeINUfNJeuXM2uIwOUmXtpzC9zBlaJ1BrK6sSqHEOyibzZj9+1A/IrxNKzLRIAbFUGg9nSn0wukDb96er3SGMrrpvuAh7IssRwPPgat3/EZvc70ElpaTGDmdUlt7BNmcP4tSmEy7SpMOgaAMl36CYR2jhNHKTrsonHaH9r+vd066hN01Qreg3678+y1kDpdU46cfaQxyPAdUTBoAXQvz8TzbI4Go/FLFmsJRd5gSN2BfBooc/lE5OKnP8ujSu0nU8MRPz3ofVey4Q8fLekyN2MYeEHXKJAIgaY780djIxQr/DhmzUAoKo0UVAgrXGjC++JxABPhVL/BmpNBzY007tclcnpcyylEpPegoQCToCetEjunO1u/UZcZs2tHTkpfuZfrawpjLImHf3+xSfvfhbNcfCM+IrjqZnbCMSZbdA4FSp89AnfCdadRoQ0bhk1PltmrsUEzoM/zyfnkPCe0hxAYqabvD8nrekXOgI2SK554uonU8bq/Wtzo0HR/oc4CYB0FQ5M6bfsH84nnNAJJNWM8LmeKySFAA14SoGXYZLLEBmZzPR8atnAMBe4g==; _clck=vrx72v%7C2%7Cfn5%7C0%7C1607; ABDEF=V=13&ABDV=13&MRNB=1720112774415&MRB=0; ANON=A=122A23B49DF63AB6D062812DFFFFFFFF&E=1def&W=1; _U=1bvpcPdYdKUV3yLQ5ODUBVC1rhP9B1HZth384fW45vjCy-kXesFg-QFmG3LFrZx8pL8Kt3jF_ugKSlHT_oJo9O8ZMSW3oi5PE3hAWbkeXrrpxWYETlByapQH6gXrSYeQyRuYpE6TZExXJR-PXVTJap4YeeHhJlRlvVLpi2CNnmDg8kL8_vqj8Cn5Fb2sJCXMeyYFarbqMifb8yh5sWEvBrbXKg8XPmvxp1ubRkCmYhNw; _EDGE_S=SID=19DFBFAB838C6ED60355AB12826C6FDE; WLS=C=47873488ab988337&N=Victor; EDGSRCHHPGUSR=CIBV=1.1788.0; SRCHS=PC=U531; ak_bmsc=AFB2378D2995542C25D0DC61C9EB91EE~000000000000000000000000000000~YAAQLEISAnzTToGQAQAAhOsVoRgWiuemH75gwB7QKrrpHjVnypwAwD+IWUhH3ab7cSQFquJZz6lWzRycId/NQU03L0wLGTkC+R38tMGEfWGxrN3VpsTYG2epYihDFdVSXbQtOFCipe06GjxDiv6tns60jhqisqaNuAsfJIg4u3RINZHmW4zOr+DGZtP9mX/z+oOYvq89+1uPMJ1cgXO/gA2saY+Zg0ksWqMuniURnD1HBVVi5NOCWm/CI90YStZVIdh6yn2nQK3PXsmFt/e7VJ2bv3ruacCI997o9oqP43d1+CJYLfDERqz2PF3b63r0v4TcYLPw8jlguhrC1u3h0DX4h3J6X264/pIT3QGaGvRlvuCXOD0/bCCUehVr8eMwGw==; USRLOC=HS=1&ELOC=LAT=9.062087059020996|LON=7.480708599090576|N=Abuja%2C%20Federal%20Capital%20Territory|ELT=1|&CLOC=LAT=9.0667|LON=7.4833|A=72208|TS=240711091912|SRC=I&BID=MjQwNzExMDIxOTExXzk1ZjczNWFhZjY2NDk5N2FmMjZkMGY0YzUwOWIxZGU3N2QzMDQzYmE1OWY0NjU0ZGFjYmRkOTIyODlkOWVmODc=; SRCHUSR=DOB=20240327&T=1720689486000&POEX=W; _RwBf=r=0&ilt=0&ihpd=0&ispd=0&rc=402&rb=402&gb=0&rg=0&pc=402&mtu=0&rbb=0.0&g=0&cid=&clo=0&v=1&l=2024-07-11T07:00:00.0000000Z&lft=0001-01-01T00:00:00.0000000&aof=0&ard=0001-01-01T00:00:00.0000000&rwdbt=0001-01-01T16:00:00.0000000-08:00&rwflt=2024-01-19T06:47:24.1763925-08:00&o=0&p=MSAAUTOENROLL&c=MR000M&t=6912&s=2024-01-19T14:44:42.2264923+00:00&ts=2024-07-11T09:18:32.9883913+00:00&rwred=0&wls=2&wlb=0&wle=0&ccp=2&lka=0&lkt=0&aad=0&TH=&mta=0&e=E17LjfhBooseFMOCqjlqQmlTE61ETyVXx2lNgo_ZrtKTlJgJU_mMloSSZF-bLZ0Y9Yww74nREDp7VX6ROiBQFA&cpt=0&A=; _Rwho=u=d&ts=2024-07-11; _SS=SID=19DFBFAB838C6ED60355AB12826C6FDE&PC=U531&R=402&RB=402&GB=0&RG=0&RP=402; dsc=order=Video; ipv6=hit=1720693138113; bm_sv=E5D6D2BAF89ACE5CA7F7E5A73FAC86EF~YAAQJkISAq1ITJSQAQAA+4EcoRgcRB1exbdNRobznKIN8HoFBP9OuZY6DFOt0YExBCedJZk5aQYjrntu4bJfBF/O3jjSzDst3zKqJ8aoNv9gscBo4PFeRiY+8DmgR4XxXnsgOZ0dBFI+LejuDjpz80y2tMoRACfif1toyN7lBfdvLZa1MitH8M1jP0jhwX7lsVuFvgFL3U3CfYmbNHvLfikH2QfnnSARISNpUMgqjhBJRoR71x0eko7gx1UDgw==~1; GC=HUWkqChHH0aDiO98ji6oZk8aMDAdzBJxwSb26YFR5nSrMFxhAI-_thEe3BP9Q-mlsCREBJ9N8-1OWc1gSE-27Q; SRCHHPGUSR=SRCHLANG=en&DM=1&HV=1720689536&WTS=63851895490&IG=54294BD574254295B7045C227EBF77F7&PV=15.0.0&BRW=NOTP&BRH=S&CW=763&CH=692&SCW=763&SCH=796&DPR=1.0&UTC=-420&CIBV=1.1788.0&EXLTT=29&PRVCW=1318&PRVCH=692').trim(),
  GEMINI_API_KEY: (process.env.GEMINI_API_KEY || 'AIzaSyA_2tJNTgnvgLNN3aGbNtIF7EWscaT8vMs').trim(),
  ADMINS: process.env.GROUP_ADMINS || '2349060509982',
}
