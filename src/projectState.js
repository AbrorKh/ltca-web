//Import Images
import asr from './assets/images/speech.svg';
import lm from './assets/images/lm.svg';
import translation from './assets/images/translation.svg';
import scheck from './assets/images/scheck.svg';

export const ProjectState = () => {
    return [
        {
            title: 'Automatic Speech Recognition',
            mainImg: asr,//image
            description: '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
            people: '...',
            url: '/projects/asr',
            publications: [
                {
                    title: 'Publication 1',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
                {
                    title: 'Publication 2',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
                {
                    title: 'Publication 2',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
                {
                    title: 'Publication 2',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
                {
                    title: 'Publication 2',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },

            ],
        },
        {
            title: 'Language Modeling',
            mainImg: lm,//image
            description: '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
            people: '...',
            url: '/projects/lm',
            secondaryImg: '',//image
            publications: [
                {
                    title: 'title',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },

            ],
        },
        {
            title: 'Translation',
            mainImg: translation,//image
            description: '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
            people: '...',
            url: '/projects/translation',
            secondaryImg: '',//image
            publications: [
                {
                    title: 'Publication 1',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },

            ],
        },
        {
            title: 'Spellchecking',
            mainImg: scheck,//image
            description: '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
            people: '...',
            url: '/projects/spellchecking',
            secondaryImg: '',//image
            publications: [
                {
                    title: 'Publication 1',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },

            ],
        },
    ];
};