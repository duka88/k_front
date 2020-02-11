export default async function({ store, from, app }) {


  //const token = app.$cookies.get('access_token');
  let isFrom = !from;

  if (isFrom || store.state.recipes.length === 0) {

    await store.dispatch('recipes/loadStarter');
  }
/*
  if (isFrom && token) {
    await store.commit('setToken', token);
    await store.dispatch('getUser', token);

  }
*/

}
