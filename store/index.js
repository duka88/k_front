export const state = () => ({
  isLoading: true,
  token: null,
  user: [],
  backUrl: 'http://127.0.0.1:8000',
})



export const mutations = {

  isLoading: (state, payload) => {
    state.isLoading = payload;
  },
  setToken: (state, payload) => {
    state.token = payload;  
  },
  setUser: (state, payload) => {
    state.user = payload;  
  },
  logoutUser: (state) =>{
      state.token = null; 
      state.user = [];
  }
}

export const actions = {
  retrieveToken({ commit, state }, payLoad) {
  
      this.$axios.post('api/login', {
          username: payLoad.username,
          password: payLoad.password,
        })
        .then(({data}) => {

          const token = data.access_token;
        
          this.$cookies.set('access_token', token);

          commit('setToken',  token);
         
        })
        .catch(error => {
          console.log(error)
         
        })
  },
  async logOut({ commit, state }){
    
    this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + state.token;
    
    let response = await this.$axios.post('api/logout'); 
      
      commit('logoutUser');
      this.$cookies.remove('access_token');
       


  },
  async getUser({ commit, state }, payLoad) {

  	this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + payLoad;
    
    let response = await this.$axios.get('api/user')

    let {data} = response;

      commit('setUser', data);      

  }

}
