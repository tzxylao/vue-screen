import network from './network.js';

export default {
  install: function (Vue, opt) {

    Vue.prototype.postData = network.postData;
    Vue.prototype.postDataWithPagination = network.postDataWithPagination;

  }
}
