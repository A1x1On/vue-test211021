
const state = {
    posts: []
};

const actions = {
  async getAllPostss(ctx) {
    let recs = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    recs     = await recs.json();
    ctx.commit('updateAllPostss', recs)
  }
};

const getters = {
  allPostss(state){
    return state.posts;
  }
};

const mutations = {
  async updateAllPostss(state, posts) {
    state.posts = posts
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
