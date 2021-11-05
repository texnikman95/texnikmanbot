const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const fs = require('fs')
const dotenv = require('dotenv');
dotenv.config();


const bot = new Telegraf(process.env.BOT_TOKEN)

bot.use(Telegraf.log());

bot.command('start', (ctx) => {
    return ctx.replyWithHTML('ASSALOMU ALAYKUUM , <b>' + ctx.message.from.first_name + '</b> bizning botga hush kelibsiz buyurtma bermoqchimisiz ?', Extra.markup(
        Markup.inlineKeyboard([Markup.callbackButton('Ha buyurtma bermochiman', 'ws')])
    ))
});

bot.action('admin', (ctx) => {
    ctx.reply('bot admini http://t.me/texnikmanadmin nik ostida'
    )
});
bot.action('hamd', (ctx) => {
    ctx.reply('Qaysi 🐝 🐝 🐝 asalari zotli onaari kerak ?',
        Extra.HTML()
        .markup(Markup.inlineKeyboard([
            Markup.callbackButton('🐝 Karpat', 'hamd'),
            Markup.callbackButton('🐝 Karnika', 'all-right'),
            Markup.callbackButton('🐝 Bacfast', 'note-bad'),
            Markup.callbackButton('🐝 Maxalliy ', 'dont-ask'),
        ]))
    )
});


bot.command('azimjon', (ctx) => {
    return ctx.replyWithAudio({ source: 'media/.mp3' });
});


bot.hears('☎️ Biz haqimizda', (ctx) => ctx.reply('Web saytimiz      ⏩ texnikman.uz                                                                     ☎️ +998996004412              ☎️ +998905653428                                         Ishonch Sifat tezkor aloqa bosh mezonimiz'));



bot.hears('orol', (ctx) => {
    return ctx.replyWithPhoto({ source: 'media/otloq.jpg' },
        Extra.caption('salom aziz dostlar nimalar bilan bandsizjoerhgoeh  @texnikmanadmin ga murojat qiling').markdown()
    )
});

bot.action('ws', (ctx) => {
    ctx.reply('SIZ BOSH MEYUGA KIRDINGIZ ', Markup.keyboard([
            ['🛒 Tovarlarimiz'],

            ['🐝 Ona asalari uchun buyurtma berish'],
            ['📟 Saytimiz', '📞 Admin bilan aloqa'],
            ['☎️ Biz haqimizda'],


        ])
        .oneTime()
        .resize()
        .extra()
    )
});
bot.hears('⏪ Orqaga qaytish', (ctx) => {
    ctx.reply('SIZ BOSH MEYUGA KIRDINGIZ ', Markup.keyboard([
            ['🛒 Tovarlarimiz'],

            ['🐝 Ona asalari uchun buyurtma berish'],
            ['📟 Saytimiz', '📞 Admin bilan aloqa'],
            ['☎️ Biz haqimizda'],


        ])
        .oneTime()
        .resize()
        .extra()
    )
});
bot.hears('📞 Admin bilan aloqa', (ctx) => {
    return ctx.replyWithHTML('Xurmatli ' + ctx.message.from.first_name + ' Admin bilan boglanish uchun pasdagi knopkani bosing', Extra.markup(
        Markup.inlineKeyboard([Markup.callbackButton('📞 Admin bilan aloqa', 'admin')])
    ))
});
bot.action('admin', (ctx) => ctx.reply('assalomu alaykun ' + ctx.message.from.first_name + ' siz bot admini @texnikmanadmin marhamat murojat qilishingiz mumkin'));


bot.hears('🛒 Tovarlarimiz', (ctx) => {
    ctx.reply('Siz 🛒 Tovarlarimiz menyusiga kirdingiz', Markup.keyboard([
            ['🐝 Asalarilar uchun', '🖥 Kompyterlar uchun'],
            ['📱 Telefonlar uchun', ],
            ['⏪ Orqaga qaytish', ],



        ])
        .oneTime()
        .resize()
        .extra()
    )
});
bot.command('poll', (ctx) =>
    ctx.replyWithPoll(
        'Your favorite math constant', ['x', 'e', 'π', 'φ', 'γ'], { is_anonymous: false }
    )
)

bot.command('quiz', (ctx) =>
    ctx.replyWithQuiz(
        '2b|!2b', ['True', 'False'], { correct_option_id: 0 }
    )
)

bot.launch();