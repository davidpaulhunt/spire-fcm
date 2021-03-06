/*!
 * node-gcm
 * Copyright(c) 2013 Marcus Farkas <toothlessgear@finitebox.com>
 * MIT Licensed
 */


function Message(obj) {
    if (!(this instanceof Message)) {
        return new Message(obj);
    }

    if (!obj) {
        obj = {};
    }

    this.collapseKey = obj.collapseKey || undefined;
    this.timeToLive = obj.timeToLive || undefined;
    this.dryRun = obj.dryRun || undefined;
    this.priority = obj.priority || undefined;
    this.contentAvailable = obj.contentAvailable || undefined;
    this.restrictedPackageName = obj.restrictedPackageName || undefined;
    this.data = obj.data || undefined;
    this.notification = obj.notification || undefined;
}

Message.prototype.addData = function() {
    if(arguments.length == 1) {
        return this.addDataWithObject(arguments[0]);
    }
    if(arguments.length == 2) {
        return this.addDataWithKeyValue(arguments[0], arguments[1]);
    }
    throw new Error("Invalid number of arguments given to addData ("+arguments.length+")");
};

Message.prototype.addDataWithKeyValue = function (key, value) {
    if (!this.data) this.data = {};
    this.data[key] = value;
};

Message.prototype.addDataWithObject = function (obj) {
    if (typeof obj === 'object' && Object.keys(obj).length > 0) {
        this.data = obj;
    }
};

module.exports = Message;
