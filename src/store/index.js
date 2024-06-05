import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    action: false,
    collection: [
      {
        id: 1,
        name: 'Collection One',
        img: 'https://img101.urbanic.com/v1/goods-pic/27e6d1538adc45cfaac2f7f79997dd65UR_w540_h720_q85.webp',
        price: '1200',
        moq: '12',
        colors: ['red', 'blue', 'green'],
        sizes: ['small', 'medium', 'large'],
        dis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti!'
      },
      {
        id: 2,
        img: 'https://img101.urbanic.com/v1/goods-pic/69e05a4dfe784169afd0179b6172d47cUR_w540_h720_q85.webp',
        price: '990',
        moq: '12',
        colors: ['red', 'blue', 'green'],
        sizes: ['small', 'medium', 'large'],
      },
      {
        id: 3,
        img: 'https://img101.urbanic.com/v1/goods-pic/f5a8f7e7cfcc42238f8c4619e829c7a9UR_w540_h720_q85.webp',
        price: '1890',
        moq: '12',
        colors: ['red', 'blue', 'green'],
        sizes: ['small', 'medium', 'large'],
      },
      {
        id: 4,
        img: 'https://img101.urbanic.com/v1/goods-pic/bfd49b51ec644c28bc316949e650f8d0UR_w540_h720_q85.webp',
        price: '1790',
        moq: '12',
        colors: ['red', 'blue', 'green'],
        sizes: ['small', 'medium', 'large'],
      },
      {
        id: 5,
        img: 'https://img101.urbanic.com/v1/goods-pic/63f5574a5b5f440fb29f4b441141c113UR_w540_h720_q85.webp',
        price: '3490',
        moq: '12',
        colors: ['red', 'blue', 'green'],
        sizes: ['small', 'medium', 'large'],
      },
      {
        id: 6,
        img: 'https://img101.urbanic.com/v1/goods-pic/a9d445352ac84bef80e6d957684e9802UR_w540_h720_q85.webp',
        price: '1590',
        moq: '12',
        colors: ['red', 'blue', 'green'],
        sizes: ['small', 'medium', 'large'],
      }
    ],
    reviews: [
      {
        id: 1,
        show: false,
        brand: 'Bar Council of India',
        imgr: '/img/members/1.png',
        text: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit."',
        url: 'https://fpaipl.com/'
      },
      {
        id: 2,
        show: false,
        brand: 'Bharatiya Janta Party',
        imgr: '/img/members/2.webp',
        text: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit."',
        url: 'https://fpaipl.com/'
      },
      {
        id: 3,
        show: false,
        brand: 'Chartered Accountant Of India',
        imgr: '/img/members/3.png',
        text: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit."',
        url: 'https://fpaipl.com/'
      },
      {
        id: 4,
        show: false,
        brand: 'Cycling Club',
        imgr: '/img/members/4.png',
        text: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit."',
        url: 'https://fpaipl.com/'
      },
      {
        id: 5,
        show: false,
        brand: 'Delhi Police',
        imgr: '/img/members/5.jpg',
        text: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit."',
        url: 'https://fpaipl.com/'
      },
      {
        id: 6,
        show: false,
        brand: 'India Lawers Association',
        imgr: '/img/members/6.webp',
        text: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit."',
        url: 'https://fpaipl.com/'
      },
      {
        id: 7,
        show: false,
        brand: 'International Medical Association',
        imgr: '/img/members/7.jpeg',
        text: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit."',
        url: 'https://fpaipl.com/'
      },
      {
        id: 8,
        show: false,
        brand: 'National Sports Club Of India',
        imgr: '/img/members/8.png',
        text: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit."',
        url: 'https://fpaipl.com/'
      },
      {
        id: 9,
        show: false,
        brand: 'Bar Council of India',
        imgr: '/img/members/1.png',
        text: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit."',
        url: 'https://fpaipl.com/'
      },
      {
        id: 10,
        show: false,
        brand: 'Bharatiya Janta Party',
        imgr: '/img/members/2.webp',
        text: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit."',
        url: 'https://fpaipl.com/'
      },
    ],
    types: [
      {
        name: 'Nearby',
        icon: 'bi bi-heart-fill'
      },
      {
        name: 'New Show',
        icon: 'bi bi-heart-fill'
      },
      {
        name: 'Late Night',
        icon: 'bi bi-heart-fill'
      },
      {
        name: 'Trending',
        icon: 'bi bi-heart-fill'
      },
      {
        name: 'Comedy',
        icon: 'bi bi-heart-fill'
      },
      {
        name: 'Music',
        icon: 'bi bi-heart-fill'
      },
      {
        name: 'Trending',
        icon: 'bi bi-heart-fill'
      },
      {
        name: 'Comedy',
        icon: 'bi bi-heart-fill'
      },
      {
        name: 'Music',
        icon: 'bi bi-heart-fill'
      },
    ],
    categories: [
      {
        id: 1,
        img: "img/catalog/Bottoms.png",
        text: "Bottom",
      },
      {
        id: 2,
        img: "img/catalog/Co-ords.png",
        text: "Co-ords",
      },
      {
        id: 3,
        img: "img/catalog/Dresses.png",
        text: "Dresses",
      },
      {
        id: 4,
        img: "img/catalog/Jumpsuits.png",
        text: "Jumpsuits",
      },
      {
        id: 5,
        img: "img/catalog/Shirts.png",
        text: "Shirts",
      },
      {
        id: 6,
        img: "img/catalog/Tops.png",
        text: "Tops",
      },
      {
        id: 7,
        img: "img/catalog/Tshirt.png",
        text: "Tshirt",
      },
    ],
    shops: [
      {
        id: 1,
        img: 'img/users/1.png',
        name: 'Travis',
        support: 200,
      },
      {
        id: 2,
        img: 'img/users/2.png',
        name: 'Kanye',
        support: 100,
      },
      {
        id: 3,
        img: 'img/users/3.png',
        name: 'Snoop',
        support: 200,
      },
      {
        id: 4,
        img: 'img/users/4.png',
        name: 'Weekend',
        support: 100,
      },
      {
        id: 5,
        img: 'img/users/5.png',
        name: 'Akon',
        support: 100,
      },
      {
        id: 6,
        img: 'img/users/3.png',
        name: 'Snoop',
        support: 200,
      },

    ],
    bannerCollection: [
      {
        id: 1,
        heading: 'Under 199',
        text: 'Sleek & graceful fits for every occasion',
        order: '0',
        button: 'SHOP NOW',
        img: 'img/one.png',
        subProduct: [
          {
            id: 1,
            name: 'Collection One',
            img: 'https://img101.urbanic.com/v1/goods-pic/27e6d1538adc45cfaac2f7f79997dd65UR_w540_h720_q85.webp',
            price: '1200',
          },
          {
            id: 2,
            img: 'https://img101.urbanic.com/v1/goods-pic/69e05a4dfe784169afd0179b6172d47cUR_w540_h720_q85.webp',
            price: '990',
          },
          {
            id: 3,
            img: 'https://img101.urbanic.com/v1/goods-pic/f5a8f7e7cfcc42238f8c4619e829c7a9UR_w540_h720_q85.webp',
            price: '1890',
          },
          {
            id: 4,
            img: 'https://img101.urbanic.com/v1/goods-pic/bfd49b51ec644c28bc316949e650f8d0UR_w540_h720_q85.webp',
            price: '1790',
          },
          {
            id: 5,
            img: 'https://img101.urbanic.com/v1/goods-pic/63f5574a5b5f440fb29f4b441141c113UR_w540_h720_q85.webp',
            price: '3490',
          },
          {
            id: 6,
            img: 'https://img101.urbanic.com/v1/goods-pic/a9d445352ac84bef80e6d957684e9802UR_w540_h720_q85.webp',
            price: '1590',
          }
        ]
      },
    ],
  },
  getters: {
    getCollection: state => state.collection,
    getReviews: state => state.reviews,
    getTypes: state => state.types,
    getCategories: state => state.categories,
    getShops: state => state.shops,
    getBannerCollection: state => state.bannerCollection,
  },
  mutations: {
    actionDone(state) {
      state.action = true;
    },
  },
  actions: {
    submitQuery({ commit }, data) {
      axios.post('' + data)
        .then((response) => {
          console.log(response);
          commit('actionDone');
        })
    }
  },
  modules: {},
});
