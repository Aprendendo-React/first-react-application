import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro, {Segundo, Terceiro} from './component'

ReactDOM.render(
    <div>
        <Primeiro />
        <Segundo />
        <Terceiro />
    </div>
, document.getElementById('app'))