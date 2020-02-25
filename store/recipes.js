export const state = () => ({
  recipes: [],
  recipe: [],
  categories: [],
  latest_recipes: [],
  like_recipes: [],
  tags: [],
  top_recipes:[],
  
});

export const mutations = {
  setRecipes: (state, data) => {
    state.recipes = data.data
  },
  setStarter: (state, data) => {
    state.categories = data.data.data.categories;
    state.latest_recipes = data.data.data.latest_recipes;
    state.like_recipes = data.data.data.like_recipes;
    state.tags = data.data.data.tags;
    state.top_recipes = data.data.data.top_recipes;
  },

}

export const actions = {
  async loadRecipes({ commit, state }, payLoad) {

    let response = await this.$axios.get(`/api/recipes/1/created_at/desc`)

    let { data } = response;

    commit('setRecipes', { data: data });

  },
  async loadStarter({ commit, state }) {

    let response = await this.$axios.get(`/api/starter`)

    let { data } = response;

    commit('setStarter', { data: data });

  },


}
