import { CharacterInterface } from '../interfaces/character-interface';

export const CHARACTERS: CharacterInterface[] = [
    {
        id: 1, 
        name: 'Peter',
        image: 'https://brobible.files.wordpress.com/2018/04/peter-deadpool-2-pete-wisdom.jpg?quality=90w%3D650h%3D323&w=650&h=323',
        type: 'Hero', 
        abilities: ['sight', 'walking', 'breathing', 'thought this looked fun'], 
        description: 'Just some boring guy that shouldn\'t be fucked with'
    },
    {
        id: 2, 
        name: 'Peter\'s Wife',
        image: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-family-guy-alex-borstein.jpg',
        type: 'Villain', 
        abilities: ['Mind control over Peter'], 
        description: 'Can control Peterm with just a look'
    },
    {
        id: 3, 
        name: 'Batman',
        image: 'https://www.dccomics.com/sites/default/files/styles/comics320x485/public/Char_Thumb_Batman_20190116_5c3fc4b40fae42.85141247.jpg?itok=_Or1JrO2',
        type: 'Hero', 
        abilities: ['Money', 'Gadgets', 'Martial Ats'], 
        description: 'He\'s Batman'
    },
    {
        id: 4, 
        name: 'Joker',
        image: 'https://fsmedia.imgix.net/74/08/a7/f1/defa/49d7/99c8/f4703ec169b1/gallerymovies1920x1080killingjoke5796a8191423c456279010jpg.jpeg?rect=478%2C0%2C1442%2C1080&auto=format%2Ccompress&dpr=2&w=1200',
        type: 'Villain', 
        abilities: ['Insanity', 'Laughter', 'Fighting'], 
        description: 'Heath Ledger'
    },
    {
        id: 5, 
        name: 'Naruto', 
        image: 'https://i.kym-cdn.com/entries/icons/original/000/015/163/narutoooh.jpg',
        type: 'Hero', 
        abilities: ['9 tails', 'Jutsu'], 
        description: 'Hidden Leaf Ninja'
    },
    {
        id: 6, 
        name: 'Sasuke', 
        image: 'https://i.ytimg.com/vi/19s0vIeJthA/maxresdefault.jpg',
        type: 'Villain', 
        abilities: ['Byakugan', 'Rinnegan'], 
        description: 'Itachi\'s younger brother.'
    }
];