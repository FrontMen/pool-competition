module.exports = {
    name: "email",
    label: "Email",
        type: "email",
    value: "",
    error: true,
    validations: [
        {
            rule: function(val){
                return val.length > 2
            },
            message: "Email should be at least 3 characters."
        },
        {
            rule: function(val){
                return val.indexOf('@') !== -1;
            },
            message: "No '@' symbol. Please try harder!"
        }
    ]
};