import { avalon } from '../seed/core'

avalon.directive('expr', {
    update: function (vdom, value) {
        vdom.nodeValue = value
        //https://github.com/RubyLouvre/avalon/issues/1834
        if(vdom.dom)
            if(value === '')
                value = '\u200b'
           vdom.dom.data = value
    }
})