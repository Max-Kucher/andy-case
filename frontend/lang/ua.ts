
export default defineI18nLocale(async locale => {
    return {
        breadcrumb: {
            items: {
                index: {
                    ariaLabel: 'Головна',
                },
                'criminal-proceedings': {
                    ariaLabel: 'Кримінальні провадження',
                },
            }
        },
        layouts: {
            title: 'Справа Andy',
        },
        whoIsAndy: {
            title: 'Хто такий Andy',
            short: {
                text_1: 'Хотя официально нашей компании Invest day весной исполнилось 5 лет, опыт нашей команды, на рынках капитала достигает 25 лет. За это время бывало всякое: мировой кризис 2008 года, Covid-19.',
                text_2: 'Но мы выжили и готовы поделиться своим опытом с вами. Программа нашего курса рассчитана на людей, которые только начали накапливать капитал или уже имеют определенную сумму, но не знают, как начать инвестировать.',
                text_3: 'Так что если вы ищете курс по инвестициям для своего ребенка-студента или родственника, который хранит деньги в стеклянной банке, это хорошая возможность.',
            },
        },
        logo: {
            title: 'Справа Andy',
        },
        common: {
            joinCommunity: {
                button: {
                    text: 'Приєднатись до спільноти',
                },
            },
        },
        socials: {
            telegram: 'Телеграм',
            instagram: 'Інстаграм',
            youtube: 'YouTube',
            x: 'X',
        },
        footer: {
            socials: {
                title: 'Підтримайте нас у:',
            },
        },
        readFull: 'Читати повністю',
        criminalProceedings: {
            title: 'Кримінальні провадження',
            block: {
                title: 'Кримінальні{0}провадження',
                button: 'Дивитись всі провадження',
            }
        },
        caseProgress: {
            title: 'Хід справи',
            block: {
                readMore: 'Дивитися хід справи',
            },
        },
        officers: {
            title: 'Правопохоронці',
            readMore: 'Читати досьє',
            block: {
                readMore: 'Дивитись усі досьє',
            },
        },
        news: {
            title: 'Новини',
            block: {
                readMore: 'Дивитись усі новини',
            },
        },
        viewsCount: 'Кількість переглядів',
    }
})
