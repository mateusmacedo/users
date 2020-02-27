import log4 from 'log4js'

log4.configure({
    "appenders": {
        'out': {"type": 'stdout'},
        "access": {
            "type": "dateFile",
            "filename": "log/access.log",
            "pattern": "-yyyy-MM-dd",
            "category": "http"
        },
        "app": {
            "type": "file",
            "filename": "log/app.log",
            "maxLogSize": 10485760,
            "numBackups": 3
        },
        "errorFile": {
            "type": "file",
            "filename": "log/errors.log"
        },
        "errors": {
            "type": "logLevelFilter",
            "level": "ERROR",
            "appender": "errorFile"
        }
    },
    "categories": {
        "default": {"appenders": ["app", "errors", "out"], "level": "DEBUG"},
        "http": {"appenders": ["access", "out"], "level": "DEBUG"},
        "error": {"appenders": ["errors", "out"], "level": "ERROR"},
        "stdout": {"appenders": ["out"], "level": "DEBUG"}
    }
});

module.exports = log4;