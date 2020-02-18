const SHOP_DATA = [
  {
    id: 1,
    title: 'Colors',
    routeName: 'colors',
    items: [
        {
            title: 'red',
            imageUrl: 'https://cdn.pixabay.com/photo/2018/05/04/15/23/poppies-3374193_1280.jpg',
            id: 1,
            linkUrl: 'red'
        },
        {
            title: 'orange',
            imageUrl: 'https://cdn.pixabay.com/photo/2016/08/04/09/19/marigold-1568646_1280.jpg',
            id: 2,
            linkUrl: 'orange'
        },
        {
            title: 'yellow',
            imageUrl: 'https://cdn.pixabay.com/photo/2016/09/04/12/05/sun-flower-1643794_1280.jpg',
            id: 3,
            linkUrl: 'yellow'
        },
        {
            title: 'green',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/02/28/15/25/snake-653639_1280.jpg',
            id: 4,
            linkUrl: 'green'
        },
        {
            title: 'blue',
            imageUrl: 'https://cdn.pixabay.com/photo/2013/06/30/18/56/butterfly-142506_1280.jpg',
            id: 5,
            linkUrl: 'blue'
        },
        {
            title: 'indigo',
            imageUrl: 'https://www.audubon.org/sites/default/files/styles/hero_cover_bird_page/public/h_a1_7508_2_indigo-bunting_julie_torkomian_breeding-adult-male.jpg?itok=lho9wueC',
            id: 6,
            linkUrl: 'indigo'
        },
        {
            title: 'violet',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/09/23/08/16/thunder-953118_1280.jpg',
            id: 7,
            linkUrl: 'violet'
        }
      ]
    },
    {
      id: 2,
      title: 'Love',
      routeName: 'love',
      items: [
        {
          id: 1,
          name: 'Brown Brim',
          imageUrl: 'https://images.pexels.com/photos/3324006/pexels-photo-3324006.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          price: 25
        },
        {
          id: 2,
          name: 'Blue Beanie',
          imageUrl: 'https://images.pexels.com/photos/2736542/pexels-photo-2736542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          price: 18
        },
        {
          id: 3,
          name: 'Brown Cowboy',
          imageUrl: 'https://images.pexels.com/photos/2970287/pexels-photo-2970287.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
          price: 35
        },
        {
          id: 4,
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
          id: 1,
          name: 'Adidas NMD',
          imageUrl: 'https://cdn.pixabay.com/photo/2019/12/09/13/17/candle-4683512_1280.jpg',
          price: 220
        },
        {
          id: 2,
          name: 'Adidas Yeezy',
          imageUrl: 'https://cdn.pixabay.com/photo/2018/01/27/17/43/heart-3111760_1280.jpg',
          price: 280
        },
        {
          id: 3,
          name: 'Black Converse',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/02/06/03/29/mason-625728_1280.jpg',
          price: 110
        },
        {
          id: 4,
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
          id: 1,
          name: 'Black Jean Shearling',
          imageUrl: 'https://cdn.pixabay.com/photo/2018/12/23/18/42/a-postcard-3891664_1280.jpg',
          price: 125
        },
        {
          id: 2,
          name: 'Blue Jean Jacket',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/12/03/15/24/christmas-1075128_1280.jpg',
          price: 90
        },
        {
          id: 3,
          name: 'Grey Jean Jacket',
          imageUrl: 'https://cdn.pixabay.com/photo/2017/02/24/12/18/apartment-2094654_1280.jpg',
          price: 90
        },
        {
          id: 4,
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
          id: 1,
          name: 'Brown Brim',
          imageUrl: 'https://images.pexels.com/photos/3324006/pexels-photo-3324006.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          price: 25
        },
        {
          id: 2,
          name: 'Blue Beanie',
          imageUrl: 'https://images.pexels.com/photos/2736542/pexels-photo-2736542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          price: 18
        },
        {
          id: 3,
          name: 'Brown Cowboy',
          imageUrl: 'https://images.pexels.com/photos/2970287/pexels-photo-2970287.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
          price: 35
        },
        {
          id: 4,
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
          id: 1,
          name: 'Adidas NMD',
          imageUrl: 'https://cdn.pixabay.com/photo/2019/12/09/13/17/candle-4683512_1280.jpg',
          price: 220
        },
        {
          id: 2,
          name: 'Adidas Yeezy',
          imageUrl: 'https://cdn.pixabay.com/photo/2018/01/27/17/43/heart-3111760_1280.jpg',
          price: 280
        },
        {
          id: 3,
          name: 'Black Converse',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/02/06/03/29/mason-625728_1280.jpg',
          price: 110
        },
        {
          id: 4,
          name: 'Nike White AirForce',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/11/30/10/07/advent-wreath-1069961_1280.jpg',
          price: 160
        }
      ]
    }
]

export default SHOP_DATA;