const INITIAL_STATE = {
    sections: [
        {
            title: 'code',
            imageUrl: 'https://s1.funon.cc/img/orig/201406/10/5396be86c329c.jpg',
            id: 111,
            linkUrl: '/code'
        },
        {
            title: 'dance',
            imageUrl: 'https://ilovehdwallpapers.com/wallpapers//hot-dancing-couple-boy-girl-dance-1920x1200.jpg',
            id: 222,
            linkUrl: '/dance'
        },
        {
            title: 'write',
            imageUrl: 'https://flood-rescue.com/img/wallpaper-writing-34.jpg',
            // imageUrl: 'https://i1.wp.com/www.thewritersworkshop.net/wp-content/uploads/2015/10/journal.jpg?ssl=1',
            id: 333,
            linkUrl: '/write'
        },
        {
            title: 'freerun',
            imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5dd90e42-441c-4ac1-8ed6-e04894e70108/d1tb7bi-1ce26362-baa6-4170-8782-2071d6635d8e.jpg/v1/fill/w_1000,h_667,q_75,strp/erin_s_handstand_at_imax_by_claudiuvoicu_d1tb7bi-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjY3IiwicGF0aCI6IlwvZlwvNWRkOTBlNDItNDQxYy00YWMxLThlZDYtZTA0ODk0ZTcwMTA4XC9kMXRiN2JpLTFjZTI2MzYyLWJhYTYtNDE3MC04NzgyLTIwNzFkNjYzNWQ4ZS5qcGciLCJ3aWR0aCI6Ijw9MTAwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.6sv7HmZKo9weuTksEoJdNsXlrYo8U_eh2EaWSoeoNgo',
            id: 444,
            linkUrl: '/freerun'
        },
        {
            title: 'colors',
            imageUrl: 'https://www.xtrafondos.com/wallpapers/nebula-espacio-de-colores-3314.jpg',
            id: 555,
            linkUrl: '/colors'            
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default directoryReducer;