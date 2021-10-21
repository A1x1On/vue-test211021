
// STATE

//import _ from 'lodash'; _.cloneDeep(state.posts)
const state = {
    posts: []
};

// GETTERS
const getters = {
  posts : (state) => state.posts
};

// ACTIONS
const actions = {
  async getAllPosts(ctx) {
    let recs = await fetch('https://jsonplaceholder.typicode.com/posts');
    recs     = await recs.json();
    ctx.commit('setPosts', recs)
  },
  async getPost(ctx, page) {
    let recs = await fetch('https://jsonplaceholder.typicode.com/posts/' + page);
    recs     = await recs.json();
    ctx.commit('setPosts', recs)
  },
  async insertPost(ctx, post) {
    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((r) => {
      return r
    });

    ctx.commit('setInsertedPosts', post)
  },
  async updatePost(ctx, post) {
    await fetch('https://jsonplaceholder.typicode.com/posts/' + post.id, {
      method: 'PUT',
      body: JSON.stringify({
        title  : post.title,
        body   : post.body,
        userId : post.userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    ctx.commit('setUpdatedPost', post)
  },
  async updatePostName(ctx, post) {
    await fetch('https://jsonplaceholder.typicode.com/posts/' + post.id, {
      method: 'PATCH',
      body: JSON.stringify({
        title: post.title,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    ctx.commit('setPatchedPostTitle', post)
  },
  async deletePost(ctx, post) {
    await fetch('https://jsonplaceholder.typicode.com/posts/' + post, { method: 'DELETE' });
    ctx.commit('setDeletedPost', post)
  }
};

// MUTATIONS
const mutations = {
  async setPosts(state, posts) {
    state.posts = Object.prototype.toString.call(posts) === '[object Array]' ? posts : [posts];
  },
  async setInsertedPosts(state, posts) {
    if (Object.prototype.toString.call(posts) === '[object Array]') {
      state.posts = state.posts.concat(posts)
    } else {
      state.posts.push(posts);
    }
  },
  async setUpdatedPost(state, post) {
    state.posts = state.posts.map((p) => {
      if (p.id === post.id) {
        console.log('post ', post);
        p = post
      }
      return p;
    })
  },
  async setPatchedPostTitle(state, post) {
    state.posts = state.posts.map((p) => {
      if (p.id === post.id) {
        p.title = post.title
      }
      return p;
    })
  },
  async setDeletedPost(state, post) {
    state.posts = state.posts.filter((f) => f.id !== post)
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
