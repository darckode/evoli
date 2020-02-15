import React from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.scss';
// import candles from '../../assets/candles.jpg';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'code',
                    imageUrl: 'https://s1.funon.cc/img/orig/201406/10/5396be86c329c.jpg',
                    id: 1,
                    linkUrl: 'code'
                },
                {
                    title: 'write',
                    imageUrl: 'https://flood-rescue.com/img/wallpaper-writing-34.jpg',
                    id: 2,
                    linkUrl: 'write'
                },
                {
                    title: 'dance',
                    imageUrl: 'http://www.aljanh.net/data/archive/img/3183568124.jpeg',
                    id: 3,
                    linkUrl: 'dance'
                },
                {
                    title: 'freerun',
                    imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5dd90e42-441c-4ac1-8ed6-e04894e70108/d1tb7bi-1ce26362-baa6-4170-8782-2071d6635d8e.jpg/v1/fill/w_1000,h_667,q_75,strp/erin_s_handstand_at_imax_by_claudiuvoicu_d1tb7bi-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjY3IiwicGF0aCI6IlwvZlwvNWRkOTBlNDItNDQxYy00YWMxLThlZDYtZTA0ODk0ZTcwMTA4XC9kMXRiN2JpLTFjZTI2MzYyLWJhYTYtNDE3MC04NzgyLTIwNzFkNjYzNWQ4ZS5qcGciLCJ3aWR0aCI6Ijw9MTAwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.6sv7HmZKo9weuTksEoJdNsXlrYo8U_eh2EaWSoeoNgo',
                    id: 4,
                    linkUrl: 'freerun'
                }
            ],
            colors: [
                {
                    title: 'red',
                    imageUrl: '#',
                    id: 1,
                    linkUrl: 'red'
                },
                {
                    title: 'orange',
                    imageUrl: '#',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'yellow',
                    imageUrl: '#',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'green',
                    imageUrl: '#',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 'blue',
                    imageUrl: '#',
                    id: 5,
                    linkUrl: ''
                },
                {
                    title: 'indigo',
                    imageUrl: '#',
                    id: 6,
                    linkUrl: ''
                },
                {
                    title: 'violet',
                    imageUrl: '#',
                    id: 7,
                    linkUrl: ''
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory'>
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>    
        )
    }
} 

export default Directory;