import React, { Component } from 'react';
import './Search.css';
const Search = () => 
{
    return(
        <div className="container y-search-container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h4 className="y-search-h4">Busca un artista, canción, álbum o playlist</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <input type="text" className="y-search-input" placeholder="Escribir..."/>
                </div>
            </div>
        </div>
    );
}

export default Search;