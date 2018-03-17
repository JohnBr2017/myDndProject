import React from 'react'
import SpellBook from "./SpellBook"
import Characters from "./Characters"


function SpellList() {
    return (
        <div className="spellpage">
            <div className="characters">
                <Characters></Characters>
            </div>
            <div className="spellbook">
                <SpellBook> </SpellBook>
            </div>
        </div>
    )
}

export default SpellList;
