import {moviesApi, tvApi} from "../api";

export const actions = {
    getMovie: async  function({commit}) {
        commit("loadingFalse");
        let movies = null;
        let nowPlaying, upcoming, popular;
        try{
            ({
                data: {results : nowPlaying}
            } = await moviesApi.nowPlaying());

            ({
                data: {results : upcoming}
            } = await moviesApi.upcoming());

            ({
                data: {results : popular}
            } = await moviesApi.popular());
        }catch(e){
            console.log(e);
        }
        movies = {
            nowPlaying,
            upcoming,
            popular
        }
        commit("getMovie", movies);
    },
    getTv: async function({commit}) {
        commit("loadingFalse");
        let tvs = null;
        let topRated, popular, airingToday;
        try{
            ({
                data: {results: topRated}
            } = await tvApi.topRated());
            ({
                data: {results: popular}
            } = await tvApi.popular());

            ({
                data: {results: airingToday}
            } = await tvApi.airingToday());
        }catch(e){
            console.log(e);
        }
        tvs = {
            topRated,
            popular,
            airingToday
        }
        commit("getTv", tvs);
    },
    searchByTerm: async function({commit}, searchTerm){
        commit("loadingFalse");
        let movieResults, tvResults;
        try{
            ({
                data: {results : movieResults}
            } = await moviesApi.search(searchTerm));

            ({
                data: {results : tvResults}
            } = await tvApi.search(searchTerm));
        }catch (e) {
            console.log(e);
        }
        let results = null;
        results = {
            movieResults,
            tvResults
        }
        commit("searchByTerm", results);
    },
    getDetail: async function({commit}, data){
        commit("loadingFalse");
        let result = null;
        try{
            if(data.isMovie){
                ({data: result} = await moviesApi.movieDetail(data.id));
            }else {
                ({data: result} = await tvApi.showDetail(data.id));
            }
            result = {
                ...result, isMovie : data.isMovie
            }
        }catch (e) {
            console.log(e);
        }finally {
            commit("getDetail", result);
        }
    }
}
