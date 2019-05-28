export const mutations = {
    getMovie: function(state, payload){
        state.nowPlaying = payload.nowPlaying;
        state.upcoming = payload.upcoming;
        state.popular = payload.popular;
        state.loading = true;
    },
    getTv: function(state, payload){
        state.topRated = payload.topRated;
        state.popular = payload.popular;
        state.airingToday = payload.airingToday;
        state.loading =true;
    },
    searchByTerm: function(state, payload){
        state.results = payload.movieResults;
        state.tvResults = payload.tvResults;
        state.loading = true;
    },
    getDetail: function(state, payload){
        state.result = payload;
        state.isMovie = payload.isMovie
        state.loading = true;
    },
    loadingFalse: function(state){
        state.loading = false;
    }
}
