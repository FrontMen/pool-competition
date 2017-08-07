module.exports = {
    happy: function(code){
        return code > 199 && code < 300;
    },
    unhappy: function(code){
        return code > 399 && code < 500;
    },
    failure: function(code){
        return code > 499 && code < 600;
    }
}