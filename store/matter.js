export const state = () => ({
  matterClicked: false
})

export const mutations = {
  changeState(state, param) {
    console.log(param)
    state.matterClicked = param
  }
}

export const actions = {}

export const getter = {}
