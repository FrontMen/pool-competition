module.exports = {
    label: "Password",
    type: "password",
    value: "",
    error: true,
    validations: [{
        rule: function(val){
            return val.length > 5
        },
        message: "Password should contain at least 6 characters."
    }]
};