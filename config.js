var config = null;

if (process.env.NODE_ENV == "production") {
    config = {
        host: process.env.HOST_NAME,
        protocol: "http",

        mongodb_connection_string: process.env.MONGODB_CONNECTION_STRING
    };
} else if (process.env.NODE_ENV == "test") {
    config = {
        host: "localhost",
        http_port: 3050,
        protocol: "http",

       // mongodb_connection_string: "mongodb://localhost/messages_test",
       mongodb_connection_string: "mongodb://MongoLab-y:A5aVtSfFdTQMHe.VP9BG93WmcW9HC9y6AMgL.950hug-@ds031088.mongolab.com:31088/MongoLab-y",
    };
} else {
    config = {
        host: "localhost",
        http_port: 3030,
        protocol: "http",

       // mongodb_connection_string: "mongodb://localhost/messages_dev",
        mongodb_connection_string: "mongodb://MongoLab-y:A5aVtSfFdTQMHe.VP9BG93WmcW9HC9y6AMgL.950hug-@ds031088.mongolab.com:31088/MongoLab-y",
    };        
}

// computed properties 

config.base_url = config.protocol + "://" + config.host + ":" + config.http_port;

module.exports = config;