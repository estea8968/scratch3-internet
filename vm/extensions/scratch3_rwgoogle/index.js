const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const msg = require('./translation');
const formatMessage = require('format-message');

const menuIconURI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAYCAYAAAB9ejRwAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOpQAADqUBKmWIAgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAUMSURBVEiJtZdtTJVlGMd/D3CAc05GcDAUDi9izkTzCzCbWJaaUlTkppb6wbCXZXNqq8mH0rU1q1WSTtlwVstN0DJrirLl2wcZkW9JapuuSFSk8SIeEM45cDjn34cHOUd5CSdd29nO87+v+7p+z/U8z3Xft8GQplRgAfAUMAWIA2zALcAF/A5UArvA+GfoWMM3YxCYFOAT4GUgPDoaMjMhJQUcDujshKYmOHcOrl0DwG+CUQhGw0jBhQK9AroF0pw5UkWF5HZrUDtzRiookMLDpd55q0YaaA0oMGaMdORIf4D6eqmmRrpwQWpt7Q+Xni6BBJo7UkALQIGJE6WGhmCyhgZpzRopObkvoUAyDCk7W9q5U/L7pc5OaebMvvHHRwIoEeSKj5dqa4NA5eXSqFESKAAqB71hVkGLQJtBLpDy8qTZs/uAPhoBIADtAGnbtiBQVZUUGSmBmkBPDzIvDvRlSAW3jBRQIsg3frzk85lA3d1SWpoE8oAyhxHjTdBnoEG+5nuHeh2ktWuDVSot7bvzDSOU5J6hfgTp6NEg1NKlEqgHNGaIeRaQ9f+C+gukurog1KRJEujsXX5O0Le9/oGQ96gH1Aq6Aqrt/W2+H6IIIAYgISEo3rgBwN93+f4EZM2aZXb1EAsHYoHYQAD27gXAfT9QgLwgeb3BSiUkSKAfQnwst6tTXT14d/d6+6r36f0QRQAtQFJzMzidpuhwQGMjqUE3wwdqAUafOgUdHXcGyc6GmJg7pDuv7t1UDtLx4/1edB8oPsRvkdkYdSK0s4PZ0+6q1L5hZy8peUHbt08N1cKA4wCHDgXFefMAs4pvB1XjezDWgTENeBL4c4hcicOFwutdS1vbulDJ6F2nqjMy4Px5CAuDri5IT4eGBjzADDB+G+Ae4zD3U86qKpg+3ZwXHQ3AdTCcKilZTFeX3Vi9+iuVlU3l8uU8srK+JjIyjMrKV4FI0tJewuW6TGLi+1y8mEtOzs7eDqwLwOTSUliyxFSOHYO5c8Hv5yZQAMYAj0RlwOIBoFpUsu0drNYdREQYBAKFtLe/R0zMw7S3V+L33yIu7jkcDrh6tYNA4BA+XxY2WwoeT8VtqDzggNMJJ0/C2LGmumcPLFsGHg8AZ4CDQB2QAkwDcgFjAKgr2lp8EZstke5uFw7HBPx+BzbbZjo7V2OztWGx/EJd3TxiYv7Aao2gsfExAoEaYmNTwnqf4kFgU3095OeDy2WqCxfCpUuwciUkJ5MJrAe+AT4Ens3IwNi4EbKy+pWwBpvtQbq6LuPxXMLrHYXV6sHp/A6324LX24rLlUtUVDNer5ueHjupqWC1PkJHR2vIAqpwYCvwVno67N5tfuqh1tgIzc3m/6QkiI0Njnk8UFgIW8x9wjP6/IsC4uNz8Xi6iItrJhCYQm3tCSZMmAy0cPhwIpmZFdjt8YSHx+PxPMrVq/uIjW0fYFXXcqAoLIyY/HxYtQpycsBi6e8JUFcHu3ZBcTFcvw5AERjvav/+ydTW/kxUlIHd/jwdHRuw22dy8+bHREUtx2Zz4nRaaGo6j8tlwec7j8PxIm1tRwc7OIwGCoHXgIfsdvPgkJRkNkm321yKQg4OAGeB9WAc6IsiRQIYhtHde20H3JSVubh2rRqncwbt7R+wYkWxYRg+SQ8YhtHxH/sfWYEZwEzgCWA85hELoB2zV/0K7APj9NCxQqIWFW3Cbl9KZ+dp5s+fb4wb5w0d/xdQ5xScgmy3MQAAAABJRU5ErkJggg==';
const blockIconURI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAYCAYAAAB9ejRwAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOpQAADqUBKmWIAgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAUMSURBVEiJtZdtTJVlGMd/D3CAc05GcDAUDi9izkTzCzCbWJaaUlTkppb6wbCXZXNqq8mH0rU1q1WSTtlwVstN0DJrirLl2wcZkW9JapuuSFSk8SIeEM45cDjn34cHOUd5CSdd29nO87+v+7p+z/U8z3Xft8GQplRgAfAUMAWIA2zALcAF/A5UArvA+GfoWMM3YxCYFOAT4GUgPDoaMjMhJQUcDujshKYmOHcOrl0DwG+CUQhGw0jBhQK9AroF0pw5UkWF5HZrUDtzRiookMLDpd55q0YaaA0oMGaMdORIf4D6eqmmRrpwQWpt7Q+Xni6BBJo7UkALQIGJE6WGhmCyhgZpzRopObkvoUAyDCk7W9q5U/L7pc5OaebMvvHHRwIoEeSKj5dqa4NA5eXSqFESKAAqB71hVkGLQJtBLpDy8qTZs/uAPhoBIADtAGnbtiBQVZUUGSmBmkBPDzIvDvRlSAW3jBRQIsg3frzk85lA3d1SWpoE8oAyhxHjTdBnoEG+5nuHeh2ktWuDVSot7bvzDSOU5J6hfgTp6NEg1NKlEqgHNGaIeRaQ9f+C+gukurog1KRJEujsXX5O0Le9/oGQ96gH1Aq6Aqrt/W2+H6IIIAYgISEo3rgBwN93+f4EZM2aZXb1EAsHYoHYQAD27gXAfT9QgLwgeb3BSiUkSKAfQnwst6tTXT14d/d6+6r36f0QRQAtQFJzMzidpuhwQGMjqUE3wwdqAUafOgUdHXcGyc6GmJg7pDuv7t1UDtLx4/1edB8oPsRvkdkYdSK0s4PZ0+6q1L5hZy8peUHbt08N1cKA4wCHDgXFefMAs4pvB1XjezDWgTENeBL4c4hcicOFwutdS1vbulDJ6F2nqjMy4Px5CAuDri5IT4eGBjzADDB+G+Ae4zD3U86qKpg+3ZwXHQ3AdTCcKilZTFeX3Vi9+iuVlU3l8uU8srK+JjIyjMrKV4FI0tJewuW6TGLi+1y8mEtOzs7eDqwLwOTSUliyxFSOHYO5c8Hv5yZQAMYAj0RlwOIBoFpUsu0drNYdREQYBAKFtLe/R0zMw7S3V+L33yIu7jkcDrh6tYNA4BA+XxY2WwoeT8VtqDzggNMJJ0/C2LGmumcPLFsGHg8AZ4CDQB2QAkwDcgFjAKgr2lp8EZstke5uFw7HBPx+BzbbZjo7V2OztWGx/EJd3TxiYv7Aao2gsfExAoEaYmNTwnqf4kFgU3095OeDy2WqCxfCpUuwciUkJ5MJrAe+AT4Ens3IwNi4EbKy+pWwBpvtQbq6LuPxXMLrHYXV6sHp/A6324LX24rLlUtUVDNer5ueHjupqWC1PkJHR2vIAqpwYCvwVno67N5tfuqh1tgIzc3m/6QkiI0Njnk8UFgIW8x9wjP6/IsC4uNz8Xi6iItrJhCYQm3tCSZMmAy0cPhwIpmZFdjt8YSHx+PxPMrVq/uIjW0fYFXXcqAoLIyY/HxYtQpycsBi6e8JUFcHu3ZBcTFcvw5AERjvav/+ydTW/kxUlIHd/jwdHRuw22dy8+bHREUtx2Zz4nRaaGo6j8tlwec7j8PxIm1tRwc7OIwGCoHXgIfsdvPgkJRkNkm321yKQg4OAGeB9WAc6IsiRQIYhtHde20H3JSVubh2rRqncwbt7R+wYkWxYRg+SQ8YhtHxH/sfWYEZwEzgCWA85hELoB2zV/0K7APj9NCxQqIWFW3Cbl9KZ+dp5s+fb4wb5w0d/xdQ5xScgmy3MQAAAABJRU5ErkJggg==';

