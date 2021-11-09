import shampoo from './Assets/images/shampoo.webp'
import detergent from './Assets/images/detergent.webp'
import lotion from './Assets/images/lotion.webp'

import good from './Assets/images/good.webp'
import growth from './Assets/images/growth.webp'
import shield from './Assets/images/shield.webp'
import unisex from './Assets/images/unisex.webp'

import blackman1 from './Assets/images/blackman1.webp'
import blackman2 from './Assets/images/blackman2.webp'
import blackwoman3 from './Assets/images/blackwoman3.webp'

export const products = [
    {
        id: 1,
        tagLine: 'The shampoo of the future',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis pellentesque id nibh tortor. Tortor at auctor urna nunc id cursus metus aliquam. Velit euismod in pellentesque massa.',
        img: shampoo
    },
    {
        id: 2,
        tagLine: 'All about your body',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis pellentesque id nibh tortor. Tortor at auctor urna nunc id cursus metus aliquam. Velit euismod in pellentesque massa.',
        img: lotion
    },
    {
        id: 3,
        tagLine: 'Be Spotless, Be Bright',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis pellentesque id nibh tortor. Tortor at auctor urna nunc id cursus metus aliquam. Velit euismod in pellentesque massa.',
        img: detergent
    }
]

export const qualities = [
    {
        id: 1,
        icon: unisex,
        title: 'Products for all genders',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing el itincididunt ut labore et dolore magna'
    },
    {
        id: 2,
        icon: shield,
        title: 'Use without fear of harm',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing el itincididunt ut labore et dolore magna'
        
    },
    {
        id: 3,
        icon: growth,
        title: 'Products for all ages',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing el itincididunt ut labore et dolore magna'
       
    },
    {
        id: 4,
        icon: good,
        title: 'Effective prducts',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing el itincididunt ut labore et dolore magna'
       
    }
]

export const testimonials = [
    {
        id: 1,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi non arcu risus quis varius quam quisque id diam. Quam quisque id diam vel quam elementum pulvinar etiam.",
        img: blackman1,
        name: "John Doe",
        job: "CEO"

    },
    {
        id: 2,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi non arcu risus quis varius quam quisque id diam. Quam quisque id diam vel quam elementum pulvinar etiam.",
        img: blackman2,
        name: "John Doe",
        job: "CEO"

    },
    {
        id: 3,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi non arcu risus quis varius quam quisque id diam. Quam quisque id diam vel quam elementum pulvinar etiam.",
        img: blackwoman3,
        name: "John Doe",
        job: "CEO"

    }

]