

export default defineEventHandler(_event => {
    interface Article {
        id: number,
        title: string
        description: string
        date: string
        image: string
        alt: string
    }

    const articles: Article[] = [
        {
            id: 1,
            title: 'Hello World',
            description: 'This is a sample article is a sample article is a sample article is a sample article is a sample article',
            date: 'September 11, 2021',
            image: 'https://picsum.photos/200/300',
            alt: 'Sample Image',
        },
        {
            id: 1,
            title: 'Hello World',
            description: 'This is a sample article',
            date: 'September 11, 2021',
            image: 'https://picsum.photos/200/300',
            alt: 'Sample Image',
        },
        {
            id: 1,
            title: 'Hello World',
            description: 'This is a sample article',
            date: 'September 11, 2021',
            image: 'https://picsum.photos/200/300',
            alt: 'Sample Image',
        },
        {
            id: 1,
            title: 'Hello World',
            description: 'This is a sample article',
            date: 'September 11, 2021',
            image: 'https://picsum.photos/200/300',
            alt: 'Sample Image',
        }
    ]

    return articles
})