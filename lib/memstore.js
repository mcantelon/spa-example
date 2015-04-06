var store = {
  data: {},

  get: function(key) {
    return this.data[key];
  },

  set: function(key, value) {
    this.data[key] = value;
  },

  remove: function(key) {
    delete this.data[key];
  },

  identifier: function(key) {
    var randomNumber=Math.random().toString();
    return randomNumber.substring(2, randomNumber.length);
  }
};

module.exports = store;
