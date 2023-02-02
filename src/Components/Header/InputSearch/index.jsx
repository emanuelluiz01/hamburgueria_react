import { useState } from "react"
import { BtnSearch } from "./style"

export function InputSearch({ setFilteredProducts, filteredProducts }){


    return(
        <>
        <input onChange={(e) => setFilteredProducts(e.target.value)} value={filteredProducts} type="text" placeholder="Digitar Pesquisa" />
        </>
    )
}