import React from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';

// function Food( { name, picture, rating } ){
//   return (
//     <div>
//       <h2>I like {name}</h2>
//       <h4>{rating}/5.0</h4>
//       <img src={picture} alt={name} />
//     </div>
//   );
// }

// const foodILike = [
//   {
//     id: 1,
//     name: 'Kimchi',
//     image: 'https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png',
//     rating: 3
//   },
//   {
//     id: 2,
//     name: 'Samgyopsal',
//     image: 'https://post-phinf.pstatic.net/MjAyMDAzMDNfMTcg/MDAxNTgzMTkwNjA3ODQ5.kUXPHqGJ2xPDSu_3FiEoFC3kY9QyQ_g9CziCGrFSDuEg.LpCfOTbc5qth9d-GKzGv9jwj2VKhcqmPHp5cp1KJYEsg.JPEG/IM_food02.jpg?type=w1200',
//     rating: 4
//   },
//   {
//     id: 3,
//     name: 'Bibimbap',
//     image: 'https://mblogthumb-phinf.pstatic.net/MjAxNzA0MjRfMjI3/MDAxNDkzMDIzMjc4MjU2.L-3Vv9r0XjeRGGncaB0p0II6mw9-NoBfu2k4PMCrTdgg.jP8wA64wrWrXrH3ZTP4UBCPR6ZWppqqnhXkS8FPpYMQg.JPEG.estelle926/151435979-56a57a083df78cf772888a61.jpg?type=w800',
//     rating: 3
//   },
//   {
//     id: 4,
//     name: 'Doncasu',
//     image: 'https://pds.joins.com/news/component/htmlphoto_mmdata/201508/05/htm_20150805071153241.jpg',
//     rating: 5
//   },
//   {
//     id: 5,
//     name: 'Kimbap',
//     image: 'https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg',
//     rating: 4.5
//   },
// ];


// function App() {
//   return (
//     <div>
//       {foodILike.map( dish => (
//         <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
//       ))}
//     </div>
//   );
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number
// };

class App extends React.Component {
  
  // constructor(props) {
  //   super(props);
  //   console.log('hello');
  // }

  // state = {
  //   count: 0,
  // };

  // add = () => {
  //   // console.log('add');
  //   // this.state.count = 1;
  //   // this.setState({ count: 1 });
  //   // this.setState({ count: this.state.count + 1 });
  //   this.setState(current => ({
  //     count: current.count + 1 
  //   }));
  // };

  // minus = () => {
  //   // console.log('minus');
  //   // this.state.count = -1;
  //   // this.setState({ count: -1 });
  //   // this.setState({ count: this.state.count - 1 });
  //   this.setState(current => ({
  //     count: current.count - 1 
  //   }));
  // };

  // componentDidMount() {
  //   console.log('component rendered');
  // }

  // componentDidUpdate() {
  //   console.log('I just updated');
  // }

  // componentWillUnmount() {
  //   console.log('Goodbye, cruel world');
  // }

  state = {
      isLoading: true,
      movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: {movies},
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    // console.log(movies);
    this.setState({ movies: movies, isLoading: false });
  };

  componentDidMount() {
    // 영화 데이터 로딩
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 6000);
    this.getMovies();
  }

  render(){
    // console.log("I'm rendering");
    // return (
    //   <div>
    //     <h1>The number is: {this.state.count}</h1>
    //     <button onClick={this.add}>Add</button>
    //     <button onClick={this.minus}>Minus</button>
    //   </div>
    // );
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
  }
}

export default App;
