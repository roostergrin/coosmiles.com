import axios from 'axios'
import api from 'api'
import {
  GET_PAGES,
  GET_BLOG,
  GET_APP,
  VIEW_NAV,
  VIEW_BODY,
  VIEW_TYPES,
  VIEW_SHOWMODAL,
  VIEW_MODALCONTENT
} from './mutation-types'

const actions = {
  GET_PAGES ({ commit }) {
    (async () => {
      try {
        const response = await axios.get(`${api}/wp/v2/pages?per_page=100&release=100305-20260810`)
        const data = response.data.reduce(
          (allData, data) => ({ ...allData, [data.slug]: data }),
          {}
        )
        commit(GET_PAGES, data)
      } catch (e) {
        console.log('PAGES API: ' + e)
      }
    })()
  },
  GET_APP ({ commit }) {
    (async () => {
      try {
        const response = await axios.get(`${api}/wp/v2/app`)
        const data = response.data.reduce(
          (allData, data) => ({ ...allData, [data.slug]: data }),
          {}
        )
        commit(GET_APP, data)
      } catch (e) { console.log('APP API: ' + e) }
    })()
  },
  GET_BLOG ({ commit }) {
    (async () => {
      try {
        const response = await axios.get(`${api}/wp/v2/posts?per_page=100&_embed`)
        const data = response.data.reduce(
          (allData, data) => ({ ...allData, [data.slug]: data }),
          {}
        )
        // console.log(response.data)
        commit(GET_BLOG, data)
      } catch (e) {
        console.log(e)
      }
    })()
  },
  // GET_MORE ({ commit }) {
  //   const response = axios.get(`${api}/wp/v2/posts?per_page=4&offset=4`)
  // },
  VIEW_NAV ({ commit }, data) {
    commit(VIEW_NAV, data)
  },
  VIEW_BODY ({ commit }, data) {
    commit(VIEW_BODY, data)
  },
  VIEW_TYPES ({ commit }, data) {
    commit(VIEW_TYPES, data)
  },
  VIEW_SHOWMODAL ({ commit }, data) {
    commit(VIEW_SHOWMODAL, data)
  },
  VIEW_MODALCONTENT ({ commit }, data) {
    commit(VIEW_MODALCONTENT, data)
  }
}

export default actions
