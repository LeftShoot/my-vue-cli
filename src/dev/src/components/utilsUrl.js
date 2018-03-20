/**
 * Created by asus on 2017/12/13.
 */
let utilsUrl = {
    inited: false,
    cache: {},
    prepare: function prepare() {
        var href = window.location.href;

        var queryString = '';

            queryString = window.location.href.split('?')[1];

        if (queryString) {
            var pairs = queryString.split('&');
            for (var i = 0, len = pairs.length; i < len; i++) {
                var key = pairs[i].substring(0, pairs[i].indexOf('='));
                var value = pairs[i].substring(pairs[i].indexOf('=') + 1);
                this.cache[key] = value;
            }
        }

        var pathname = window.location.pathname;
        var strs = pathname.split('/');
        this.name = strs[strs.length - 2];
        this.pagename = strs[strs.length - 1].split('.')[0];

        this.inited = true;
    },

    query: function query(name) {
        // if (!this.inited) {
            utilsUrl.prepare();
        // }

        return this.cache[name];
    }
};

export default utilsUrl