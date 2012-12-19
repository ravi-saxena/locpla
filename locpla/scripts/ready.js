var app = {
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
        if (app.isNetConnected()) {
               Bready();
        }
        else {
           app.alertmsg(app.alertdismissed, 'Something Wrong with your Net/Wifi connection!', 'Network Error!', 'Done');
        }
    },
    alertmsg: function (callback, message, title, buttonName) {
        navigator.notification.alert(
        message,// message
        callback,// callback
        title,// title
        buttonName// buttonName
        );
    },
    alertdismissed: function () {
        app.exit();
    },
    isNetConnected: function () {
        var networkState = navigator.network.connection.type;
        var states = {};
        states[Connection.UNKNOWN] = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI] = 'WiFi connection';
        states[Connection.CELL_2G] = 'Cell 2G connection';
        states[Connection.CELL_3G] = 'Cell 3G connection';
        states[Connection.CELL_4G] = 'Cell 4G connection';
        states[Connection.NONE] = 'NONE';
        
        if (states[networkState] == 'NONE') {
            return false;
        }
        else {
            return true;
        }
    },
    exit: function () {
        device.exitApp();
    }
};
