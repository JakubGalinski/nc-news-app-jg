import  axios  from "axios";

export function getArtilcesAll() {
    return axios.get(`https://nc-news-example-seminar-3-4.herokuapp.com/api/articles`)
      .then((res) => {
        //   console.log(res.data.articles , "res in getAA")
        return res.data.articles;
      })
    //   .then((res) => {
    //     console.log(res, "ressssssssssss");
    //     return res;
    //   });
  }