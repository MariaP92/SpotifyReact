import React, { Component } from 'react';
import './sass/main.css';
const Search = () => 
{
    return(
        <div className="container searchContainer">
            <div className="row">
                <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11">
                    <h4 className="searchContainer__searchTitle">Busca un artista, canción, álbum o playlist</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11">
                    <input type="text" className="searchContainer__searchInput" placeholder="Escribir..."/>
                </div>
            </div>
        </div>
    );
}

export default Search;