const defaultId = 'default';
let theLocale = null;

class rwGoogle {
    constructor (runtime) {
        theLocale = this._setLocale();
        this.runtime = runtime;
        // communication related
        this.comm = runtime.ioDevices.comm;
        this.session = null;
        this.runtime.registerPeripheralExtension('rwGoogle', this);
        // session callbacks
        this.reporter = null;
        this.onmessage = this.onmessage.bind(this);
        this.onclose = this.onclose.bind(this);
        this.write = this.write.bind(this);
        // string op
        this.decoder = new TextDecoder();
        this.lineBuffer = '';
        this.data = {};
	this.googlecolumn = {};
        this.emptyObj = {
            VALUE: {}
        };
    }

    onclose () {
        this.session = null;
    }

    write (data, parser = null) {
        if (this.session) {
            return new Promise(resolve => {
                if (parser) {
                    this.reporter = {
                        parser,
                        resolve
                    };
                }
                this.session.write(data);
            });
        }
    }

    onmessage (data) {
        const dataStr = this.decoder.decode(data);
        this.lineBuffer += dataStr;
        if (this.lineBuffer.indexOf('\n') !== -1){
            const lines = this.lineBuffer.split('\n');
            this.lineBuffer = lines.pop();
            for (const l of lines) {
                if (this.reporter) {
                    const {parser, resolve} = this.reporter;
                    resolve(parser(l));
                }
            }
        }
    }


