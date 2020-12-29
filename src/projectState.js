//Import Images
import asr from './assets/images/speech.svg';
import lm from './assets/images/lm.svg';
import translation from './assets/images/translation.svg';
import scheck from './assets/images/scheck.svg';
import textgen from './assets/images/textgen.svg';

export const ProjectState = () => {
    return [
        {
            title: 'Automatic Speech Recognition (ASR)',
            mainImg: asr,//image
            description: 'ASR refers to the technologies that enable the recognition and translation of spoken language into text by computers.',
            people: 'Sherzod Kariev, Shaxnoza Pulatova, Jamshidbek Mirzakhalov',
            url: '/projects/asr',
            publications: [
                // {
                //     title: 'Publication 1',
                //     description:
                //         '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                // },
                // {
                //     title: 'Publication 2',
                //     description:
                //         '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                // },
                // {
                //     title: 'Publication 2',
                //     description:
                //         '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                // },
                // {
                //     title: 'Publication 2',
                //     description:
                //         '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                // },
                // {
                //     title: 'Publication 2',
                //     description:
                //         '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                // },

            ],
        },
        {
            title: 'Language Modeling',
            mainImg: lm,//image
            description: 'Language Modeling deals with exploring computable representations of human languages that enable effective knowledge transfer to a wide range of downstream tasks.',
            people: 'Ahsan Wahab, Shaxnoza Pulatova, Jamshidbek Mirzakhalov',
            url: '/projects/lm',
            secondaryImg: '',//image
            publications: [
                // {
                //     title: 'title',
                //     description:
                //         '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                // },

            ],
        },
        {
            title: 'Machine Translation (MT) for Turkic languages',
            mainImg: translation,//image
            description: 
            'Machine Translation is an area of research exploring the methods for automatic translation of text or document from one language to another. The biggest MT system in the industry, Google Translate, currently supports 103 languages out of which 8 are Turkic languages (Azerbaijani, Kazakh, Kyrgyz, Tatar, Turkish, Turkmen, Uyghur, Uzbek). There are over 30 languages in the Turkic family most of which lack any sophisticated MT system support. Some of these unsupported languages are spoken by more than a million native speakers (Bashkir, Chuvash, Qashqai etc).\n\n ' +
            
            'Our project attempts to connect and involve various stakeholders (native speakers, industry partners, governments, researchers etc) in the process of creating MT systems. You can read and find out more about the project in the below link.',
            people: 'Jamshidbek Mirzakhalov, Duygu Ataman, Shaxnoza Pulatova, Anoop Babu, Sherzod Kariev, Orhan Firat, Mammad Hajili, Bekhzod Moydinboyev',
            url: '/projects/translation',
            link: 'https://github.com/turkic-interlingua/til-mt',
            secondaryImg: '',//image
            publications: [
                // {
                //     title: 'Publication 1',
                //     description:
                //         '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                // },

            ],
        },
        {
            title: 'Spellchecking',
            mainImg: scheck,//image
            description: 'A spell checker is an essential language technology that enables content creators to write in concise and grammatically sound language. Currently, our project revolves around creating semantic spell checkers for Turkic languages using monolingual data.',
            people: 'Abror Khaytbayev, Mohiyaxon Uzoqova',
            url: '/projects/spellchecking',
            secondaryImg: '',//image
            publications: [
                // {
                //     title: 'Publication 1',
                //     description:
                //         '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                // },

            ],
        },
        {
            title: 'Rule-based Text Generation',
            mainImg: textgen,//image
            description: '...',
            people: 'Anoop Babu, Antonio Laverghetta',
            url: '/projects/rb_textgen',
            secondaryImg: '',//image
            publications: [
                // {
                //     title: 'Publication 1',
                //     description:
                //         '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                // },

            ],
        },
    ];
};