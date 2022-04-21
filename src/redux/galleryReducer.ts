const SET_PHOTOS = 'SET_PHOTOS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

type PhotoType = {
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

type AlbumType = {
    id: number,
    album: Array<PhotoType>
}

const initialState = {
    gallery: [
        {
            id: 1,
            album: [
                {
                    'id': 1,
                    'title': 'accusamus beatae ad facilis cum similique qui sunt',
                    'url': 'https://via.placeholder.com/600/92c952',
                    'thumbnailUrl': 'https://via.placeholder.com/150/92c952'
                },
                {
                    'id': 2,
                    'title': 'reprehenderit est deserunt velit ipsam',
                    'url': 'https://via.placeholder.com/600/771796',
                    'thumbnailUrl': 'https://via.placeholder.com/150/771796'
                },
                {
                    'id': 3,
                    'title': 'officia porro iure quia iusto qui ipsa ut modi',
                    'url': 'https://via.placeholder.com/600/24f355',
                    'thumbnailUrl': 'https://via.placeholder.com/150/24f355'
                },
            ] as Array<PhotoType>
        },
        {
            id: 2,
            album: [
                {
                    'id': 53,
                    'title': 'soluta et harum aliquid officiis ab omnis consequatur',
                    'url': 'https://via.placeholder.com/600/6efc5f',
                    'thumbnailUrl': 'https://via.placeholder.com/150/6efc5f'
                },
                {
                    'id': 54,
                    'title': 'ut ex quibusdam dolore mollitia',
                    'url': 'https://via.placeholder.com/600/aa8f2e',
                    'thumbnailUrl': 'https://via.placeholder.com/150/aa8f2e'
                },
                {
                    'id': 55,
                    'title': 'voluptatem consequatur totam qui aut iure est vel',
                    'url': 'https://via.placeholder.com/600/5e04a4',
                    'thumbnailUrl': 'https://via.placeholder.com/150/5e04a4'
                },
            ]
        }
    ] as Array<AlbumType>,
    gallerySize: 4,
    albumSize: 6,
    isFetching: true
};

export type InitialStateType = typeof initialState;

const galleryReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        default:
            return state;
    }
};


export default galleryReducer;