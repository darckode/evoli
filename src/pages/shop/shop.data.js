const SHOP_DATA = [
  {
    id: 7,
    title: 'Colors',
    routeName: 'colors',
    items: [
        {
            title: 'red',
            name: 'red',
            id: 70,
            linkUrl: 'red',
            imageUrl: 'https://cdn.pixabay.com/photo/2018/05/04/15/23/poppies-3374193_1280.jpg',
            price: 25
        },
        {
            title: 'orange',
            name: 'orange',
            imageUrl: 'https://cdn.pixabay.com/photo/2016/08/04/09/19/marigold-1568646_1280.jpg',
            id: 71,
            linkUrl: 'orange',
            price: 25
        },
        {
            title: 'yellow',
            name: 'yellow',
            imageUrl: 'https://cdn.pixabay.com/photo/2016/09/04/12/05/sun-flower-1643794_1280.jpg',
            id: 72,
            linkUrl: 'yellow',
            price: 25
        },
        {
            title: 'green',
            name: 'green',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/02/28/15/25/snake-653639_1280.jpg',
            id: 73,
            linkUrl: 'green',
            price: 25
        },
        {
            title: 'blue',
            name: 'blue',
            imageUrl: 'https://cdn.pixabay.com/photo/2013/06/30/18/56/butterfly-142506_1280.jpg',
            id: 74,
            linkUrl: 'blue',
            price: 25
        },
        {
            title: 'indigo',
            name: 'indigo',
            imageUrl: 'https://www.audubon.org/sites/default/files/styles/hero_cover_bird_page/public/h_a1_7508_2_indigo-bunting_julie_torkomian_breeding-adult-male.jpg?itok=lho9wueC',
            id: 75,
            linkUrl: 'indigo',
            price: 25
        },
        {
            title: 'violet',
            name: 'violet',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/09/23/08/16/thunder-953118_1280.jpg',
            id: 76,
            linkUrl: 'violet',
          price: 25
        }
      ]
    },
    {
      id: 1,
      title: 'Damons',
      routeName: 'damons',
      items: [
          {
              title: 'eagle',
              name: 'eagle',
              id: 10,
              linkUrl: 'eagle',
              imageUrl: 'https://cairngorms.co.uk/wp-content/uploads/2019/03/GoldenEagle-c-Lorne-Gill-SNH.jpg',
              price: 25
          },
          {
              title: 'horse',
              name: 'horse',
              imageUrl: 'https://ewscripps.brightspotcdn.com/dims4/default/f15c145/2147483647/strip/true/crop/2048x1357+0+0/resize/1280x848!/quality/90/?url=https%3A%2F%2Fewscripps.brightspotcdn.com%2F74%2F8a%2Fb8272ed446d5b12323d2c14c5401%2Fdenver-7-picasso-6.jpg',
              id: 11,
              linkUrl: 'horse',
              price: 25
          },
          {
              title: 'orca',
              name: 'orca',
              imageUrl: 'https://wallpaperplay.com/walls/full/3/c/2/382992.jpg',
              id: 12,
              linkUrl: 'orca',
              price: 25
          },
          {
              title: 'tiger',
              name: 'tiger',
              imageUrl: 'https://images5.alphacoders.com/380/380998.jpg',
              id: 13,
              linkUrl: 'tiger',
              price: 25
          }
        ]
      },
    {
      id: 2,
      title: 'Love',
      routeName: 'love',
      items: [
        {
          id: 20,
          name: 'Brown Brim',
          imageUrl: 'https://images.pexels.com/photos/3324006/pexels-photo-3324006.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          price: 25
        },
        {
          id: 21,
          name: 'Blue Beanie',
          imageUrl: 'https://images.pexels.com/photos/2736542/pexels-photo-2736542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          price: 18
        },
        {
          id: 22,
          name: 'Brown Cowboy',
          imageUrl: 'https://images.pexels.com/photos/2970287/pexels-photo-2970287.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
          price: 35
        },
        {
          id: 23,
          name: 'Grey Brim',
          imageUrl: 'https://images.pexels.com/photos/957056/advent-wreath-christmas-wreath-candles-decoration-957056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          price: 25
        }
      ]
    },
    {
      id: 3,
      title: 'Birthday',
      routeName: 'birthday',
      items: [
        {
          id: 30,
          name: 'Adidas NMD',
          imageUrl: 'https://cdn.pixabay.com/photo/2019/12/09/13/17/candle-4683512_1280.jpg',
          price: 220
        },
        {
          id: 31,
          name: 'Adidas Yeezy',
          imageUrl: 'https://cdn.pixabay.com/photo/2018/01/27/17/43/heart-3111760_1280.jpg',
          price: 280
        },
        {
          id: 32,
          name: 'Black Converse',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/02/06/03/29/mason-625728_1280.jpg',
          price: 110
        },
        {
          id: 33,
          name: 'Nike White AirForce',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/11/30/10/07/advent-wreath-1069961_1280.jpg',
          price: 160
        }
      ]
    },
    {
      id: 4,
      title: 'Anniversary',
      routeName: 'anniversary',
      items: [
        {
          id: 40,
          name: 'Black Jean Shearling',
          imageUrl: 'https://cdn.pixabay.com/photo/2018/12/23/18/42/a-postcard-3891664_1280.jpg',
          price: 125
        },
        {
          id: 41,
          name: 'Blue Jean Jacket',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/12/03/15/24/christmas-1075128_1280.jpg',
          price: 90
        },
        {
          id: 42,
          name: 'Grey Jean Jacket',
          imageUrl: 'https://cdn.pixabay.com/photo/2017/02/24/12/18/apartment-2094654_1280.jpg',
          price: 90
        },
        {
          id: 43,
          name: 'Brown Shearling',
          imageUrl: 'https://cdn.pixabay.com/photo/2020/01/14/18/40/wedding-4765939_1280.jpg',
          price: 165
        }
      ]
    },
    {
      id: 5,
      title: 'Romantic nights',
      routeName: 'romantic-nights',
      items: [
        {
          id: 50,
          name: 'Brown Brim',
          imageUrl: 'https://images.pexels.com/photos/3324006/pexels-photo-3324006.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          price: 25
        },
        {
          id: 51,
          name: 'Blue Beanie',
          imageUrl: 'https://images.pexels.com/photos/2736542/pexels-photo-2736542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          price: 18
        },
        {
          id: 52,
          name: 'Brown Cowboy',
          imageUrl: 'https://images.pexels.com/photos/2970287/pexels-photo-2970287.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
          price: 35
        },
        {
          id: 53,
          name: 'Grey Brim',
          imageUrl: 'https://images.pexels.com/photos/957056/advent-wreath-christmas-wreath-candles-decoration-957056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          price: 25
        }
      ]
    },
    {
      id: 6,
      title: 'Gifts',
      routeName: 'gifts',
      items: [
        {
          id: 60,
          name: 'Adidas NMD',
          imageUrl: 'https://cdn.pixabay.com/photo/2019/12/09/13/17/candle-4683512_1280.jpg',
          price: 220
        },
        {
          id: 61,
          name: 'Adidas Yeezy',
          imageUrl: 'https://cdn.pixabay.com/photo/2018/01/27/17/43/heart-3111760_1280.jpg',
          price: 280
        },
        {
          id: 62,
          name: 'Black Converse',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/02/06/03/29/mason-625728_1280.jpg',
          price: 110
        },
        {
          id: 63,
          name: 'Nike White AirForce',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/11/30/10/07/advent-wreath-1069961_1280.jpg',
          price: 160
        }
      ]
    }
]

export default SHOP_DATA;