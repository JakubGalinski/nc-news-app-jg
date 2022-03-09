import axios from "axios";

export function getArtilcesAll() {
  return axios
    .get(`https://nc-news-example-seminar-3-4.herokuapp.com/api/articles`)
    .then((res) => {
      return res.data.articles;
    })
}


export function getTopics() {
  return axios
    .get(`https://nc-news-example-seminar-3-4.herokuapp.com/api/topics`)
    .then((res) => {
      // console.log(res.data.articles[0].title , "res in getAT")
      return res.data;
    })
}


export function getArticlesByTopic(params) {

  return axios
    .get(`https://nc-news-example-seminar-3-4.herokuapp.com/api/articles/?topic=${params}`)
    .then((response) => {
      return response.data;
    });
}

export function getArticleById(id) {


  return axios
    .get(`https://nc-news-example-seminar-3-4.herokuapp.com/api/articles/${id}`)
    .then((response) => {

      return response.data;
    });
}
