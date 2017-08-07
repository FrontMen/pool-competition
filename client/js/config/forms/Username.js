module.exports = {
    label: "Username",
        type: "text",
        value: "",
        error: true,
        validations: [
        {
            rule: function(val){
                return val.length > 2
            },
            message: "Username should be at least 3 characters."
        }
    ]
};