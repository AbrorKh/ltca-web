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
            title: 'Machine Translation (MT)',
            mainImg: translation,//image
            description: 'Our projects in MT revolve around creating collecting bitext data, training baseline models, and improving upon the techniques for low-resource translation in the context of Turkic languages. ',
            people: 'Jamshidbek Mirzakhalov, Duygu Ataman, Shaxnoza Pulatova, Ahsan Wahab, Anoop Babu',
            url: '/projects/translation',
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