var data = {
    oauthio_state: {
        value: 'somestate',
        expires: new Date()
    }
};

module.exports = function() {
    return {
        init: function() {

        },
        createCookie: function(name, value, expires) {
            data[name] = {
                value: value,
                expires: expires
            };

        },
        readCookie: function(name) {
            console.log(name);
            if (data[name])
                return data[name].value;
            else
                return undefined;
        },
        eraseCookie: function(name) {
            data[name] = undefined;
        }
    };
};