    scan () {
        this.comm.getDeviceList().then(result => {
            this.runtime.emit(this.runtime.constructor.PERIPHERAL_LIST_UPDATE, result);
        });
    }

    _setLocale () {
        let nowLocale = '';
        switch (formatMessage.setup().locale) {
        case 'zh-tw':
            nowLocale = 'zh-tw';
            break;
        default:
            nowLocale = 'en';
            break;
        }
        return nowLocale;
    }

    getInfo () {
        theLocale = this._setLocale();

        return {
            id: 'rwGoogle',
            name: msg.name[theLocale],
            color1: '#08086E',
            color2: '#08086E',
            menuIconURI: menuIconURI,
            blockIconURI: blockIconURI,
            blocks: [
                {
                    opcode: 'readFromJSON',
                    blockType: BlockType.REPORTER,
                    arguments: {
                        id: {
                            type: ArgumentType.STRING,
                            defaultValue: 'id'
                        }
                    },
                    text: msg.readFromJSON[theLocale]
                },
		{
                    opcode: 'googleJSON',
                    blockType: BlockType.COMMAND,
                    arguments: {
                        url: {
                            type: ArgumentType.STRING,
                            defaultValue: 'https://docs.google.com/spreadsheets/d/KEY_ID/edit?usp=sharing'
                        }
                    },
                    text: msg.googleJSON[theLocale]
                },
		{
                    opcode: 'googlecolumnTEXT',
                    blockType: BlockType.REPORTER,
                    arguments: {
			variable: {
                            type: ArgumentType.STRING,
                            defaultValue: 'data'
                        },
                        n: {
                            type: ArgumentType.NUMBER,
                            defaultValue: '1'
                        },
                        column: {
                            type: ArgumentType.STRING,
                            defaultValue: 'title'
                        }
                    },
                    text: msg.googlecolumnTEXT[theLocale]
                },
		{
                    opcode: 'writeGoogleCalc',
                    blockType: BlockType.COMMAND,
                    arguments: {
                        url: {
                            type: ArgumentType.STRING,
                            defaultValue: 'https://script.google.com/macros/s/「key」/exec'
                        },
			column1: {
			    type: ArgumentType.STRING,
                            defaultValue: ' '
			},
			column2: {
			    type: ArgumentType.STRING,
                            defaultValue: ' '
			},
			column3: {
			    type: ArgumentType.STRING,
                            defaultValue: ' '
			}
                    },
                    text: msg.writeGoogleCalc[theLocale]
                },
            ]
        };
    }

    googleJSON (args) {
	const urlsplit = args.url.split("/");
	const aurl ='https://spreadsheets.google.com/feeds/list/'+urlsplit[5]+'/od6/public/values?alt=json';
	const url = new URL(aurl);
        return fetch(url).then(res => {
            if (res.ok) {
                res.json().then(json => {
                    console.log("got json set", json);
                    this.data.fetched = true;
                    this.data.data = JSON.stringify(json.feed.entry);
                    this.runtime.startHats('gasoJSON_onJSONReceived', {});
                });
            }
        });
    }

    isDataFetched () {
        return this.data.fetched;
    }

    onJSONReceived (){
        if (this.isDataFetched()) {
            console.log('got data');
            return true;
        }
    }

    readFromJSON () {
        if (this.isDataFetched()) {
            console.log('return ', this.data.data);
            return this.data.data;
        }
        return msg.readFromJSONErr[theLocale];
    }


    readEntryFromJSON (args) {
        const variable = args.variable || this.emptyObj;
        const n = args.n;
        try {
	    const parsed = JSON.parse(variable);
            const data = parsed[n - 1];
            return typeof data === 'string' ? data : JSON.stringify(data);
        } catch (err) {
            return `Error: ${err}`;
        }
    }

    readAttrFromJSON (args) {
        const variable = args.variable || this.emptyObj;
        const attr = args.attr;
        try {
            const parsed = JSON.parse(variable);
            const data = parsed[attr];
            return typeof data === 'string' ? data : JSON.stringify(data);
        } catch (err) {
            return `Error: ${err}`;
        }
    }


    googlecolumnTEXT(args){
	const variable = args.variable || this.emptyObj;
        const n = args.n;
	const column = "gsx$" + args.column;
        try {
	    const parsed = JSON.parse(variable);
            var data = parsed[n - 1];
            data = JSON.stringify(data);
            const a_parsed = JSON.parse(data);
            var a_data = a_parsed[column];
	    a_data = JSON.stringify(a_data);
	    const t_parsed = JSON.parse(a_data);
	    var t_data = t_parsed["$t"];
            return typeof t_data === 'string' ? t_data : JSON.stringify(t_data);
         }catch (err){
	    return `Error: ${err}`;	
	}
    }


    writeGoogleCalc (args) {
	
	const column1 = args.column1 || defaultValue;
	const column2 = args.column2 || defaultValue;
	const column3 = args.column3 || defaultValue;
	const url = args.url;
	var gurl = url + "?c1=" + column1 + "&c2=" + column2 + "&c3=" + column3;
	return fetch(gurl).then(res => {
	    if (res.ok) {
	    }
	});
    }



}

module.exports = rwGoogle;
